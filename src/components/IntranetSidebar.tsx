import React from 'react';
import { Activity, BookOpen, HeartHandshake, Users2, Search, Clock3, Dumbbell } from 'lucide-react';

interface IntranetSidebarProps {
  onNavigate: (sectionId: string) => void;
}

const links = [
  { id: 'atividades', label: 'Atividades', description: 'Agenda e inscrições', icon: Activity },
  { id: 'servicos', label: 'Serviços', description: 'Canais de acolhimento', icon: HeartHandshake },
  { id: 'guias', label: 'Documentos', description: 'Guias e orientações', icon: BookOpen },
  { id: 'comunidade', label: 'Comunidades', description: 'Espaços colaborativos', icon: Users2 },
];

const connections = [
  {
    label: 'Pessoas e Comunidades',
    description: 'Encontre espaços de troca, apoio e participação relacionados ao programa.',
    cta: 'Explorar comunidades',
    icon: Users2,
    action: 'comunidade',
    tone: 'purple',
  },
  {
    label: 'Acolhimento e Escuta',
    description: 'Canais institucionais para orientação, solicitação, sugestão e apoio.',
    cta: 'Acessar serviços',
    icon: HeartHandshake,
    action: 'servicos',
    tone: 'coral',
  },
  {
    label: 'Atividades Físicas',
    description: 'Conheça as modalidades disponíveis e encontre uma atividade para incluir movimento na sua rotina.',
    cta: 'Ver atividades',
    icon: Dumbbell,
    action: 'atividades',
    tone: 'teal',
  },
  {
    label: 'Horário do Transporte Solidário',
    description: 'Consulte os horários e organize seu deslocamento com o serviço de transporte solidário.',
    cta: 'Consultar horários',
    icon: Clock3,
    action: 'servicos',
    tone: 'gold',
  },
];

const toneClasses = {
  purple: {
    icon: 'bg-[#F0ECFF] text-[#6D4AFF]',
    button: 'text-[#5B3DE0] hover:bg-[#F5F2FF]',
  },
  coral: {
    icon: 'bg-[#FFF0ED] text-[#D56F61]',
    button: 'text-[#C85F53] hover:bg-[#FFF8F6]',
  },
  teal: {
    icon: 'bg-[#E9F8FB] text-[#1594A8]',
    button: 'text-[#16879A] hover:bg-[#F3FCFD]',
  },
  gold: {
    icon: 'bg-[#FFF6DE] text-[#B48319]',
    button: 'text-[#A87812] hover:bg-[#FFFBF0]',
  },
};

export const IntranetSidebar: React.FC<IntranetSidebarProps> = ({ onNavigate }) => (
  <aside className="space-y-4" aria-label="Recursos laterais do PQVT">
    <section className="sp-webpart sp-card p-4 sm:p-5">
      <div className="mb-3 flex items-center justify-between">
        <span className="sp-section-label">Links úteis</span>
        <button onClick={() => onNavigate('servicos')} className="text-[10px] font-semibold text-[#5B3DE0] hover:underline">
          Ver tudo
        </button>
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        {links.map(({ id, label, description, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onNavigate(id)}
            className="group min-h-[104px] rounded-xl border border-[#ECE8F0] bg-white p-3 text-left transition hover:-translate-y-0.5 hover:border-[#D7CCF8] hover:bg-[#FBFAFF] hover:shadow-sm"
          >
            <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#F0ECFF] text-[#6D4AFF] transition group-hover:bg-[#6D4AFF] group-hover:text-white">
              <Icon className="h-4 w-4" />
            </span>
            <span className="block text-[11px] font-semibold text-[#29262F]">{label}</span>
            <span className="mt-0.5 block text-[9px] leading-snug text-[#817B88]">{description}</span>
          </button>
        ))}
      </div>
    </section>

    <section className="sp-webpart sp-card p-4 sm:p-5">
      <div className="mb-3 flex items-center justify-between">
        <span className="sp-section-label">Conexões</span>
        <span className="text-[10px] text-[#817B88]">COGEM</span>
      </div>

      <div className="space-y-2.5">
        {connections.map(({ label, description, cta, icon: Icon, action, tone }) => {
          const toneStyle = toneClasses[tone as keyof typeof toneClasses];

          return (
            <div key={label} className="rounded-xl border border-[#ECE8F0] bg-white p-3.5">
              <div className="flex items-start gap-2.5">
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${toneStyle.icon}`}>
                  <Icon className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <div className="text-[11px] font-semibold leading-tight text-[#38343E]">{label}</div>
                  <p className="mt-1.5 text-[10px] leading-relaxed text-[#817B88]">{description}</p>
                </div>
              </div>

              <button
                onClick={() => onNavigate(action)}
                className={`mt-3 inline-flex items-center gap-1.5 rounded-md border border-[#DCD6E4] px-2.5 py-1.5 text-[10px] font-semibold transition ${toneStyle.button}`}
              >
                {cta} <span aria-hidden="true">→</span>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  </aside>
);
