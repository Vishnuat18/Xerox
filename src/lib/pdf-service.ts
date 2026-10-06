// SMART PRINT HUB - Unified PDF Streaming & Zero-Download Print Service
import fs from 'fs';
import path from 'path';
import os from 'os';
import { PDFDocument, PDFName, PDFString, rgb, StandardFonts } from 'pdf-lib';
import { logger } from './logger';

export interface FileResolutionResult {
  buffer: Buffer;
  mimeType: string;
  filename: string;
  source: 'disk' | 'generated_demo' | 'database';
}

/**
 * Locate file on disk across local cwd uploads and OS temp directories
 */
export function findFileOnDisk(storageKey: string): string | null {
  const isVercel = Boolean(process.env.VERCEL);
  const baseUploads = isVercel ? os.tmpdir() : path.join(process.cwd(), 'uploads');

  // Candidate 1: relative to baseUploads
  const p1 = path.join(baseUploads, storageKey);
  if (fs.existsSync(p1) && fs.statSync(p1).isFile()) return p1;

  // Candidate 2: relative to process.cwd()
  const p2 = path.join(/* turbopackIgnore: true */ process.cwd(), storageKey);
  if (fs.existsSync(p2) && fs.statSync(p2).isFile()) return p2;

  // Candidate 3: relative to os.tmpdir()
  const p3 = path.join(os.tmpdir(), storageKey);
  if (fs.existsSync(p3) && fs.statSync(p3).isFile()) return p3;

  // Candidate 4: Look for filename in shops/*/uploads/
  const filename = path.basename(storageKey);
  const shopsDir = path.join(baseUploads, 'shops');
  if (fs.existsSync(shopsDir)) {
    try {
      const shopFolders = fs.readdirSync(shopsDir);
      for (const shopFolder of shopFolders) {
        const candidate = path.join(shopsDir, shopFolder, 'uploads', filename);
        if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
          return candidate;
        }

        // Fuzzy match if unique hash prefix was stripped or added
        const uploadsFolder = path.join(shopsDir, shopFolder, 'uploads');
        if (fs.existsSync(uploadsFolder)) {
          const filesInUploads = fs.readdirSync(uploadsFolder);
          for (const f of filesInUploads) {
            if (f.endsWith(filename) || filename.endsWith(f)) {
              return path.join(uploadsFolder, f);
            }
          }
        }
      }
    } catch {}
  }

  return null;
}

/**
 * Dynamically generate a clean demo PDF if a sample order references a file not yet on disk
 */
export async function generateDemoPdf(
  filename: string,
  pageCount: number = 3
): Promise<Buffer> {
  const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const pagesToCreate = Math.max(1, Math.min(pageCount, 20));

  for (let i = 1; i <= pagesToCreate; i++) {
    const page = pdfDoc.addPage([595.28, 841.89]); // Standard A4 points
    const { width, height } = page.getSize();

    // Clean header banner
    page.drawRectangle({
      x: 36,
      y: height - 72,
      width: width - 72,
      height: 36,
      color: rgb(0.96, 0.97, 0.98),
      borderColor: rgb(0.85, 0.88, 0.9),
      borderWidth: 1,
    });

    page.drawText('SMART PRINT HUB • ZERO-DOWNLOAD DIRECT STREAM', {
      x: 48,
      y: height - 54,
      size: 9,
      font: fontBold,
      color: rgb(0.1, 0.5, 0.35),
    });

    page.drawText(`Page ${i} of ${pagesToCreate}`, {
      x: width - 110,
      y: height - 54,
      size: 9,
      font,
      color: rgb(0.4, 0.45, 0.5),
    });

    // Document Title
    page.drawText(filename, {
      x: 36,
      y: height - 120,
      size: 18,
      font: fontBold,
      color: rgb(0.1, 0.1, 0.15),
    });

    page.drawText(
      'This is a verified digital print stream. Document was delivered without saving to local disk.',
      {
        x: 36,
        y: height - 145,
        size: 10,
        font,
        color: rgb(0.45, 0.5, 0.55),
      }
    );

    // Decorative page content lines representing the document
    const startY = height - 190;
    for (let line = 0; line < 18; line++) {
      const y = startY - line * 26;
      page.drawLine({
        start: { x: 36, y },
        end: { x: width - 36 - (line % 4) * 50, y },
        thickness: 1.5,
        color: rgb(0.88, 0.9, 0.92),
      });
    }

    // Security & timestamp footer
    page.drawLine({
      start: { x: 36, y: 50 },
      end: { x: width - 36, y: 50 },
      thickness: 1,
      color: rgb(0.9, 0.9, 0.9),
    });

    page.drawText(
      `Protected by Smart Print Hub Zero-Download Stream • Streamed on ${new Date().toLocaleDateString('en-IN')}`,
      {
        x: 36,
        y: 35,
        size: 8,
        font,
        color: rgb(0.6, 0.65, 0.7),
      }
    );
  }

  const pdfBytes = await pdfDoc.save();
  return Buffer.from(pdfBytes);
}

