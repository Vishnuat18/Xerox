// SMART PRINT HUB - Hardware Device & System Fingerprint Registry
// Enforces "One Shop Account Per Physical System/Computer" to prevent trial abuse
import fs from 'fs';
import path from 'path';
import os from 'os';
import { logger } from './logger';

export interface DeviceRecord {
  deviceId: string;
  hardwareFingerprint: string;
  shopId: string;
  shopName: string;
  ownerEmail: string;
  ipAddress?: string;
  registeredAt: string;
}

export interface DeviceCheckResult {
  isRegistered: boolean;
  existingShop?: {
    shopId: string;
    shopName: string;
    ownerEmailMasked: string;
    registeredAt: string;
  };
  reason?: string;
}

function getRegistryFilePath(): string {
  const isVercel = Boolean(process.env.VERCEL);
  const baseDir = isVercel ? os.tmpdir() : path.join(process.cwd(), 'uploads');
  if (!fs.existsSync(baseDir)) {
    try {
      fs.mkdirSync(baseDir, { recursive: true });
    } catch {}
  }
  return path.join(baseDir, 'device_registry.json');
}

class DeviceRegistry {
  private records: Map<string, DeviceRecord> = new Map();
  private fingerprintIndex: Map<string, string> = new Map(); // fingerprint -> deviceId
  private initialized = false;

  private maskEmail(email: string): string {
    if (!email || !email.includes('@')) return '******';
    const [local, domain] = email.split('@');
    if (local.length <= 2) {
      return `${local[0]}***@${domain}`;
    }
    return `${local[0]}${'*'.repeat(Math.min(local.length - 2, 4))}${local[local.length - 1]}@${domain}`;
  }

  private loadFromDisk() {
    if (this.initialized) return;
    this.initialized = true;

    try {
      const filePath = getRegistryFilePath();
      if (fs.existsSync(filePath)) {
        const raw = fs.readFileSync(filePath, 'utf-8');
        const parsed = JSON.parse(raw) as DeviceRecord[];
        for (const item of parsed) {
          this.records.set(item.deviceId, item);
          if (item.hardwareFingerprint) {
            this.fingerprintIndex.set(item.hardwareFingerprint, item.deviceId);
          }
        }
        logger.info(`Loaded ${this.records.size} registered system device(s) from persistent storage.`);
      }
    } catch (err) {
      logger.warn(`Could not load device registry from disk: ${err}`);
    }
  }

  private saveToDisk() {
    try {
      const filePath = getRegistryFilePath();
      const data = Array.from(this.records.values());
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    } catch (err) {
      logger.warn(`Could not persist device registry to disk: ${err}`);
    }
  }

  /**
   * Check if a system/machine has already registered an account
   */
  public checkDevice(
    deviceId?: string | null,
    hardwareFingerprint?: string | null,
    registeredShopCookie?: string | null
  ): DeviceCheckResult {
    this.loadFromDisk();

    // 1. Direct deviceId match
    if (deviceId && this.records.has(deviceId)) {
      const record = this.records.get(deviceId)!;
      return {
        isRegistered: true,
        existingShop: {
          shopId: record.shopId,
          shopName: record.shopName,
          ownerEmailMasked: this.maskEmail(record.ownerEmail),
          registeredAt: record.registeredAt,
        },
        reason: 'Device ID matches an existing registered computer.',
      };
    }

    // 2. Hardware / Canvas / WebGL fingerprint match
    if (hardwareFingerprint && this.fingerprintIndex.has(hardwareFingerprint)) {
      const matchedDeviceId = this.fingerprintIndex.get(hardwareFingerprint)!;
      const record = this.records.get(matchedDeviceId);
      if (record) {
        return {
          isRegistered: true,
          existingShop: {
            shopId: record.shopId,
            shopName: record.shopName,
            ownerEmailMasked: this.maskEmail(record.ownerEmail),
            registeredAt: record.registeredAt,
          },
          reason: 'Hardware & system signature matches an existing registered computer.',
        };
      }
    }

    // 3. Persistent shop cookie match
    if (registeredShopCookie) {
      for (const record of this.records.values()) {
        if (record.shopId === registeredShopCookie) {
          return {
            isRegistered: true,
            existingShop: {
              shopId: record.shopId,
              shopName: record.shopName,
              ownerEmailMasked: this.maskEmail(record.ownerEmail),
              registeredAt: record.registeredAt,
            },
            reason: 'System cookie confirms an existing registered account.',
          };
        }
      }
    }

    return { isRegistered: false };
  }

  /**
   * Register a new device/system to a shop
   */
  public registerDevice(data: {
    deviceId: string;
    hardwareFingerprint: string;
    shopId: string;
    shopName: string;
    ownerEmail: string;
    ipAddress?: string;
  }): DeviceRecord {
    this.loadFromDisk();

    const record: DeviceRecord = {
      deviceId: data.deviceId,
      hardwareFingerprint: data.hardwareFingerprint,
      shopId: data.shopId,
      shopName: data.shopName,
      ownerEmail: data.ownerEmail,
      ipAddress: data.ipAddress,
      registeredAt: new Date().toISOString(),
    };

    this.records.set(data.deviceId, record);
    if (data.hardwareFingerprint) {
      this.fingerprintIndex.set(data.hardwareFingerprint, data.deviceId);
    }

    this.saveToDisk();
    logger.info(`System device registered: [${data.deviceId}] for shop "${data.shopName}" (${data.ownerEmail})`);
    return record;
  }
}

export const deviceRegistry = new DeviceRegistry();
