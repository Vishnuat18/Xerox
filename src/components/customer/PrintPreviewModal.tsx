'use client';

import React, { useState, useEffect } from 'react';
import { 
  X, 
  RotateCw, 
  Eye, 
  Check, 
  FileText, 
  Layers, 
  ZoomIn, 
  ZoomOut, 
  Maximize2,
  Grid,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export type PaperSize = 'A1' | 'A2' | 'A3' | 'A4' | 'A5' | 'A6';
export type Orientation = 'PORTRAIT' | 'LANDSCAPE';
export type ColorMode = 'BW' | 'COLOR';
export type DuplexMode = 'SIMPLEX' | 'DUPLEX';

export interface PrintPreviewSpec {
  copies: number;
  color: ColorMode;
  duplex: DuplexMode;
  paperSize: PaperSize;
  orientation: Orientation;
  pageRange: string;
  detectedPageCount: number;
  stapling: 'NONE' | 'CORNER' | 'SIDE';
  binding?: 'NONE' | 'SPIRAL' | 'HARDCOVER' | 'PROJECT';
  lamination?: 'NONE' | 'GLOSSY' | 'MATTE';
}

interface PrintPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  file: File;
  spec: PrintPreviewSpec;
  onUpdateSpec: (updates: Partial<PrintPreviewSpec>) => void;
}

// ISO 216 Paper Standards with physical dimensions & relative scale factor
const PAPER_CONFIG: Record<
  PaperSize, 
  { widthMm: number; heightMm: number; label: string; scaleFactor: number; description: string }
> = {
  A1: { widthMm: 594, heightMm: 841, label: 'A1 Poster', scaleFactor: 1.25, description: '594 × 841 mm (Architectural & Large Poster)' },
  A2: { widthMm: 420, heightMm: 594, label: 'A2 Medium', scaleFactor: 1.15, description: '420 × 594 mm (Exhibition & Diagram)' },
  A3: { widthMm: 297, heightMm: 420, label: 'A3 Ledger', scaleFactor: 1.08, description: '297 × 420 mm (Tabloid & Double A4)' },
  A4: { widthMm: 210, heightMm: 297, label: 'A4 Standard', scaleFactor: 1.0, description: '210 × 297 mm (Standard Document - Default)' },
  A5: { widthMm: 148, heightMm: 210, label: 'A5 Booklet', scaleFactor: 0.88, description: '148 × 210 mm (Half A4 & Booklet)' },
  A6: { widthMm: 105, heightMm: 148, label: 'A6 Postcard', scaleFactor: 0.78, description: '105 × 148 mm (Pocket Flyer & Postcard)' },
};

