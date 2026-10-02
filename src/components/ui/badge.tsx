import * as React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info' | 'neutral' | 'purple' | 'emerald';
  pulse?: boolean;
}

export function Badge({ className, variant = 'default', pulse = false, children, ...props }: BadgeProps) {
  const variants = {
    default: 'bg-emerald-50 text-emerald-800 border-emerald-200/80',
    success: 'bg-emerald-50 text-emerald-800 border-emerald-200/80',
    emerald: 'bg-emerald-100/70 text-emerald-900 border-emerald-300/80 font-bold',
    warning: 'bg-amber-50 text-amber-800 border-amber-200/80',
    danger: 'bg-rose-50 text-rose-800 border-rose-200/80',
    info: 'bg-zinc-100 text-zinc-800 border-zinc-200',
    neutral: 'bg-zinc-100 text-zinc-700 border-zinc-200/80',
    purple: 'bg-emerald-50 text-emerald-800 border-emerald-200/80',
  };

  return (
    <span
      className={twMerge(
        clsx(
          'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border tracking-wide uppercase',
          variants[variant],
          className
        )
      )}
      {...props}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-500" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
        </span>
      )}
      {children}
    </span>
  );
}
