import React, { useState } from 'react';
import { Home, CalendarDays, HeartHandshake, Newspaper, BookOpen, Users, BarChart3, Info, Menu, X, Ticket, ChevronDown } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'Página inicial', icon: Home },
    { id: 'acontece-agora', label: 'Plano PQVT 2026', icon: BarChart3 },
    { id: 'atividades', label: 'Atividades', icon: CalendarDays },
    { id: 'servicos', label: 'Serviços', icon: HeartHandshake },
    { id: 'noticias', label: 'Notícias', icon: Newspaper },
    { id: 'guias', label: 'Documentos', icon: BookOpen },
    { id: 'comunidade', label: 'Comunidades', icon: Users },
    { id: 'indicadores', label: 'Indicadores', icon: BarChart3 },
    { id: 'praticas-ide', label: 'Práticas IDE', icon: BookOpen },
    { id: 'sobre', label: 'Sobre o PQVT', icon: Info },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-[62px] z-40 border-b border-[#E1DFE5] bg-white" aria-label="Navegação do site PQVT"><div className="">
      <div className="mx-auto flex min-h-[48px] max-w-[1440px] items-center px-4 lg:px-6">
        <div className="hidden min-w-0 flex-1 items-center overflow-x-auto md:flex no-scrollbar">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = activeSection === item.id;
            return (
              <button key={item.id} onClick={() => handleNavClick(item.id)}
                className={`group relative flex h-12 shrink-0 items-center gap-2 border-b-2 px-3 text-[12px] font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#6D4AFF] ${active ? 'border-[#6D4AFF] bg-[#F8F6FF] text-[#5B3DE0]' : 'border-transparent text-[#5F5A65] hover:bg-[#F7F6F8] hover:text-[#17151D]'}`}
                aria-current={active ? 'page' : undefined}>
                <Icon className="h-3.5 w-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-2 pl-2">
          <button onClick={() => setMobileMenuOpen((open) => !open)}
            className="flex h-9 w-9 items-center justify-center rounded-sm border border-[#E1DFE5] text-[#5F5A65] hover:bg-[#F7F6F8] md:hidden"
            aria-label="Abrir navegação" aria-expanded={mobileMenuOpen}>
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      </div>

      {mobileMenuOpen && (
        <div className="border-t border-[#E1DFE5] bg-white px-4 pb-4 pt-2 shadow-lg md:hidden">
          <div className="mb-2 flex items-center justify-between px-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#77717F]">Navegação do site</span>
            <ChevronDown className="h-3.5 w-3.5 text-[#77717F]" />
          </div>
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = activeSection === item.id;
              return (
                <button key={item.id} onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-3 rounded-sm px-3 py-2.5 text-left text-xs font-medium ${active ? 'bg-[#F0ECFF] text-[#5B3DE0]' : 'text-[#302D35] hover:bg-[#F7F6F8]'}`}>
                  <Icon className="h-4 w-4" />{item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};
