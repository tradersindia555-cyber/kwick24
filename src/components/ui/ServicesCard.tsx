"use client";

import Link from "next/link";
import { GlassCard } from "./GlassCard";


interface ServiseCardProps {
  varient?: 'left'|'center'|'menu';
  className?: string;
service:any
withDesc?:boolean
}

export function ServiseCard({
    varient='center',
  className,
  service,
  withDesc=false
}: ServiseCardProps) {
  return (
    <div key={service.slug}>
    <Link href={`/services/${service.slug}`} aria-label={service.slug}>
                  <GlassCard className={`p-6 md:p-8 ${varient !='left'? 'text-center':''} group cursor-pointer h-full`}>
                    <div className={`w-14 h-14 md:w-16 md:h-16 ${varient !='left'? 'mx-auto':''} mb-4 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 flex items-center justify-center group-hover:shadow-gold-glow group-hover:scale-110 transition-all duration-300`}>
                      <service.icon className="text-gold" size={28} />
                    </div>
                    <h3 className="font-medium text-white text-sm md:text-base group-hover:text-gold transition-colors">
                      {service.name}
                    </h3>
                    {withDesc &&<p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  {service.description}
                </p>}
                  </GlassCard>
                </Link>
    </div>
  );
}