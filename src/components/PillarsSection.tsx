import React from 'react';
import { HeartPulse, Activity, Users, Compass, ArrowRight, Check } from 'lucide-react';
import { PillarType } from '../types/pqvt';
import { PILLARS_CONFIG } from '../data/pqvtData';

interface PillarsSectionProps {
  selectedPillar: PillarType | null;
  onSelectPillar: (pillar: PillarType | null) => void;
  onNavigateToActivities: () => void;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({
  selectedPillar,
  onSelectPillar,
  onNavigateToActivities,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5" />;
      case 'Activity':
        return <Activity className="w-5 h-5" />;
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'Compass':
      default:
        return <Compass className="w-5 h-5" />;
    }
  };

  const pillarsList: PillarType[] = ['saude', 'movimento', 'conexao', 'equilibrio'];

  return (
    <section className="py-10 bg-[#F7F6F8] border-b border-[#E9E5EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#77717F] uppercase tracking-wider mb-1">
              <span>Fundamentos</span>
              <span aria-hidden="true">·</span>
              <span>4 Dimensões Integradas</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17151D] tracking-tight">
              O PQVT em um olhar
            </h2>
            <p className="text-xs sm:text-sm text-[#77717F] mt-1 max-w-xl">
              Quatro eixos de atuação que estruturam ações preventivas, suporte contínuo e desenvolvimento integral do servidor na Enap.
            </p>
          </div>

          {selectedPillar && (
            <button
              onClick={() => onSelectPillar(null)}
              className="text-xs font-medium text-[#6D4AFF] hover:underline self-start sm:self-auto"
            >
              Limpar filtro de dimensão (Ver todos)
            </button>
          )}
        </div>

        {/* 4 Cards Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pillarsList.map((pillarKey) => {
            const config = PILLARS_CONFIG[pillarKey];
            const isSelected = selectedPillar === pillarKey;

            return (
              <div
                key={pillarKey}
                onClick={() => onSelectPillar(isSelected ? null : pillarKey)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectPillar(isSelected ? null : pillarKey);
                  }
                }}
                className={`relative bg-white rounded-xl p-5 border transition-all cursor-pointer flex flex-col justify-between text-left group ${
                  isSelected
                    ? 'border-[#6D4AFF] ring-2 ring-[#6D4AFF]/20 shadow-md'
                    : 'border-[#E9E5EC] hover:border-[#6D4AFF]/50 hover:shadow-xs'
                }`}
              >
                <div>
                  {/* Top Bar with Icon & Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105"
                      style={{
                        backgroundColor: config.bgSubtle,
                        color: config.colorAccent,
                      }}
                    >
                      {getIcon(config.iconName)}
                    </div>
                    <span className="text-[11px] font-semibold text-[#77717F]">
                      {config.badgeText}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-[#17151D] group-hover:text-[#6D4AFF] transition-colors mb-2">
                    {config.title}
                  </h3>
                  <p className="text-xs text-[#77717F] leading-relaxed">
                    {config.description}
                  </p>
                </div>

                {/* Bottom discreet action */}
                <div className="pt-4 mt-4 border-t border-[#F2EFF5] flex items-center justify-between text-xs">
                  <span className="font-medium text-[#6D4AFF] group-hover:underline flex items-center gap-1">
                    {isSelected ? 'Filtro ativo' : 'Explorar eixo'}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#6D4AFF] transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Context Banner when a Pillar is Selected */}
        {selectedPillar && (
          <div className="mt-4 p-3 bg-white rounded-lg border border-[#6D4AFF]/30 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#17151D]">
                Exibindo conteúdos destacados para o pilar: {PILLARS_CONFIG[selectedPillar].title}
              </span>
              <span className="text-[#77717F] hidden sm:inline">
                ({PILLARS_CONFIG[selectedPillar].description})
              </span>
            </div>
            <button
              onClick={onNavigateToActivities}
              className="text-[#6D4AFF] font-semibold hover:underline shrink-0"
            >
              Ir para atividades deste pilar →
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
