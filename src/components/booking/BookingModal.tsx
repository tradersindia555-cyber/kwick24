"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, MapPin, Phone } from "lucide-react";
import { useBooking } from "@/context/BookingContext";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/data/services";

export function BookingModal() {
  const { isOpen, closeBooking, selectedService, submitBooking } = useBooking();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    serviceId: "",
    date: "",
    time: "",
    address: "",
    phone: "",
    notes: "",
  });

  useEffect(() => {
    if (selectedService) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setForm((f) => ({
        ...f,
        serviceId: selectedService.id,
      }));
    }
  }, [selectedService]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const service = services.find((s) => s.id === form.serviceId);
    await submitBooking({
      ...form,
      serviceName: service?.name ?? selectedService?.name ?? "Service",
    });
    setLoading(false);
    setForm({
      serviceId: "",
      date: "",
      time: "",
      address: "",
      phone: "",
      notes: "",
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeBooking}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-[101] md:w-full md:max-w-lg"
          >
            <div className="h-full md:h-auto overflow-y-auto rounded-2xl border border-gold/30 bg-[#0f0f0f] shadow-gold-glow-lg p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-2xl font-bold text-gold">
                  Book a Service
                </h3>
                <button
                  onClick={closeBooking}
                  className="p-2 rounded-lg text-zinc-400 hover:text-gold hover:bg-gold/10 transition-colors"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-zinc-400 mb-1.5">
                    Service
                  </label>
                  <select
                    required
                    value={form.serviceId}
                    onChange={(e) =>
                      setForm({ ...form, serviceId: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-gold/20 text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/30"
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} — {s.price}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-zinc-400 mb-1.5 flex items-center gap-1">
                      <Calendar size={14} /> Date
                    </label>
                    <input
                      type="date"
                      required
                      value={form.date}
                      onChange={(e) =>
                        setForm({ ...form, date: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-gold/20 text-white focus:border-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-zinc-400 mb-1.5 flex items-center gap-1">
                      <Clock size={14} /> Time
                    </label>
                    <input
                      type="time"
                      required
                      value={form.time}
                      onChange={(e) =>
                        setForm({ ...form, time: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-gold/20 text-white focus:border-gold focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-zinc-400 mb-1.5 flex items-center gap-1">
                    <MapPin size={14} /> Address
                  </label>
                  <textarea
                    required
                    rows={2}
                    value={form.address}
                    onChange={(e) =>
                      setForm({ ...form, address: e.target.value })
                    }
                    placeholder="Enter your full address"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-gold/20 text-white placeholder:text-zinc-600 focus:border-gold focus:outline-none resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm text-zinc-400 mb-1.5 flex items-center gap-1">
                    <Phone size={14} /> Phone
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-gold/20 text-white placeholder:text-zinc-600 focus:border-gold focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm text-zinc-400 mb-1.5">
                    Notes (optional)
                  </label>
                  <textarea
                    rows={2}
                    value={form.notes}
                    onChange={(e) =>
                      setForm({ ...form, notes: e.target.value })
                    }
                    placeholder="Any special instructions..."
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-gold/20 text-white placeholder:text-zinc-600 focus:border-gold focus:outline-none resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  glow
                  disabled={loading}
                >
                  {loading ? "Confirming..." : "Confirm Booking"}
                </Button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
