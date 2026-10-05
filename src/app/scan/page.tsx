import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { CustomerScannerClient } from '@/components/scanner/CustomerScannerClient';

export const metadata: Metadata = {
  title: 'Customer Scanner Place - Smart Print Hub',
  description: 'Scan any Xerox shop counter QR code standee to recognize the shop and view transparent print pricing instantly.',
};

export default function ScanPage() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50/50">
      <Navbar />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-8 sm:py-12">
        <CustomerScannerClient />
      </main>

      <Footer />
    </div>
  );
}
