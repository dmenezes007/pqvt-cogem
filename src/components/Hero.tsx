import React from 'react';
import { ArrowRight, Calendar, Sparkles, BookOpen, HeartPulse, ShieldCheck, Check } from 'lucide-react';

interface HeroProps {
  onExploreActivities: () => void;
  onExploreAbout: () => void;
  onOpenDoc09: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreActivities,
  onExploreAbout,
  onOpenDoc09,
}) => {
  return (
    <section id="inicio" className="relative bg-white pt-8 pb-12 lg:pt-14 lg:pb-16 border-b border-[#E9E5EC] overflow-hidden">
      {/* Subtle background ambient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F0ECFF]/60 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#ECFDF5]/50 rounded-full blur-2xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Meta unboxed Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#6D4AFF] mb-3">
              <span className="uppercase tracking-wider">COGEM Conecta</span>
              <span aria-hidden="true" className="text-[#C5BFE3]">·</span>
              <span>Eixo 2 — Experiência, Bem-Estar e Inclusão</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17151D] tracking-tight leading-[1.12] mb-4">
              Programa de Qualidade de Vida no Trabalho
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl font-semibold text-[#6D4AFF] leading-snug mb-3">
              Bem-estar, saúde e experiências que tornam o trabalho mais sustentável.
            </p>

            {/* Editorial Short Paragraph */}
            <p className="text-sm sm:text-base text-[#77717F] leading-relaxed max-w-2xl mb-8">
              Um espaço para descobrir ações, serviços, orientações e iniciativas que promovem
              qualidade de vida no trabalho na Enap. Estratégia, escuta e cuidado integrados na jornada
              do servidor.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              <button
                onClick={onExploreActivities}
                className="px-5 py-2.5 bg-[#6D4AFF] hover:bg-[#5835E6] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm hover:shadow transition-all flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#6D4AFF] focus:ring-offset-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Ver próximas atividades</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreAbout}
                className="px-5 py-2.5 bg-[#F7F6F8] hover:bg-[#EFECEF] text-[#17151D] border border-[#E9E5EC] text-xs sm:text-sm font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#6D4AFF]"
              >
                Conhecer o PQVT
              </button>

              <button
                onClick={onOpenDoc09}
                className="px-4 py-2 text-xs font-medium text-[#059669] hover:bg-[#ECFDF5] rounded-lg transition-colors flex items-center gap-1.5"
                title="Acessar o Guia de Saúde Mental no Teletrabalho"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Guia DOC-09</span>
              </button>
            </div>

            {/* Grounded Trust / Context Markers (Unboxed per design constitution) */}
            <div className="pt-4 border-t border-[#E9E5EC]/80 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#77717F]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" />
                <span className="font-medium text-[#17151D]">Plano Anual ACT-06</span>
                <span className="text-[#059669] font-semibold">(50% em andamento)</span>
              </div>
              <span aria-hidden="true" className="text-[#D5D1DC]">·</span>
              <div>
                <span>Responsável: </span>
                <span className="font-medium text-[#17151D]">Lucas Nogueira</span>
              </div>
              <span aria-hidden="true" className="text-[#D5D1DC]">·</span>
              <div>
                <span>CoP Ativa: </span>
                <span className="font-medium text-[#17151D]">31 servidores</span>
              </div>
            </div>

          </div>

          {/* Right Column: Abstract Graphic Composition */}
          {/* Symbolizing people, connection, movement, equilibrium, health and work without stock clutter */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-square bg-[#F7F6F8] rounded-2xl border border-[#E9E5EC] p-6 flex flex-col justify-between overflow-hidden shadow-xs">
              
              {/* Decorative Geometric Canvas representing Equilibrium and Connection */}
              <div className="absolute inset-0 pointer-events-none">
                <svg
                  className="w-full h-full opacity-90"
                  viewBox="0 0 400 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  {/* Concentric balance rings */}
                  <circle cx="200" cy="200" r="160" stroke="#E9E5EC" strokeWidth="1" strokeDasharray="4 4" />
                  <circle cx="200" cy="200" r="120" stroke="#DDD6FE" strokeWidth="1.5" />
                  <circle cx="200" cy="200" r="80" stroke="#A7F3D0" strokeWidth="1.5" />
                  
                  {/* Organic interconnected shapes */}
                  <path
                    d="M100 240 C 130 160, 260 140, 300 220 C 330 280, 240 320, 190 280 C 140 240, 80 300, 100 240 Z"
                    fill="#F0ECFF"
                    fillOpacity="0.75"
                  />
                  <path
                    d="M180 120 C 240 100, 300 170, 280 230 C 260 290, 180 280, 150 220 C 120 160, 140 130, 180 120 Z"
                    fill="#ECFDF5"
                    fillOpacity="0.8"
                  />
                  
                  {/* Human movement arcs */}
                  <path
                    d="M80 200 C 150 120, 250 120, 320 200"
                    stroke="#6D4AFF"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M120 250 C 180 310, 260 290, 300 210"
                    stroke="#27C7C9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="6 3"
                  />
                  <path
                    d="M170 170 C 210 140, 240 180, 270 160"
                    stroke="#059669"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  {/* Nodes of connection */}
                  <circle cx="80" cy="200" r="5" fill="#6D4AFF" />
                  <circle cx="200" cy="148" r="6" fill="#C9E86A" stroke="#17151D" strokeWidth="1.5" />
                  <circle cx="320" cy="200" r="5" fill="#27C7C9" />
                  <circle cx="250" cy="260" r="7" fill="#059669" />
                  <circle cx="150" cy="260" r="4" fill="#6D4AFF" />
                </svg>
              </div>

              {/* Floating Context Cards inside composition */}
              <div className="relative z-10 flex justify-between items-start">
                <div className="bg-white/95 backdrop-blur-sm border border-[#E9E5EC] rounded-xl p-3 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#17151D]">
                    <div className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
                    <span>Experiência & Bem-Estar</span>
                  </div>
                  <p className="text-[11px] text-[#77717F] mt-0.5">Jornada integral do servidor</p>
                </div>

                <div className="bg-white/95 backdrop-blur-sm border border-[#E9E5EC] rounded-xl px-2.5 py-1.5 shadow-xs text-right">
                  <span className="text-[10px] uppercase font-bold text-[#77717F] block">Iniciativa</span>
                  <span className="text-xs font-bold text-[#6D4AFF]">ACT-06 Enap</span>
                </div>
              </div>

              {/* Center Graphic Focus: 4 Pillars Harmony */}
              <div className="relative z-10 my-auto text-center py-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-md border border-[#E9E5EC] mx-auto text-[#6D4AFF] mb-3">
                  <HeartPulse className="w-8 h-8 text-[#059669]" />
                </div>
                <h2 className="text-sm font-bold text-[#17151D] tracking-tight">
                  Equilíbrio · Movimento · Saúde · Conexão
                </h2>
                <p className="text-[11px] text-[#77717F] mt-0.5">
                  Conectando pessoas e transformando estratégia em ação diária.
                </p>
              </div>

              {/* Bottom Card Inside Canvas */}
              <div className="relative z-10 bg-white/90 backdrop-blur-sm border border-[#E9E5EC] rounded-xl p-3 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-[#C9E86A]/40 flex items-center justify-center text-[#17151D] font-bold text-[10px]">
                    EX
                  </div>
                  <span className="text-[#17151D] font-medium">Ciclo Funcional Humanizado</span>
                </div>
                <span className="text-[11px] font-semibold text-[#6D4AFF]">COGEM Conecta</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
