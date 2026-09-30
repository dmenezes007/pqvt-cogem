import React from 'react';
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Minus,
  CheckCircle2,
  Info,
  Layers,
} from 'lucide-react';
import { IndicatorMetric } from '../types/pqvt';
import { INDICATORS_LIST } from '../data/pqvtData';

export const IndicatorsSection: React.FC = () => {
  return (
    <section id="indicadores" className="py-12 bg-[#F7F6F8] border-b border-[#E9E5EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#6D4AFF] uppercase tracking-wider mb-1">
              <span>Transparência & Resultados</span>
              <span aria-hidden="true" className="text-[#C5BFE3]">·</span>
              <span>Monitoramento do Eixo 2</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17151D] tracking-tight">
              Indicadores de Qualidade de Vida
            </h2>
            <p className="text-xs sm:text-sm text-[#77717F] mt-1 max-w-xl">
              Acompanhamento contínuo da adesão, alcance e satisfação das iniciativas institucionais.
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#E9E5EC] rounded-lg text-xs self-start sm:self-auto text-[#77717F]">
            <Info className="w-3.5 h-3.5 text-[#6D4AFF] shrink-0" />
            <span className="text-[11px]">Dados oficiais do repositório combinados com amostragem demonstrativa.</span>
          </div>
        </div>

        {/* 6 Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INDICATORS_LIST.map((ind) => (
            <div
              key={ind.id}
              className="bg-white rounded-xl border border-[#E9E5EC] p-5 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-xs font-semibold text-[#77717F] leading-tight">
                    {ind.title}
                  </span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.5 rounded border shrink-0 ${
                      ind.isDemonstrative
                        ? 'bg-amber-50 text-amber-800 border-amber-200'
                        : 'bg-[#F0ECFF] text-[#6D4AFF] border-[#DDD6FE]'
                    }`}
                  >
                    {ind.isDemonstrative ? 'Demonstrativo' : 'Oficial COGEM'}
                  </span>
                </div>

                <div className="flex items-baseline gap-2 my-2">
                  <span className="text-3xl sm:text-4xl font-black text-[#17151D] tracking-tight font-mono tabular-nums">
                    {ind.value}
                  </span>
                  {ind.unit && (
                    <span className="text-xs text-[#77717F] font-medium leading-none">
                      {ind.unit}
                    </span>
                  )}
                </div>

                {ind.trend && (
                  <div className="text-xs font-semibold text-[#059669] flex items-center gap-1 mb-2">
                    <TrendingUp className="w-3.5 h-3.5 text-[#059669]" />
                    <span>{ind.trend}</span>
                  </div>
                )}

                <p className="text-xs text-[#77717F] leading-relaxed">
                  {ind.description}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-[#F2EFF5] flex items-center justify-between text-[11px] text-[#77717F]">
                <span>Fonte: {ind.source.split('(')[0]}</span>
                <span className="font-mono">{ind.period}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
