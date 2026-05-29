"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronDown, MapPin, Search } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { useBooking } from "@/context/BookingContext";
import { cities } from "@/lib/data/services";

const searchKeywords = [
  "'Home Services'",
  "AC Repair",
  "Electrician",
  "Car Wash",
  "Plumber",
  "Salon at Home",
  "Cleaning Service",
];

export function LocationSearch() {
  const { openBooking } = useBooking();

  const [city, setCity] = useState(cities[0]);
  const [searchQuery, setSearchQuery] = useState("");

  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  const currentWord = useMemo(
    () => searchKeywords[placeholderIndex],
    [placeholderIndex]
  );

  useEffect(() => {
    let typingTimeout: NodeJS.Timeout;
    let nextWordTimeout: NodeJS.Timeout;

    let charIndex = 0;

    const type = () => {
      if (charIndex <= currentWord.length) {
        setDisplayedText(currentWord.slice(0, charIndex));

        charIndex++;

        typingTimeout = setTimeout(type, 70);
      } else {
        nextWordTimeout = setTimeout(() => {
          setPlaceholderIndex(
            (prev) => (prev + 1) % searchKeywords.length
          );
        }, 1600);
      }
    };

    type();

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(nextWordTimeout);
    };
  }, [currentWord]);

  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-8 p-2 rounded-2xl border border-gold/20 bg-black/40 backdrop-blur-xl shadow-gold-glow">
      {/* Search Input */}
      <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5">
        <Search className="text-gold shrink-0" size={20} />

        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={`Search for ${displayedText}`}
          className="flex-1 bg-transparent text-white placeholder:text-zinc-500 outline-none text-sm md:text-base"
        />
      </div>

      {/* Location */}
      <div className="relative sm:w-48">
        <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-gold/10">
          <MapPin className="text-gold shrink-0" size={18} />

          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex-1 bg-transparent text-white text-sm outline-none appearance-none cursor-pointer pr-6"
          >
            {cities.map((c) => (
              <option
                key={c}
                value={c}
                className="bg-[#0A0A0A]"
              >
                {c}
              </option>
            ))}
          </select>

          <ChevronDown
            className="text-gold absolute right-3 pointer-events-none"
            size={16}
          />
        </div>
      </div>

      {/* Button */}
      <Button onClick={() => openBooking()} className="shrink-0" glow>
        Search
      </Button>
    </div>
  );
}
