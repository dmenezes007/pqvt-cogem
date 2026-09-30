import React from 'react';
import { Activity, BookOpen, HeartHandshake, Users2, MessageCircle, Search, FileText, ShieldCheck } from 'lucide-react';

interface IntranetSidebarProps {
  onNavigate: (sectionId: string) => void;
  onOpenSharePointSpecs: () => void;
}

const links = [
  { id: 'atividades', label: 'Atividades', description: 'Agenda e inscrições', icon: Activity },
  { id: 'servicos', label: 'Serviços', description: 'Canais de acolhimento', icon: HeartHandshake },
  { id: 'guias', label: 'Documentos', description: 'Guias e orientações', icon: BookOpen },
  { id: 'comunidade', label: 'Comunidades', description: 'Espaços colaborativos', icon: Users2 },
];

export const IntranetSidebar: React.FC<IntranetSidebarProps> = ({ onNavigate, onOpenSharePointSpecs }) => (
  <aside className="space-y-4" aria-label="Recursos laterais do PQVT">
    <section className="sp-webpart sp-card p-4 sm:p-5">
      <div className="mb-3 flex items-center justify-between">
        <span className="sp-section-label">Links úteis</span>
        <button onClick={() => onNavigate('servicos')} className="text-[10px] font-semibold text-[#5B3DE0] hover:underline">Ver tudo</button>
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        {links.map(({ id, label, description, icon: Icon }) => (
          <button key={id} onClick={() => onNavigate(id)}
            className="group min-h-[104px] rounded-xl border border-[#ECE8F0] bg-white p-3 text-left transition hover:-translate-y-0.5 hover:border-[#D7CCF8] hover:bg-[#FBFAFF] hover:shadow-sm">
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
      <div className="rounded-xl border border-[#ECE8F0] bg-white p-3.5">
        <div className="flex items-center gap-2 text-[11px] font-semibold text-[#38343E]">
          <Users2 className="h-4 w-4 text-[#6D4AFF]" />
          Pessoas e comunidades
        </div>
        <p className="mt-1.5 text-[10px] leading-relaxed text-[#817B88]">Encontre espaços de troca, apoio e participação relacionados ao programa.</p>
        <button onClick={() => onNavigate('comunidade')} className="mt-3 inline-flex items-center gap-1.5 rounded-md border border-[#DCD6E4] px-2.5 py-1.5 text-[10px] font-semibold text-[#5B3DE0] hover:bg-[#F5F2FF]">
          <Search className="h-3 w-3" /> Explorar comunidades
        </button>
      </div>
      <div className="mt-2.5 rounded-xl border border-[#ECE8F0] bg-white p-3.5">
        <div className="flex items-center gap-2 text-[11px] font-semibold text-[#38343E]">
          <MessageCircle className="h-4 w-4 text-[#E98578]" />
          Acolhimento e escuta
        </div>
        <p className="mt-1.5 text-[10px] leading-relaxed text-[#817B88]">Canais institucionais para orientação, solicitação, sugestão e apoio.</p>
        <button onClick={() => onNavigate('servicos')} className="mt-3 text-[10px] font-semibold text-[#5B3DE0] hover:underline">Acessar serviços →</button>
      </div>
    </section>

    <section className="sp-webpart sp-card p-4 sm:p-5">
      <div className="mb-3 flex items-center justify-between">
        <span className="sp-section-label">Ouvidoria</span>
        <ShieldCheck className="h-4 w-4 text-[#E98578]" />
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[
          ['Denúncia', 'Canal protegido'],
          ['Solicitação', 'Peça orientação'],
          ['Sugestão', 'Contribua'],
          ['Elogio', 'Reconheça'],
        ].map(([label, desc]) => (
          <button key={label} onClick={() => onNavigate('servicos')}
            className="rounded-xl border border-[#F0E9E7] bg-[#FFFBFA] px-2.5 py-3 text-center transition hover:bg-white hover:shadow-sm">
            <span className="mx-auto mb-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-[#FFE6E0] text-[#D56F61]">
              <FileText className="h-3.5 w-3.5" />
            </span>
            <span className="block text-[10px] font-semibold text-[#514A50]">{label}</span>
            <span className="mt-0.5 block text-[8px] text-[#91868A]">{desc}</span>
          </button>
        ))}
      </div>
    </section>

    <button onClick={onOpenSharePointSpecs}
      className="flex w-full items-center justify-between rounded-xl border border-[#DED7F0] bg-[#F8F5FF] px-4 py-3 text-left transition hover:bg-[#F1ECFF]">
      <span>
        <span className="block text-[10px] font-bold uppercase tracking-[0.1em] text-[#6B57A8]">Arquitetura</span>
        <span className="mt-0.5 block text-[11px] font-semibold text-[#40365A]">M365 / SharePoint</span>
      </span>
      <span className="text-[11px] font-semibold text-[#6D4AFF]">→</span>
    </button>
  </aside>
);
