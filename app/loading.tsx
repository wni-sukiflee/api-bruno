export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FAF7F2]">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-[#A0815C]/20 border-t-[#A0815C] rounded-full animate-spin mb-4 mx-auto" />
        <p className="font-serif text-[#5A5A40] animate-pulse">Loading Invitation...</p>
      </div>
    </div>
  );
}
