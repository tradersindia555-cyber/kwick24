import { cn } from "@/lib/utils";

interface GoldDividerProps {
  className?: string;
  label?: string;
}

export function GoldDivider({ className, label }: GoldDividerProps) {
  return (
    <div className={cn("flex items-center gap-4 w-full", className)}>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      {label && (
        <span className="text-gold/70 text-xs uppercase tracking-[0.3em] font-medium shrink-0">
          {label}
        </span>
      )}
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
    </div>
  );
}
