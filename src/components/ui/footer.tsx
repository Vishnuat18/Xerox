import React from 'react';

export function Footer() {
  return (
    <footer className="border-t border-zinc-200/60 bg-white py-6 mt-auto text-xs text-zinc-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-zinc-500">
          <span className="font-medium text-zinc-800">Smart Print Hub</span>
          <span>•</span>
          <span>Zero-install print workflow</span>
        </div>

        <div className="flex items-center gap-4 text-zinc-400">
          <span>Windows Spooler</span>
          <span>•</span>
          <span>Auto-Purge 24h</span>
        </div>
      </div>
    </footer>
  );
}
