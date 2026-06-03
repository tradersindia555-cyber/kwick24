"use client";

import { useBooking } from "@/context/BookingContext";
import StatusModal from "../ui/StatusModel";

export default function BookingStatusModel() {
  const { bookingStatus, closeStatusModal } = useBooking();

  if (!bookingStatus) return null;

  return (
    <StatusModal
      type={bookingStatus.type}
      title={bookingStatus.title}
      message={bookingStatus.message}
      onClose={closeStatusModal}
    />
  );
}
