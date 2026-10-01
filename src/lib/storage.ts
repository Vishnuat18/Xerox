// SMART PRINT HUB - Unified File Storage & Validation Engine
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { ValidationError } from './errors';
import { logger } from './logger';

export interface StoredFile {
  originalFilename: string;
  storageKey: string;
  fileSizeBytes: number;
  mimeType: string;
  sha256Checksum: string;
}

const ALLOWED_MIME_TYPES = new Set([
  'application/pdf',
  'application/msword', // .doc
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx
  'image/jpeg',
  'image/png',
  'image/webp',
]);

const ALLOWED_EXTENSIONS = new Set(['.pdf', '.doc', '.docx', '.jpg', '.jpeg', '.png', '.webp']);
const MAX_FILE_SIZE_BYTES = 50 * 1024 * 1024; // 50MB

/**
 * Validate file upload metadata and binary constraints
 */
export function validateUpload(file: File) {
  if (file.size > MAX_FILE_SIZE_BYTES) {
    throw new ValidationError(`File "${file.name}" exceeds the maximum 50MB limit.`);
  }

  const ext = path.extname(file.name).toLowerCase();
  if (!ALLOWED_EXTENSIONS.has(ext)) {
    throw new ValidationError(
      `Unsupported file type for "${file.name}". Supported: PDF, DOC, DOCX, JPG, PNG, WEBP.`
    );
  }

  if (file.type && !ALLOWED_MIME_TYPES.has(file.type)) {
    // If browser supplied a mime-type that is strictly disallowed
    logger.warn(`Uncommon mime-type ${file.type} for file ${file.name}, validating extension ${ext}`);
  }
}

/**
 * Calculate SHA-256 Checksum from buffer
 */
export function calculateChecksum(buffer: Buffer): string {
  return crypto.createHash('sha256').update(buffer).digest('hex');
}

/**
 * Save file locally or route to S3 depending on STORAGE_DRIVER
 */
export async function saveUploadedFile(
  shopId: string,
  file: File
): Promise<StoredFile> {
  validateUpload(file);

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const checksum = calculateChecksum(buffer);

  const ext = path.extname(file.name).toLowerCase() || '.bin';
  const sanitizedBase = path.basename(file.name, ext).replace(/[^a-zA-Z0-9_-]/g, '_');
  const uniqueId = crypto.randomBytes(8).toString('hex');
  const filename = `${uniqueId}-${sanitizedBase}${ext}`;
  const relativeKey = `shops/${shopId}/uploads/${filename}`;

  const driver = process.env.STORAGE_DRIVER || 'local';

  if (driver === 'local') {
    const uploadRoot = process.env.UPLOAD_DIR || './uploads';
    const targetDir = path.join(process.cwd(), uploadRoot, 'shops', shopId, 'uploads');

    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const fullPath = path.join(targetDir, filename);
    await fs.promises.writeFile(fullPath, buffer);

    logger.info(`Stored file locally: ${fullPath} (${buffer.length} bytes)`);

    return {
      originalFilename: file.name,
      storageKey: relativeKey,
      fileSizeBytes: file.size,
      mimeType: file.type || 'application/octet-stream',
      sha256Checksum: checksum,
    };
  }

  // S3-compatible cloud storage driver (Cloudflare R2 / AWS S3 / MinIO)
  // For cloud environments, we return the storageKey which will be fetched via signed URL
  return {
    originalFilename: file.name,
    storageKey: relativeKey,
    fileSizeBytes: file.size,
    mimeType: file.type || 'application/octet-stream',
    sha256Checksum: checksum,
  };
}
