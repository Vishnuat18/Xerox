// SMART PRINT HUB - Client-Side Hardware & Device Fingerprinting Engine
// Generates high-entropy persistent machine signatures to enforce 1 shop per physical system

export interface SystemFingerprint {
  deviceId: string;
  hardwareFingerprint: string;
  systemSummary: string;
}

function simpleHash(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash).toString(36);
}

/**
 * 2D Canvas Fingerprint - captures sub-pixel font rendering & anti-aliasing variations
 */
function getCanvasFingerprint(): string {
  try {
    const canvas = document.createElement('canvas');
    canvas.width = 240;
    canvas.height = 60;
    const ctx = canvas.getContext('2d');
    if (!ctx) return 'no-canvas';

    ctx.textBaseline = 'top';
    ctx.font = '14px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial';
    ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = '#f60';
    ctx.fillRect(125, 1, 62, 20);

    ctx.fillStyle = '#069';
    ctx.fillText('SmartPrintHub🔒SystemIdentifier,1234#@!', 2, 15);
    ctx.fillStyle = 'rgba(102, 204, 0, 0.7)';
    ctx.fillText('SmartPrintHub🔒SystemIdentifier,1234#@!', 4, 17);

    return simpleHash(canvas.toDataURL());
  } catch {
    return 'canvas-err';
  }
}

/**
 * WebGL Fingerprint - captures GPU hardware and driver information
 */
function getWebGLFingerprint(): { vendor: string; renderer: string } {
  try {
    const canvas = document.createElement('canvas');
    const gl = (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null;
    if (!gl) return { vendor: 'no-webgl', renderer: 'no-webgl' };

    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    if (!debugInfo) {
      return {
        vendor: gl.getParameter(gl.VENDOR) || 'generic',
        renderer: gl.getParameter(gl.RENDERER) || 'generic',
      };
    }

    const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) || '';
    const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || '';
    return { vendor, renderer };
  } catch {
    return { vendor: 'err', renderer: 'err' };
  }
}

/**
 * Generate or retrieve persistent machine/device identifier
 */
export function getPersistentDeviceId(): string {
  if (typeof window === 'undefined') return 'server-side';

  const STORAGE_KEY = 'sph_system_machine_uuid';
  let deviceId = localStorage.getItem(STORAGE_KEY);

  // Check cookie as backup
  if (!deviceId) {
    const match = document.cookie.match(new RegExp('(^| )sph_sys_machine_id=([^;]+)'));
    if (match) {
      deviceId = match[2];
    }
  }

  // If still not found, generate new UUID
  if (!deviceId) {
    deviceId = 'sys_' + crypto.randomUUID().replace(/-/g, '').slice(0, 16);
  }

  // Persist across localStorage and 10-year cookie
  try {
    localStorage.setItem(STORAGE_KEY, deviceId);
    document.cookie = `sph_sys_machine_id=${deviceId}; path=/; max-age=315360000; SameSite=Lax`;
  } catch {}

  return deviceId;
}

/**
 * Generate high-entropy hardware fingerprint combining GPU, CPU, Screen, OS, and Canvas
 */
export async function getSystemDeviceFingerprint(): Promise<SystemFingerprint> {
  if (typeof window === 'undefined') {
    return {
      deviceId: 'server',
      hardwareFingerprint: 'server',
      systemSummary: 'Server Environment',
    };
  }

  const deviceId = getPersistentDeviceId();
  const canvasHash = getCanvasFingerprint();
  const webgl = getWebGLFingerprint();

  const screenMetrics = [
    window.screen.width,
    window.screen.height,
    window.screen.colorDepth,
    window.devicePixelRatio || 1,
  ].join('x');

  const cpuCores = navigator.hardwareConcurrency || 4;
  const platform = navigator.platform || 'unknown';
  const language = navigator.language || 'en';
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';

  // Raw hardware descriptor
  const hardwareRaw = [
    `gpu:${webgl.vendor}|${webgl.renderer}`,
    `canvas:${canvasHash}`,
    `screen:${screenMetrics}`,
    `cpu:${cpuCores}`,
    `plat:${platform}`,
    `tz:${timezone}`,
  ].join(';;');

  // Compute stable hardware fingerprint hash
  let hardwareHash = '';
  try {
    const encoder = new TextEncoder();
    const data = encoder.encode(hardwareRaw);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    hardwareHash = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('').slice(0, 32);
  } catch {
    hardwareHash = simpleHash(hardwareRaw);
  }

  const systemSummary = `${platform} • ${webgl.renderer.replace(/ANGLE \((.*)\)/, '$1').slice(0, 28) || 'Standard GPU'} • ${screenMetrics}`;

  return {
    deviceId,
    hardwareFingerprint: `hw_${hardwareHash}`,
    systemSummary,
  };
}
