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
