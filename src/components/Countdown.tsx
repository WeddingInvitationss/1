import { useEffect, useState } from "react";

const TARGET = new Date("2026-05-01T09:30:00+05:30").getTime();

const calc = () => {
  const diff = Math.max(0, TARGET - Date.now());
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return { d, h, m, s };
};

const Cell = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="relative w-16 sm:w-24 md:w-32 aspect-square flex items-center justify-center gold-border bg-paper">
      <span className="font-display text-3xl sm:text-5xl md:text-6xl text-gold-gradient pulse-gold tabular-nums">
        {String(value).padStart(2, "0")}
      </span>
      <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-[hsl(var(--gold))]" />
      <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-[hsl(var(--gold))]" />
      <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-[hsl(var(--gold))]" />
      <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-[hsl(var(--gold))]" />
    </div>
    <span className="mt-2 sm:mt-3 font-display text-xs sm:text-base font-semibold tracking-[0.2em] sm:tracking-[0.3em] text-[hsl(var(--gold-light))] drop-shadow-sm">{label}</span>
  </div>
);

export const Countdown = () => {
  const [t, setT] = useState(calc());
  useEffect(() => {
    const i = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(i);
  }, []);
  return (
    <div className="flex justify-center gap-2 sm:gap-6 md:gap-8 flex-wrap max-w-full">
      <Cell value={t.d} label="Days" />
      <Cell value={t.h} label="Hours" />
      <Cell value={t.m} label="Minutes" />
      <Cell value={t.s} label="Seconds" />
    </div>
  );
};
