import { useMemo } from "react";

export function Particles({ count = 24, className = "" }: { count?: number; className?: string }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 18 + 14,
        delay: Math.random() * -30,
        opacity: Math.random() * 0.4 + 0.2,
      })),
    [count],
  );

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {items.map((p) => (
        <span
          key={p.id}
          className="animate-float-up absolute rounded-full bg-foreground"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            filter: "blur(0.5px)",
            boxShadow: "0 0 8px rgba(255,255,255,0.4)",
          }}
        />
      ))}
    </div>
  );
}
