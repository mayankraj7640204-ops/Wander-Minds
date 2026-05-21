'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-brand-navy text-white px-4 text-center">
      <h2 className="text-4xl font-bold mb-4 text-brand-terracotta">Something went wrong!</h2>
      <p className="text-slate-400 mb-8 max-w-md">Our AI servers encountered an unexpected glitch. We've been notified and are on it.</p>
      <button
        className="px-6 py-3 bg-brand-indigo rounded-full font-medium hover:bg-brand-indigo/90 transition-colors shadow-lg"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
