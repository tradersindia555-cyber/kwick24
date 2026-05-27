"use client";

import { motion } from "framer-motion";
import {
  Users,
  Calendar,
  IndianRupee,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { GlassCard } from "@/components/ui/GlassCard";
import { PageTransition } from "@/components/ui/PageTransition";

const stats = [
  { label: "Total Bookings", value: "1,284", change: "+12%", icon: Calendar },
  { label: "Active Workers", value: "156", change: "+5%", icon: Users },
  { label: "Revenue (MTD)", value: "₹8.4L", change: "+18%", icon: IndianRupee },
  { label: "Growth", value: "24%", change: "+3%", icon: TrendingUp },
];

const recentBookings = [
  { id: "#KW2841", service: "Car Wash", customer: "Karan J.", amount: "₹499", status: "Completed" },
  { id: "#KW2840", service: "Plumber", customer: "Priya S.", amount: "₹349", status: "In Progress" },
  { id: "#KW2839", service: "Home Cleaning", customer: "Amit P.", amount: "₹1,999", status: "Scheduled" },
  { id: "#KW2838", service: "AC Repair", customer: "Meera N.", amount: "₹599", status: "Completed" },
];

export default function AdminDashboardPage() {
  return (
    <PageTransition>
      <div className="flex min-h-screen bg-[#0A0A0A]">
        <DashboardSidebar type="admin" />

        <main className="flex-1 p-6 md:p-8 overflow-auto">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="font-display text-2xl md:text-3xl font-bold text-white mb-1">
                Admin Dashboard
              </h1>
              <p className="text-zinc-500">Platform overview and management</p>
            </div>
            <span className="text-xs text-gold px-3 py-1 rounded-full border border-gold/30 bg-gold/5">
              Live · Demo Data
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <GlassCard className="p-5">
                    <div className="flex items-start justify-between">
                      <Icon className="text-gold" size={22} />
                      <span className="flex items-center gap-0.5 text-xs text-emerald-400">
                        <ArrowUpRight size={12} />
                        {stat.change}
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-white mt-2">{stat.value}</p>
                    <p className="text-xs text-zinc-500">{stat.label}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <GlassCard className="p-6">
              <h2 className="font-display text-lg font-semibold text-white mb-4">
                Recent Bookings
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-zinc-500 border-b border-gold/10">
                      <th className="text-left py-2">ID</th>
                      <th className="text-left py-2">Service</th>
                      <th className="text-left py-2 hidden sm:table-cell">Customer</th>
                      <th className="text-right py-2">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentBookings.map((b) => (
                      <tr key={b.id} className="border-b border-white/5 text-zinc-300">
                        <td className="py-3 text-gold">{b.id}</td>
                        <td className="py-3">{b.service}</td>
                        <td className="py-3 hidden sm:table-cell text-zinc-500">{b.customer}</td>
                        <td className="py-3 text-right">{b.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <h2 className="font-display text-lg font-semibold text-white mb-4">
                Quick Actions
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {["Add Worker", "New Service", "View Reports", "Settings"].map((action) => (
                  <button
                    key={action}
                    className="p-4 rounded-xl border border-gold/20 text-sm text-zinc-300 hover:border-gold hover:text-gold hover:shadow-gold-glow transition-all"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </GlassCard>
          </div>
        </main>
      </div>
    </PageTransition>
  );
}
