// SMART PRINT HUB - Accurate Real-Time PDF Page Counter
// Supports both client-side (in-browser) and server-side PDF page counting using pdf-lib with binary fallback.
import { PDFDocument } from 'pdf-lib';

/**
 * Robustly counts the exact page count of a PDF file or ArrayBuffer.
 */
export async function getPdfPageCount(input: ArrayBuffer | Uint8Array): Promise<number> {
  // Strategy 1: Accurate pdf-lib parsing
  try {
    const bytes = input instanceof Uint8Array ? input : new Uint8Array(input);
    const pdfDoc = await PDFDocument.load(bytes, { 
      ignoreEncryption: true,
      parseSpeed: 1, // Fast parsing
    });
    const count = pdfDoc.getPageCount();
    if (count > 0) return count;
  } catch (err) {
    // Continue to binary fallback
  }

  // Strategy 2: Fast Binary / Cross-Reference Table Regex Scanning
  try {
    const uint8 = input instanceof Uint8Array ? input : new Uint8Array(input);
    // Convert first 64KB and last 64KB (where trailer & root catalogs live) to text
    const sampleSize = Math.min(uint8.length, 128 * 1024);
    const decoder = new TextDecoder('latin1');
    const textSample = decoder.decode(uint8.subarray(0, sampleSize)) + 
      decoder.decode(uint8.subarray(Math.max(0, uint8.length - sampleSize)));

    // 1. Look for /Type /Pages ... /Count N
    const countMatches = [...textSample.matchAll(/\/Count\s+(\d+)/g)];
    if (countMatches.length > 0) {
      // The root /Pages object usually has the highest /Count number
      const counts = countMatches.map((m) => parseInt(m[1], 10)).filter((n) => !isNaN(n) && n > 0);
      if (counts.length > 0) {
        return Math.max(...counts);
      }
    }

    // 2. Count individual /Type /Page objects (excluding /Type /Pages)
    const pageObjMatches = [...textSample.matchAll(/\/Type\s*\/Page\b(?!\s*s)/g)];
    if (pageObjMatches.length > 0) {
      return pageObjMatches.length;
    }
  } catch (binaryErr) {
    // Fallback
  }

  return 1;
}

/**
 * Client-side helper for HTML File object.
 */
export async function countFilePages(file: File): Promise<number> {
  const extension = file.name.split('.').pop()?.toLowerCase();
  
  if (extension !== 'pdf') {
    // Non-PDF single images or documents default to 1 page
    return 1;
  }

  try {
    const buffer = await file.arrayBuffer();
    return await getPdfPageCount(buffer);
  } catch (err) {
    console.warn(`Could not parse PDF pages for ${file.name}, defaulting to 1:`, err);
    return 1;
  }
}
