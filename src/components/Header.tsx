import React, { useState } from 'react';
import {
  Search,
  Bell,
  CheckCircle2,
  ChevronDown,
  Layers,
  Sparkles,
  ExternalLink,
  Shield,
  User,
  HeartHandshake,
  Compass,
} from 'lucide-react';
import { UserPersona } from '../types/pqvt';

interface HeaderProps {
  currentPersona: UserPersona;
  onSelectPersona: (persona: UserPersona) => void;
  onOpenSearch: () => void;
  onOpenSharePointSpecs: () => void;
  registeredCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentPersona,
  onSelectPersona,
  onOpenSearch,
  onOpenSharePointSpecs,
  registeredCount,
}) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showPersonaMenu, setShowPersonaMenu] = useState(false);

  const notifications = [
    {
      id: 'n1',
      title: 'Nova Roda de Conversa aberta',
      desc: 'Inscrições para debate sobre foco no PGD em 14/10.',
      time: 'Há 2 horas',
      unread: true,
    },
    {
      id: 'n2',
      title: 'Guia DOC-09 atualizado',
      desc: 'Revisão das orientações de pausas ativas e ergonomia.',
      time: 'Ontem',
      unread: true,
    },
    {
      id: 'n3',
      title: 'CoP Diversidade',
      desc: 'Encontro quinzenal agendado para esta quinta-feira.',
      time: 'Há 2 dias',
      unread: false,
    },
  ];

  const personaLabels: Record<UserPersona, { label: string; tag: string; tip: string }> = {
    servidor: {
      label: 'Visão do Servidor',
      tag: 'Participação & Cuidado',
      tip: 'Acesso rápido a inscrições, acolhimento, guias práticos e serviços.',
    },
    gestor: {
      label: 'Visão da Liderança',
      tag: 'Clima & Indicadores',
      tip: 'Foco no acompanhamento de entregas, bem-estar da equipe e dados.',
    },
    equipe_pqvt: {
      label: 'Equipe PQVT / COGEM',
      tag: 'Gestão do Programa',
      tip: 'Monitoramento do ACT-06, listas de inscritos e ciclo de melhoria.',
    },
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E9E5EC] transition-all">
      {/* Intranet System Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Brand & Breadcrumb */}
          <div className="flex items-center gap-3 md:gap-5 min-w-0">
            {/* Enap Official Badge / Monogram Lockup */}
            <a
              href="#inicio"
              className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6D4AFF] rounded-lg p-1"
              aria-label="Portal PQVT Enap - Página inicial"
            >
              <div className="w-9 h-9 rounded-lg bg-[#17151D] flex items-center justify-center text-white font-bold text-base tracking-tight shadow-xs group-hover:bg-[#6D4AFF] transition-colors">
                <span className="font-extrabold text-[15px] tracking-tighter">enap</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-sm tracking-tight text-[#17151D]">COGEM Conecta</span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#6D4AFF] bg-[#F0ECFF] px-1.5 py-0.2 rounded">
                    PQVT
                  </span>
                </div>
                <span className="text-[11px] text-[#77717F] hidden sm:inline leading-none">
                  Gestão Estratégica & Modernização
                </span>
              </div>
            </a>

            {/* Breadcrumb - SharePoint context */}
            <div className="hidden lg:flex items-center text-xs text-[#77717F] border-l border-[#E9E5EC] pl-4">
              <span>COGEM Conecta</span>
              <span className="mx-1.5 text-[#A09BAC]">/</span>
              <span>Pessoas & Comunidades</span>
              <span className="mx-1.5 text-[#A09BAC]">/</span>
              <span>Eixo 2</span>
              <span className="mx-1.5 text-[#A09BAC]">/</span>
              <span className="font-medium text-[#17151D]">PQVT</span>
            </div>
          </div>

          {/* Center: Global Search trigger */}
          <div className="flex-1 max-w-md mx-2 hidden md:block">
            <button
              onClick={onOpenSearch}
              className="w-full flex items-center justify-between px-3.5 py-2 text-xs text-[#77717F] bg-[#F7F6F8] hover:bg-[#EFECEF] border border-[#E9E5EC] rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#6D4AFF]"
              aria-label="Abrir pesquisa global do PQVT"
            >
              <span className="flex items-center gap-2 truncate">
                <Search className="w-3.5 h-3.5 text-[#77717F]" />
                <span className="truncate">Pesquisar atividades, serviços, notícias e guias...</span>
              </span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono text-[#77717F] bg-white border border-[#E9E5EC] rounded">
                Ctrl K
              </kbd>
            </button>
          </div>

          {/* Right Action Tools: Persona, Notifications, SharePoint Spec, Profile */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Mobile search button */}
            <button
              onClick={onOpenSearch}
              className="md:hidden p-2 text-[#77717F] hover:text-[#17151D] hover:bg-[#F7F6F8] rounded-lg transition-colors"
              aria-label="Pesquisar"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Persona Switcher Menu */}
            <div className="relative">
              <button
                onClick={() => setShowPersonaMenu(!showPersonaMenu)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-[#17151D] bg-[#F7F6F8] hover:bg-[#EFECEF] border border-[#E9E5EC] rounded-lg transition-colors"
                aria-expanded={showPersonaMenu}
                aria-label="Alternar perfil de visualização"
              >
                <User className="w-3.5 h-3.5 text-[#6D4AFF]" />
                <span className="hidden sm:inline">{personaLabels[currentPersona].label}</span>
                <ChevronDown className="w-3 h-3 text-[#77717F]" />
              </button>

              {showPersonaMenu && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setShowPersonaMenu(false)}
                  />
                  <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-lg border border-[#E9E5EC] p-2 z-20 animate-in fade-in zoom-in-95">
                    <div className="px-3 py-2 border-b border-[#E9E5EC] mb-1">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-[#77717F]">
                        Perfil de Visualização
                      </p>
                      <p className="text-xs text-[#17151D]">
                        Adapta destaques contextuais na página:
                      </p>
                    </div>

                    {(['servidor', 'gestor', 'equipe_pqvt'] as UserPersona[]).map((p) => (
                      <button
                        key={p}
                        onClick={() => {
                          onSelectPersona(p);
                          setShowPersonaMenu(false);
                        }}
                        className={`w-full text-left p-2.5 rounded-lg text-xs transition-colors flex flex-col gap-0.5 ${
                          currentPersona === p
                            ? 'bg-[#F0ECFF] text-[#6D4AFF] font-medium'
                            : 'hover:bg-[#F7F6F8] text-[#17151D]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold">{personaLabels[p].label}</span>
                          <span className="text-[10px] text-[#77717F]">{personaLabels[p].tag}</span>
                        </div>
                        <span className="text-[11px] text-[#77717F]">{personaLabels[p].tip}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* SharePoint Spec Inspector Button */}
            <button
              onClick={onOpenSharePointSpecs}
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-[#77717F] hover:text-[#17151D] hover:bg-[#F7F6F8] border border-transparent hover:border-[#E9E5EC] rounded-lg transition-colors"
              title="Ver mapeamento para Microsoft Lists, Power Automate e Power Apps"
            >
              <Layers className="w-3.5 h-3.5 text-[#27C7C9]" />
              <span className="text-[11px]">Arquitetura M365</span>
            </button>

            {/* Notifications Bell */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 text-[#77717F] hover:text-[#17151D] hover:bg-[#F7F6F8] rounded-lg transition-colors"
                aria-label="Notificações do PQVT"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#6D4AFF] rounded-full" />
              </button>

              {showNotifications && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setShowNotifications(false)}
                  />
                  <div className="absolute right-0 mt-2 w-80 sm:w-88 bg-white rounded-xl shadow-xl border border-[#E9E5EC] p-3 z-20">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E9E5EC]">
                      <span className="text-xs font-semibold text-[#17151D]">Atualizações de QVT</span>
                      <span className="text-[11px] text-[#6D4AFF] hover:underline cursor-pointer">
                        Marcar como lidas
                      </span>
                    </div>
                    <div className="space-y-2">
                      {notifications.map((n) => (
                        <div
                          key={n.id}
                          className={`p-2.5 rounded-lg text-xs transition-colors ${
                            n.unread ? 'bg-[#F0ECFF]/50 border-l-2 border-[#6D4AFF]' : 'bg-[#F7F6F8]'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-[#17151D]">{n.title}</span>
                            <span className="text-[10px] text-[#77717F]">{n.time}</span>
                          </div>
                          <p className="text-[11px] text-[#77717F] mt-1">{n.desc}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 pt-2 border-t border-[#E9E5EC] text-center">
                      <a
                        href="#noticias"
                        onClick={() => setShowNotifications(false)}
                        className="text-xs font-medium text-[#6D4AFF] hover:underline"
                      >
                        Ver todas as notícias e comunicados →
                      </a>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* User Profile Pill */}
            <div className="flex items-center gap-2 pl-1 sm:pl-2 border-l border-[#E9E5EC]">
              <div className="w-8 h-8 rounded-full bg-[#17151D] text-white flex items-center justify-center text-xs font-bold ring-2 ring-[#F0ECFF]">
                DM
              </div>
              <div className="hidden xl:flex flex-col text-left">
                <span className="text-xs font-semibold text-[#17151D] leading-tight">Davison Menezes</span>
                <span className="text-[10px] text-[#77717F] leading-tight">Servidor Enap</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};
