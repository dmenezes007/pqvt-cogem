import React, { useState } from 'react';
import {
  Users2,
  Calendar,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Shield,
  HelpCircle,
  ExternalLink,
} from 'lucide-react';
import { CommunityInfo } from '../types/pqvt';
import { COP_DIVERSITY_INFO } from '../data/pqvtData';

interface CommunitySectionProps {
  onJoinCommunity: () => void;
  onOpenDoc15: () => void;
}

export const CommunitySection: React.FC<CommunitySectionProps> = ({
  onJoinCommunity,
  onOpenDoc15,
}) => {
  const cop = COP_DIVERSITY_INFO;

  return (
    <section id="comunidade" className="py-12 bg-[#F7F6F8] border-b border-[#E9E5EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#6D4AFF] uppercase tracking-wider mb-1">
              <span>Espaço Colaborativo</span>
              <span aria-hidden="true" className="text-[#C5BFE3]">·</span>
              <span>Comunidade de Prática Institucional</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17151D] tracking-tight">
              CoP Diversidade, Equidade e Clima Humanizado
            </h2>
            <p className="text-xs sm:text-sm text-[#77717F] mt-1 max-w-xl">
              Um coletivo horizontal de servidores para dialogar, propor iniciativas e transformar a cultura organizacional da Enap.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-[#E9E5EC] rounded-lg text-xs">
            <Users2 className="w-4 h-4 text-[#6D4AFF]" />
            <span className="font-bold text-[#17151D] font-mono tabular-nums">{cop.membersCount}</span>
            <span className="text-[#77717F]">membros ativos cadastrados</span>
          </div>
        </div>

        {/* Bento Community Card */}
        <div className="bg-white rounded-2xl border border-[#E9E5EC] p-6 lg:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 7 cols: Domain, Schedule, Facilitators */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs text-[#77717F] mb-3">
                <span className="font-semibold text-[#6D4AFF] bg-[#F0ECFF] px-2 py-0.5 rounded">
                  {cop.type}
                </span>
                <span aria-hidden="true">·</span>
                <span>{cop.frequency}</span>
              </div>

              <h3 className="text-xl font-bold text-[#17151D] mb-3">
                Propósito e Domínio de Atuação
              </h3>

              <p className="text-xs sm:text-sm text-[#17151D] font-medium bg-[#F7F6F8] p-4 rounded-xl border border-[#E9E5EC] leading-relaxed mb-6">
                "{cop.domain}"
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs mb-6">
                <div className="p-3.5 bg-[#F7F6F8] rounded-xl border border-[#E9E5EC]">
                  <span className="text-[#77717F] block text-[11px] mb-1">Rito dos Encontros:</span>
                  <div className="flex items-center gap-2 font-semibold text-[#17151D]">
                    <Calendar className="w-4 h-4 text-[#6D4AFF]" />
                    <span>{cop.meetingSchedule}</span>
                  </div>
                </div>

                <div className="p-3.5 bg-[#F7F6F8] rounded-xl border border-[#E9E5EC]">
                  <span className="text-[#77717F] block text-[11px] mb-1">Facilitação Institucional:</span>
                  <div className="font-semibold text-[#17151D] space-y-0.5">
                    {cop.facilitators.map((fac, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                        <span>{fac}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Status requirement: Próximas Ações */}
              <div className="p-3 rounded-lg border border-dashed border-[#DDD6FE] bg-[#F5F3FF]/40 text-xs text-[#6D4AFF] flex items-center justify-between">
                <span>{cop.nextActionsState}</span>
                <span className="text-[11px] font-medium text-[#77717F]">Pauta aberta</span>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  onClick={onJoinCommunity}
                  className="px-5 py-2.5 bg-[#6D4AFF] hover:bg-[#5835E6] text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 shadow-xs"
                >
                  <Users2 className="w-4 h-4" />
                  <span>Quero participar da comunidade</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right 5 cols: Resultados Recentes do Repositório */}
            <div className="lg:col-span-5 bg-[#F7F6F8] rounded-xl border border-[#E9E5EC] p-5">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E9E5EC]">
                <span className="text-xs font-bold text-[#17151D] uppercase tracking-wider">
                  Resultados Recentes da CoP
                </span>
                <span className="text-[11px] text-[#77717F]">Registrados no COGEM</span>
              </div>

              <div className="space-y-3">
                {cop.recentOutcomes.map((outcome, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-white rounded-lg border border-[#E9E5EC] text-xs flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-[#17151D] font-medium leading-snug">{outcome}</p>
                      {outcome.includes('Manual de Linguagem') && (
                        <button
                          onClick={onOpenDoc15}
                          className="mt-1.5 text-[11px] font-semibold text-[#6D4AFF] hover:underline flex items-center gap-1"
                        >
                          <span>Acessar o Manual (DOC-15)</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-[#E9E5EC] text-[11px] text-[#77717F]">
                A comunidade é aberta a todos os servidores, promovendo trocas seguras sem hierarquia funcional.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
