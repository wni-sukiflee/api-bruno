import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF7F2] p-4 text-center">
      <h2 className="font-serif text-3xl text-[#5A5A40] mb-4">404 - Page Not Found</h2>
      <p className="font-serif text-[#5A5A40]/70 mb-8">
        The invitation you are looking for does not exist.
      </p>
      <Link 
        href="/"
        className="px-6 py-2 bg-[#A07B50] text-[#FAF7F2] rounded-full font-serif uppercase tracking-widest text-xs hover:bg-[#8B6B45] transition-colors inline-block"
      >
        Go Home
      </Link>
    </div>
  );
}
