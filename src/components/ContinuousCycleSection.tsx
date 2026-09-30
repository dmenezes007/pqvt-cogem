import React, { useState } from 'react';
import {
  Ear,
  CalendarCheck2,
  PlayCircle,
  BarChart,
  GraduationCap,
  ArrowRight,
  Sparkles,
  Layers,
  Database,
  RefreshCw,
} from 'lucide-react';
import { CONTINUOUS_CYCLE_STEPS } from '../data/pqvtData';

export const ContinuousCycleSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Ear className="w-5 h-5 text-[#6D4AFF]" />;
      case 1:
        return <CalendarCheck2 className="w-5 h-5 text-[#27C7C9]" />;
      case 2:
        return <PlayCircle className="w-5 h-5 text-[#059669]" />;
      case 3:
        return <BarChart className="w-5 h-5 text-[#4F46E5]" />;
      case 4:
      default:
        return <GraduationCap className="w-5 h-5 text-[#6D4AFF]" />;
    }
  };

  const currentStep = CONTINUOUS_CYCLE_STEPS[activeStepIndex];

  return (
    <section id="ciclo" className="py-12 bg-white border-b border-[#E9E5EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#6D4AFF] uppercase tracking-wider mb-2">
            <RefreshCw className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '8s' }} />
            <span>Gestão Baseada em Evidências</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17151D] tracking-tight">
            Como o PQVT é construído
          </h2>
          <p className="text-xs sm:text-sm text-[#77717F] mt-2 leading-relaxed">
            Um ciclo contínuo de escuta, inteligência de dados, planejamento participativo e melhoria contínua integrado ao ecossistema COGEM-Conecta.
          </p>
        </div>

        {/* 5-Step Visual Cycle Tabs (ESCUTAR → PLANEJAR → AGIR → AVALIAR → APRENDER) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 mb-8">
          {CONTINUOUS_CYCLE_STEPS.map((s, idx) => {
            const isSelected = activeStepIndex === idx;
            return (
              <button
                key={s.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-3.5 rounded-xl border text-left transition-all relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#17151D] text-white border-[#17151D] shadow-md'
                    : 'bg-[#F7F6F8] hover:bg-white text-[#17151D] border-[#E9E5EC]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-xs font-extrabold px-1.5 py-0.5 rounded ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-white text-[#77717F] border border-[#E9E5EC]'
                    }`}
                  >
                    {s.step}
                  </span>
                  <div className={isSelected ? 'text-white' : 'text-[#77717F]'}>
                    {getStepIcon(idx)}
                  </div>
                </div>

                <div>
                  <span className={`text-[11px] font-bold uppercase tracking-wider block ${
                    isSelected ? 'text-[#C9E86A]' : 'text-[#6D4AFF]'
                  }`}>
                    {s.label}
                  </span>
                  <span className="text-xs font-semibold leading-tight line-clamp-1">
                    {s.title.split(' e ')[0]}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Step Focus Card */}
        <div className="bg-[#F7F6F8] rounded-2xl border border-[#E9E5EC] p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 text-xs font-bold text-[#6D4AFF] uppercase tracking-wider mb-2">
                <span>Etapa {currentStep.step} de 05</span>
                <span aria-hidden="true">·</span>
                <span>{currentStep.label}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#17151D] mb-3">
                {currentStep.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#77717F] leading-relaxed mb-6">
                {currentStep.description}
              </p>

              {/* Insumos & Fontes */}
              <div className="mb-4">
                <span className="text-xs font-bold text-[#17151D] uppercase tracking-wider block mb-2">
                  Fontes de Dados e Atividades Envolvidas:
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentStep.inputs.map((inp, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-white border border-[#E9E5EC] text-xs text-[#17151D] font-medium rounded-lg shadow-2xs"
                    >
                      {inp}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 4 cols: Connection to COGEM Systems */}
            <div className="lg:col-span-4 bg-white rounded-xl border border-[#E9E5EC] p-5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#17151D] uppercase tracking-wider mb-3">
                <Database className="w-4 h-4 text-[#6D4AFF]" />
                <span>Integração COGEM Conecta</span>
              </div>

              <p className="text-xs text-[#77717F] leading-relaxed mb-4">
                {currentStep.cogemConnection}
              </p>

              <div className="p-3 bg-[#F0ECFF]/60 rounded-lg border border-[#DDD6FE] text-[11px] text-[#6D4AFF]">
                <span className="font-semibold block text-[#17151D] mb-0.5">Princípio:</span>
                "Transformar estratégia e conhecimento em ação concreta para os servidores."
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
