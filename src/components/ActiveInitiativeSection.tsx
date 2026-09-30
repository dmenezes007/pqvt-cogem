import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
  Clock,
  CircleDashed,
  ArrowRight,
  BookOpen,
  User,
  Users,
  Calendar,
  Layers,
  FileCheck,
  ChevronRight,
} from 'lucide-react';
import { StrategicAction } from '../types/pqvt';
import { STRATEGIC_ACTION_ACT06 } from '../data/pqvtData';

interface ActiveInitiativeSectionProps {
  onOpenDoc09: () => void;
  onOpenActionDetail: () => void;
}

export const ActiveInitiativeSection: React.FC<ActiveInitiativeSectionProps> = ({
  onOpenDoc09,
  onOpenActionDetail,
}) => {
  const action = STRATEGIC_ACTION_ACT06;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Concluído':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#059669]">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Concluído</span>
          </span>
        );
      case 'Em Andamento':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#6D4AFF]">
            <Clock className="w-3.5 h-3.5" />
            <span>Em Andamento</span>
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#77717F]">
            <CircleDashed className="w-3.5 h-3.5" />
            <span>Planejado</span>
          </span>
        );
    }
  };

  return (
    <section id="acontece-agora" className="py-12 bg-white border-b border-[#E9E5EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Kicker */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#6D4AFF] uppercase tracking-wider mb-1">
              <span>Acontece Agora</span>
              <span aria-hidden="true" className="text-[#C5BFE3]">·</span>
              <span>Iniciativa Estruturante do Eixo 2</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17151D] tracking-tight">
              Plano Anual PQVT 2026
            </h2>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <span className="text-xs text-[#77717F]">Status geral:</span>
            <span className="px-2.5 py-1 text-xs font-bold text-[#6D4AFF] bg-[#F0ECFF] rounded-md">
              {action.status} ({action.progress}%)
            </span>
          </div>
        </div>

        {/* Featured Card */}
        <div className="bg-[#F7F6F8] rounded-2xl border border-[#E9E5EC] p-6 lg:p-8 relative overflow-hidden shadow-xs">
          
          {/* Decorative subtle stripe */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#6D4AFF] via-[#27C7C9] to-[#059669]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 7 cols: Core description, scope and progress bar */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#77717F] mb-3">
                  <span className="font-mono font-bold text-[#17151D] bg-white px-2 py-0.5 rounded border border-[#E9E5EC]">
                    {action.code}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="font-medium text-[#17151D]">{action.axis}</span>
                  <span aria-hidden="true">·</span>
                  <span>Ciclo Anual 2026</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#17151D] mb-3">
                  {action.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#77717F] leading-relaxed mb-6">
                  {action.description}
                </p>

                {/* Progress Bar with Numerical Precision */}
                <div className="mb-6 p-4 bg-white rounded-xl border border-[#E9E5EC]">
                  <div className="flex items-center justify-between text-xs font-semibold mb-2">
                    <span className="text-[#17151D]">Execução Global das Entregas</span>
                    <span className="font-mono text-sm text-[#6D4AFF] tabular-nums font-bold">
                      {action.progress}% Concluído
                    </span>
                  </div>

                  <div className="w-full h-3 bg-[#E9E5EC] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#6D4AFF] to-[#059669] rounded-full transition-all duration-500"
                      style={{ width: `${action.progress}%` }}
                      role="progressbar"
                      aria-valuenow={action.progress}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-[#77717F] mt-2">
                    <span>1 de 3 entregas concluídas</span>
                    <span>1 em execução contínua</span>
                    <span>1 em estruturação</span>
                  </div>
                </div>

                {/* Meta details (Responsible, Stakeholders, Related Doc) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-2 border-t border-[#E9E5EC]">
                  <div className="flex items-start gap-2">
                    <User className="w-3.5 h-3.5 text-[#6D4AFF] mt-0.5 shrink-0" />
                    <div>
                      <span className="text-[#77717F] block text-[11px]">Responsável</span>
                      <span className="font-semibold text-[#17151D]">{action.responsible}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Users className="w-3.5 h-3.5 text-[#27C7C9] mt-0.5 shrink-0" />
                    <div>
                      <span className="text-[#77717F] block text-[11px]">Stakeholders</span>
                      <span className="font-semibold text-[#17151D]">Comissão QVT & Servidores</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-[#059669] mt-0.5 shrink-0" />
                    <div>
                      <span className="text-[#77717F] block text-[11px]">Documento Chave</span>
                      <button
                        onClick={onOpenDoc09}
                        className="font-semibold text-[#059669] hover:underline text-left"
                      >
                        {action.relatedDocumentCode} (Abrir Guia)
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenActionDetail}
                  className="px-4 py-2.5 bg-[#17151D] hover:bg-[#6D4AFF] text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-2"
                >
                  <span>Acompanhar iniciativa em detalhes</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenDoc09}
                  className="px-4 py-2.5 bg-white hover:bg-[#EFECEF] text-[#17151D] border border-[#E9E5EC] text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#6D4AFF]" />
                  <span>Acessar Guia de Teletrabalho (DOC-09)</span>
                </button>
              </div>
            </div>

            {/* Right 5 cols: Structured 3 Deliveries from Repository */}
            <div className="lg:col-span-5 bg-white rounded-xl border border-[#E9E5EC] p-5">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E9E5EC]">
                <span className="text-xs font-bold text-[#17151D] uppercase tracking-wider">
                  Entregas Estruturais
                </span>
                <span className="text-[11px] text-[#77717F]">Registradas no COGEM</span>
              </div>

              <div className="space-y-4">
                {action.deliveries.map((delivery) => (
                  <div
                    key={delivery.id}
                    className="p-3.5 rounded-lg bg-[#F7F6F8] border border-[#E9E5EC] text-xs transition-colors hover:border-[#6D4AFF]/40"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono text-[10px] font-bold text-[#77717F] bg-white px-1.5 py-0.2 rounded border border-[#E9E5EC]">
                          0{delivery.order}
                        </span>
                        <span className="font-bold text-[#17151D] leading-tight">
                          {delivery.title}
                        </span>
                      </div>
                      {getStatusBadge(delivery.status)}
                    </div>

                    <p className="text-[11px] text-[#77717F] leading-relaxed mb-2">
                      {delivery.description}
                    </p>

                    <div className="flex items-center justify-between text-[10px] text-[#77717F] pt-2 border-t border-[#E9E5EC]/60">
                      <span>{delivery.updatedDate}</span>
                      <span className="font-mono font-medium">{delivery.progress}%</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Scope Tags unboxed with separator */}
              <div className="mt-4 pt-3 border-t border-[#E9E5EC]">
                <p className="text-[11px] font-semibold text-[#77717F] mb-1">
                  Escopo Integrado ao Eixo 2:
                </p>
                <p className="text-[11px] text-[#77717F] leading-relaxed">
                  Employee Experience (EX) · Ambientação & Onboarding · QVT · Diversidade & Inclusão · Apoio Psicossocial
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
