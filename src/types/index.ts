export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  icon: string;
  category: string;
}

export interface Worker {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  experience: string;
  city: string;
  services: string[];
  isOnline: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  image: string;
  rating: number;
  text: string;
  service: string;
  city: string;
}

export interface BookingFormData {
  serviceId: string;
  serviceName: string;
  date: string;
  time: string;
  address: string;
  phone: string;
  notes?: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
}
export interface BookingStatus {
  type: "success" | "error" | null;
  title: string;
  message: string;
}

export interface BookingContextType {
  isOpen: boolean;
  selectedService: { id: string; name: string } | null;
  bookingStatus: BookingStatus | null;
  openBooking: (service?: { id: string; name: string }) => void;
  closeBooking: () => void;
  closeStatusModal: () => void;
  submitBooking: (data: BookingFormData) => Promise<boolean>;
}