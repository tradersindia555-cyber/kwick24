import type { LucideIcon } from "lucide-react";
import {
  Car,
  Bike,
  Home,
  Zap,
  Droplets,
  Wind,
  Paintbrush,
  Hammer,
  Truck,
} from "lucide-react";

export const serviceIconMap: Record<string, LucideIcon> = {
  car: Car,
  bike: Bike,
  home: Home,
  zap: Zap,
  droplets: Droplets,
  wind: Wind,
  paintbrush: Paintbrush,
  hammer: Hammer,
  truck: Truck,
};

export function resolveServiceIcon(
  icon?: LucideIcon,
  iconKey?: string,
): LucideIcon {
  if (icon) return icon;
  if (iconKey && serviceIconMap[iconKey]) return serviceIconMap[iconKey];
  return Home;
}
