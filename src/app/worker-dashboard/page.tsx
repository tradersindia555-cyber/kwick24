"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Star,
  IndianRupee,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { GlassCard } from "@/components/ui/GlassCard";
import { PageTransition } from "@/components/ui/PageTransition";

const stats = [
  { label: "Active Jobs", value: "3", icon: Briefcase, color: "text-gold" },
  { label: "Rating", value: "4.9", icon: Star, color: "text-gold" },
  { label: "This Month", value: "₹24,500", icon: IndianRupee, color: "text-emerald-400" },
  { label: "Hours Worked", value: "128", icon: Clock, color: "text-blue-400" },
];

const recentJobs = [
  { id: "1", service: "Home Cleaning", customer: "Ananya G.", status: "In Progress", time: "2:00 PM" },
  { id: "2", service: "AC Repair", customer: "Rahul M.", status: "Scheduled", time: "4:30 PM" },
  { id: "3", service: "Electrician", customer: "Sneha I.", status: "Completed", time: "11:00 AM" },
];

export default function WorkerDashboardPage() {
  return (
    <PageTransition>
      <div className="flex min-h-screen bg-[#0A0A0A]">
        <DashboardSidebar type="worker" />

        <main className="flex-1 p-6 md:p-8 overflow-auto">
          <div className="mb-8">
            <h1 className="font-display text-2xl md:text-3xl font-bold text-white mb-1">
              Welcome back, Rajesh
            </h1>
            <p className="text-zinc-500">Here&apos;s your work overview for today</p>
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
                    <Icon className={stat.color} size={24} />
                    <p className="text-2xl font-bold text-white mt-2">{stat.value}</p>
                    <p className="text-xs text-zinc-500">{stat.label}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>

          <GlassCard className="p-6">
            <h2 className="font-display text-lg font-semibold text-white mb-4">
              Recent Jobs
            </h2>
            <div className="space-y-3">
              {recentJobs.map((job) => (
                <div
                  key={job.id}
                  className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-gold/10 hover:border-gold/30 transition-colors"
                >
                  <div>
                    <p className="font-medium text-white">{job.service}</p>
                    <p className="text-sm text-zinc-500">{job.customer}</p>
                  </div>
                  <div className="text-right">
                    <span
                      className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full ${
                        job.status === "Completed"
                          ? "bg-emerald-500/10 text-emerald-400"
                          : job.status === "In Progress"
                            ? "bg-gold/10 text-gold"
                            : "bg-blue-500/10 text-blue-400"
                      }`}
                    >
                      {job.status === "Completed" ? (
                        <CheckCircle size={12} />
                      ) : (
                        <AlertCircle size={12} />
                      )}
                      {job.status}
                    </span>
                    <p className="text-xs text-zinc-500 mt-1">{job.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </main>
      </div>
    </PageTransition>
  );
}
