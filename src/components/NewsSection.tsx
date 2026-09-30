import React, { useState } from 'react';
import {
  Newspaper,
  Calendar,
  Clock,
  User,
  ArrowRight,
  Sparkles,
  BookOpen,
  Filter,
} from 'lucide-react';
import { NewsItem } from '../types/pqvt';
import { NEWS_ARTICLES } from '../data/pqvtData';

interface NewsSectionProps {
  onOpenArticle: (article: NewsItem) => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ onOpenArticle }) => {
  const [selectedTag, setSelectedTag] = useState<string>('Todos');

  const tags = ['Todos', 'ACT-06', 'DOC-09', 'CoP', 'People Analytics', 'Ergonomia'];

  const filteredArticles = NEWS_ARTICLES.filter((item) => {
    if (selectedTag === 'Todos') return true;
    return item.tags.includes(selectedTag);
  });

  const featured = filteredArticles.find((n) => n.isFeatured) || filteredArticles[0];
  const secondaries = filteredArticles.filter((n) => n.id !== featured?.id).slice(0, 2);
  const compactList = filteredArticles.filter((n) => n.id !== featured?.id && !secondaries.some(s => s.id === n.id));

  return (
    <section id="noticias" className="py-12 bg-[#F7F6F8] border-b border-[#E9E5EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#6D4AFF] uppercase tracking-wider mb-1">
              <span>Comunicação & Relatos</span>
              <span aria-hidden="true" className="text-[#C5BFE3]">·</span>
              <span>SharePoint Editorial: PQVT_Noticias</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17151D] tracking-tight">
              Notícias e Histórias
            </h2>
            <p className="text-xs sm:text-sm text-[#77717F] mt-1 max-w-xl">
              Acompanhe os resultados das pesquisas de clima, novidades do plano anual e relatos de boas práticas.
            </p>
          </div>

          {/* Quick Tag Filter */}
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-1">
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTag(t)}
                className={`px-2.5 py-1 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                  selectedTag === t
                    ? 'bg-[#17151D] text-white shadow-xs'
                    : 'bg-white text-[#77717F] hover:text-[#17151D] border border-[#E9E5EC]'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Layout: 1 Lead Large + 2 Secondary + Compact List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Featured Article (Col 1-7) */}
          {featured && (
            <div
              onClick={() => onOpenArticle(featured)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onOpenArticle(featured);
                }
              }}
              className="lg:col-span-7 bg-white rounded-2xl border border-[#E9E5EC] hover:border-[#6D4AFF]/50 p-6 sm:p-8 flex flex-col justify-between transition-all cursor-pointer group shadow-2xs hover:shadow-xs"
            >
              <div>
                {/* Visual Editorial Header with Abstract Banner */}
                <div className="w-full h-44 rounded-xl bg-gradient-to-br from-[#F0ECFF] via-[#F7F6F8] to-[#ECFDF5] border border-[#E9E5EC] p-6 flex flex-col justify-between relative overflow-hidden mb-6">
                  {/* Subtle Graphic Texture */}
                  <svg className="absolute right-0 bottom-0 w-48 h-48 opacity-40" viewBox="0 0 200 200" fill="none">
                    <circle cx="100" cy="100" r="80" stroke="#6D4AFF" strokeWidth="2" strokeDasharray="6 4" />
                    <circle cx="100" cy="100" r="45" fill="#27C7C9" fillOpacity="0.3" />
                  </svg>

                  <div className="flex items-center justify-between relative z-10">
                    <span className="text-xs font-bold text-[#6D4AFF] bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md border border-[#E9E5EC]">
                      {featured.category}
                    </span>
                    <span className="text-xs text-[#77717F] bg-white/90 px-2 py-0.5 rounded border border-[#E9E5EC]">
                      {featured.readTime}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <span className="text-[11px] font-mono text-[#77717F]">
                      DOC / PESQUISA INSTITUCIONAL
                    </span>
                    <p className="text-sm font-semibold text-[#17151D] mt-0.5">
                      Diagnóstico de Riscos e Bem-Estar no PGD
                    </p>
                  </div>
                </div>

                {/* Metadata unboxed */}
                <div className="flex items-center gap-2 text-xs text-[#77717F] mb-3">
                  <span>{featured.publishedAt}</span>
                  <span aria-hidden="true">·</span>
                  <span>Por {featured.author}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#6D4AFF] font-medium">{featured.authorRole}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#17151D] group-hover:text-[#6D4AFF] transition-colors leading-tight mb-3">
                  {featured.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#77717F] leading-relaxed mb-6">
                  {featured.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E9E5EC] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-[#77717F]">
                  <span>Tags:</span>
                  <span className="font-medium text-[#17151D]">{featured.tags.join(' · ')}</span>
                </div>
                <span className="font-bold text-[#6D4AFF] flex items-center gap-1 group-hover:underline">
                  <span>Ler artigo completo</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          )}

          {/* Right Column: 2 Secondary Stories + Compact Feed (Col 8-12) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            
            {/* 2 Secondary Stories */}
            {secondaries.map((sec) => (
              <div
                key={sec.id}
                onClick={() => onOpenArticle(sec)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onOpenArticle(sec);
                  }
                }}
                className="bg-white rounded-xl border border-[#E9E5EC] hover:border-[#6D4AFF]/50 p-5 transition-all cursor-pointer group shadow-2xs hover:shadow-xs"
              >
                <div className="flex items-center justify-between text-xs text-[#77717F] mb-2">
                  <span className="font-semibold text-[#6D4AFF]">{sec.category}</span>
                  <span>{sec.readTime}</span>
                </div>

                <h4 className="text-sm sm:text-base font-bold text-[#17151D] group-hover:text-[#6D4AFF] transition-colors leading-snug mb-2">
                  {sec.title}
                </h4>

                <p className="text-xs text-[#77717F] line-clamp-2 leading-relaxed mb-3">
                  {sec.summary}
                </p>

                <div className="flex items-center justify-between text-[11px] text-[#77717F] pt-2 border-t border-[#F2EFF5]">
                  <span>{sec.publishedAt}</span>
                  <span className="font-semibold text-[#6D4AFF] group-hover:underline flex items-center gap-1">
                    Ler história →
                  </span>
                </div>
              </div>
            ))}

            {/* Compact List of Additional Stories */}
            {compactList.length > 0 && (
              <div className="bg-white rounded-xl border border-[#E9E5EC] p-4">
                <span className="text-[11px] font-bold text-[#77717F] uppercase tracking-wider block mb-2">
                  Outras Atualizações
                </span>
                <div className="divide-y divide-[#F2EFF5]">
                  {compactList.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => onOpenArticle(item)}
                      className="py-2.5 cursor-pointer group first:pt-1 last:pb-1"
                    >
                      <div className="flex items-center justify-between text-[11px] text-[#77717F] mb-0.5">
                        <span className="text-[#6D4AFF] font-medium">{item.category}</span>
                        <span>{item.publishedAt}</span>
                      </div>
                      <p className="text-xs font-semibold text-[#17151D] group-hover:text-[#6D4AFF] transition-colors line-clamp-1">
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
