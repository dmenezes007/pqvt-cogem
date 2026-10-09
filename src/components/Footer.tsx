import React from 'react';
import { Mail, MapPin, ShieldCheck, Layers } from 'lucide-react';

const ENAP_LOGO_URL = 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Logo-enap.png';

interface FooterProps {
  onOpenSharePointSpecs: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSharePointSpecs }) => (
  <footer className="border-t border-[#2E2B35] bg-[#242229] text-white">
    <div className="mx-auto max-w-[1440px] px-4 py-12 lg:px-6">
      <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-[86px] items-center overflow-hidden rounded-sm bg-white px-2">
              <img src={ENAP_LOGO_URL} alt="Enap" className="max-h-8 w-auto max-w-[72px] object-contain" />
            </div>
            <div>
              <span className="block text-sm font-semibold">PQVT · COGEM</span>
              <span className="text-[11px] text-white/55">Escola Nacional de Administração Pública</span>
            </div>
          </div>
          <p className="mt-5 max-w-md text-xs leading-6 text-white/60">
            Programa de Qualidade de Vida no Trabalho. Um espaço institucional para descobrir atividades, serviços, conhecimento e iniciativas de bem-estar.
          </p>
        </div>

        <div className="lg:col-span-3">
          <h4 className="mb-3 text-[10px] font-bold uppercase tracking-[0.14em] text-white/80">Navegação</h4>
          <div className="grid gap-2 text-xs text-white/60">
            <a href="/#acontece-agora" className="hover:text-white">Plano PQVT 2026</a>
            <a href="/#atividades" className="hover:text-white">Atividades</a>
            <a href="/#servicos" className="hover:text-white">Serviços</a>
            <a href="/#noticias" className="hover:text-white">Notícias</a>
            <a href="/#guias" className="hover:text-white">Documentos</a>
            <a href="/#comunidade" className="hover:text-white">Comunidades</a>
          </div>
        </div>

        <div className="lg:col-span-4">
          <h4 className="mb-3 text-[10px] font-bold uppercase tracking-[0.14em] text-white/80">Canais institucionais</h4>
          <div className="space-y-2 text-xs text-white/60">
            <div className="flex items-start gap-2">
              <Mail className="mt-0.5 h-3.5 w-3.5 text-[#C9E86A]" />
              <span>QVT: <a href="mailto:qvt@enap.gov.br" className="text-white hover:underline">qvt@enap.gov.br</a></span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-3.5 w-3.5 text-[#27C7C9]" />
              <span>SPO Área Especial 2-A, Asa Sul — Brasília / DF</span>
            </div>
          </div>
          <button onClick={onOpenSharePointSpecs} className="mt-5 inline-flex items-center gap-2 rounded-sm border border-white/10 bg-white/5 px-3 py-2 text-[11px] font-medium text-white/75 hover:bg-white/10 hover:text-white">
            <Layers className="h-3.5 w-3.5" />Arquitetura M365 / SharePoint
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 pt-6 text-[10px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <span>© 2026 Enap</span><span aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1"><ShieldCheck className="h-3 w-3" />Acessibilidade</span>
          <span aria-hidden="true">·</span><span>Privacidade</span>
        </div>
        <span className="font-mono">PQVT / v1.3 · SharePoint-ready</span>
      </div>
    </div>
  </footer>
);