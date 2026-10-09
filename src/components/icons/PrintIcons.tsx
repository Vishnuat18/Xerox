import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
}

// ============================================================================
// ROW 1: PRINTER HARDWARE TYPES
// ============================================================================

/** Laser Printer - Compact desktop laser unit */
export function LaserPrinterIcon({ className = 'h-5 w-5', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <rect x="3" y="11" width="18" height="9" rx="2" fill="currentColor" fillOpacity="0.08" />
      <path d="M6 11V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" />
      <path d="M6 16h12" />
      <circle cx="17.5" cy="13.5" r="0.75" fill="currentColor" />
    </svg>
  );
}

/** Inkjet Printer - Desktop inkjet with top paper feed and front tray */
export function InkjetPrinterIcon({ className = 'h-5 w-5', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M5 10V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v6" />
      <rect x="2" y="10" width="20" height="8" rx="2" fill="currentColor" fillOpacity="0.08" />
      <path d="M6 15h12v5a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-5z" fill="currentColor" fillOpacity="0.15" />
      <circle cx="18" cy="12.5" r="0.75" fill="currentColor" />
    </svg>
  );
}

/** Multifunction Printer (MFP) - Scanner glass on top with paper cassettes */
export function MfpPrinterIcon({ className = 'h-5 w-5', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M4 3h16a1 1 0 0 1 1 1v3H3V4a1 1 0 0 1 1-1z" fill="currentColor" fillOpacity="0.12" />
      <line x1="3" y1="7" x2="21" y2="7" />
      <rect x="2" y="9" width="20" height="7" rx="1.5" />
      <path d="M4 16v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4" />
      <line x1="7" y1="19" x2="17" y2="19" />
      <circle cx="18" cy="12.5" r="0.75" fill="currentColor" />
    </svg>
  );
}

/** Dot Matrix Printer - Continuous tractor feed with side knobs */
export function DotMatrixPrinterIcon({ className = 'h-5 w-5', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <rect x="3" y="11" width="18" height="9" rx="2" fill="currentColor" fillOpacity="0.08" />
      <path d="M6 11V4h12v7" />
      <line x1="8" y1="6" x2="16" y2="6" strokeDasharray="1.5 1.5" />
      <line x1="8" y1="8" x2="16" y2="8" strokeDasharray="1.5 1.5" />
      <circle cx="2" cy="15.5" r="1.25" fill="currentColor" />
      <circle cx="22" cy="15.5" r="1.25" fill="currentColor" />
      <line x1="6" y1="16" x2="18" y2="16" />
    </svg>
  );
}

/** Thermal Printer - Compact POS roll receipt printer */
export function ThermalPrinterIcon({ className = 'h-5 w-5', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <rect x="4" y="8" width="16" height="13" rx="2" fill="currentColor" fillOpacity="0.1" />
      <path d="M7 8V4h10v4" />
      <path d="M8 12h8" />
      <line x1="8" y1="15" x2="14" y2="15" strokeDasharray="1 1" />
      <circle cx="16.5" cy="17.5" r="0.75" fill="currentColor" />
    </svg>
  );
}

/** All-In-One Printer - Desktop combo machine with tray */
export function AllInOnePrinterIcon({ className = 'h-5 w-5', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M5 8V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v4" />
      <rect x="3" y="8" width="18" height="8" rx="2" fill="currentColor" fillOpacity="0.08" />
      <path d="M6 16v4a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-4" />
      <circle cx="17.5" cy="11.5" r="0.75" fill="currentColor" />
      <circle cx="15" cy="11.5" r="0.75" fill="currentColor" />
    </svg>
  );
}

/** Photocopier - High capacity Xerox floor standing machine */
export function PhotocopierIcon({ className = 'h-5 w-5', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M6 3h12a1 1 0 0 1 1 1v3H5V4a1 1 0 0 1 1-1z" />
      <rect x="4" y="7" width="16" height="6" rx="1" fill="currentColor" fillOpacity="0.08" />
      <rect x="5" y="13" width="14" height="4" rx="1" />
      <rect x="5" y="17" width="14" height="4" rx="1" />
      <line x1="7" y1="15" x2="11" y2="15" />
      <line x1="7" y1="19" x2="11" y2="19" />
      <circle cx="16.5" cy="10" r="0.75" fill="currentColor" />
    </svg>
  );
}

