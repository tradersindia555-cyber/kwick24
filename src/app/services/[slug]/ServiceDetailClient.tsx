"use client";

import { Button } from "@/components/ui/Button";
import { useBooking } from "@/context/BookingContext";

interface ServiceDetailClientProps {
  serviceId: string;
  serviceName: string;
}

export function ServiceDetailClient({
  serviceId,
  serviceName,
}: ServiceDetailClientProps) {
  const { openBooking } = useBooking();

  return (
    <div className="flex flex-wrap gap-4">
      <Button
        size="lg"
        glow
        onClick={() => openBooking({ id: serviceId, name: serviceName })}
      >
        Book Now
      </Button>
      <Button variant="outline" size="lg">
        Share Service
      </Button>
    </div>
  );
}
