import React from 'react';
import { Activity, Users2, HeartHandshake, CalendarDays, Phone, Cloud, MoreHorizontal } from 'lucide-react';

interface IntranetRailProps {
  onNavigate: (sectionId: string) => void;
}

const items = [
  { label: 'Início', id: 'inicio', icon: Activity },
  { label: 'Comunidades', id: 'comunidade', icon: Users2 },
  { label: 'Serviços', id: 'servicos', icon: HeartHandshake },
  { label: 'Agenda', id: 'atividades', icon: CalendarDays },
];

export const IntranetRail: React.FC<IntranetRailProps> = ({ onNavigate }) => (
  <aside className="sp-rail fixed bottom-0 left-0 top-12 z-[45] hidden w-[60px] border-r border-[#D9D6DE] bg-[#F2F1EF] lg:flex lg:flex-col" aria-label="Aplicativos e atalhos">
    <div className="flex flex-1 flex-col items-center py-2">
      {items.map(({ label, id, icon: Icon }) => (
        <button key={id} onClick={() => onNavigate(id)} className="group flex w-full flex-col items-center gap-1 border-l-2 border-transparent px-1 py-2.5 text-[#5D5962] transition hover:border-[#6D4AFF] hover:bg-white hover:text-[#4F35B7]">
          <Icon className="h-4 w-4" />
          <span className="max-w-[52px] text-center text-[8px] leading-tight">{label}</span>
        </button>
      ))}
      <div className="my-1 h-px w-8 bg-[#D9D6DE]" />
      <button onClick={() => onNavigate('servicos')} className="group flex w-full flex-col items-center gap-1 border-l-2 border-transparent px-1 py-2.5 text-[#5D5962] hover:border-[#6D4AFF] hover:bg-white hover:text-[#4F35B7]">
        <Phone className="h-4 w-4" />
        <span className="text-[8px]">Canais</span>
      </button>
      <button onClick={() => onNavigate('guias')} className="group flex w-full flex-col items-center gap-1 border-l-2 border-transparent px-1 py-2.5 text-[#5D5962] hover:border-[#6D4AFF] hover:bg-white hover:text-[#4F35B7]">
        <Cloud className="h-4 w-4" />
        <span className="text-[8px]">Biblioteca</span>
      </button>
    </div>
    <button onClick={() => onNavigate('sobre')} className="flex h-12 w-full items-center justify-center border-t border-[#D9D6DE] text-[#6A656E] hover:bg-white hover:text-[#4F35B7]" aria-label="Mais atalhos">
      <MoreHorizontal className="h-5 w-5" />
    </button>
  </aside>
);