/** Label Printer - Barcode label roll printer */
export function LabelPrinterIcon({ className = 'h-5 w-5', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <rect x="4" y="6" width="16" height="14" rx="3" fill="currentColor" fillOpacity="0.08" />
      <path d="M7 11h10" />
      <path d="M7 14h6" />
      <line x1="8" y1="17" x2="10" y2="17" />
      <line x1="12" y1="17" x2="13" y2="17" />
      <line x1="15" y1="17" x2="16" y2="17" />
    </svg>
  );
}

/** Portable Printer - Mini battery mobile printer */
export function PortablePrinterIcon({ className = 'h-5 w-5', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <rect x="3" y="10" width="18" height="8" rx="2" fill="currentColor" fillOpacity="0.08" />
      <path d="M7 10V6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v4" />
      <line x1="6" y1="14" x2="14" y2="14" />
      <circle cx="17.5" cy="14" r="0.75" fill="currentColor" />
    </svg>
  );
}

// ============================================================================
// ROW 2: STATUS & PROCESS ICONS
// ============================================================================

/** Printer Online - Printer with green check circle badge */
export function PrinterOnlineIcon({ className = 'h-5 w-5', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M6 9V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <rect x="3" y="9" width="18" height="9" rx="2" stroke="currentColor" strokeWidth="1.75" fill="currentColor" fillOpacity="0.08" />
      <path d="M6 14h6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      {/* Green Check Badge */}
      <circle cx="18" cy="18" r="4.5" fill="#10b981" />
      <path d="M16 18l1.3 1.3 2.7-2.7" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Printer Offline - Printer with red cross circle badge */
export function PrinterOfflineIcon({ className = 'h-5 w-5', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M6 9V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <rect x="3" y="9" width="18" height="9" rx="2" stroke="currentColor" strokeWidth="1.75" fill="currentColor" fillOpacity="0.08" />
      <path d="M6 14h6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      {/* Red Cross Badge */}
      <circle cx="18" cy="18" r="4.5" fill="#ef4444" />
      <path d="M16.2 16.2l3.6 3.6M19.8 16.2l-3.6 3.6" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** Printing - Printer with dynamic rotating arrow / motion progress */
export function PrintingIcon({ className = 'h-5 w-5', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M6 9V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <rect x="3" y="9" width="18" height="9" rx="2" stroke="currentColor" strokeWidth="1.75" fill="currentColor" fillOpacity="0.08" />
      <path d="M6 14h5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      {/* Motion circular arrows badge */}
      <circle cx="17.5" cy="17.5" r="4.5" fill="#18181b" />
      <path
        d="M19.5 16.5a2.2 2.2 0 1 0 .2 2"
        stroke="#ffffff"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path d="M20 15v1.8h-1.8" stroke="#ffffff" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** In Queue - Document page with clock/timer badge */
export function InQueueIcon({ className = 'h-5 w-5', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M14 3v4a1 1 0 0 0 1 1h4" stroke="currentColor" strokeWidth="1.75" />
      <path d="M17 21H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8l5 5v5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M7 11h5M7 14h3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      {/* Clock Badge */}
      <circle cx="17" cy="17" r="4.5" fill="#18181b" />
      <path d="M17 14.8v2.2l1.5 1" stroke="#ffffff" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Completed - Document page with checkmark badge */
export function CompletedIcon({ className = 'h-5 w-5', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M14 3v4a1 1 0 0 0 1 1h4" stroke="currentColor" strokeWidth="1.75" />
      <path d="M17 21H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8l5 5v5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M7 11h5M7 14h3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      {/* Checkmark Badge */}
      <circle cx="17" cy="17" r="4.5" fill="#18181b" />
      <path d="M15 17l1.3 1.3 2.7-2.7" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Failed - Document page with X badge */
export function FailedIcon({ className = 'h-5 w-5', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M14 3v4a1 1 0 0 0 1 1h4" stroke="currentColor" strokeWidth="1.75" />
      <path d="M17 21H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8l5 5v5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M7 11h5M7 14h3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      {/* Cross Badge */}
      <circle cx="17" cy="17" r="4.5" fill="#18181b" />
      <path d="M15.2 15.2l3.6 3.6M18.8 15.2l-3.6 3.6" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

/** Paused - Document page with Pause (||) badge */
export function PausedIcon({ className = 'h-5 w-5', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M14 3v4a1 1 0 0 0 1 1h4" stroke="currentColor" strokeWidth="1.75" />
      <path d="M17 21H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8l5 5v5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M7 11h5M7 14h3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      {/* Pause Badge */}
      <circle cx="17" cy="17" r="4.5" fill="#18181b" />
      <line x1="15.8" y1="15" x2="15.8" y2="19" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="18.2" y1="15" x2="18.2" y2="19" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** Retry - Circular dual refresh arrows */
export function RetryIcon({ className = 'h-5 w-5', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <polyline points="3 3 3 8 8 8" />
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
      <polyline points="21 21 21 16 16 16" />
    </svg>
  );
}

/** Cancel - Trash can with vertical bars and lid */
export function CancelIcon({ className = 'h-5 w-5', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M3 6h18" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <line x1="10" y1="11" x2="10" y2="17" />
      <line x1="14" y1="11" x2="14" y2="17" />
    </svg>
  );
}

/** Error - Warning triangle with exclamation mark */
export function ErrorIcon({ className = 'h-5 w-5', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" fill="currentColor" fillOpacity="0.08" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <circle cx="12" cy="17" r="0.75" fill="currentColor" />
    </svg>
  );
}

// ============================================================================
// ROW 3: DOCUMENT & PRINT SPEC ICONS
// ============================================================================

/** Document - Page with folded corner and lines */
export function DocumentIcon({ className = 'h-5 w-5', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="currentColor" fillOpacity="0.06" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="14" y2="17" />
    </svg>
  );
}

/** PDF File - Document with bold "PDF" label */
export function PdfFileIcon({ className = 'h-5 w-5', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="currentColor" strokeWidth="1.75" fill="currentColor" fillOpacity="0.06" />
      <polyline points="14 2 14 8 20 8" stroke="currentColor" strokeWidth="1.75" />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fontSize="7.5"
        fontWeight="800"
        fill="currentColor"
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="-0.5"
      >
        PDF
      </text>
    </svg>
  );
}

/** Image File - Rounded picture frame with mountains and sun */
export function ImageFileIcon({ className = 'h-5 w-5', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="3" fill="currentColor" fillOpacity="0.06" />
      <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
      <path d="M21 15l-5-5L5 21" />
      <path d="M14 14l3-3 4 4" />
    </svg>
  );
}

/** Text File - Page with bold capital serif T */
export function TextFileIcon({ className = 'h-5 w-5', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="currentColor" strokeWidth="1.75" fill="currentColor" fillOpacity="0.06" />
      <polyline points="14 2 14 8 20 8" stroke="currentColor" strokeWidth="1.75" />
      <text
        x="12"
        y="17"
        textAnchor="middle"
        fontSize="10"
        fontWeight="bold"
        fill="currentColor"
        fontFamily="serif"
      >
        T
      </text>
    </svg>
  );
}

/** Multiple Pages - Overlapping sheets */
export function MultiplePagesIcon({ className = 'h-5 w-5', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <rect x="7" y="6" width="13" height="15" rx="2" fill="currentColor" fillOpacity="0.08" />
      <path d="M4 17V4a1 1 0 0 1 1-1h11" />
    </svg>
  );
}

/** Duplex Printing - Two rotated overlapping pages */
export function DuplexPrintingIcon({ className = 'h-5 w-5', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <rect x="4" y="3" width="10" height="14" rx="1.5" />
      <rect x="10" y="7" width="10" height="14" rx="1.5" fill="currentColor" fillOpacity="0.12" />
    </svg>
  );
}

/** 1-Sided - Single sheet with text lines */
export function OneSidedIcon({ className = 'h-5 w-5', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <rect x="5" y="3" width="14" height="18" rx="2" fill="currentColor" fillOpacity="0.08" />
      <line x1="8" y1="7" x2="16" y2="7" />
      <line x1="8" y1="11" x2="16" y2="11" />
      <line x1="8" y1="15" x2="13" y2="15" />
    </svg>
  );
}

/** 2-Sided - Two vertical sheets side by side with lines */
export function TwoSidedIcon({ className = 'h-5 w-5', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <rect x="2" y="4" width="9" height="16" rx="1.5" fill="currentColor" fillOpacity="0.06" />
      <line x1="4.5" y1="8" x2="8.5" y2="8" />
      <line x1="4.5" y1="12" x2="8.5" y2="12" />
      <line x1="4.5" y1="16" x2="7" y2="16" />

      <rect x="13" y="4" width="9" height="16" rx="1.5" fill="currentColor" fillOpacity="0.06" />
      <line x1="15.5" y1="8" x2="19.5" y2="8" />
      <line x1="15.5" y1="12" x2="19.5" y2="12" />
      <line x1="15.5" y1="16" x2="18" y2="16" />
    </svg>
  );
}

/** A4 Size - Document sheet with bold A4 typography */
export function A4SizeIcon({ className = 'h-5 w-5', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="currentColor" strokeWidth="1.75" fill="currentColor" fillOpacity="0.06" />
      <polyline points="14 2 14 8 20 8" stroke="currentColor" strokeWidth="1.75" />
      <text
        x="12"
        y="16.5"
        textAnchor="middle"
        fontSize="7.5"
        fontWeight="800"
        fill="currentColor"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        A4
      </text>
    </svg>
  );
}

/** Black & White - Document sheet with bold B&W typography */
export function BlackWhiteIcon({ className = 'h-5 w-5', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="currentColor" strokeWidth="1.75" fill="currentColor" fillOpacity="0.06" />
      <polyline points="14 2 14 8 20 8" stroke="currentColor" strokeWidth="1.75" />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fontSize="6.5"
        fontWeight="800"
        fill="currentColor"
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="-0.5"
      >
        B&amp;W
      </text>
    </svg>
  );
}

/** Color Printing - Page with 3 overlapping Cyan, Magenta, Yellow circles */
export function ColorPrintingIcon({ className = 'h-5 w-5', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="currentColor" strokeWidth="1.75" fill="currentColor" fillOpacity="0.06" />
      <polyline points="14 2 14 8 20 8" stroke="currentColor" strokeWidth="1.75" />
      {/* 3 Color Overlapping Circles (Cyan, Magenta, Yellow) */}
      <circle cx="12" cy="12.5" r="2.2" fill="#06b6d4" />
      <circle cx="10.2" cy="15.8" r="2.2" fill="#ec4899" />
      <circle cx="13.8" cy="15.8" r="2.2" fill="#eab308" />
    </svg>
  );
}

// ============================================================================
// ROW 4: CONNECTIVITY & ACTION ICONS
// ============================================================================

/** Network Printer - Wi-Fi signal broadcast waves */
export function NetworkPrinterIcon({ className = 'h-5 w-5', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <circle cx="12" cy="20" r="1" fill="currentColor" />
    </svg>
  );
}

/** USB Connection - USB type-A connector plug */
export function UsbConnectionIcon({ className = 'h-5 w-5', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <rect x="7" y="2" width="10" height="7" rx="1" />
      <line x1="10" y1="4" x2="10" y2="6" />
      <line x1="14" y1="4" x2="14" y2="6" />
      <rect x="5" y="9" width="14" height="10" rx="3" fill="currentColor" fillOpacity="0.08" />
      <path d="M12 19v3" />
    </svg>
  );
}

/** Bluetooth - Geometric rune Bluetooth symbol */
export function BluetoothIcon({ className = 'h-5 w-5', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5" />
    </svg>
  );
}

/** Printer Settings - Precision 6-toothed gear */
export function PrinterSettingsIcon({ className = 'h-5 w-5', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

/** Calibration - Horizontal slider controls */
export function CalibrationIcon({ className = 'h-5 w-5', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <line x1="4" y1="6" x2="20" y2="6" />
      <circle cx="8" cy="6" r="2" fill="currentColor" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <circle cx="15" cy="12" r="2" fill="currentColor" />
      <line x1="4" y1="18" x2="20" y2="18" />
      <circle cx="10" cy="18" r="2" fill="currentColor" />
    </svg>
  );
}

/** Ink/Toner - Dual falling ink teardrops */
export function InkTonerIcon({ className = 'h-5 w-5', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M9.5 3C9.5 3 5 8.5 5 13a4.5 4.5 0 0 0 9 0c0-4.5-4.5-10-4.5-10z" />
      <path d="M16.5 9c0 0-3 3.67-3 6.67a3 3 0 0 0 6 0c0-3-3-6.67-3-6.67z" opacity="0.8" />
    </svg>
  );
}

/** Maintenance - Angled mechanical wrench tool */
export function MaintenanceIcon({ className = 'h-5 w-5', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" fill="currentColor" fillOpacity="0.08" />
    </svg>
  );
}

/** Add Printer - Circle with bold plus symbol */
export function AddPrinterIcon({ className = 'h-5 w-5', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  );
}

/** Manage Printer - Scalloped badge with verified checkmark */
export function ManagePrinterIcon({ className = 'h-5 w-5', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M12 2l2.4 2.4 3.4-.4 1.4 3.1 3.1 1.4-.4 3.4L22 12l-2.1 2.5.4 3.4-3.1 1.4-1.4 3.1-3.4-.4L12 22l-2.4-2.4-3.4.4-1.4-3.1-3.1-1.4.4-3.4L2 12l2.1-2.5-.4-3.4 3.1-1.4 1.4-3.1 3.4.4L12 2z" fill="currentColor" fillOpacity="0.08" />
      <path d="M9 12l2 2 4-4" strokeWidth="2" />
    </svg>
  );
}

/** View Details - Document with magnifying glass over it */
export function ViewDetailsIcon({ className = 'h-5 w-5', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="12" y2="13" />
      <line x1="8" y1="17" x2="11" y2="17" />
      {/* Magnifier */}
      <circle cx="16.5" cy="16.5" r="3.5" fill="#ffffff" stroke="currentColor" strokeWidth="1.75" />
      <line x1="19" y1="19" x2="22" y2="22" strokeWidth="2" />
    </svg>
  );
}

/** Share Printer - 3 connected nodes sharing symbol */
export function SharePrinterIcon({ className = 'h-5 w-5', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <circle cx="18" cy="5" r="3" fill="currentColor" fillOpacity="0.1" />
      <circle cx="6" cy="12" r="3" fill="currentColor" fillOpacity="0.1" />
      <circle cx="18" cy="19" r="3" fill="currentColor" fillOpacity="0.1" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}

// ============================================================================
// HELPER FUNCTIONS FOR AUTOMATIC ICON RESOLUTION
// ============================================================================

/** Resolves document type icon from filename */
export function getDocumentIcon(filename?: string): React.ComponentType<IconProps> {
  if (!filename) return DocumentIcon;
  const lower = filename.toLowerCase();
  if (lower.endsWith('.pdf')) return PdfFileIcon;
  if (/\.(png|jpg|jpeg|webp|gif|svg|bmp)$/.test(lower)) return ImageFileIcon;
  if (/\.(txt|doc|docx|rtf|md|csv)$/.test(lower)) return TextFileIcon;
  return DocumentIcon;
}

/** Resolves hardware printer icon from model / name */
export function getPrinterModelIcon(modelOrName?: string | null): React.ComponentType<IconProps> {
  if (!modelOrName) return LaserPrinterIcon;
  const lower = modelOrName.toLowerCase();
  if (lower.includes('xerox') || lower.includes('canon ir') || lower.includes('photocopier') || lower.includes('copier')) {
    return PhotocopierIcon;
  }
  if (lower.includes('dcp') || lower.includes('mfp') || lower.includes('all-in-one') || lower.includes('brother')) {
    return MfpPrinterIcon;
  }
  if (lower.includes('ecotank') || lower.includes('l3210') || lower.includes('inkjet') || lower.includes('epson')) {
    return InkjetPrinterIcon;
  }
  if (lower.includes('thermal') || lower.includes('pos') || lower.includes('receipt') || lower.includes('tvs')) {
    return ThermalPrinterIcon;
  }
  if (lower.includes('matrix') || lower.includes('dot') || lower.includes('lq-')) {
    return DotMatrixPrinterIcon;
  }
  if (lower.includes('label') || lower.includes('zebra') || lower.includes('barcode')) {
    return LabelPrinterIcon;
  }
  if (lower.includes('portable') || lower.includes('mobile') || lower.includes('pocket')) {
    return PortablePrinterIcon;
  }
  return LaserPrinterIcon;
}

/** Resolves connection icon */
export function getConnectionIcon(connType?: string): React.ComponentType<IconProps> {
  if (!connType) return NetworkPrinterIcon;
  const lower = connType.toLowerCase();
  if (lower.includes('usb') || lower.includes('spooler') || lower.includes('cable')) {
    return UsbConnectionIcon;
  }
  if (lower.includes('bluetooth') || lower.includes('bt') || lower.includes('wireless direct')) {
    return BluetoothIcon;
  }
  return NetworkPrinterIcon;
}

// ============================================================================
// COMPLETE 41-ICON CATALOG MATCHING REFERENCE IMAGE
// ============================================================================

export interface PrintIconMeta {
  id: string;
  name: string;
  category: 'Printers' | 'Status & Process' | 'Document & Specs' | 'Connectivity & Tools';
  row: 1 | 2 | 3 | 4;
  icon: React.ComponentType<IconProps>;
  description: string;
}

export const ALL_PRINT_ICONS: PrintIconMeta[] = [
  // ROW 1: PRINTERS
  { id: 'laser-printer', name: 'Laser Printer', category: 'Printers', row: 1, icon: LaserPrinterIcon, description: 'High-speed desktop monochrome or color laser' },
  { id: 'inkjet-printer', name: 'Inkjet Printer', category: 'Printers', row: 1, icon: InkjetPrinterIcon, description: 'Continuous ink tank and color photo inkjet' },
  { id: 'mfp-printer', name: 'Multifunction Printer (MFP)', category: 'Printers', row: 1, icon: MfpPrinterIcon, description: 'Print, scan, copy all-in-one desktop station' },
  { id: 'dot-matrix-printer', name: 'Dot Matrix Printer', category: 'Printers', row: 1, icon: DotMatrixPrinterIcon, description: 'Continuous tractor feed impact printer' },
  { id: 'thermal-printer', name: 'Thermal Printer', category: 'Printers', row: 1, icon: ThermalPrinterIcon, description: 'High-speed POS bill and receipt printer' },
  { id: 'all-in-one-printer', name: 'All-In-One Printer', category: 'Printers', row: 1, icon: AllInOnePrinterIcon, description: 'Compact desktop combo office unit' },
  { id: 'photocopier', name: 'Photocopier', category: 'Printers', row: 1, icon: PhotocopierIcon, description: 'Heavy-duty commercial floor standing Xerox machine' },
  { id: 'label-printer', name: 'Label Printer', category: 'Printers', row: 1, icon: LabelPrinterIcon, description: 'Barcode, shipping tag, and sticker printer' },
  { id: 'portable-printer', name: 'Portable Printer', category: 'Printers', row: 1, icon: PortablePrinterIcon, description: 'Compact wireless battery field printer' },

  // ROW 2: STATUS & PROCESS
  { id: 'printer-online', name: 'Printer Online', category: 'Status & Process', row: 2, icon: PrinterOnlineIcon, description: 'Device ready and receiving jobs' },
  { id: 'printer-offline', name: 'Printer Offline', category: 'Status & Process', row: 2, icon: PrinterOfflineIcon, description: 'Device disconnected or powered off' },
  { id: 'printing', name: 'Printing', category: 'Status & Process', row: 2, icon: PrintingIcon, description: 'Job currently printing through spooler' },
  { id: 'in-queue', name: 'In Queue', category: 'Status & Process', row: 2, icon: InQueueIcon, description: 'Print job scheduled in queue' },
  { id: 'completed', name: 'Completed', category: 'Status & Process', row: 2, icon: CompletedIcon, description: 'Print finished and ready for pickup' },
  { id: 'failed', name: 'Failed', category: 'Status & Process', row: 2, icon: FailedIcon, description: 'Print error or job cancelled' },
  { id: 'paused', name: 'Paused', category: 'Status & Process', row: 2, icon: PausedIcon, description: 'Spooler queue held or paused' },
  { id: 'retry', name: 'Retry', category: 'Status & Process', row: 2, icon: RetryIcon, description: 'Restart failed or halted job' },
  { id: 'cancel', name: 'Cancel', category: 'Status & Process', row: 2, icon: CancelIcon, description: 'Discard job from spooler' },
  { id: 'error', name: 'Error', category: 'Status & Process', row: 2, icon: ErrorIcon, description: 'Paper jam, out of paper, or warning' },

  // ROW 3: DOCUMENT & SPECS
  { id: 'document', name: 'Document', category: 'Document & Specs', row: 3, icon: DocumentIcon, description: 'General document file' },
  { id: 'pdf-file', name: 'PDF File', category: 'Document & Specs', row: 3, icon: PdfFileIcon, description: 'Portable document format (PDF)' },
  { id: 'image-file', name: 'Image File', category: 'Document & Specs', row: 3, icon: ImageFileIcon, description: 'JPG, PNG, photo file' },
  { id: 'text-file', name: 'Text File', category: 'Document & Specs', row: 3, icon: TextFileIcon, description: 'Plain text or Word document' },
  { id: 'multiple-pages', name: 'Multiple Pages', category: 'Document & Specs', row: 3, icon: MultiplePagesIcon, description: 'Multi-page document pack' },
  { id: 'duplex-printing', name: 'Duplex Printing', category: 'Document & Specs', row: 3, icon: DuplexPrintingIcon, description: 'Two-sided automated duplexing' },
  { id: '1-sided', name: '1-Sided', category: 'Document & Specs', row: 3, icon: OneSidedIcon, description: 'Single-sided simplex print' },
  { id: '2-sided', name: '2-Sided', category: 'Document & Specs', row: 3, icon: TwoSidedIcon, description: 'Double-sided duplex print' },
  { id: 'a4-size', name: 'A4 Size', category: 'Document & Specs', row: 3, icon: A4SizeIcon, description: 'Standard 210 × 297 mm paper' },
  { id: 'black-white', name: 'Black & White', category: 'Document & Specs', row: 3, icon: BlackWhiteIcon, description: 'Monochrome grayscale print' },
  { id: 'color-printing', name: 'Color Printing', category: 'Document & Specs', row: 3, icon: ColorPrintingIcon, description: 'Full CMYK color print' },

  // ROW 4: CONNECTIVITY & TOOLS
  { id: 'network-printer', name: 'Network Printer', category: 'Connectivity & Tools', row: 4, icon: NetworkPrinterIcon, description: 'Wi-Fi / Ethernet LAN printer' },
  { id: 'usb-connection', name: 'USB Connection', category: 'Connectivity & Tools', row: 4, icon: UsbConnectionIcon, description: 'Direct USB cable connection' },
  { id: 'bluetooth', name: 'Bluetooth', category: 'Connectivity & Tools', row: 4, icon: BluetoothIcon, description: 'Wireless Bluetooth interface' },
  { id: 'printer-settings', name: 'Printer Settings', category: 'Connectivity & Tools', row: 4, icon: PrinterSettingsIcon, description: 'Hardware configuration & DPI' },
  { id: 'calibration', name: 'Calibration', category: 'Connectivity & Tools', row: 4, icon: CalibrationIcon, description: 'Printhead alignment & color tune' },
  { id: 'ink-toner', name: 'Ink/Toner', category: 'Connectivity & Tools', row: 4, icon: InkTonerIcon, description: 'Cartridge level & ink reserve' },
  { id: 'maintenance', name: 'Maintenance', category: 'Connectivity & Tools', row: 4, icon: MaintenanceIcon, description: 'Roller clean & paper path check' },
  { id: 'add-printer', name: 'Add Printer', category: 'Connectivity & Tools', row: 4, icon: AddPrinterIcon, description: 'Enroll new Windows or network printer' },
  { id: 'manage-printer', name: 'Manage Printer', category: 'Connectivity & Tools', row: 4, icon: ManagePrinterIcon, description: 'Driver and permissions manager' },
  { id: 'view-details', name: 'View Details', category: 'Connectivity & Tools', row: 4, icon: ViewDetailsIcon, description: 'Inspect job properties & DEVMODE' },
  { id: 'share-printer', name: 'Share Printer', category: 'Connectivity & Tools', row: 4, icon: SharePrinterIcon, description: 'Counter network printer share' },
];
