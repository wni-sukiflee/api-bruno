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
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF7F2] p-4 text-center">
      <h2 className="font-serif text-2xl text-[#5A5A40] mb-4">Something went wrong!</h2>
      <button
        onClick={() => reset()}
        className="px-6 py-2 bg-[#A07B50] text-[#FAF7F2] rounded-full font-serif uppercase tracking-widest text-xs hover:bg-[#8B6B45] transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
