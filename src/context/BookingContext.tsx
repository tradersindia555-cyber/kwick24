"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import type { BookingFormData } from "@/types";

interface BookingContextType {
  isOpen: boolean;
  selectedService: { id: string; name: string } | null;
  openBooking: (service?: { id: string; name: string }) => void;
  closeBooking: () => void;
  submitBooking: (data: BookingFormData) => Promise<void>;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<{
    id: string;
    name: string;
  } | null>(null);

  const openBooking = useCallback(
    (service?: { id: string; name: string }) => {
      setSelectedService(service ?? null);
      setIsOpen(true);
    },
    []
  );

  const closeBooking = useCallback(() => {
    setIsOpen(false);
    setSelectedService(null);
  }, []);

  const submitBooking = useCallback(async (data: BookingFormData) => {
    // API-ready: replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Booking submitted:", data);
    closeBooking();
  }, [closeBooking]);

  return (
    <BookingContext.Provider
      value={{ isOpen, selectedService, openBooking, closeBooking, submitBooking }}
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
