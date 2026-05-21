export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-brand-navy z-50">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-brand-indigo border-t-transparent rounded-full animate-spin mb-4" />
        <h2 className="text-xl font-bold text-white tracking-widest animate-pulse">WANDERMIND</h2>
      </div>
    </div>
  );
}
