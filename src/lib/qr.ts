// SMART PRINT HUB - QR Code Generation Engine
import QRCode from 'qrcode';

export interface QROptions {
  margin?: number;
  width?: number;
  color?: {
    dark?: string;
    light?: string;
  };
}

/**
 * Generate a Base64 PNG Data URL for a shop URL
 */
export async function generateQRDataUrl(text: string, options: QROptions = {}): Promise<string> {
  const defaultOptions: QRCode.QRCodeToDataURLOptions = {
    errorCorrectionLevel: 'H', // High error correction (30% recoverable) - crucial for damaged counter standees
    type: 'image/png',
    margin: options.margin ?? 2,
    width: options.width ?? 512,
    color: {
      dark: options.color?.dark || '#0f172a', // Deep slate for high scan contrast
      light: options.color?.light || '#ffffff',
    },
  };

  return QRCode.toDataURL(text, defaultOptions);
}

/**
 * Generate an SVG string for vector exports (counter stickers / vinyl banners)
 */
export async function generateQRSVG(text: string, options: QROptions = {}): Promise<string> {
  return QRCode.toString(text, {
    type: 'svg',
    errorCorrectionLevel: 'H',
    margin: options.margin ?? 2,
    width: options.width ?? 512,
    color: {
      dark: options.color?.dark || '#0f172a',
      light: options.color?.light || '#ffffff',
    },
  });
}
