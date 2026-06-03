import { GlassCard } from "@/components/ui/GlassCard";
import { partnerBenefitsData } from "@/lib/data/partner";

export function PartnerBenefits() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
      {partnerBenefitsData.map((benefit) => {
        const Icon = benefit.icon;

        return (
          <GlassCard key={benefit.title} className="p-6 text-center">
            <Icon className="text-gold mx-auto mb-3" size={32} />

            <h3 className="font-semibold text-white mb-1">{benefit.title}</h3>

            <p className="text-sm text-zinc-500">{benefit.desc}</p>
          </GlassCard>
        );
      })}
    </div>
  );
}
