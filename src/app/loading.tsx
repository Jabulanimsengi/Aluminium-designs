export default function Loading() {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-surface/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-2 border-outline-variant border-t-accent" />
        <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-outline animate-pulse">
          Loading
        </p>
      </div>
    </div>
  );
}
