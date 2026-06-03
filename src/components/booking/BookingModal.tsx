"use client";

import { useEffect, useState } from "react";
import { Calendar, Clock, MapPin, Phone, Wrench, FileText } from "lucide-react";
import { z } from "zod";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Modal } from "../ui/modal";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/data/services";
import { useBooking } from "@/context/BookingContext";
import { cn } from "@/lib/utils";
import { BookingFormData, bookingSchema } from "@/lib/validations/booking";
import { InputShell } from "../contacts/ContactForm";

export function BookingModal() {
  const { isOpen, closeBooking, selectedService, submitBooking } = useBooking();

  const [loading, setLoading] = useState(false);

  const {
    clearErrors,
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      serviceId: "",
      date: "",
      time: "",
      address: "",
      phone: "",
      notes: "",
    },
    mode: "onSubmit",
  });

  useEffect(() => {
    if (selectedService?.id) {
      setValue("serviceId", selectedService.id);
    }
  }, [selectedService, setValue]);

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      toast.error("Geolocation is not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setValue(
          "address",
          `Latitude: ${coords.latitude}, Longitude: ${coords.longitude}`,
          {
            shouldValidate: false,
            shouldDirty: true,
          },
        );

        // clearErrors();
        toast.success("Current location added");
      },
      () => {
        toast.error("Unable to fetch current location");
      },
    );
  };

  const onSubmit = async (data: BookingFormData) => {
    try {
      setLoading(true);

      const service = services.find((s) => s.id === data.serviceId);

      const bookingDetails = {
        ...data,
        serviceName: service?.name ?? selectedService?.name ?? "Service",
      };

      await submitBooking(bookingDetails);

      toast.success(
        "Booking submitted successfully. We'll contact you shortly.",
      );

      handleCloseModel();
    } catch (error) {
      toast.error("Unable to submit booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const handleCloseModel = () => {
    reset();
    closeBooking();
  };
  const useMyLocation = (
    <Button size="sm" variant="ghost" onClick={getCurrentLocation}>
      {" "}
      <small>📍 Use Current Location</small>
    </Button>
  );
  return (
    <Modal
      isOpen={isOpen}
      onClose={handleCloseModel}
      title="Book a Service"
      size="lg"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <InputShell
          label="Service"
          icon={<Wrench size={18} />}
          error={errors.serviceId?.message}
        >
          <select
            {...register("serviceId")}
            className="w-full bg-transparent text-white px-11 py-3 rounded-xl outline-none appearance-none"
          >
            <option value="" className="bg-[#0A0A0A]">
              Select Service
            </option>

            {services.map((service) => (
              <option
                key={service.id}
                value={service.id}
                className="bg-[#0A0A0A]"
              >
                {service.name}
              </option>
            ))}
          </select>
        </InputShell>

        <div className="grid grid-cols-2 gap-4">
          <InputShell
            label="Date"
            icon={<Calendar size={18} />}
            error={errors.date?.message}
          >
            <input
              type="date"
              min={new Date().toISOString().split("T")[0]}
              {...register("date")}
              className="w-full bg-transparent text-white px-11 py-3 outline-none"
            />
          </InputShell>

          <InputShell
            label="Time"
            icon={<Clock size={18} />}
            error={errors.time?.message}
          >
            <input
              type="time"
              {...register("time")}
              className="w-full bg-transparent text-white px-11 py-3 outline-none"
            />
          </InputShell>
        </div>

        <InputShell
          label="Phone Number"
          icon={<Phone size={18} />}
          error={errors.phone?.message}
        >
          <input
            {...register("phone")}
            placeholder="+91 9876543210"
            className="w-full bg-transparent text-white px-11 py-3 outline-none"
          />
        </InputShell>

        <InputShell
          label="Address"
          icon={<MapPin size={18} />}
          error={errors.address?.message}
          action={useMyLocation}
        >
          <textarea
            rows={2}
            {...register("address")}
            placeholder="Enter full address"
            className="w-full bg-transparent text-white px-11 py-3 outline-none resize-none"
          />
        </InputShell>

        <InputShell
          label="Notes (Optional)"
          icon={<FileText size={18} />}
          error={errors.notes?.message}
        >
          <textarea
            rows={3}
            {...register("notes")}
            placeholder="Any special instructions..."
            className="w-full bg-transparent text-white px-11 py-3 outline-none resize-none"
          />
        </InputShell>

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
    </Modal>
  );
}
