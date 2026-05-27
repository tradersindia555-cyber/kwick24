"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Calendar,
  Users,
  Settings,
  LogOut,
  Briefcase,
  BarChart3,
  Wrench,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  href: string;
  label: string;
  icon: React.ComponentType<{ size?: number }>;
}

interface DashboardSidebarProps {
  type: "worker" | "admin";
}

const workerNav: NavItem[] = [
  { href: "/worker-dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/worker-dashboard/jobs", label: "My Jobs", icon: Briefcase },
  { href: "/worker-dashboard/schedule", label: "Schedule", icon: Calendar },
  { href: "/worker-dashboard/earnings", label: "Earnings", icon: BarChart3 },
  { href: "/worker-dashboard/settings", label: "Settings", icon: Settings },
];

const adminNav: NavItem[] = [
  { href: "/admin-dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/admin-dashboard/bookings", label: "Bookings", icon: Calendar },
  { href: "/admin-dashboard/workers", label: "Workers", icon: Users },
  { href: "/admin-dashboard/services", label: "Services", icon: Wrench },
  { href: "/admin-dashboard/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/admin-dashboard/settings", label: "Settings", icon: Settings },
];

export function DashboardSidebar({ type }: DashboardSidebarProps) {
  const pathname = usePathname();
  const nav = type === "worker" ? workerNav : adminNav;

  return (
    <aside className="w-64 shrink-0 border-r border-gold/10 bg-[#080808] flex flex-col min-h-screen">
      <div className="p-6 border-b border-gold/10">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/image.png" alt="Kwick24" width={36} height={36} />
          <div>
            <span className="font-display text-sm font-bold text-white">
              Kwick24
            </span>
            <span className="block text-[10px] text-gold uppercase tracking-wider">
              {type === "worker" ? "Worker" : "Admin"}
            </span>
          </div>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {nav.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all",
                active
                  ? "bg-gold/10 text-gold border border-gold/30 shadow-gold-glow"
                  : "text-zinc-400 hover:text-gold hover:bg-white/5"
              )}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gold/10">
        <Link
          href="/login"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-zinc-500 hover:text-red-400 hover:bg-red-500/5 transition-colors"
        >
          <LogOut size={18} />
          Logout
        </Link>
      </div>
    </aside>
  );
}
