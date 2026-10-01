import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SMART PRINT HUB — Automated Xerox Shop Management & Multi-Printer Workflow',
  description: 'Streamline Xerox & copy shop operations: QR code customer document upload, granular print specs, and direct Windows spooler printing.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 font-sans antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