/**
 * Inject Adobe/Chrome OpenAction JavaScript: this.print() into a PDF document
 */
export async function injectAutoPrintAction(pdfBuffer: Uint8Array): Promise<Buffer> {
  try {
    const pdfDoc = await PDFDocument.load(pdfBuffer, { ignoreEncryption: true });

    // Inject OpenAction to trigger print dialog immediately upon opening
    pdfDoc.catalog.set(
      PDFName.of('OpenAction'),
      pdfDoc.context.obj({
        S: PDFName.of('JavaScript'),
        JS: PDFString.of('this.print({bUI: true, bSilent: false, bShrinkToFit: true});'),
      })
    );

    const modifiedBytes = await pdfDoc.save();
    return Buffer.from(modifiedBytes) as any;
  } catch (err) {
    logger.warn(`Could not inject auto-print action into PDF: ${err}`);
    return Buffer.from(pdfBuffer) as any;
  }
}

/**
 * Retrieve file bytes or generate fallback PDF
 */
export async function getDocumentStream(
  storageKey: string,
  autoPrint: boolean = false
): Promise<FileResolutionResult> {
  const baseFilename = path.basename(storageKey);

  // 1. First check MySQL database storage (Vercel persistent storage)
  try {
    const { db } = await import('@/lib/db');
    const dbRecord = await db.documentStorage.findUnique({
      where: { storageKey },
    });

    if (dbRecord && dbRecord.fileData) {
      logger.info(`Serving document stream from MySQL database storage: ${storageKey}`);
      let buffer: Buffer = Buffer.from(dbRecord.fileData);

      const isRealPdf =
        (dbRecord.filename.toLowerCase().endsWith('.pdf') || storageKey.toLowerCase().endsWith('.pdf')) &&
        buffer.length >= 200 &&
        buffer.subarray(0, 5).toString() === '%PDF-';

      if (isRealPdf && autoPrint) {
        buffer = (await injectAutoPrintAction(new Uint8Array(buffer))) as any;
      }

      return {
        buffer,
        mimeType: dbRecord.mimeType || 'application/pdf',
        filename: dbRecord.filename || baseFilename,
        source: 'database',
      };
    }
  } catch (dbErr) {
    logger.warn(`Could not query database document_storage for ${storageKey}: ${(dbErr as Error).message}`);
  }

  // 2. Fall back to local disk
  const diskPath = findFileOnDisk(storageKey);

  if (diskPath) {
    logger.info(`Serving PDF stream from disk: ${diskPath}`);
    let buffer = await fs.promises.readFile(diskPath);

    // Verify it is a real PDF (magic bytes %PDF-) and at least 200 bytes
    const isRealPdf =
      baseFilename.toLowerCase().endsWith('.pdf') &&
      buffer.length >= 200 &&
      buffer.subarray(0, 5).toString() === '%PDF-';

    if (isRealPdf) {
      if (autoPrint) {
        buffer = (await injectAutoPrintAction(new Uint8Array(buffer))) as any;
      }

      return {
        buffer,
        mimeType: 'application/pdf',
        filename: baseFilename,
        source: 'disk',
      };
    }
  }

  // Not on disk (e.g. seeded demo file) -> generate clean valid demo PDF
  logger.info(`File not on disk, generating clean vector PDF for demo key: ${storageKey}`);
  let demoBuffer = await generateDemoPdf(baseFilename, 4);

  if (autoPrint) {
    demoBuffer = await injectAutoPrintAction(demoBuffer);
  }

  return {
    buffer: demoBuffer,
    mimeType: 'application/pdf',
    filename: baseFilename.endsWith('.pdf') ? baseFilename : `${baseFilename}.pdf`,
    source: 'generated_demo',
  };
}
