import React from 'react';
import { cn } from '@/lib/utils';

interface PlaceholderProps {
  label: string;
  className?: string;
  minHeight?: string;
}

export function Placeholder({ label, className, minHeight = '300px' }: PlaceholderProps) {
  return (
    <div 
      className={cn(
        "flex items-center justify-center bg-gray-200/50 border-2 border-dashed border-gray-400 rounded-lg text-gray-500 font-medium tracking-wider w-full text-center px-4",
        className
      )}
      style={{ minHeight }}
    >
      {label}
    </div>
  );
}
