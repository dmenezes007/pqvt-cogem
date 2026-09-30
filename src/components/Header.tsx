import React, { useState } from 'react';
import { Search, Bell, ChevronDown, Grid2X2, HelpCircle, Settings, User, HeartHandshake, Menu } from 'lucide-react';
import { UserPersona } from '../types/pqvt';

const ENAP_LOGO_URL = 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Logo-enap.png';

interface HeaderProps {
  currentPersona: UserPersona;
  onSelectPersona: (persona: UserPersona) => void;
  onOpenSearch: () => void;
  onOpenSharePointSpecs: () => void;
  registeredCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentPersona, onSelectPersona, onOpenSearch, onOpenSharePointSpecs, registeredCount,
}) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showPersonaMenu, setShowPersonaMenu] = useState(false);
  const [showAppMenu, setShowAppMenu] = useState(false);

  const personaLabels: Record<UserPersona, { label: string; tag: string; tip: string }> = {
    servidor: { label: 'Visão do servidor', tag: 'Participação', tip: 'Atividades, serviços, guias e acolhimento.' },
    gestor: { label: 'Visão da liderança', tag: 'Clima & indicadores', tip: 'Acompanhamento de entregas e dados.' },
    equipe_pqvt: { label: 'Equipe PQVT / COGEM', tag: 'Gestão do programa', tip: 'ACT-06, inscrições e melhoria contínua.' },
  };

  const notifications = [
    { id: 'n1', title: 'Nova atividade disponível', desc: 'Confira a agenda do PQVT e as próximas inscrições.', time: 'Atualização', unread: true },
    { id: 'n2', title: 'Guia DOC-09', desc: 'Acesse as orientações institucionais sobre saúde mental no teletrabalho.', time: 'Atualização', unread: true },
    { id: 'n3', title: 'CoP Diversidade', desc: 'Consulte a comunidade e seus próximos encontros.', time: 'Atualização', unread: false },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E1DFE5] shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
      <div className="bg-[#1f1f1f] text-white">
        <div className="mx-auto flex h-12 max-w-[1440px] items-center gap-2 px-4 lg:px-6">
          <div className="relative">
            <button onClick={() => setShowAppMenu((open) => !open)} className="flex h-9 w-9 items-center justify-center rounded-sm hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white" aria-label="Abrir iniciador de aplicativos" aria-expanded={showAppMenu}>
              <Grid2X2 className="h-5 w-5" />
            </button>
            {showAppMenu && (
              <>
                <button className="fixed inset-0 z-10 cursor-default" onClick={() => setShowAppMenu(false)} aria-label="Fechar menu" />
                <div className="absolute left-0 top-11 z-20 w-72 rounded-md border border-[#D9D6DE] bg-white p-3 text-[#17151D] shadow-2xl">
                  <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#6F6B75]">Aplicativos</div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      ['Início', 'Página inicial da intranet'],
                      ['COGEM Conecta', 'Workspace de gestão'],
                      ['PQVT', 'Qualidade de vida no trabalho'],
                      ['Documentos', 'Conhecimento e arquivos'],
                    ].map(([title, description]) => (
                      <button key={title} onClick={() => setShowAppMenu(false)} className="rounded-md border border-[#ECE9EF] p-3 text-left hover:bg-white/10">
                        <span className="block text-xs font-semibold">{title}</span>
                        <span className="mt-1 block text-[10px] leading-snug text-white/65">{description}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="hidden h-5 w-px bg-white/20 sm:block" />
          <div className="flex min-w-0 items-center gap-3">
            <span className="text-sm font-semibold tracking-tight">Enap</span>
            <span className="hidden text-xs text-white/60 md:inline">Microsoft 365</span>
          </div>
          <div className="ml-auto flex items-center gap-1">
            <button onClick={onOpenSearch} className="hidden items-center gap-2 rounded-sm px-3 py-1.5 text-xs text-white/80 hover:bg-white/10 md:flex" aria-label="Pesquisar">
              <Search className="h-4 w-4" /><span>Pesquisar</span>
            </button>
            <button className="hidden h-8 w-8 items-center justify-center rounded-sm hover:bg-white/10 sm:flex" aria-label="Ajuda"><HelpCircle className="h-4 w-4" /></button>
            <button className="hidden h-8 w-8 items-center justify-center rounded-sm hover:bg-white/10 sm:flex" aria-label="Configurações" onClick={onOpenSharePointSpecs}><Settings className="h-4 w-4" /></button>
            <button className="h-8 w-8 overflow-hidden rounded-full bg-[#6D4AFF] text-[10px] font-bold ring-2 ring-white/10" aria-label="Perfil do usuário">DM</button>
          </div>
        </div>
      </div>

      <div className="bg-[#6D4AFF] text-white">
        <div className="mx-auto flex min-h-[62px] max-w-[1440px] items-center gap-4 px-4 pl-[76px] lg:px-6 lg:pl-[76px]">
          <a href="#inicio" className="flex min-w-0 items-center gap-4 rounded-sm py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white" aria-label="PQVT Enap - Página inicial">
            <div className="flex h-10 w-[86px] shrink-0 items-center overflow-hidden">
              <img src={ENAP_LOGO_URL} alt="Enap" className="max-h-10 w-auto max-w-[86px] object-contain object-left brightness-0 invert" onError={(event) => { event.currentTarget.style.display = 'none'; }} />
            </div>
            <div className="hidden min-w-0 border-l border-white/20 pl-4 sm:block">
              <div className="flex items-center gap-2">
                <span className="truncate text-[15px] font-semibold text-white">Programa de Qualidade de Vida no Trabalho</span>
                <span className="rounded-sm bg-white/15 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-white">PQVT</span>
              </div>
              <span className="mt-0.5 block text-[11px] text-white/65">COGEM · Enap</span>
            </div>
          </a>

          <div className="ml-auto flex items-center gap-1 sm:gap-2">
            <button onClick={onOpenSearch} className="flex h-9 w-9 items-center justify-center rounded-sm text-white hover:bg-white/10 md:hidden" aria-label="Pesquisar"><Search className="h-4 w-4" /></button>
            <div className="relative">
              <button onClick={() => setShowPersonaMenu((open) => !open)} className="hidden items-center gap-2 rounded-sm border border-white/20 px-3 py-2 text-xs font-medium text-white hover:bg-white/10 sm:flex" aria-expanded={showPersonaMenu}>
                <User className="h-3.5 w-3.5 text-white" /><span>{personaLabels[currentPersona].label}</span><ChevronDown className="h-3 w-3 text-[#77717F]" />
              </button>
              {showPersonaMenu && (
                <>
                  <button className="fixed inset-0 z-10 cursor-default" onClick={() => setShowPersonaMenu(false)} aria-label="Fechar menu" />
                  <div className="absolute right-0 top-11 z-20 w-72 rounded-md border border-[#D9D6DE] bg-white p-2 shadow-xl">
                    <div className="border-b border-[#ECE9EF] px-3 py-2"><p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#77717F]">Perfil de visualização</p></div>
                    {(['servidor', 'gestor', 'equipe_pqvt'] as UserPersona[]).map((persona) => (
                      <button key={persona} onClick={() => { onSelectPersona(persona); setShowPersonaMenu(false); }} className={`mt-1 w-full rounded-sm p-3 text-left ${currentPersona === persona ? 'bg-white/15 text-white' : 'hover:bg-[#F7F6F8]'}`}>
                        <div className="flex items-center justify-between gap-2"><span className="text-xs font-semibold">{personaLabels[persona].label}</span><span className="text-[9px] uppercase tracking-wider text-[#77717F]">{personaLabels[persona].tag}</span></div>
                        <span className="mt-1 block text-[11px] leading-snug text-[#77717F]">{personaLabels[persona].tip}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="relative">
              <button onClick={() => setShowNotifications((open) => !open)} className="relative flex h-9 w-9 items-center justify-center rounded-sm text-[#605B66] hover:bg-[#F5F3F7]" aria-label="Notificações" aria-expanded={showNotifications}>
                <Bell className="h-4 w-4" /><span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#6D4AFF]" />
              </button>
              {showNotifications && (
                <>
                  <button className="fixed inset-0 z-10 cursor-default" onClick={() => setShowNotifications(false)} aria-label="Fechar notificações" />
                  <div className="absolute right-0 top-11 z-20 w-[340px] rounded-md border border-[#D9D6DE] bg-white p-3 shadow-xl">
                    <div className="flex items-center justify-between border-b border-[#ECE9EF] pb-2"><span className="text-xs font-semibold">Atualizações do PQVT</span><span className="text-[10px] text-[#77717F]">{registeredCount} inscrição(ões)</span></div>
                    <div className="mt-2 space-y-1.5">
                      {notifications.map((notification) => (
                        <div key={notification.id} className={`rounded-sm p-3 ${notification.unread ? 'border-l-2 border-[#6D4AFF] bg-[#F8F6FF]' : 'bg-[#F7F6F8]'}`}>
                          <div className="flex items-start justify-between gap-2"><span className="text-xs font-semibold">{notification.title}</span><span className="text-[9px] text-[#77717F]">{notification.time}</span></div>
                          <p className="mt-1 text-[11px] leading-snug text-[#77717F]">{notification.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            <a href="#servicos" className="hidden items-center gap-1 rounded-sm px-2 py-2 text-xs font-medium text-white hover:bg-white/10 lg:flex">
              <HeartHandshake className="h-4 w-4 text-white" /><span>Serviços</span>
            </a>
            <button className="flex h-9 w-9 items-center justify-center rounded-sm text-[#605B66] hover:bg-[#F5F3F7] sm:hidden" aria-label="Pesquisar" onClick={onOpenSearch}><Menu className="h-4 w-4" /></button>
          </div>
        </div>
      </div>
    </header>
  );
};