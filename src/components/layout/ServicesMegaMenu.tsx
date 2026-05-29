"use client";

import { useId, useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Car,
  Bike,
  Home,
  Zap,
  Droplets,
  Wind,
  Paintbrush,
  Hammer,
  Truck,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { services as allServices } from "@/lib/data/services";

type ServicesMegaMenuItem = {
  id: string;
  name: string;
  slug: string;
  price?: string;
  icon?: string;
};

const iconMap: Record<
  string,
  React.ComponentType<{ className?: string; size?: number }>
> = {
  car: Car,
  bike: Bike,
  home: Home,
  zap: Zap,
  droplets: Droplets,
  wind: Wind,
  paintbrush: Paintbrush,
  hammer: Hammer,
  truck: Truck,
};

function getGridConfig(count: number) {
  const rows = count <= 10 ? 2 : 3;
  const maxItems = Math.min(count, 15); // 5 per row * 3 rows
  const cols = Math.min(5, Math.ceil(maxItems / rows));
  return { rows, cols, maxItems };
}

export function ServicesMegaMenu({
  variant,
  services,
  onSelect,
  className,
}: {
  variant: "desktop" | "mobile";
  services?: ServicesMegaMenuItem[];
  onSelect?: () => void;
  className?: string;
}) {
  const panelId = useId();
  const [open, setOpen] = useState(false);

  const items = useMemo<ServicesMegaMenuItem[]>(() => {
    if (services?.length) return services;
    return allServices.map((s) => ({
      id: s.id,
      name: s.name,
      slug: s.slug,
      price: s.price,
      icon: s.icon,
    }));
  }, [services]);

  const { cols, maxItems } = useMemo(
    () => getGridConfig(items.length),
    [items.length]
  );

  if (variant === "mobile") {
    return (
      <div className={cn("border-b border-white/5", className)}>
        <button
          type="button"
          className="w-full py-3 text-left text-zinc-300 hover:text-gold transition-colors flex items-center justify-between"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="font-medium">Services</span>
          <ChevronDown
            size={18}
            className={cn(
              "text-gold transition-transform duration-200",
              open && "rotate-180"
            )}
            aria-hidden="true"
          />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={panelId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="overflow-hidden pb-3"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {items.slice(0, maxItems).map((service) => {
                  const Icon = service.icon ? iconMap[service.icon] : undefined;
                  return (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}`}
                      onClick={() => {
                        setOpen(false);
                        onSelect?.();
                      }}
                      className="rounded-xl px-3 py-3 bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-gold/20 transition-colors flex items-center gap-3 min-w-0"
                    >
                      <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 flex items-center justify-center shrink-0">
                        {Icon ? (
                          <Icon className="text-gold" size={18} />
                        ) : (
                          <Home className="text-gold" size={18} />
                        )}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm text-white font-medium truncate">
                          {service.name}
                        </span>
                        {service.price && (
                          <span className="block text-xs text-zinc-400 truncate">
                            {service.price}
                          </span>
                        )}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div
      className={cn("relative", className)}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocusCapture={() => setOpen(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setOpen(false);
        }
      }}
    >
      <button
        type="button"
        className="text-sm text-zinc-300 hover:text-gold transition-colors relative group flex items-center gap-1"
        aria-expanded={open}
        aria-controls={panelId}
      >
        Services
        <ChevronDown
          size={16}
          className={cn(
            "transition-transform duration-200 text-gold/80 group-hover:text-gold",
            open && "rotate-180"
          )}
          aria-hidden="true"
        />
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={panelId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute left-1/2 -translate-x-1/2 mt-4 w-[min(900px,calc(100vw-2rem))] z-[60]"
          >
            <div className="rounded-2xl shadow-2xl shadow-black/50 border border-gold/10 bg-[#0A0A0A]/98 backdrop-blur-xl p-5 md:p-6">
              <div
                className="grid gap-3"
                style={{
                  gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
                }}
              >
                {items.slice(0, maxItems).map((service) => {
                  const Icon = service.icon ? iconMap[service.icon] : undefined;
                  return (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}`}
                      onClick={() => setOpen(false)}
                      className="group rounded-xl px-4 py-3 bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-gold/25 transition-colors min-w-0"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 flex items-center justify-center shrink-0 group-hover:shadow-gold-glow transition-shadow">
                          {Icon ? (
                            <Icon className="text-gold" size={20} />
                          ) : (
                            <Home className="text-gold" size={20} />
                          )}
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-medium text-white group-hover:text-gold transition-colors truncate">
                            {service.name}
                          </span>
                          {service.price && (
                            <span className="block text-xs text-zinc-400 truncate">
                              {service.price}
                            </span>
                          )}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

