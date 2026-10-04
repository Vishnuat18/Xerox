'use client';

import React from 'react';
import { clsx } from 'clsx';

interface TabProps {
  text: string;
  selected: boolean;
  setSelected: (text: string) => void;
  discount?: boolean;
}

export function Tab({ text, selected, setSelected, discount }: TabProps) {
  return (
    <button
      type="button"
      onClick={() => setSelected(text)}
      className={clsx(
        'relative flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium capitalize transition-all select-none',
        selected
          ? 'bg-white text-zinc-900 shadow-sm border border-zinc-200/80 font-semibold'
          : 'text-zinc-500 hover:text-zinc-900'
      )}
    >
      <span>{text}</span>
      {discount && (
        <span className="px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
          Save 20%
        </span>
      )}
    </button>
  );
}
