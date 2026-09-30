import React from 'react';
import { Mail, Phone, MapPin, ExternalLink, ShieldCheck, Heart, Layers } from 'lucide-react';

interface FooterProps {
  onOpenSharePointSpecs: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSharePointSpecs }) => {
  return (
    <footer className="bg-[#17151D] text-white pt-12 pb-8 border-t border-[#2A2733]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-[#2D2A37]">
          
          {/* Col 1-5: Brand & Mission */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#6D4AFF] flex items-center justify-center text-white font-extrabold text-sm tracking-tighter">
                enap
              </div>
              <div>
                <span className="font-bold text-sm tracking-tight text-white block">
                  COGEM Conecta · PQVT
                </span>
                <span className="text-[11px] text-[#A09BAC]">
                  Escola Nacional de Administração Pública
                </span>
              </div>
            </div>

            <p className="text-xs text-[#A09BAC] leading-relaxed max-w-sm mb-4">
              Programa de Qualidade de Vida no Trabalho. Construído pela Coordenação de Gestão Estratégica e Modernização (COGEM) em parceria com a Comissão de QVT e os servidores da Enap.
            </p>

            <div className="text-[11px] text-[#77717F] italic">
              "Transformar estratégia e conhecimento em ação."
            </div>
          </div>

          {/* Col 6-8: Navigation & Espaços */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Espaços do PQVT
            </h4>
            <ul className="space-y-2 text-xs text-[#A09BAC]">
              <li>
                <a href="#acontece-agora" className="hover:text-white transition-colors">
                  Plano Anual (ACT-06)
                </a>
              </li>
              <li>
                <a href="#atividades" className="hover:text-white transition-colors">
                  Agenda de Atividades e Rodas
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Canais e Serviços para o Servidor
                </a>
              </li>
              <li>
                <a href="#guias" className="hover:text-white transition-colors">
                  Guia de Teletrabalho (DOC-09)
                </a>
              </li>
              <li>
                <a href="#comunidade" className="hover:text-white transition-colors">
                  CoP Diversidade & Clima
                </a>
              </li>
              <li>
                <a href="#indicadores" className="hover:text-white transition-colors">
                  Painel de Indicadores
                </a>
              </li>
            </ul>
          </div>

          {/* Col 9-12: Institutional Contacts & Accessibility */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Canais Institucionais
            </h4>
            <div className="space-y-2 text-xs text-[#A09BAC] mb-4">
              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-[#6D4AFF] mt-0.5 shrink-0" />
                <span>E-mail QVT: <a href="mailto:qvt@enap.gov.br" className="text-white hover:underline">qvt@enap.gov.br</a></span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-[#27C7C9] mt-0.5 shrink-0" />
                <span>COGEM Conecta: <a href="mailto:cogem@enap.gov.br" className="text-white hover:underline">cogem@enap.gov.br</a></span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#059669] mt-0.5 shrink-0" />
                <span>SPO Área Especial 2-A, Asa Sul — Brasília / DF</span>
              </div>
            </div>

            <button
              onClick={onOpenSharePointSpecs}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#C9E86A] bg-[#2A2733] hover:bg-[#343040] rounded-lg border border-[#3E394A] transition-colors"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Ver Especificação Técnica SharePoint / M365</span>
            </button>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#77717F] gap-3">
          <div className="flex items-center gap-3">
            <span>© 2026 Enap · Escola Nacional de Administração Pública</span>
            <span aria-hidden="true">·</span>
            <span>Acessibilidade WCAG AA</span>
            <span aria-hidden="true">·</span>
            <span>Privacidade & Sigilo Funcional</span>
          </div>

          <div className="flex items-center gap-2 font-mono">
            <span>Versão:</span>
            <span className="text-white">v1.2.0-sharepoint-ready</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
