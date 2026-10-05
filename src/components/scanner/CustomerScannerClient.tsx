'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import jsQR from 'jsqr';
import { 
  Camera, 
  CameraOff, 
  QrCode, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Store, 
  MapPin, 
  Phone, 
  Tag, 
  RefreshCw, 
  UploadCloud, 
  Check, 
  AlertCircle, 
  User, 
  FileText, 
  ShieldCheck, 
  Layers, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';

interface PricingRule {
  id?: string;
  paperSize: string;
  bwSinglePrice: number;
  bwDoublePrice: number;
  colorSinglePrice: number;
  colorDoublePrice: number;
}

interface FinishingRates {
  stapleCorner: number;
  stapleSide: number;
  bindingSpiral: number;
  bindingHardcover: number;
  bindingProject: number;
  laminationGlossy: number;
  laminationMatte: number;
}

interface BulkDiscountTier {
  minPages: number;
  discountPercent: number;
}

interface ShopDetails {
  id: string;
  name: string;
  slug: string;
  phone?: string;
  address?: string | null;
  city?: string | null;
  rules?: PricingRule[];
  finishing?: FinishingRates;
  bulkDiscounts?: BulkDiscountTier[];
  volumeDiscountsEnabled?: boolean;
}

interface CustomerProfile {
  id?: string;
  fullName: string;
  phone: string;
}

export function CustomerScannerClient() {
  const router = useRouter();

  // Active view mode: 'camera' | 'manual' | 'upload'
  const [activeTab, setActiveTab] = useState<'camera' | 'manual' | 'upload'>('camera');

  // Camera & Video Elements
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [cameraActive, setCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(true);

  // Manual & Search State
  const [inputCode, setInputCode] = useState('');
  const [availableShops, setAvailableShops] = useState<any[]>([]);
  const [isLoadingShops, setIsLoadingShops] = useState(false);

  // Recognized Shop & Pricing State
  const [recognizedShop, setRecognizedShop] = useState<ShopDetails | null>(null);
  const [isLoadingPricing, setIsLoadingPricing] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);

  // Customer Profile State
  const [customer, setCustomer] = useState<CustomerProfile | null>(null);
  const [customerNameInput, setCustomerNameInput] = useState('');
  const [customerPhoneInput, setCustomerPhoneInput] = useState('');
  const [isLoggingInCustomer, setIsLoggingInCustomer] = useState(false);
  const [showCustomerForm, setShowCustomerForm] = useState(false);

  const animationFrameId = useRef<number | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Load customer session & available verified shops on mount
  useEffect(() => {
    // 1. Check local customer session
    try {
      const stored = localStorage.getItem('sph_customer_profile');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed?.fullName && parsed?.phone) {
          setCustomer(parsed);
          setCustomerNameInput(parsed.fullName);
          setCustomerPhoneInput(parsed.phone);
        }
      }
    } catch {}

    // Check customer API session
    fetch('/api/v1/customer/auth')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data?.customer) {
          setCustomer(data.data.customer);
          setCustomerNameInput(data.data.customer.fullName);
          setCustomerPhoneInput(data.data.customer.phone);
          localStorage.setItem('sph_customer_profile', JSON.stringify(data.data.customer));
        }
      })
      .catch(() => {});

    // 2. Fetch list of verified active shops for quick-select
    setIsLoadingShops(true);
    fetch('/api/v1/shops')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data?.shops) {
          setAvailableShops(data.data.shops);
        }
      })
      .catch(() => {})
      .finally(() => setIsLoadingShops(false));
  }, []);

  // Helper to extract slug from URL or plain string
  const parseSlugFromInput = (raw: string): string => {
    const trimmed = raw.trim();
    if (!trimmed) return '';
    try {
      // Handle full URL like http://.../s/metro-xerox
      if (trimmed.includes('/s/')) {
        const parts = trimmed.split('/s/');
        return parts[1]?.split(/[?#/]/)[0] || '';
      }
      // Handle slug or plain code
      return trimmed.replace(/^https?:\/\/[^/]+\//, '').replace(/^\/+|\/+$/g, '');
    } catch {
      return trimmed;
    }
  };

  // Fetch shop pricing by slug
  const recognizeShopBySlug = useCallback(async (slugToFetch: string) => {
    const cleanSlug = parseSlugFromInput(slugToFetch);
    if (!cleanSlug) return;

    setIsLoadingPricing(true);
    setFetchError(null);

    try {
      const res = await fetch(`/api/v1/shops/${encodeURIComponent(cleanSlug)}/pricing`);
      const data = await res.json();

      if (!res.ok || !data.success || !data.data?.shop) {
        throw new Error(data.error?.message || `Counter "${cleanSlug}" not found or inactive`);
      }

      const shopData = data.data;
      setRecognizedShop({
        id: shopData.shop.id,
        name: shopData.shop.name,
        slug: shopData.shop.slug,
        phone: shopData.shop.phone,
        address: shopData.shop.address,
        rules: shopData.rules,
        finishing: shopData.finishing,
        bulkDiscounts: shopData.bulkDiscounts,
        volumeDiscountsEnabled: shopData.volumeDiscountsEnabled,
      });

      // Pause scanning once successfully recognized
      setIsScanning(false);
    } catch (err: any) {
      setFetchError(err.message || 'Unable to recognize shop counter.');
    } finally {
      setIsLoadingPricing(false);
    }
  }, []);

  // Continuous Camera QR frame scanning loop
  const tick = useCallback(() => {
    if (!isScanning) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (video && video.readyState === video.HAVE_ENOUGH_DATA && canvas) {
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (ctx) {
        canvas.height = video.videoHeight;
        canvas.width = video.videoWidth;
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height, {
          inversionAttempts: 'dontInvert',
        });

        if (code && code.data) {
          const detectedUrl = code.data;
          const slug = parseSlugFromInput(detectedUrl);
          if (slug) {
            recognizeShopBySlug(slug);
            return; // Stop animation loop once detected
          }
        }
      }
    }

    animationFrameId.current = requestAnimationFrame(tick);
  }, [isScanning, recognizeShopBySlug]);

  // Start Camera Stream
  const startCamera = async () => {
    setCameraError(null);
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('Camera streaming is not supported by your browser or environment.');
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' },
        audio: false,
      });

      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.setAttribute('playsinline', 'true');
        await videoRef.current.play();
        setCameraActive(true);
        setIsScanning(true);
      }
    } catch (err: any) {
      console.warn('Camera access issue:', err);
      setCameraActive(false);
      setCameraError(
        err.name === 'NotAllowedError'
          ? 'Camera permission denied. Please allow camera access in your browser or enter the shop code below.'
          : 'Could not activate camera. You can enter the counter code or select a verified counter directly.'
      );
    }
  };

  // Stop Camera Stream
  const stopCamera = () => {
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    setCameraActive(false);
  };

  // Handle Tab Switch
  useEffect(() => {
    if (activeTab === 'camera') {
      startCamera();
    } else {
      stopCamera();
    }

    return () => {
      stopCamera();
    };
  }, [activeTab]);

  // Hook scan tick to cameraActive and isScanning
  useEffect(() => {
    if (cameraActive && isScanning) {
      animationFrameId.current = requestAnimationFrame(tick);
    }
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [cameraActive, isScanning, tick]);

  // Handle Image Upload for QR Decoding
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFetchError(null);
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0);
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const code = jsQR(imageData.data, imageData.width, imageData.height);
          if (code && code.data) {
            const slug = parseSlugFromInput(code.data);
            if (slug) {
              recognizeShopBySlug(slug);
            } else {
              setFetchError('Valid Xerox counter QR code not detected in this image.');
            }
          } else {
            setFetchError('No QR code detected in the uploaded image. Please try another photo.');
          }
        }
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  // Handle Manual Form Submit
  const handleManualSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCode.trim()) return;
    recognizeShopBySlug(inputCode.trim());
  };

  // Handle Customer Quick Login
  const handleCustomerLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerNameInput.trim() || customerPhoneInput.replace(/[^0-9]/g, '').length < 10) return;

    setIsLoggingInCustomer(true);
    try {
      const res = await fetch('/api/v1/customer/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: customerNameInput.trim(),
          phone: customerPhoneInput.trim(),
        }),
      });
      const data = await res.json();
      if (data.success && data.data?.customer) {
        setCustomer(data.data.customer);
        localStorage.setItem('sph_customer_profile', JSON.stringify(data.data.customer));
        setShowCustomerForm(false);
      }
    } catch (err) {
      console.error('Failed to log in customer:', err);
    } finally {
      setIsLoggingInCustomer(false);
    }
  };

  // Extracted base A4 pricing
  const a4Rule = recognizedShop?.rules?.find((r) => r.paperSize === 'A4') || {
    bwSinglePrice: 2.0,
    bwDoublePrice: 3.0,
    colorSinglePrice: 10.0,
    colorDoublePrice: 18.0,
  };

  const a3Rule = recognizedShop?.rules?.find((r) => r.paperSize === 'A3');

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6">
      
      {/* Top Header / Scanner Place Banner */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 text-white text-xs font-medium shadow-sm">
          <QrCode className="h-3.5 w-3.5 text-emerald-400" />
          <span>Customer Counter Scanner</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
          Scan & Recognize Xerox Counter
        </h1>
        <p className="text-sm text-zinc-500 max-w-lg mx-auto">
          Point your camera at the shop standee QR code to inspect live print pricing, bind options, and start printing instantly.
        </p>
      </div>

      {/* Customer Profile Status Bar */}
      <div className="bg-white rounded-2xl border border-zinc-200/80 p-3.5 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 w-full sm:w-auto">
          <div className="h-8 w-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-700 shrink-0">
            <User className="h-4 w-4" />
          </div>
          <div className="min-w-0">
            {customer ? (
              <div className="flex items-center gap-2">
                <p className="text-xs font-semibold text-zinc-900 truncate">
                  {customer.fullName}
                </p>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Verified Customer
                </span>
              </div>
            ) : (
              <p className="text-xs font-medium text-zinc-700">
                Guest Customer Mode
              </p>
            )}
            <p className="text-[11px] text-zinc-400 truncate">
              {customer ? customer.phone : 'Sign in once to sync order history across any Xerox shop.'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          {customer ? (
            <button
              onClick={() => setShowCustomerForm(!showCustomerForm)}
              className="text-xs text-zinc-500 hover:text-zinc-900 underline font-medium"
            >
              Change Phone
            </button>
          ) : (
            <button
              onClick={() => setShowCustomerForm(!showCustomerForm)}
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-100 hover:bg-zinc-200 text-zinc-800 transition-colors"
            >
              Sign In with Mobile
            </button>
          )}
        </div>
      </div>

      {/* Customer Quick Sign-in Modal / Form Accordion */}
      {showCustomerForm && (
        <form onSubmit={handleCustomerLogin} className="bg-zinc-50 rounded-2xl border border-zinc-200 p-4 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-semibold text-zinc-900">
              Universal Customer Login
            </h3>
            <span className="text-[10px] text-zinc-500">
              Valid across all Smart Print Hub counters
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] font-medium text-zinc-600">Your Full Name</label>
              <input
                type="text"
                required
                value={customerNameInput}
                onChange={(e) => setCustomerNameInput(e.target.value)}
                placeholder="Rahul Sharma"
                className="mt-1 w-full rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
              />
            </div>
            <div>
              <label className="text-[11px] font-medium text-zinc-600">Mobile Contact Number</label>
              <input
                type="tel"
                required
                value={customerPhoneInput}
                onChange={(e) => setCustomerPhoneInput(e.target.value)}
                placeholder="9876543210"
                className="mt-1 w-full rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
              />
            </div>
          </div>
          <div className="flex justify-end gap-2 pt-1">
            <button
              type="button"
              onClick={() => setShowCustomerForm(false)}
              className="px-3 py-1.5 rounded-lg text-xs text-zinc-500 hover:bg-zinc-200 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoggingInCustomer}
              className="px-4 py-1.5 rounded-lg text-xs font-medium bg-zinc-900 text-white hover:bg-zinc-800 disabled:opacity-50 transition-colors"
            >
              {isLoggingInCustomer ? 'Saving...' : 'Save Profile'}
            </button>
          </div>
        </form>
      )}

      {/* Main Scanner Card */}
      {!recognizedShop && (
        <div className="bg-white rounded-3xl border border-zinc-200/80 p-5 sm:p-6 shadow-sm space-y-6">
          
          {/* Method Navigation Tabs */}
          <div className="flex items-center justify-center p-1 bg-zinc-100 rounded-xl max-w-sm mx-auto">
            <button
              type="button"
              onClick={() => setActiveTab('camera')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeTab === 'camera'
                  ? 'bg-white text-zinc-900 shadow-xs'
                  : 'text-zinc-500 hover:text-zinc-900'
              }`}
            >
              <Camera className="h-3.5 w-3.5" />
              <span>Camera Scan</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('manual')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeTab === 'manual'
                  ? 'bg-white text-zinc-900 shadow-xs'
                  : 'text-zinc-500 hover:text-zinc-900'
              }`}
            >
              <Search className="h-3.5 w-3.5" />
              <span>Enter Code</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('upload')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeTab === 'upload'
                  ? 'bg-white text-zinc-900 shadow-xs'
                  : 'text-zinc-500 hover:text-zinc-900'
              }`}
            >
              <UploadCloud className="h-3.5 w-3.5" />
              <span>Upload QR</span>
            </button>
          </div>

          {/* TAB 1: Real-time Camera Viewfinder */}
          {activeTab === 'camera' && (
            <div className="space-y-4">
              <div className="relative aspect-square max-w-xs mx-auto rounded-3xl overflow-hidden bg-zinc-950 border-2 border-zinc-800 shadow-lg flex items-center justify-center">
                
                <video
                  ref={videoRef}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <canvas ref={canvasRef} className="hidden" />

                {/* Animated Targeting Reticle & Brackets */}
                <div className="absolute inset-8 pointer-events-none flex flex-col justify-between">
                  <div className="flex justify-between">
                    <div className="w-8 h-8 border-t-4 border-l-4 border-emerald-400 rounded-tl-xl" />
                    <div className="w-8 h-8 border-t-4 border-r-4 border-emerald-400 rounded-tr-xl" />
                  </div>

                  {/* Pulsing scanning radar line */}
                  <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-pulse shadow-[0_0_10px_#34d399]" />

                  <div className="flex justify-between">
                    <div className="w-8 h-8 border-b-4 border-l-4 border-emerald-400 rounded-bl-xl" />
                    <div className="w-8 h-8 border-b-4 border-r-4 border-emerald-400 rounded-br-xl" />
                  </div>
                </div>

                {!cameraActive && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-zinc-950/90 text-white z-10">
                    <CameraOff className="h-8 w-8 text-zinc-500 mb-2" />
                    <p className="text-xs font-medium text-zinc-300">Camera Inactive</p>
                    <p className="text-[11px] text-zinc-500 mt-1 max-w-[200px]">
                      {cameraError || 'Activate camera to scan counter QR standee'}
                    </p>
                    <button
                      onClick={startCamera}
                      className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-zinc-950 transition-colors"
                    >
                      Enable Camera
                    </button>
                  </div>
                )}
              </div>

              <div className="text-center text-xs text-zinc-500">
                Align the Xerox counter QR standee within the frame.
              </div>
            </div>
          )}

          {/* TAB 2: Manual Code / Slug Input */}
          {activeTab === 'manual' && (
            <div className="max-w-md mx-auto space-y-4">
              <form onSubmit={handleManualSearch} className="space-y-3">
                <div>
                  <label className="text-xs font-medium text-zinc-700">
                    Shop Code or Slug
                  </label>
                  <div className="mt-1 flex gap-2">
                    <input
                      type="text"
                      value={inputCode}
                      onChange={(e) => setInputCode(e.target.value)}
                      placeholder="e.g. metro-xerox"
                      className="flex-1 rounded-xl border border-zinc-200 px-3.5 py-2.5 text-xs text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                    />
                    <button
                      type="submit"
                      disabled={isLoadingPricing || !inputCode.trim()}
                      className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-zinc-900 hover:bg-zinc-800 text-white disabled:opacity-50 transition-colors flex items-center gap-1.5"
                    >
                      <Search className="h-3.5 w-3.5" />
                      <span>{isLoadingPricing ? 'Checking...' : 'Check'}</span>
                    </button>
                  </div>
                  <p className="text-[11px] text-zinc-400 mt-1">
                    Enter the slug displayed under the counter standee QR code.
                  </p>
                </div>
              </form>
            </div>
          )}

          {/* TAB 3: Upload QR Photo */}
          {activeTab === 'upload' && (
            <div className="max-w-md mx-auto space-y-4 text-center">
              <label className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-zinc-200 rounded-3xl cursor-pointer hover:border-zinc-400 hover:bg-zinc-50/50 transition-all">
                <UploadCloud className="h-10 w-10 text-zinc-400 mb-2" />
                <span className="text-xs font-semibold text-zinc-900">
                  Select QR Photo or Screenshot
                </span>
                <span className="text-[11px] text-zinc-500 mt-1">
                  Supports JPG, PNG, WEBP from your phone camera or gallery
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>
          )}

          {/* Error Message */}
          {fetchError && (
            <div className="max-w-md mx-auto p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
              <AlertCircle className="h-4 w-4 shrink-0 text-rose-600" />
              <span>{fetchError}</span>
            </div>
          )}

          {/* Quick-Pick Verified Counters Section */}
          <div className="pt-4 border-t border-zinc-100">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-zinc-900 flex items-center gap-1.5">
                <Store className="h-3.5 w-3.5 text-zinc-500" />
                Verified Active Counters Nearby
              </span>
              <span className="text-[11px] text-zinc-400">
                Instant Select
              </span>
            </div>

            {isLoadingShops ? (
              <div className="text-center py-4 text-xs text-zinc-400">
                Loading available counters...
              </div>
            ) : availableShops.length === 0 ? (
              <div className="text-center py-4 text-xs text-zinc-400">
                No active counters found.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {availableShops.map((shop) => (
                  <button
                    key={shop.id || shop.slug}
                    onClick={() => recognizeShopBySlug(shop.slug)}
                    className="flex items-start justify-between p-3 rounded-2xl border border-zinc-200/80 bg-zinc-50/50 hover:bg-zinc-100 hover:border-zinc-300 text-left transition-all group"
                  >
                    <div className="min-w-0 pr-2">
                      <div className="flex items-center gap-1.5">
                        <p className="text-xs font-bold text-zinc-900 truncate group-hover:text-emerald-700 transition-colors">
                          {shop.name}
                        </p>
                        <CheckCircle2 className="h-3 w-3 text-emerald-600 shrink-0" />
                      </div>
                      <p className="text-[11px] text-zinc-500 truncate mt-0.5">
                        {shop.address || 'Tech Junction'}
                      </p>
                      {shop.pricing && (
                        <div className="flex items-center gap-2 mt-1.5 text-[10px] text-zinc-600">
                          <span className="font-semibold text-zinc-900">
                            B&W ₹{shop.pricing.a4BwSingle}
                          </span>
                          <span>•</span>
                          <span className="font-semibold text-zinc-900">
                            Color ₹{shop.pricing.a4ColorSingle}
                          </span>
                        </div>
                      )}
                    </div>
                    <ChevronRight className="h-4 w-4 text-zinc-400 group-hover:text-zinc-900 shrink-0 mt-1 transition-transform group-hover:translate-x-0.5" />
                  </button>
                ))}
              </div>
            )}
          </div>

        </div>
      )}

      {/* RECOGNIZED SHOP & LIVE PRICING RATE CARD */}
      {recognizedShop && (
        <div className="bg-white rounded-3xl border border-zinc-200/80 overflow-hidden shadow-md animate-in fade-in slide-in-from-bottom-2 duration-300">
          
          {/* Shop Recognition Header Banner */}
          <div className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-semibold">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Verified Xerox Counter</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  {recognizedShop.name}
                </h2>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-400 pt-1">
                  {recognizedShop.address && (
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {recognizedShop.address}
                    </span>
                  )}
                  {recognizedShop.phone && (
                    <span className="flex items-center gap-1">
                      <Phone className="h-3 w-3" />
                      {recognizedShop.phone}
                    </span>
                  )}
                </div>
              </div>

              <button
                onClick={() => {
                  setRecognizedShop(null);
                  setIsScanning(true);
                  if (activeTab === 'camera') startCamera();
                }}
                className="self-start sm:self-center px-3 py-1.5 rounded-xl text-xs font-medium bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-700/80 transition-colors flex items-center gap-1.5"
              >
                <RefreshCw className="h-3.5 w-3.5" />
                <span>Scan Another</span>
              </button>
            </div>
          </div>

          {/* Rate Card & Transparent Pricing Matrix */}
          <div className="p-5 sm:p-6 space-y-6">
            
            {/* Section 1: Standard A4 Printing Matrix */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
                  <FileText className="h-3.5 w-3.5 text-zinc-900" />
                  Standard A4 Print & Copy Rates
                </h3>
                <span className="text-[11px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md">
                  Counter Price Lock Active
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-zinc-50/80 rounded-2xl p-3 border border-zinc-200/70">
                  <span className="text-[11px] text-zinc-500 font-medium">B&W Single Side</span>
                  <div className="text-xl font-bold text-zinc-900 mt-1">
                    ₹{a4Rule.bwSinglePrice.toFixed(2)}
                  </div>
                  <span className="text-[10px] text-zinc-400">per page</span>
                </div>

                <div className="bg-zinc-50/80 rounded-2xl p-3 border border-zinc-200/70">
                  <span className="text-[11px] text-zinc-500 font-medium">B&W Back-to-Back</span>
                  <div className="text-xl font-bold text-zinc-900 mt-1">
                    ₹{a4Rule.bwDoublePrice.toFixed(2)}
                  </div>
                  <span className="text-[10px] text-zinc-400">per sheet (2 sides)</span>
                </div>

                <div className="bg-zinc-50/80 rounded-2xl p-3 border border-zinc-200/70">
                  <span className="text-[11px] text-zinc-500 font-medium">Color Single Side</span>
                  <div className="text-xl font-bold text-emerald-700 mt-1">
                    ₹{a4Rule.colorSinglePrice.toFixed(2)}
                  </div>
                  <span className="text-[10px] text-zinc-400">per page</span>
                </div>

                <div className="bg-zinc-50/80 rounded-2xl p-3 border border-zinc-200/70">
                  <span className="text-[11px] text-zinc-500 font-medium">Color Back-to-Back</span>
                  <div className="text-xl font-bold text-emerald-700 mt-1">
                    ₹{a4Rule.colorDoublePrice.toFixed(2)}
                  </div>
                  <span className="text-[10px] text-zinc-400">per sheet (2 sides)</span>
                </div>
              </div>
            </div>

            {/* Section 2: Other Paper Sizes (e.g. A3) if available */}
            {a3Rule && (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3 flex items-center gap-1.5">
                  <Layers className="h-3.5 w-3.5 text-zinc-900" />
                  Large Format A3 Rates
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-zinc-50/80 rounded-2xl p-3 border border-zinc-200/70">
                    <span className="text-[11px] text-zinc-500 font-medium">A3 B&W Single</span>
                    <div className="text-lg font-bold text-zinc-900 mt-1">
                      ₹{a3Rule.bwSinglePrice.toFixed(2)}
                    </div>
                  </div>
                  <div className="bg-zinc-50/80 rounded-2xl p-3 border border-zinc-200/70">
                    <span className="text-[11px] text-zinc-500 font-medium">A3 B&W Duplex</span>
                    <div className="text-lg font-bold text-zinc-900 mt-1">
                      ₹{a3Rule.bwDoublePrice.toFixed(2)}
                    </div>
                  </div>
                  <div className="bg-zinc-50/80 rounded-2xl p-3 border border-zinc-200/70">
                    <span className="text-[11px] text-zinc-500 font-medium">A3 Color Single</span>
                    <div className="text-lg font-bold text-emerald-700 mt-1">
                      ₹{a3Rule.colorSinglePrice.toFixed(2)}
                    </div>
                  </div>
                  <div className="bg-zinc-50/80 rounded-2xl p-3 border border-zinc-200/70">
                    <span className="text-[11px] text-zinc-500 font-medium">A3 Color Duplex</span>
                    <div className="text-lg font-bold text-emerald-700 mt-1">
                      ₹{a3Rule.colorDoublePrice.toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Section 3: Finishing & Binding Options */}
            {recognizedShop.finishing && (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3 flex items-center gap-1.5">
                  <Tag className="h-3.5 w-3.5 text-zinc-900" />
                  Binding & Finishing Options
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  <div className="flex items-center justify-between p-2.5 rounded-xl border border-zinc-200 bg-white">
                    <span className="text-xs text-zinc-700">Corner Stapling</span>
                    <span className="text-xs font-bold text-zinc-900">
                      ₹{recognizedShop.finishing.stapleCorner.toFixed(0)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl border border-zinc-200 bg-white">
                    <span className="text-xs text-zinc-700">Spiral Binding</span>
                    <span className="text-xs font-bold text-zinc-900">
                      ₹{recognizedShop.finishing.bindingSpiral.toFixed(0)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl border border-zinc-200 bg-white">
                    <span className="text-xs text-zinc-700">Hardcover Book</span>
                    <span className="text-xs font-bold text-zinc-900">
                      ₹{recognizedShop.finishing.bindingHardcover.toFixed(0)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl border border-zinc-200 bg-white">
                    <span className="text-xs text-zinc-700">Glossy Lamination</span>
                    <span className="text-xs font-bold text-zinc-900">
                      ₹{recognizedShop.finishing.laminationGlossy.toFixed(0)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl border border-zinc-200 bg-white">
                    <span className="text-xs text-zinc-700">Matte Lamination</span>
                    <span className="text-xs font-bold text-zinc-900">
                      ₹{recognizedShop.finishing.laminationMatte.toFixed(0)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl border border-zinc-200 bg-white">
                    <span className="text-xs text-zinc-700">Project Binding</span>
                    <span className="text-xs font-bold text-zinc-900">
                      ₹{recognizedShop.finishing.bindingProject.toFixed(0)}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Section 4: Volume Bulk Discounts Banner */}
            {recognizedShop.volumeDiscountsEnabled && recognizedShop.bulkDiscounts && recognizedShop.bulkDiscounts.length > 0 && (
              <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-3">
                <Sparkles className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs text-amber-900">
                  <span className="font-semibold">Automatic Volume Discounts: </span>
                  {recognizedShop.bulkDiscounts.map((tier, idx) => (
                    <span key={tier.minPages}>
                      {tier.discountPercent}% off on {tier.minPages}+ pages
                      {idx < (recognizedShop.bulkDiscounts?.length || 0) - 1 ? ', ' : '.'}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action CTA: Proceed to Upload & Print */}
            <div className="pt-2">
              <Link
                href={`/s/${recognizedShop.slug}`}
                className="w-full py-4 rounded-2xl text-sm font-semibold bg-zinc-900 hover:bg-zinc-800 text-white shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>Proceed to Upload & Print at this Counter</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="text-center text-[11px] text-zinc-400 mt-2">
                Fast zero-download browser printing • Live page count calculation • Instant UPI / Cash pay
              </p>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}
