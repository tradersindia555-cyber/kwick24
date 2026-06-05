"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, MapPin, Search } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { cities } from "@/lib/data/services";
import { getServiceSearchPath } from "@/lib/search-service";

const searchKeywords = [
  "Home Services",
  "AC Repair",
  "Electrician",
  "Car Wash",
  "Plumber",
  "Home Cleaning",
  "Bike Service",
];

export function LocationSearch() {
  const router = useRouter();

  const [city, setCity] = useState(cities[0]);
  const [searchQuery, setSearchQuery] = useState("");

  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  const currentWord = useMemo(
    () => searchKeywords[placeholderIndex],
    [placeholderIndex],
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
            (prev) => (prev + 1) % searchKeywords.length,
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

  const handleSearch = () => {
    const path = getServiceSearchPath(searchQuery);
    router.push(path);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="mb-8 flex flex-col gap-3 rounded-2xl border border-gold/20 bg-black/40 p-2 shadow-gold-glow backdrop-blur-xl sm:flex-row">
      <div className="flex flex-1 items-center gap-3 rounded-xl bg-white/5 px-4 py-3">
        <Search className="shrink-0 text-gold" size={20} />

        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={`Search for ${displayedText}`}
          className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-zinc-500 md:text-base"
          aria-label="Search services"
        />
      </div>

      <div className="relative sm:w-48">
        <div className="flex items-center gap-2 rounded-xl border border-gold/10 bg-white/5 px-4 py-3">
          <MapPin className="shrink-0 text-gold" size={18} />

          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex-1 cursor-pointer appearance-none bg-transparent pr-6 text-sm text-white outline-none"
            aria-label="Select city"
          >
            {cities.map((c) => (
              <option key={c} value={c} className="bg-[#0A0A0A]">
                {c}
              </option>
            ))}
          </select>

          <ChevronDown
            className="pointer-events-none absolute right-3 text-gold"
            size={16}
          />
        </div>
      </div>

      <Button onClick={handleSearch} className="shrink-0" glow>
        Search
      </Button>
    </div>
  );
}