export function PrintPreviewModal({
  isOpen,
  onClose,
  file,
  spec,
  onUpdateSpec,
}: PrintPreviewModalProps) {
  const [objectUrl, setObjectUrl] = useState<string | null>(null);
  const [activeSide, setActiveSide] = useState<'FRONT' | 'BACK'>('FRONT');
  const [showMargins, setShowMargins] = useState(true);
  const [showGrid, setShowGrid] = useState(false);
  const [fitMode, setFitMode] = useState<'CONTAIN' | 'COVER'>('CONTAIN');

  useEffect(() => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setObjectUrl(url);

    return () => {
      URL.revokeObjectURL(url);
    };
  }, [file]);

  if (!isOpen) return null;

  const isImage = file.type.startsWith('image/');
  const isPdf = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');
  const paper = PAPER_CONFIG[spec.paperSize] || PAPER_CONFIG.A4;
  const isLandscape = spec.orientation === 'LANDSCAPE';
  const isColor = spec.color === 'COLOR';
  const isDuplex = spec.duplex === 'DUPLEX';

  // True ISO aspect ratios
  const aspectRatio = isLandscape ? '1.414 / 1' : '1 / 1.414';

  // Base dimensions responsive to paper size selection
  const baseWidthPx = isLandscape ? 440 : 320;
  const sheetWidthPx = Math.round(baseWidthPx * paper.scaleFactor);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-zinc-950/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-150">
      
      {/* Modal Container */}
      <div className="w-full max-w-4xl max-h-[94vh] bg-white rounded-2xl border border-zinc-200/90 shadow-2xl flex flex-col overflow-hidden">
        
        {/* Top Header */}
        <div className="px-5 py-3 border-b border-zinc-200/80 flex items-center justify-between bg-zinc-50/70 shrink-0">
          <div className="flex items-center gap-2.5 truncate">
            <div className="h-7 w-7 rounded-lg bg-zinc-900 text-white flex items-center justify-center shrink-0">
              <Eye className="h-3.5 w-3.5" />
            </div>
            <div className="truncate">
              <h2 className="text-xs font-semibold text-zinc-900 truncate">
                Print Preview • {file.name}
              </h2>
              <p className="text-[10px] text-zinc-500 font-mono">
                {paper.label} • {isLandscape ? 'Landscape' : 'Portrait'} • {isColor ? 'Full Color' : 'Laser Grayscale'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={onClose}
              className="h-7 w-7 rounded-lg text-zinc-400 hover:text-zinc-900 hover:bg-zinc-200/60 flex items-center justify-center transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Modal Main Area: Left Virtual Paper Sheet Canvas + Right Interactive Spec Panel */}
        <div className="flex-1 flex flex-col lg:flex-row min-h-0 overflow-y-auto">
          
          {/* Virtual Paper Canvas */}
          <div className="flex-1 bg-zinc-100/80 p-4 sm:p-8 flex flex-col items-center justify-center relative overflow-hidden select-none min-h-[380px]">
            
            {/* Sheet Sub-controls overlay */}
            <div className="absolute top-3 left-4 flex items-center gap-2 text-[10px] font-mono text-zinc-500 z-10">
              <span className="bg-white/80 border border-zinc-200 px-2 py-0.5 rounded shadow-2xs">
                {spec.paperSize} ({paper.widthMm} × {paper.heightMm} mm)
              </span>
              <span className="bg-white/80 border border-zinc-200 px-2 py-0.5 rounded shadow-2xs">
                {isLandscape ? 'Landscape' : 'Portrait'}
              </span>
            </div>

            {/* Simulated Printed Paper Sheet */}
            <div 
              className="relative bg-white rounded shadow-xl border border-zinc-300 transition-all duration-300 ease-out flex flex-col overflow-hidden"
              style={{
                aspectRatio,
                width: `min(92%, ${sheetWidthPx}px)`,
                maxHeight: '54vh',
                // Live filter transforms document to optical monochromatic toner or vivid color
                filter: isColor ? 'none' : 'grayscale(100%) contrast(1.22) brightness(0.95)',
              }}
            >
              {/* Optional 10mm Printable Margin Guidelines */}
              {showMargins && (
                <div className="absolute inset-2 sm:inset-3 border border-dashed border-emerald-600/30 pointer-events-none rounded-2xs z-20 flex items-start justify-end p-1">
                  <span className="text-[8px] font-mono text-emerald-700/60 bg-white/70 px-1 rounded">10mm margin</span>
                </div>
              )}

              {/* Optional Alignment Grid */}
              {showGrid && (
                <div 
                  className="absolute inset-0 pointer-events-none opacity-15 z-10"
                  style={{
                    backgroundImage: 'linear-gradient(#059669 1px, transparent 1px), linear-gradient(90deg, #059669 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />
              )}

              {/* Realistic Finishing Simulation Overlays */}
              {spec.stapling === 'CORNER' && (
                <div 
                  className="absolute top-2 left-2 w-5 h-1.5 bg-gradient-to-r from-zinc-400 via-zinc-200 to-zinc-500 rounded-2xs shadow-xs z-30 transform -rotate-45 pointer-events-none border border-zinc-600/40" 
                  title="Corner Staple Applied"
                />
              )}
              {spec.stapling === 'SIDE' && (
                <>
                  <div className="absolute top-8 left-1.5 w-1.5 h-4 bg-gradient-to-b from-zinc-400 via-zinc-200 to-zinc-500 rounded-2xs shadow-xs z-30 pointer-events-none border border-zinc-600/40" />
                  <div className="absolute bottom-8 left-1.5 w-1.5 h-4 bg-gradient-to-b from-zinc-400 via-zinc-200 to-zinc-500 rounded-2xs shadow-xs z-30 pointer-events-none border border-zinc-600/40" />
                </>
              )}
              {spec.binding === 'SPIRAL' && (
                <div className="absolute left-0 top-0 bottom-0 w-3 flex flex-col justify-around py-4 z-30 pointer-events-none">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="w-2.5 h-1 rounded-full bg-zinc-800 shadow-2xs border border-zinc-600" />
                  ))}
                </div>
              )}
              {spec.lamination && spec.lamination !== 'NONE' && (
                <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 text-[8px] font-mono z-30 flex items-center gap-1 shadow-2xs">
                  <Sparkles className="h-2 w-2 text-emerald-600" />
                  <span>{spec.lamination === 'GLOSSY' ? 'Gloss Laminated' : 'Matte Laminated'}</span>
                </div>
              )}

              {/* Sheet Header Banner */}
              <div className="px-3 pt-2 pb-1 flex items-center justify-between text-[9px] font-mono text-zinc-400 select-none z-10 border-b border-zinc-100">
                <span>{spec.paperSize} • {paper.widthMm}×{paper.heightMm}mm</span>
                <span>{isDuplex ? (activeSide === 'FRONT' ? 'Page 1 (Front Side)' : 'Page 2 (Flip Side)') : '1-Sided Page'}</span>
              </div>

              {/* Document Rendering Body */}
              <div className="flex-1 relative overflow-hidden p-2 sm:p-3 flex items-center justify-center bg-white">
                {isImage && objectUrl ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={objectUrl}
                    alt="Document Preview"
                    className={`max-h-full max-w-full rounded-2xs transition-all duration-200 ${
                      fitMode === 'COVER' ? 'object-cover w-full h-full' : 'object-contain'
                    }`}
                  />
                ) : isPdf && objectUrl ? (
                  <div className="w-full h-full relative rounded-2xs overflow-hidden flex flex-col items-center justify-center bg-zinc-50 border border-zinc-200">
                    <object
                      data={`${objectUrl}#toolbar=0&navpanes=0`}
                      type="application/pdf"
                      className="w-full h-full pointer-events-none"
                    >
                      <div className="p-4 text-center space-y-1">
                        <FileText className="h-6 w-6 text-zinc-400 mx-auto" />
                        <p className="text-xs font-semibold text-zinc-800">{file.name}</p>
                        <p className="text-[10px] text-zinc-400 font-mono">PDF Document ({spec.detectedPageCount} pages)</p>
                      </div>
                    </object>
                  </div>
                ) : (
                  /* Typographic Document Simulation for Word/Docx */
                  <div className="w-full h-full flex flex-col justify-between p-4 bg-zinc-50/60 rounded-2xs text-left border border-zinc-100">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 border-b border-zinc-200 pb-2">
                        <FileText className="h-4 w-4 text-zinc-600 shrink-0" />
                        <span className="text-xs font-bold text-zinc-900 truncate">
                          {file.name}
                        </span>
                      </div>
                      <div className="space-y-1.5 pt-1">
                        <div className="h-2 bg-zinc-200 rounded w-full" />
                        <div className="h-2 bg-zinc-200 rounded w-5/6" />
                        <div className="h-2 bg-zinc-200 rounded w-4/5" />
                        <div className="h-2 bg-zinc-200 rounded w-2/3" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-[9px] font-mono text-zinc-400 border-t border-zinc-100 pt-2">
                      <span>Docx Document Stream</span>
                      <span>Page {activeSide === 'FRONT' ? '1' : '2'} of {spec.detectedPageCount}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Sheet Footer Watermark */}
              <div className="px-3 py-1 flex items-center justify-between text-[8px] font-mono text-zinc-400 border-t border-zinc-100 select-none bg-zinc-50/40">
                <span>Smart Print Hub Engine</span>
                <span>{isColor ? 'RGB Color Profile' : 'Monochrome Laser 600 DPI'}</span>
              </div>
            </div>

            {/* Duplex Flip Selector (If 2-Sided Selected) */}
            {isDuplex && (
              <div className="mt-4 inline-flex p-0.5 rounded-lg bg-white border border-zinc-200 shadow-2xs text-xs">
                <button
                  type="button"
                  onClick={() => setActiveSide('FRONT')}
                  className={`px-3 py-1 rounded-md font-medium transition-all ${
                    activeSide === 'FRONT' ? 'bg-zinc-900 text-white shadow-2xs' : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  Page 1 (Front Side)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSide('BACK')}
                  className={`px-3 py-1 rounded-md font-medium transition-all ${
                    activeSide === 'BACK' ? 'bg-zinc-900 text-white shadow-2xs' : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  Page 2 (Flip Side)
                </button>
              </div>
            )}

            {/* Bottom Sheet Toggles */}
            <div className="mt-3 flex items-center gap-3 text-[10px] text-zinc-400">
              <button
                type="button"
                onClick={() => setShowMargins(!showMargins)}
                className="hover:text-zinc-700 underline transition-colors"
              >
                {showMargins ? 'Hide margin line' : 'Show 10mm margins'}
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={() => setShowGrid(!showGrid)}
                className="hover:text-zinc-700 underline transition-colors"
              >
                {showGrid ? 'Hide grid' : 'Show alignment grid'}
              </button>
              {isImage && (
                <>
                  <span>•</span>
                  <button
                    type="button"
                    onClick={() => setFitMode(fitMode === 'CONTAIN' ? 'COVER' : 'CONTAIN')}
                    className="hover:text-zinc-700 underline transition-colors"
                  >
                    {fitMode === 'CONTAIN' ? 'Fit Page' : 'Fill Page'}
                  </button>
                </>
              )}
            </div>

          </div>

          {/* Right Interactive Specifications Panel */}
          <div className="w-full lg:w-80 p-5 space-y-4 bg-white border-t lg:border-t-0 lg:border-l border-zinc-200/80 shrink-0 text-xs">
            
            {/* 1. Orientation Option */}
            <div>
              <span className="text-[10px] uppercase font-mono text-zinc-400 block mb-1">
                Orientation
              </span>
              <div className="grid grid-cols-2 p-0.5 rounded-lg bg-zinc-100 border border-zinc-200/70 text-[11px]">
                <button
                  type="button"
                  onClick={() => onUpdateSpec({ orientation: 'PORTRAIT' })}
                  className={`py-1.5 rounded-md font-medium transition-all ${
                    spec.orientation === 'PORTRAIT' ? 'bg-white text-zinc-900 shadow-2xs' : 'text-zinc-500 hover:text-zinc-900'
                  }`}
                >
                  Portrait (Vertical)
                </button>
                <button
                  type="button"
                  onClick={() => onUpdateSpec({ orientation: 'LANDSCAPE' })}
                  className={`py-1.5 rounded-md font-medium transition-all ${
                    spec.orientation === 'LANDSCAPE' ? 'bg-white text-zinc-900 shadow-2xs' : 'text-zinc-500 hover:text-zinc-900'
                  }`}
                >
                  Landscape (Horizontal)
                </button>
              </div>
            </div>

            {/* 2. Paper Size Option (A1, A2, A3, A4, A5, A6) */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] uppercase font-mono text-zinc-400">
                  Paper Size
                </span>
                <span className="text-[10px] text-emerald-700 font-mono font-medium">
                  {paper.widthMm} × {paper.heightMm} mm
                </span>
              </div>

              <div className="grid grid-cols-3 gap-1.5">
                {(['A4', 'A3', 'A1', 'A2', 'A5', 'A6'] as PaperSize[]).map((size) => {
                  const isSelected = spec.paperSize === size;
                  return (
                    <button
                      key={size}
                      type="button"
                      onClick={() => onUpdateSpec({ paperSize: size })}
                      className={`py-1.5 px-2 rounded-lg border text-center transition-all ${
                        isSelected
                          ? 'border-zinc-900 bg-zinc-900 text-white shadow-2xs font-semibold'
                          : 'border-zinc-200 hover:border-zinc-300 text-zinc-700 bg-white'
                      }`}
                    >
                      <span className="block text-xs">{size}</span>
                      <span className="block text-[9px] opacity-75 font-mono">
                        {size === 'A4' ? 'Default' : `${PAPER_CONFIG[size].widthMm}mm`}
                      </span>
                    </button>
                  );
                })}
              </div>
              <p className="text-[10px] text-zinc-400 mt-1.5 leading-tight">
                {paper.description}
              </p>
            </div>

            {/* 3. Color Mode Option */}
            <div>
              <span className="text-[10px] uppercase font-mono text-zinc-400 block mb-1">
                Color Mode
              </span>
              <div className="grid grid-cols-2 p-0.5 rounded-lg bg-zinc-100 border border-zinc-200/70 text-[11px]">
                <button
                  type="button"
                  onClick={() => onUpdateSpec({ color: 'BW' })}
                  className={`py-1.5 rounded-md font-medium transition-all ${
                    spec.color === 'BW' ? 'bg-white text-zinc-900 shadow-2xs' : 'text-zinc-500 hover:text-zinc-900'
                  }`}
                >
                  Black & White
                </button>
                <button
                  type="button"
                  onClick={() => onUpdateSpec({ color: 'COLOR' })}
                  className={`py-1.5 rounded-md font-medium transition-all ${
                    spec.color === 'COLOR' ? 'bg-white text-emerald-800 shadow-2xs' : 'text-zinc-500 hover:text-zinc-900'
                  }`}
                >
                  Full Color
                </button>
              </div>
            </div>

            {/* 4. Sides Option (Duplex / Simplex) */}
            <div>
              <span className="text-[10px] uppercase font-mono text-zinc-400 block mb-1">
                Sides / Duplex
              </span>
              <div className="grid grid-cols-2 p-0.5 rounded-lg bg-zinc-100 border border-zinc-200/70 text-[11px]">
                <button
                  type="button"
                  onClick={() => onUpdateSpec({ duplex: 'SIMPLEX' })}
                  className={`py-1.5 rounded-md font-medium transition-all ${
                    spec.duplex === 'SIMPLEX' ? 'bg-white text-zinc-900 shadow-2xs' : 'text-zinc-500 hover:text-zinc-900'
                  }`}
                >
                  1-Sided
                </button>
                <button
                  type="button"
                  onClick={() => onUpdateSpec({ duplex: 'DUPLEX' })}
                  className={`py-1.5 rounded-md font-medium transition-all ${
                    spec.duplex === 'DUPLEX' ? 'bg-white text-zinc-900 shadow-2xs' : 'text-zinc-500 hover:text-zinc-900'
                  }`}
                >
                  2-Sided (Duplex)
                </button>
              </div>
            </div>

            {/* 5. Finishing Options (Stapling & Binding) */}
            <div>
              <span className="text-[10px] uppercase font-mono text-zinc-400 block mb-1">
                Finishing & Binding
              </span>
              <div className="grid grid-cols-3 gap-1.5 text-[10px]">
                <button
                  type="button"
                  onClick={() => onUpdateSpec({ stapling: 'NONE', binding: 'NONE' })}
                  className={`py-1.5 px-1 rounded-lg border text-center font-medium transition-all ${
                    spec.stapling === 'NONE' && (!spec.binding || spec.binding === 'NONE')
                      ? 'border-zinc-900 bg-zinc-900 text-white shadow-2xs'
                      : 'border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300'
                  }`}
                >
                  No Finishing
                </button>
                <button
                  type="button"
                  onClick={() => onUpdateSpec({ stapling: 'CORNER', binding: 'NONE' })}
                  className={`py-1.5 px-1 rounded-lg border text-center font-medium transition-all ${
                    spec.stapling === 'CORNER'
                      ? 'border-zinc-900 bg-zinc-900 text-white shadow-2xs'
                      : 'border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300'
                  }`}
                >
                  Corner Staple
                </button>
                <button
                  type="button"
                  onClick={() => onUpdateSpec({ stapling: 'NONE', binding: 'SPIRAL' })}
                  className={`py-1.5 px-1 rounded-lg border text-center font-medium transition-all ${
                    spec.binding === 'SPIRAL'
                      ? 'border-zinc-900 bg-zinc-900 text-white shadow-2xs'
                      : 'border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300'
                  }`}
                >
                  Spiral Bind
                </button>
              </div>
            </div>

            {/* Confirm & Save Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-xs transition-all shadow-2xs flex items-center justify-center gap-1.5"
              >
                <Check className="h-3.5 w-3.5" />
                Done with Preview
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
