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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-zinc-50/70 text-zinc-900 font-sans antialiased selection:bg-emerald-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
