import React, { useState } from 'react';
import {
  Calendar,
  Layers,
  FileText,
  Users,
  Compass,
  BarChart3,
  BookOpen,
  Info,
  Menu,
  X,
  Ticket,
} from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  registeredCount: number;
  onOpenMyRegistrations: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  onNavigate,
  registeredCount,
  onOpenMyRegistrations,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'acontece-agora', label: 'Acontece Agora' },
    { id: 'atividades', label: 'Atividades', badge: 'Agenda' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'noticias', label: 'Notícias' },
    { id: 'guias', label: 'Guias & DOC-09' },
    { id: 'comunidade', label: 'Comunidade CoP' },
    { id: 'ciclo', label: 'Ciclo PQVT' },
    { id: 'indicadores', label: 'Indicadores' },
    { id: 'sobre', label: 'Sobre o PQVT' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white border-b border-[#E9E5EC] sticky top-16 z-30 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          
          {/* Desktop Navigation Items */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2 overflow-x-auto no-scrollbar py-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6D4AFF] ${
                    isActive
                      ? 'text-[#6D4AFF] bg-[#F0ECFF] font-semibold'
                      : 'text-[#77717F] hover:text-[#17151D] hover:bg-[#F7F6F8]'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] px-1 py-0.2 bg-[#27C7C9]/20 text-[#0E7490] rounded font-medium">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick Action: Minhas Inscrições */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenMyRegistrations}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors whitespace-nowrap ${
                registeredCount > 0
                  ? 'bg-[#ECFDF5] border-[#A7F3D0] text-[#059669] hover:bg-[#D1FAE5]'
                  : 'bg-[#F7F6F8] border-[#E9E5EC] text-[#77717F] hover:text-[#17151D]'
              }`}
            >
              <Ticket className="w-3.5 h-3.5" />
              <span>Minhas Inscrições</span>
              {registeredCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#059669] text-white text-[10px] font-bold flex items-center justify-center">
                  {registeredCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#77717F] hover:text-[#17151D] hover:bg-[#F7F6F8] rounded-lg transition-colors"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#E9E5EC] px-4 pt-2 pb-4 space-y-1 shadow-lg animate-in slide-in-from-top duration-150">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-[#77717F] px-3 py-1">
            Espaços do PQVT
          </p>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium flex items-center justify-between ${
                activeSection === item.id
                  ? 'bg-[#F0ECFF] text-[#6D4AFF] font-semibold'
                  : 'text-[#17151D] hover:bg-[#F7F6F8]'
              }`}
            >
              <span>{item.label}</span>
              {item.badge && (
                <span className="text-[10px] px-1.5 py-0.5 bg-[#27C7C9]/20 text-[#0E7490] rounded">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};
