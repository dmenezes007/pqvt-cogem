import React from 'react';
import { ArrowRight, Calendar, HeartHandshake, Users2, Sparkles } from 'lucide-react';

interface CtaSectionProps {
  onNavigateToActivities: () => void;
  onNavigateToServices: () => void;
  onJoinCommunity: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  onNavigateToActivities,
  onNavigateToServices,
  onJoinCommunity,
}) => {
  return (
    <section className="py-14 bg-white border-b border-[#E9E5EC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 text-xs font-bold text-[#6D4AFF] uppercase tracking-wider mb-3 bg-[#F0ECFF] px-3 py-1 rounded-full">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Construção Coletiva</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17151D] tracking-tight mb-4">
          Sua experiência também constrói a Enap.
        </h2>

        <p className="text-sm sm:text-base text-[#77717F] max-w-2xl mx-auto leading-relaxed mb-8">
          Participe das iniciativas, compartilhe sua experiência e ajude a construir ambientes de trabalho mais saudáveis, inclusivos e sustentáveis. Cada voz enriquece nossa cultura pública.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={onNavigateToActivities}
            className="px-5 py-2.5 bg-[#6D4AFF] hover:bg-[#5835E6] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm hover:shadow transition-all flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Ver atividades</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onNavigateToServices}
            className="px-5 py-2.5 bg-[#F7F6F8] hover:bg-[#EFECEF] text-[#17151D] border border-[#E9E5EC] text-xs sm:text-sm font-semibold rounded-lg transition-colors flex items-center gap-2"
          >
            <HeartHandshake className="w-4 h-4 text-[#059669]" />
            <span>Conhecer serviços</span>
          </button>

          <button
            onClick={onJoinCommunity}
            className="px-5 py-2.5 bg-white hover:bg-[#F5F3FF] text-[#6D4AFF] border border-[#DDD6FE] text-xs sm:text-sm font-semibold rounded-lg transition-colors flex items-center gap-2"
          >
            <Users2 className="w-4 h-4" />
            <span>Participar da CoP</span>
          </button>
        </div>

      </div>
    </section>
  );
};
