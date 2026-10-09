import React from 'react';
import { Search } from 'lucide-react';

export function Header({ onOpenSearch }: { onOpenSearch: () => void }) {
  return <header className="sticky top-0 z-50 border-b border-[#E1DFE5] bg-[#6D4AFF] text-white">
    <div className="mx-auto flex min-h-[62px] max-w-[1440px] items-center gap-4 px-4 lg:px-6">
      <a href="/#inicio" className="flex min-w-0 items-center gap-4 py-2 focus-visible:outline-2 focus-visible:outline-white" aria-label="PQVT Enap - Página inicial">
        <img src="/enap-logo.png" alt="Enap" className="ide-enap-logo shrink-0" />
        <div className="min-w-0 border-l border-white/20 pl-4"><p className="text-sm font-semibold sm:text-[15px]">Programa de Qualidade de Vida no Trabalho</p><span className="text-[11px] text-white/75">COGEM · Enap</span></div>
      </a>
      <button onClick={onOpenSearch} className="ml-auto flex shrink-0 items-center gap-2 rounded-md p-2 text-sm hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white" aria-label="Pesquisar"><Search className="h-4 w-4" /><span className="hidden sm:inline">Pesquisar</span></button>
    </div>
  </header>;
}
