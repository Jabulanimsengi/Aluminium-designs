export default function Loading() {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-surface/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="relative flex items-center justify-center">
          {/* Outer ring */}
          <div className="absolute h-14 w-14 animate-spin rounded-full border-2 border-outline-variant border-t-primary" />
          {/* Inner brand mark */}
          <span className="font-sans text-sm font-black tracking-wider text-primary z-10">AD</span>
        </div>
        <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-outline animate-pulse">
          Loading
        </p>
      </div>
    </div>
  );
}
