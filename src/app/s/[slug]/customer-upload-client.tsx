'use client';

import React, { useState, useRef } from 'react';
import { 
  UploadCloud, 
  FileText, 
  Image as ImageIcon, 
  Trash2, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  ShieldCheck, 
  Printer, 
  User, 
  Phone,
  FileCheck,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

interface ShopProps {
  id: string;
  name: string;
  slug: string;
  phone: string;
  address?: string | null;
  pricingRules: Array<{
    paperSize: string;
    bwSinglePrice: number;
    bwDoublePrice: number;
    colorSinglePrice: number;
    colorDoublePrice: number;
  }>;
}

interface UploadedFileInfo {
  id: string;
  originalFilename: string;
  storageKey: string;
  fileSizeBytes: number;
  mimeType: string;
  sha256Checksum: string;
}

export function CustomerUploadClient({ shop }: { shop: ShopProps }) {
  const [customerName, setCustomerName] = useState('Rahul Sharma');
  const [customerPhone, setCustomerPhone] = useState('9876543210');
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [uploadSuccessData, setUploadSuccessData] = useState<{
    customer: { fullName: string; phone: string };
    files: UploadedFileInfo[];
  } | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const a4Rule = shop.pricingRules.find((r) => r.paperSize === 'A4');

  // Format bytes helper
  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  // File extension icon helper
  const getFileIcon = (filename: string) => {
    const ext = filename.split('.').pop()?.toLowerCase();
    if (['jpg', 'jpeg', 'png', 'webp'].includes(ext || '')) {
      return <ImageIcon className="h-5 w-5 text-emerald-600" />;
    }
    return <FileText className="h-5 w-5 text-zinc-700" />;
  };

  // Add files with validation
  const handleAddFiles = (incoming: FileList | File[]) => {
    setErrorMessage('');
    const newFiles: File[] = [];
    const allowed = ['pdf', 'doc', 'docx', 'jpg', 'jpeg', 'png', 'webp'];

    Array.from(incoming).forEach((file) => {
      const ext = file.name.split('.').pop()?.toLowerCase() || '';
      if (!allowed.includes(ext)) {
        setErrorMessage(`"${file.name}" has an unsupported format. Supported: PDF, DOCX, JPG, PNG.`);
        return;
      }
      if (file.size > 50 * 1024 * 1024) {
        setErrorMessage(`"${file.name}" exceeds 50MB.`);
        return;
      }
      newFiles.push(file);
    });

    setFiles((prev) => [...prev, ...newFiles]);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files) {
      handleAddFiles(e.dataTransfer.files);
    }
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!customerName.trim()) {
      setErrorMessage('Please enter your full name');
      return;
    }
    if (customerPhone.trim().length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile contact number');
      return;
    }
    if (files.length === 0) {
      setErrorMessage('Please select at least one document to upload');
      return;
    }

    setIsUploading(true);
    setUploadProgress(25);

    try {
      const formData = new FormData();
      formData.append('shopSlug', shop.slug);
      formData.append('customerName', customerName.trim());
      formData.append('customerPhone', customerPhone.trim());
      files.forEach((file) => {
        formData.append('files', file);
      });

      setUploadProgress(65);

      const res = await fetch('/api/v1/customer/upload', {
        method: 'POST',
        body: formData,
      });

      setUploadProgress(95);
      const json = await res.json();

      if (!res.ok || !json.success) {
        throw new Error(json.error?.message || 'Upload failed. Please try again.');
      }

      setUploadProgress(100);
      setUploadSuccessData(json.data);
    } catch (err: unknown) {
      setErrorMessage((err as Error).message);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50/70">
      
      {/* Mobile-optimized Counter Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-zinc-200 px-4 py-3 shadow-2xs">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
              <Printer className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-sm font-black text-zinc-900 leading-tight truncate max-w-[200px]">
                {shop.name}
              </h1>
              <p className="text-[10px] text-zinc-500 font-semibold flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
                Active Xerox Counter
              </p>
            </div>
          </div>
          <Badge variant="success" pulse>OPEN</Badge>
        </div>
      </header>

      <main className="flex-1 max-w-md mx-auto w-full p-4 space-y-4">
        
        {/* Counter Rates Banner */}
        <Card className="border-emerald-200/80 bg-gradient-to-br from-emerald-50/40 via-white to-zinc-50 shadow-2xs">
          <CardHeader className="pb-2 pt-4 px-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-zinc-900 uppercase tracking-wider">
                Counter Printing Rates (A4)
              </span>
              <span className="text-[10px] text-emerald-800 font-bold bg-emerald-100/70 px-2 py-0.5 rounded">Standard</span>
            </div>
          </CardHeader>
          <CardContent className="px-4 pb-3">
            <div className="grid grid-cols-2 gap-2 text-xs font-medium text-zinc-700">
              <div className="p-2 rounded-xl bg-white border border-zinc-200/80 shadow-2xs">
                <span className="text-[10px] text-zinc-400 block font-semibold">B&W Single</span>
                <strong className="text-zinc-900 text-sm">₹{a4Rule?.bwSinglePrice.toFixed(2) || '2.00'}</strong>
              </div>
              <div className="p-2 rounded-xl bg-white border border-zinc-200/80 shadow-2xs">
                <span className="text-[10px] text-zinc-400 block font-semibold">B&W Duplex</span>
                <strong className="text-zinc-900 text-sm">₹{a4Rule?.bwDoublePrice.toFixed(2) || '3.00'}</strong>
              </div>
              <div className="p-2 rounded-xl bg-white border border-zinc-200/80 shadow-2xs">
                <span className="text-[10px] text-zinc-400 block font-semibold">Color Single</span>
                <strong className="text-zinc-900 text-sm">₹{a4Rule?.colorSinglePrice.toFixed(2) || '10.00'}</strong>
              </div>
              <div className="p-2 rounded-xl bg-white border border-zinc-200/80 shadow-2xs">
                <span className="text-[10px] text-zinc-400 block font-semibold">Color Duplex</span>
                <strong className="text-zinc-900 text-sm">₹{a4Rule?.colorDoublePrice.toFixed(2) || '18.00'}</strong>
              </div>
            </div>
          </CardContent>
        </Card>

        {uploadSuccessData ? (
          /* Upload Success Screen */
          <Card className="border-emerald-300 bg-white shadow-md">
            <CardHeader className="text-center pb-3">
              <div className="mx-auto h-12 w-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2">
                <FileCheck className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-black text-emerald-950">
                Documents Ready!
              </CardTitle>
              <CardDescription className="text-xs">
                {uploadSuccessData.files.length} document(s) uploaded for {uploadSuccessData.customer.fullName}.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="divide-y divide-zinc-100 rounded-xl border border-zinc-200 bg-zinc-50/70 p-2">
                {uploadSuccessData.files.map((file) => (
                  <div key={file.id} className="py-2.5 px-2 flex items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-2 truncate">
                      {getFileIcon(file.originalFilename)}
                      <span className="font-bold text-zinc-900 truncate">
                        {file.originalFilename}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 shrink-0">
                      {formatBytes(file.fileSizeBytes)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900">
                <p className="font-bold flex items-center gap-1.5 mb-0.5 text-emerald-800">
                  <Sparkles className="h-4 w-4 text-emerald-700" />
                  Files Ingested & Hashed
                </p>
                <p className="text-[11px] leading-relaxed text-emerald-800/80">
                  Ready to configure print specifications (Copies, Duplex, Color) in Milestone 4.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                variant="primary" 
                className="w-full h-11 text-sm font-bold shadow-xs"
                onClick={() => setUploadSuccessData(null)}
              >
                Upload Additional Files
              </Button>
            </CardFooter>
          </Card>
        ) : (
          /* Main Upload Form */
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Customer Details */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-xs font-black uppercase tracking-wider text-zinc-700">
                  1. Customer Details (Testing Account)
                </CardTitle>
                <CardDescription className="text-xs">
                  Prefilled with test customer profile.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-zinc-700 uppercase tracking-wider">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 h-4 w-4 text-zinc-400" />
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full rounded-xl border border-zinc-200 bg-white pl-9 pr-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-2xs"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-zinc-700 uppercase tracking-wider">
                    Mobile Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-2.5 h-4 w-4 text-zinc-400" />
                    <input
                      type="tel"
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="10-digit mobile number"
                      className="w-full rounded-xl border border-zinc-200 bg-white pl-9 pr-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-2xs"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Drag & Drop File Ingest */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xs font-black uppercase tracking-wider text-zinc-700">
                    2. Select Documents
                  </CardTitle>
                  <span className="text-xs text-zinc-500 font-mono">
                    {files.length} selected
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                
                {/* Drag-Drop Zone */}
                <div
                  onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all ${
                    isDragging 
                      ? 'border-emerald-600 bg-emerald-50/50' 
                      : 'border-zinc-300 hover:border-emerald-600 bg-zinc-50/60 hover:bg-emerald-50/20'
                  }`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.webp"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files) handleAddFiles(e.target.files);
                    }}
                  />

                  <div className="mx-auto h-12 w-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2 shadow-2xs">
                    <UploadCloud className="h-6 w-6" />
                  </div>
                  <p className="text-xs font-bold text-zinc-800">
                    Tap to Choose Files or Drag & Drop
                  </p>
                  <p className="text-[11px] text-zinc-500 mt-1 font-medium">
                    PDF, DOC, DOCX, JPG, PNG (Max 50MB each)
                  </p>
                </div>

                {/* File List */}
                {files.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                      Selected Files
                    </span>
                    <div className="divide-y divide-zinc-100 border border-zinc-200 rounded-xl bg-white shadow-2xs">
                      {files.map((file, idx) => (
                        <div key={idx} className="p-2.5 flex items-center justify-between gap-3 text-xs">
                          <div className="flex items-center gap-2.5 min-w-0">
                            {getFileIcon(file.name)}
                            <div className="min-w-0">
                              <p className="font-bold text-zinc-900 truncate">{file.name}</p>
                              <p className="text-[10px] text-zinc-400 font-mono">{formatBytes(file.size)}</p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleRemoveFile(idx)}
                            className="p-1.5 text-zinc-400 hover:text-rose-600 transition-colors"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {errorMessage && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 shrink-0 text-rose-600" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {isUploading && (
                  <div className="space-y-1.5 pt-2">
                    <div className="flex justify-between text-[11px] font-bold text-emerald-700">
                      <span>Uploading documents...</span>
                      <span>{uploadProgress}%</span>
                    </div>
                    <div className="w-full bg-zinc-100 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-emerald-600 h-2 transition-all duration-300 rounded-full" 
                        style={{ width: `${uploadProgress}%` }}
                      />
                    </div>
                  </div>
                )}
              </CardContent>

              <CardFooter className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  isLoading={isUploading}
                  className="w-full h-11 text-sm font-bold shadow-xs"
                >
                  Upload & Proceed
                  <ArrowRight className="h-4 w-4 ml-1.5" />
                </Button>
              </CardFooter>
            </Card>

            <div className="text-center pt-1 text-xs text-zinc-400 flex items-center justify-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>Direct Upload • Auto-purged after 24 hours</span>
            </div>
          </form>
        )}

      </main>
    </div>
  );
}
