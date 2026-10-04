import React from 'react';
import { PrintersClient } from './printers-client';

export const metadata = {
  title: 'Printers & Windows Agent | Smart Print Hub',
  description: 'Manage physical Xerox machines, network MFPs, and the Windows Print Spooler agent service.',
};

export default function PrintersPage() {
  return <PrintersClient />;
}
