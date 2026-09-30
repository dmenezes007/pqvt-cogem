import React from 'react';
import { ArrowRight, Calendar, BookOpen, HeartPulse, Users2, Activity, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onExploreActivities: () => void;
  onExploreAbout: () => void;
  onOpenDoc09: () => void;
}

const tiles = [
  { kicker: 'ACT-06 · PQVT 2026', title: 'Diagnóstico de clima e bem-estar concluído', description: 'Resultados orientam as próximas entregas de ergonomia, equilíbrio e cuidado.', icon: Activity, tone: 'from-[#6D4AFF] to-[#8C6FFF]', large: true },
  { kicker: 'SAÚDE & BEM-ESTAR', title: 'Guia DOC-09', description: 'Orientações para saúde mental no teletrabalho.', icon: HeartPulse, tone: 'from-[#E98578] to-[#F3A49A]' },
  { kicker: 'COMUNIDADES', title: 'CoP Diversidade', description: '31 servidores em um espaço de diálogo.', icon: Users2, tone: 'from-[#24A9DB] to-[#49C3D8]' },
  { kicker: 'AGENDA', title: 'Próximas atividades', description: 'Rodas, oficinas e encontros do ciclo.', icon: Calendar, tone: 'from-[#DFAE3D] to-[#E8C35E]' },
  { kicker: 'CONHECIMENTO', title: 'Biblioteca PQVT', description: 'Guias, manuais e cartilhas institucionais.', icon: BookOpen, tone: 'from-[#7B61C9] to-[#A18BE0]' },
];

export const Hero: React.FC<HeroProps> = ({ onExploreActivities, onExploreAbout, onOpenDoc09 }) => (
  <section id="inicio" className="sp-card overflow-hidden">
    <div className="flex items-center justify-between border-b border-[#EEEAF1] px-4 py-3 sm:px-5">
      <div>
        <div className="sp-section-label">Destaques</div>
        <h1 className="mt-1 text-base font-semibold text-[#2C2831] sm:text-lg">Acontece no PQVT</h1>
      </div>
      <button onClick={onExploreAbout} className="text-[10px] font-semibold text-[#5B3DE0] hover:underline">Ver tudo</button>
    </div>

    <div className="grid grid-cols-1 gap-1 bg-[#EAE6EF] p-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
      {tiles.map((tile, index) => {
        const Icon = tile.icon;
        const isLarge = tile.large;
        return (
          <button
            key={tile.title}
            onClick={index === 1 ? onOpenDoc09 : index === 3 ? onExploreActivities : onExploreAbout}
            className={`group relative overflow-hidden text-left ${isLarge ? 'sm:col-span-2 sm:row-span-2 lg:col-span-2 lg:row-span-2 min-h-[300px]' : 'min-h-[148px]'} bg-gradient-to-br ${tile.tone} p-5 text-white transition hover:brightness-[1.04]`}
          >
            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border border-white/20" />
            <div className="absolute -bottom-10 -right-5 h-32 w-32 rounded-full border border-white/15" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-[0.13em] text-white/75">{tile.kicker}</span>
                  <Icon className="h-5 w-5 text-white/80" />
                </div>
                <h2 className={`${isLarge ? 'max-w-xl text-2xl sm:text-3xl' : 'text-sm'} font-bold leading-tight`}>{tile.title}</h2>
                <p className={`${isLarge ? 'max-w-lg text-sm' : 'text-[10px]'} mt-2 leading-relaxed text-white/80`}>{tile.description}</p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[10px] font-semibold text-white">
                Acessar <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
              </span>
            </div>
          </button>
        );
      })}
    </div>

    <div className="grid gap-3 border-t border-[#EEEAF1] bg-white p-4 sm:grid-cols-[1fr_auto] sm:items-center sm:px-5">
      <div className="flex items-start gap-2.5">
        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#168A65]" />
        <div>
          <p className="text-[11px] font-semibold text-[#34303A]">Programa de Qualidade de Vida no Trabalho · COGEM</p>
          <p className="mt-0.5 text-[10px] leading-relaxed text-[#817B88]">Um ponto de entrada institucional para atividades, serviços, conhecimento e participação dos servidores.</p>
        </div>
      </div>
      <div className="flex gap-2">
        <button onClick={onExploreActivities} className="inline-flex items-center gap-1.5 rounded-md bg-[#6D4AFF] px-3 py-2 text-[10px] font-semibold text-white hover:bg-[#5B3DE0]">
          <Calendar className="h-3.5 w-3.5" /> Próximas atividades
        </button>
        <button onClick={onOpenDoc09} className="hidden items-center gap-1.5 rounded-md border border-[#DDD8E3] px-3 py-2 text-[10px] font-semibold text-[#514B59] hover:bg-[#F8F6FA] sm:inline-flex">
          <BookOpen className="h-3.5 w-3.5" /> DOC-09
        </button>
      </div>
    </div>
  </section>
);
