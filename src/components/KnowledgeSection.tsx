import React from 'react';
import {
  BookOpen,
  FileText,
  Download,
  ArrowRight,
  ExternalLink,
  Shield,
  Clock,
  Sparkles,
  CheckCircle,
} from 'lucide-react';
import { KnowledgeDoc } from '../types/pqvt';
import { FEATURED_DOC09, OTHER_KNOWLEDGE_DOCS } from '../data/pqvtData';

interface KnowledgeSectionProps {
  onOpenDoc: (doc: KnowledgeDoc) => void;
}

export const KnowledgeSection: React.FC<KnowledgeSectionProps> = ({ onOpenDoc }) => {
  const doc09 = FEATURED_DOC09;

  return (
    <section id="guias" className="py-12 bg-white border-b border-[#E9E5EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#6D4AFF] uppercase tracking-wider mb-1">
              <span>Biblioteca de Conhecimento</span>
              <span aria-hidden="true" className="text-[#C5BFE3]">·</span>
              <span>SharePoint Docs: PQVT_Documentos</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17151D] tracking-tight">
              Guias, Manuais e Cartilhas
            </h2>
            <p className="text-xs sm:text-sm text-[#77717F] mt-1 max-w-xl">
              Orientações institucionais de autocuidado, ergonomia, inclusão e saúde mental produzidas para servidores e equipes da Enap.
            </p>
          </div>

          <div className="text-xs text-[#77717F] bg-[#F7F6F8] px-3 py-1.5 rounded-lg border border-[#E9E5EC]">
            <span>Total de 5 publicações vigentes no ciclo 2026</span>
          </div>
        </div>

        {/* FEATURED SPOTLIGHT: DOC-09 */}
        <div className="bg-gradient-to-br from-[#F5F3FF] via-white to-[#ECFDF5] rounded-2xl border border-[#DDD6FE] p-6 lg:p-8 mb-8 shadow-xs relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 8 cols: Main info */}
            <div className="lg:col-span-8">
              
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#77717F] mb-3">
                <span className="font-mono font-bold text-[#6D4AFF] bg-white px-2 py-0.5 rounded border border-[#DDD6FE]">
                  {doc09.code}
                </span>
                <span aria-hidden="true">·</span>
                <span className="font-semibold text-[#17151D]">{doc09.docType}</span>
                <span aria-hidden="true">·</span>
                <span>{doc09.version}</span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#77717F]" />
                  <span>{doc09.readTime}</span>
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#17151D] leading-tight mb-2">
                {doc09.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#77717F] leading-relaxed mb-6">
                {doc09.subtitle}
              </p>

              {/* Key topics checklist */}
              <div className="mb-6 bg-white/80 rounded-xl p-4 border border-[#E9E5EC]">
                <span className="text-xs font-bold text-[#17151D] uppercase tracking-wider block mb-2">
                  Tópicos Cobertos nas Diretrizes:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#17151D]">
                  {doc09.keyPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#059669] shrink-0 mt-0.5" />
                      <span className="leading-snug text-[#77717F]">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags and Disclaimer */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#E9E5EC] text-xs">
                <div className="text-[11px] text-[#77717F]">
                  <span className="font-medium text-[#17151D]">Palavras-chave: </span>
                  {doc09.tags.join(' · ')}
                </div>
                <div className="text-[11px] text-[#77717F] italic">
                  * Conteúdo institucional de promoção de bem-estar, não substituindo orientação médica individual.
                </div>
              </div>

            </div>

            {/* Right 4 cols: Card Action Callout */}
            <div className="lg:col-span-4 bg-white rounded-xl border border-[#E9E5EC] p-5 flex flex-col justify-between h-full shadow-2xs">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F0ECFF] text-[#6D4AFF] flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-[#17151D] mb-1">
                  Acesso Imediato ao Guia
                </h4>
                <p className="text-xs text-[#77717F] leading-relaxed mb-4">
                  Leia os 5 capítulos completos na interface integrada ou compartilhe com sua equipe no Teams.
                </p>
                <div className="p-2.5 rounded-lg bg-[#F7F6F8] text-[11px] text-[#77717F] mb-6">
                  <span className="font-semibold text-[#17151D] block">Downloads & Leituras:</span>
                  <span className="font-mono text-sm font-bold text-[#6D4AFF]">{doc09.downloadsCount}</span> acessos registrados no repositório.
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => onOpenDoc(doc09)}
                  className="w-full py-2.5 bg-[#6D4AFF] hover:bg-[#5835E6] text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Abrir guia interativo</span>
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* SECONDARY GUIDES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {OTHER_KNOWLEDGE_DOCS.map((doc) => (
            <div
              key={doc.id}
              onClick={() => onOpenDoc(doc)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onOpenDoc(doc);
                }
              }}
              className="bg-[#F7F6F8] hover:bg-white rounded-xl border border-[#E9E5EC] hover:border-[#6D4AFF]/50 p-4 transition-all cursor-pointer flex flex-col justify-between group shadow-2xs hover:shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#77717F] mb-2">
                  <span className="font-mono font-bold text-[#17151D]">{doc.code}</span>
                  <span>{doc.readTime}</span>
                </div>

                <h4 className="text-sm font-bold text-[#17151D] group-hover:text-[#6D4AFF] transition-colors line-clamp-2 mb-1.5">
                  {doc.title}
                </h4>

                <p className="text-xs text-[#77717F] line-clamp-3 leading-relaxed mb-4">
                  {doc.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E9E5EC] flex items-center justify-between text-xs">
                <span className="text-[11px] text-[#77717F]">{doc.version}</span>
                <span className="font-semibold text-[#6D4AFF] flex items-center gap-1 group-hover:underline">
                  <span>Acessar</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
