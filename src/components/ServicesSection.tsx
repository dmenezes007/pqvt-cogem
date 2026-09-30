import React from 'react';
import {
  HeartPulse,
  Brain,
  MonitorCheck,
  Footprints,
  HeartHandshake,
  Users2,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { ServiceItem } from '../types/pqvt';
import { SERVICES_LIST } from '../data/pqvtData';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'srv-1':
        return <HeartPulse className="w-5 h-5 text-[#059669]" />;
      case 'srv-2':
        return <Brain className="w-5 h-5 text-[#6D4AFF]" />;
      case 'srv-3':
        return <MonitorCheck className="w-5 h-5 text-[#27C7C9]" />;
      case 'srv-4':
        return <Footprints className="w-5 h-5 text-[#059669]" />;
      case 'srv-5':
        return <HeartHandshake className="w-5 h-5 text-[#4F46E5]" />;
      case 'srv-6':
      default:
        return <Users2 className="w-5 h-5 text-[#6D4AFF]" />;
    }
  };

  return (
    <section id="servicos" className="py-12 bg-white border-b border-[#E9E5EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#6D4AFF] uppercase tracking-wider mb-1">
              <span>Canais de Atendimento</span>
              <span aria-hidden="true" className="text-[#C5BFE3]">·</span>
              <span>Acesso Rápido ao Servidor</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17151D] tracking-tight">
              Serviços para Você
            </h2>
            <p className="text-xs sm:text-sm text-[#77717F] mt-1 max-w-xl">
              Canais diretos de acolhimento psicossocial, adequação ergonômica, suporte em saúde funcional e inclusão.
            </p>
          </div>

          <div className="text-xs text-[#77717F] flex items-center gap-1.5 self-start sm:self-auto bg-[#F7F6F8] px-3 py-1.5 rounded-lg border border-[#E9E5EC]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" />
            <span>Atendimento confidencial e sigiloso</span>
          </div>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES_LIST.map((srv) => (
            <div
              key={srv.id}
              onClick={() => onSelectService(srv)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectService(srv);
                }
              }}
              className="bg-[#F7F6F8] hover:bg-white rounded-xl border border-[#E9E5EC] hover:border-[#6D4AFF]/50 p-5 transition-all cursor-pointer flex flex-col justify-between group shadow-2xs hover:shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#E9E5EC] flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                    {getServiceIcon(srv.id)}
                  </div>
                  <span className="text-[11px] font-medium text-[#77717F]">
                    {srv.hoursOrDeadline.split('(')[0].slice(0, 24)}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#17151D] group-hover:text-[#6D4AFF] transition-colors mb-1.5">
                  {srv.title}
                </h3>

                <p className="text-xs text-[#77717F] leading-relaxed mb-4">
                  {srv.shortDescription}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E9E5EC] flex items-center justify-between text-xs">
                <span className="text-[11px] text-[#77717F]">
                  Público: {srv.audience.split(' ')[0]} {srv.audience.split(' ')[1] || ''}
                </span>
                <span className="font-semibold text-[#6D4AFF] flex items-center gap-1 group-hover:underline">
                  <span>Acessar</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
