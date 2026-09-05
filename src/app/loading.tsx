export default function Loading() {
  return (
    <div className="w-full py-24 flex items-center justify-center min-h-[40vh]" aria-label="Loading content">
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-outline-variant border-t-accent" />
        <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-outline">
          Loading
        </p>
      </div>
    </div>
  );
}
