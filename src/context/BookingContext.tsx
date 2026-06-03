"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import type {
  BookingContextType,
  BookingFormData,
  BookingStatus,
} from "@/types";
import { toast } from "react-toastify";

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<{
    id: string;
    name: string;
  } | null>(null);
  const [bookingStatus, setBookingStatus] = useState<BookingStatus | null>(
    null,
  );

  const openBooking = useCallback((service?: { id: string; name: string }) => {
    setSelectedService(service ?? null);
    setIsOpen(true);
  }, []);

  const closeBooking = useCallback(() => {
    setIsOpen(false);
    setSelectedService(null);
  }, []);

  const submitBooking = useCallback(
    async (data: BookingFormData) => {
      try {
        const response = await fetch("/api/send-booking", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result?.message || "Booking failed");
        }

        closeBooking();
        toast.success("Your booking has been submitted successfully.");
        setBookingStatus({
          type: "success",
          title: "Booking Confirmed!",
          message:
            result?.message || "Your booking has been submitted successfully.",
        });

        return true;
      } catch (error: any) {
        console.error(error);

        toast.error(
          error?.message || "Something went wrong. Please try again.",
        );

        return false;
      }
    },
    [closeBooking],
  );

  // const submitBooking = useCallback(
  //   async (data: BookingFormData) => {
  //     try {
  //       // const service = services.find((s) => s.id === form.serviceId);

  //       // const bookingDetailse = {
  //       //   ...form,
  //       //   serviceName: service?.name ?? selectedService?.name ?? "Service",
  //       // };

  //       // console.log(bookingDetailse);

  //       await fetch("/api/send-booking", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(data),
  //       });
  //       closeBooking();

  //       // await submitBooking(bookingDetailse);

  //       // setForm(initBookingData);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //     // API-ready: replace with actual API call
  //     // await new Promise((resolve) => setTimeout(resolve, 1000));
  //     // console.log("Booking submitted:", data);
  //   },
  //   [closeBooking],
  // );
  const closeStatusModal = useCallback(() => {
    setBookingStatus(null);
  }, []);

  return (
    <BookingContext.Provider
      value={{
        isOpen,
        selectedService,
        bookingStatus,
        openBooking,
        closeBooking,
        closeStatusModal,
        submitBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within BookingProvider");
  }
  return context;
}
