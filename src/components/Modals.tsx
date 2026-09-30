import React, { useState, useEffect } from 'react';
import {
  X,
  Search,
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  Download,
  BookOpen,
  ArrowRight,
  ExternalLink,
  Layers,
  Copy,
  Check,
  Mail,
  Users,
  Shield,
  FileText,
  AlertCircle,
} from 'lucide-react';
import {
  Activity,
  ServiceItem,
  NewsItem,
  KnowledgeDoc,
  StrategicAction,
} from '../types/pqvt';
import {
  SHAREPOINT_INTEGRATION_SPECS,
  STRATEGIC_ACTION_ACT06,
  COP_DIVERSITY_INFO,
} from '../data/pqvtData';

/* =========================================================================
   1. GLOBAL SEARCH MODAL
   ========================================================================= */
interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  activities: Activity[];
  services: ServiceItem[];
  docs: KnowledgeDoc[];
  news: NewsItem[];
  onSelectActivity: (activity: Activity) => void;
  onSelectService: (service: ServiceItem) => void;
  onSelectDoc: (doc: KnowledgeDoc) => void;
  onSelectNews: (news: NewsItem) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  activities,
  services,
  docs,
  news,
  onSelectActivity,
  onSelectService,
  onSelectDoc,
  onSelectNews,
}) => {
  const [query, setQuery] = useState('');
  const [filterType, setFilterType] = useState<string>('all');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchingActivities = activities.filter(
    (a) =>
      !q ||
      a.title.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q) ||
      a.description.toLowerCase().includes(q)
  );

  const matchingServices = services.filter(
    (s) =>
      !q ||
      s.title.toLowerCase().includes(q) ||
      s.shortDescription.toLowerCase().includes(q) ||
      s.fullDescription.toLowerCase().includes(q)
  );

  const matchingDocs = docs.filter(
    (d) =>
      !q ||
      d.title.toLowerCase().includes(q) ||
      d.code.toLowerCase().includes(q) ||
      d.summary.toLowerCase().includes(q)
  );

  const matchingNews = news.filter(
    (n) =>
      !q ||
      n.title.toLowerCase().includes(q) ||
      n.summary.toLowerCase().includes(q) ||
      n.category.toLowerCase().includes(q)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-12 sm:pt-20 px-4 bg-black/50 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl border border-[#E9E5EC] overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#E9E5EC] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#6D4AFF] shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Pesquisar atividades, serviços, notícias e orientações..."
            autoFocus
            className="w-full text-sm text-[#17151D] placeholder-[#77717F] bg-transparent focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 text-[#77717F] hover:text-[#17151D] hover:bg-[#F7F6F8] rounded-md"
            aria-label="Fechar busca"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="px-4 py-2 bg-[#F7F6F8] border-b border-[#E9E5EC] flex items-center gap-2 overflow-x-auto text-xs font-medium">
          <button
            onClick={() => setFilterType('all')}
            className={`px-2.5 py-1 rounded-md transition-colors ${
              filterType === 'all' ? 'bg-[#17151D] text-white' : 'text-[#77717F] hover:text-[#17151D]'
            }`}
          >
            Tudo
          </button>
          <button
            onClick={() => setFilterType('activities')}
            className={`px-2.5 py-1 rounded-md transition-colors ${
              filterType === 'activities' ? 'bg-[#17151D] text-white' : 'text-[#77717F] hover:text-[#17151D]'
            }`}
          >
            Atividades ({matchingActivities.length})
          </button>
          <button
            onClick={() => setFilterType('services')}
            className={`px-2.5 py-1 rounded-md transition-colors ${
              filterType === 'services' ? 'bg-[#17151D] text-white' : 'text-[#77717F] hover:text-[#17151D]'
            }`}
          >
            Serviços ({matchingServices.length})
          </button>
          <button
            onClick={() => setFilterType('docs')}
            className={`px-2.5 py-1 rounded-md transition-colors ${
              filterType === 'docs' ? 'bg-[#17151D] text-white' : 'text-[#77717F] hover:text-[#17151D]'
            }`}
          >
            Guias & DOC-09 ({matchingDocs.length})
          </button>
          <button
            onClick={() => setFilterType('news')}
            className={`px-2.5 py-1 rounded-md transition-colors ${
              filterType === 'news' ? 'bg-[#17151D] text-white' : 'text-[#77717F] hover:text-[#17151D]'
            }`}
          >
            Notícias ({matchingNews.length})
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-4 space-y-4">
          
          {/* Activities matches */}
          {(filterType === 'all' || filterType === 'activities') && matchingActivities.length > 0 && (
            <div>
              <span className="text-[11px] font-bold text-[#77717F] uppercase tracking-wider block mb-2">
                Atividades da Agenda
              </span>
              <div className="space-y-1.5">
                {matchingActivities.map((act) => (
                  <div
                    key={act.id}
                    onClick={() => {
                      onSelectActivity(act);
                      onClose();
                    }}
                    className="p-2.5 rounded-lg bg-[#F7F6F8] hover:bg-[#F0ECFF] cursor-pointer text-xs flex items-center justify-between transition-colors group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#17151D] group-hover:text-[#6D4AFF]">
                          {act.title}
                        </span>
                        <span className="text-[10px] text-[#77717F]">{act.format}</span>
                      </div>
                      <span className="text-[11px] text-[#77717F]">{act.date} · {act.time}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#77717F] group-hover:text-[#6D4AFF]" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Docs matches */}
          {(filterType === 'all' || filterType === 'docs') && matchingDocs.length > 0 && (
            <div>
              <span className="text-[11px] font-bold text-[#77717F] uppercase tracking-wider block mb-2">
                Guias e Documentos
              </span>
              <div className="space-y-1.5">
                {matchingDocs.map((doc) => (
                  <div
                    key={doc.id}
                    onClick={() => {
                      onSelectDoc(doc);
                      onClose();
                    }}
                    className="p-2.5 rounded-lg bg-[#F7F6F8] hover:bg-[#ECFDF5] cursor-pointer text-xs flex items-center justify-between transition-colors group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-[#059669]">{doc.code}</span>
                        <span className="font-bold text-[#17151D] group-hover:text-[#059669]">
                          {doc.title}
                        </span>
                      </div>
                      <span className="text-[11px] text-[#77717F]">{doc.docType} · {doc.readTime}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#77717F] group-hover:text-[#059669]" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Services matches */}
          {(filterType === 'all' || filterType === 'services') && matchingServices.length > 0 && (
            <div>
              <span className="text-[11px] font-bold text-[#77717F] uppercase tracking-wider block mb-2">
                Serviços de Atendimento
              </span>
              <div className="space-y-1.5">
                {matchingServices.map((srv) => (
                  <div
                    key={srv.id}
                    onClick={() => {
                      onSelectService(srv);
                      onClose();
                    }}
                    className="p-2.5 rounded-lg bg-[#F7F6F8] hover:bg-[#F0FDFA] cursor-pointer text-xs flex items-center justify-between transition-colors group"
                  >
                    <div>
                      <span className="font-bold text-[#17151D] group-hover:text-[#0E7490]">
                        {srv.title}
                      </span>
                      <p className="text-[11px] text-[#77717F]">{srv.shortDescription}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#77717F] group-hover:text-[#0E7490]" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* News matches */}
          {(filterType === 'all' || filterType === 'news') && matchingNews.length > 0 && (
            <div>
              <span className="text-[11px] font-bold text-[#77717F] uppercase tracking-wider block mb-2">
                Notícias e Histórias
              </span>
              <div className="space-y-1.5">
                {matchingNews.map((n) => (
                  <div
                    key={n.id}
                    onClick={() => {
                      onSelectNews(n);
                      onClose();
                    }}
                    className="p-2.5 rounded-lg bg-[#F7F6F8] hover:bg-[#F0ECFF] cursor-pointer text-xs flex items-center justify-between transition-colors group"
                  >
                    <div>
                      <span className="font-bold text-[#17151D] group-hover:text-[#6D4AFF]">
                        {n.title}
                      </span>
                      <span className="text-[11px] text-[#77717F] block">{n.category} · {n.publishedAt}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#77717F] group-hover:text-[#6D4AFF]" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {matchingActivities.length === 0 && matchingDocs.length === 0 && matchingServices.length === 0 && matchingNews.length === 0 && (
            <div className="py-8 text-center text-xs text-[#77717F]">
              Nenhum resultado encontrado para "{query}". Tente buscar por palavras como "ergonomia", "saúde mental", "DOC-09", "PGD" ou "CoP".
            </div>
          )}

        </div>

        {/* Footer info */}
        <div className="p-3 bg-[#F7F6F8] border-t border-[#E9E5EC] flex items-center justify-between text-[11px] text-[#77717F]">
          <span>Pressione Esc para fechar</span>
          <span className="font-mono">Mecanismo de Busca Integrado COGEM</span>
        </div>

      </div>
    </div>
  );
};

/* =========================================================================
   2. ACTIVITY REGISTRATION MODAL
   ========================================================================= */
interface ActivityRegistrationModalProps {
  activity: Activity | null;
  onClose: () => void;
  onConfirmRegistration: (activityId: string) => void;
}

export const ActivityRegistrationModal: React.FC<ActivityRegistrationModalProps> = ({
  activity,
  onClose,
  onConfirmRegistration,
}) => {
  const [name, setName] = useState('Davison Menezes');
  const [email, setEmail] = useState('davison.menezes@enap.gov.br');
  const [department, setDepartment] = useState('DGP / COGEM');
  const [participationMode, setParticipationMode] = useState<string>('Online');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!activity) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    onConfirmRegistration(activity.id);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl border border-[#E9E5EC] overflow-hidden">
        
        {/* Header */}
        <div className="p-5 border-b border-[#E9E5EC] flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold text-[#6D4AFF] uppercase tracking-wider block">
              Inscrição em Atividade
            </span>
            <h3 className="text-base font-bold text-[#17151D]">{activity.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#77717F] hover:text-[#17151D] rounded-md"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {isSuccess ? (
          <div className="p-6 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#17151D]">Inscrição Confirmada com Sucesso!</h4>
              <p className="text-xs text-[#77717F] mt-1 max-w-sm mx-auto">
                Você receberá uma confirmação em seu e-mail institucional e o convite no calendário do Teams.
              </p>
            </div>

            <div className="p-3 bg-[#F7F6F8] rounded-xl border border-[#E9E5EC] text-left text-xs space-y-1">
              <div><span className="text-[#77717F]">Atividade:</span> <span className="font-semibold text-[#17151D]">{activity.title}</span></div>
              <div><span className="text-[#77717F]">Data & Hora:</span> <span className="font-medium text-[#17151D]">{activity.date} às {activity.time}</span></div>
              <div><span className="text-[#77717F]">Local:</span> <span className="font-medium text-[#17151D]">{activity.location}</span></div>
              <div><span className="text-[#77717F]">Inscrito:</span> <span className="font-medium text-[#17151D]">{name} ({email})</span></div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-2.5 bg-[#17151D] hover:bg-[#6D4AFF] text-white text-xs font-semibold rounded-lg transition-colors"
            >
              Concluir e Voltar ao Portal
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 space-y-4">
            <div className="p-3 bg-[#F7F6F8] rounded-xl border border-[#E9E5EC] text-xs space-y-1">
              <div className="flex items-center justify-between text-[#77717F]">
                <span>Data: <strong className="text-[#17151D]">{activity.date}</strong></span>
                <span>Horário: <strong className="text-[#17151D]">{activity.time}</strong></span>
              </div>
              <div className="text-[#77717F]">
                Formato: <strong className="text-[#17151D]">{activity.format}</strong> ({activity.location})
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-[11px] font-semibold text-[#17151D] mb-1">
                  Nome do Servidor / Colaborador:
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#E9E5EC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6D4AFF]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#17151D] mb-1">
                  E-mail Institucional (@enap.gov.br):
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#E9E5EC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6D4AFF]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-[#17151D] mb-1">
                    Unidade de Lotação:
                  </label>
                  <input
                    type="text"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#E9E5EC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6D4AFF]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#17151D] mb-1">
                    Pretensão de Presença:
                  </label>
                  <select
                    value={participationMode}
                    onChange={(e) => setParticipationMode(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#E9E5EC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6D4AFF]"
                  >
                    <option value="Online">Online via Teams</option>
                    <option value="Presencial">Presencial no Campus</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#E9E5EC] flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-[#77717F] hover:text-[#17151D] rounded-lg"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-[#6D4AFF] hover:bg-[#5835E6] text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
              >
                Confirmar Minha Inscrição
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};

/* =========================================================================
   3. KNOWLEDGE DOC READER MODAL (DOC-09 & OUTROS)
   ========================================================================= */
interface DocReaderModalProps {
  doc: KnowledgeDoc | null;
  onClose: () => void;
}

export const DocReaderModal: React.FC<DocReaderModalProps> = ({ doc, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!doc) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl w-full max-w-3xl shadow-2xl border border-[#E9E5EC] overflow-hidden flex flex-col max-h-[88vh]">
        
        {/* Header */}
        <div className="p-5 border-b border-[#E9E5EC] flex items-center justify-between bg-[#F7F6F8]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#F0ECFF] text-[#6D4AFF] flex items-center justify-center shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#6D4AFF] bg-white px-2 py-0.5 rounded border border-[#DDD6FE]">
                  {doc.code}
                </span>
                <span className="text-xs text-[#77717F]">{doc.docType} · {doc.version}</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#17151D] leading-snug">
                {doc.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#77717F] hover:text-[#17151D] hover:bg-white rounded-md"
            aria-label="Fechar leitor"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Reader Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-sm text-[#17151D] leading-relaxed">
          
          {/* Subtitle / Scope */}
          <div className="p-4 bg-[#F5F3FF] rounded-xl border border-[#DDD6FE] text-xs text-[#6D4AFF]">
            <p className="font-semibold text-[#17151D] mb-1">Apresentação Institucional:</p>
            <p>{doc.subtitle}</p>
          </div>

          {/* Key Topics List */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#77717F] mb-3">
              Diretrizes Principais do Documento:
            </h4>
            <div className="space-y-2">
              {doc.keyPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#17151D]">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Structured Chapters (for DOC-09) */}
          {doc.sections && doc.sections.length > 0 && (
            <div className="space-y-6 pt-4 border-t border-[#E9E5EC]">
              {doc.sections.map((sec, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="text-base font-bold text-[#17151D]">{sec.title}</h4>
                  <p className="text-xs sm:text-sm text-[#77717F] leading-relaxed">
                    {sec.content}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Medical disclaimer as demanded by prompt */}
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block">Aviso Institucional de Saúde:</span>
              <span>
                As informações deste guia têm caráter orientativo, preventivo e educativo. Não substituem avaliação médica, psicológica ou psiquiátrica individualizada. Em caso de sofrimento agudo, acione o serviço de acolhimento psicossocial da Enap ou a rede pública de saúde.
              </span>
            </div>
          </div>

        </div>

        {/* Footer Toolbar */}
        <div className="p-4 bg-[#F7F6F8] border-t border-[#E9E5EC] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="px-3 py-1.5 bg-white border border-[#E9E5EC] rounded-lg text-[#17151D] font-medium hover:bg-[#EFECEF] flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#059669]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link Copiado' : 'Copiar Link'}</span>
            </button>
            <span className="text-[#77717F] hidden sm:inline">
              Atualizado em {doc.updatedAt}
            </span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#17151D] hover:bg-[#6D4AFF] text-white font-semibold rounded-lg transition-colors"
          >
            Fechar Leitor
          </button>
        </div>

      </div>
    </div>
  );
};

/* =========================================================================
   4. SERVICE DETAIL MODAL
   ========================================================================= */
interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl border border-[#E9E5EC] overflow-hidden flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="p-5 border-b border-[#E9E5EC] flex items-center justify-between bg-[#F7F6F8]">
          <div>
            <span className="text-[11px] font-bold text-[#6D4AFF] uppercase tracking-wider block">
              Serviço ao Servidor
            </span>
            <h3 className="text-base sm:text-lg font-bold text-[#17151D]">{service.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#77717F] hover:text-[#17151D] rounded-md"
            aria-label="Fechar serviço"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-5 text-xs text-[#17151D]">
          
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#77717F] mb-1">
              Sobre o Atendimento
            </h4>
            <p className="text-xs sm:text-sm text-[#77717F] leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {/* Channels */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#77717F] mb-2">
              Canais de Contato e Acesso:
            </h4>
            <div className="space-y-2">
              {service.channels.map((ch, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg bg-[#F7F6F8] border border-[#E9E5EC] flex items-center justify-between"
                >
                  <span className="text-[#77717F] font-medium">{ch.label}:</span>
                  <span className="font-semibold text-[#17151D]">{ch.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Steps */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#77717F] mb-2">
              Passo a Passo de Acesso:
            </h4>
            <div className="space-y-2">
              {service.steps.map((st, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#F0ECFF] text-[#6D4AFF] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-[#77717F] leading-snug">{st}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3 bg-[#ECFDF5] rounded-xl border border-[#A7F3D0] text-[#059669]">
            <span className="font-bold block">Prazo de Resposta / Horário:</span>
            <span>{service.hoursOrDeadline}</span>
          </div>

          <div className="text-[11px] text-[#77717F]">
            <span>Responsabilidade: </span>
            <span className="font-medium text-[#17151D]">{service.responsibles}</span>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F7F6F8] border-t border-[#E9E5EC] flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#6D4AFF] hover:bg-[#5835E6] text-white text-xs font-semibold rounded-lg transition-colors"
          >
            Entendido
          </button>
        </div>

      </div>
    </div>
  );
};

/* =========================================================================
   5. ARTICLE READER MODAL (NOTÍCIAS)
   ========================================================================= */
interface ArticleReaderModalProps {
  article: NewsItem | null;
  onClose: () => void;
}

export const ArticleReaderModal: React.FC<ArticleReaderModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl border border-[#E9E5EC] overflow-hidden flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="p-5 border-b border-[#E9E5EC] flex items-center justify-between bg-[#F7F6F8]">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#77717F] mb-1">
              <span className="font-bold text-[#6D4AFF]">{article.category}</span>
              <span>·</span>
              <span>{article.readTime}</span>
              <span>·</span>
              <span>{article.publishedAt}</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#17151D] leading-snug">
              {article.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#77717F] hover:text-[#17151D] rounded-md shrink-0 ml-3"
            aria-label="Fechar notícia"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-4 text-xs sm:text-sm text-[#17151D] leading-relaxed">
          {article.subtitle && (
            <p className="text-sm font-semibold text-[#6D4AFF] leading-snug">
              {article.subtitle}
            </p>
          )}

          <div className="p-3 bg-[#F7F6F8] rounded-xl border border-[#E9E5EC] text-xs text-[#77717F] italic">
            Resumo: {article.summary}
          </div>

          <div className="space-y-4 pt-2">
            {article.content.map((p, idx) => (
              <p key={idx} className="text-[#77717F] leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="pt-4 border-t border-[#E9E5EC] flex items-center justify-between text-xs text-[#77717F]">
            <div>
              <span>Autor: </span>
              <strong className="text-[#17151D]">{article.author}</strong> ({article.authorRole})
            </div>
            <div>
              Tags: {article.tags.join(', ')}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F7F6F8] border-t border-[#E9E5EC] flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#17151D] text-white text-xs font-semibold rounded-lg hover:bg-[#6D4AFF]"
          >
            Fechar Notícia
          </button>
        </div>

      </div>
    </div>
  );
};

/* =========================================================================
   6. STRATEGIC ACTION DETAIL MODAL (ACT-06)
   ========================================================================= */
interface ActionDetailModalProps {
  action: StrategicAction;
  isOpen: boolean;
  onClose: () => void;
  onOpenDoc09: () => void;
}

export const ActionDetailModal: React.FC<ActionDetailModalProps> = ({
  action,
  isOpen,
  onClose,
  onOpenDoc09,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl w-full max-w-3xl shadow-2xl border border-[#E9E5EC] overflow-hidden flex flex-col max-h-[88vh]">
        
        {/* Header */}
        <div className="p-5 border-b border-[#E9E5EC] flex items-center justify-between bg-[#F7F6F8]">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#77717F] mb-1">
              <span className="font-mono font-bold text-[#6D4AFF] bg-white px-2 py-0.5 rounded border border-[#DDD6FE]">
                {action.code}
              </span>
              <span>{action.axis}</span>
            </div>
            <h3 className="text-lg font-bold text-[#17151D]">{action.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#77717F] hover:text-[#17151D] rounded-md"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-xs text-[#17151D]">
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#77717F] mb-1">
              Descrição Estratégica
            </h4>
            <p className="text-xs sm:text-sm text-[#77717F] leading-relaxed">
              {action.description}
            </p>
          </div>

          {/* Progress */}
          <div className="p-4 bg-[#F7F6F8] rounded-xl border border-[#E9E5EC]">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-[#17151D]">Status de Execução: {action.status}</span>
              <span className="font-mono font-bold text-sm text-[#6D4AFF]">{action.progress}%</span>
            </div>
            <div className="w-full h-2.5 bg-[#E9E5EC] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#6D4AFF] to-[#059669] rounded-full"
                style={{ width: `${action.progress}%` }}
              />
            </div>
          </div>

          {/* Deliveries list */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#77717F] mb-3">
              Detalhamento das Entregas Registradas:
            </h4>
            <div className="space-y-3">
              {action.deliveries.map((del) => (
                <div
                  key={del.id}
                  className="p-3.5 rounded-xl bg-white border border-[#E9E5EC] shadow-2xs space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#17151D]">
                      0{del.order}. {del.title}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        del.status === 'Concluído'
                          ? 'bg-[#ECFDF5] text-[#059669]'
                          : del.status === 'Em Andamento'
                          ? 'bg-[#F0ECFF] text-[#6D4AFF]'
                          : 'bg-[#F7F6F8] text-[#77717F]'
                      }`}
                    >
                      {del.status} ({del.progress}%)
                    </span>
                  </div>
                  <p className="text-xs text-[#77717F]">{del.description}</p>
                  <span className="text-[11px] text-[#77717F] block">{del.updatedDate}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Next steps */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#77717F] mb-2">
              Próximos Passos Prioritários:
            </h4>
            <ul className="space-y-1.5 text-xs text-[#77717F] list-disc pl-4">
              {action.nextSteps.map((st, idx) => (
                <li key={idx}>{st}</li>
              ))}
            </ul>
          </div>

          {/* Stakeholders & Related Doc */}
          <div className="pt-4 border-t border-[#E9E5EC] flex flex-wrap items-center justify-between gap-3 text-xs">
            <div>
              <span>Responsável: <strong>{action.responsible}</strong></span>
              <span className="mx-2 text-[#DDD6FE]">·</span>
              <span>Partes Interessadas: <strong>{action.stakeholders.join(', ')}</strong></span>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenDoc09();
              }}
              className="text-[#059669] font-bold hover:underline"
            >
              Abrir DOC-09 associado →
            </button>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F7F6F8] border-t border-[#E9E5EC] flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#17151D] hover:bg-[#6D4AFF] text-white text-xs font-semibold rounded-lg"
          >
            Fechar Detalhes
          </button>
        </div>

      </div>
    </div>
  );
};

/* =========================================================================
   7. JOIN COMMUNITY MODAL
   ========================================================================= */
interface JoinCommunityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinCommunityModal: React.FC<JoinCommunityModalProps> = ({ isOpen, onClose }) => {
  const [joined, setJoined] = useState(false);
  const [name, setName] = useState('Davison Menezes');
  const [email, setEmail] = useState('davison.menezes@enap.gov.br');
  const [interestArea, setInterestArea] = useState('Acessibilidade e Neurodiversidade');

  if (!isOpen) return null;

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    setJoined(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl border border-[#E9E5EC] overflow-hidden">
        
        <div className="p-5 border-b border-[#E9E5EC] flex items-center justify-between bg-[#F7F6F8]">
          <div>
            <span className="text-[11px] font-bold text-[#6D4AFF] uppercase tracking-wider block">
              Comunidade de Prática
            </span>
            <h3 className="text-base font-bold text-[#17151D]">
              {COP_DIVERSITY_INFO.name}
            </h3>
          </div>
          <button onClick={onClose} className="p-1 text-[#77717F] hover:text-[#17151D]">
            <X className="w-5 h-5" />
          </button>
        </div>

        {joined ? (
          <div className="p-6 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#17151D]">Bem-vindo(a) à CoP!</h4>
              <p className="text-xs text-[#77717F] mt-1 max-w-sm mx-auto">
                Você foi adicionado(a) ao canal do Microsoft Teams e receberá os convites para os encontros quinzenais às quintas-feiras, 14h30.
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-full py-2.5 bg-[#6D4AFF] text-white text-xs font-semibold rounded-lg"
            >
              Concluir
            </button>
          </div>
        ) : (
          <form onSubmit={handleJoin} className="p-5 space-y-4 text-xs">
            <p className="text-[#77717F] leading-relaxed">
              A comunidade é horizontal e aberta a qualquer servidor(a) da Enap. Os encontros são quinzenais (quintas-feiras, 14h30 às 16h00) em formato híbrido.
            </p>

            <div className="space-y-3">
              <div>
                <label className="block text-[11px] font-semibold text-[#17151D] mb-1">
                  Nome Completo:
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-[#E9E5EC] rounded-lg"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#17151D] mb-1">
                  E-mail Institucional:
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-[#E9E5EC] rounded-lg"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#17151D] mb-1">
                  Tema de Maior Interesse na CoP:
                </label>
                <select
                  value={interestArea}
                  onChange={(e) => setInterestArea(e.target.value)}
                  className="w-full px-3 py-2 border border-[#E9E5EC] rounded-lg"
                >
                  <option value="Acessibilidade e Neurodiversidade">Acessibilidade e Neurodiversidade</option>
                  <option value="Ações Afirmativas e Equidade">Ações Afirmativas e Equidade</option>
                  <option value="Prevenção ao Assédio e Clima Seguro">Prevenção ao Assédio e Clima Seguro</option>
                  <option value="Saúde Mental e Apoio Mútuo">Saúde Mental e Apoio Mútuo</option>
                </select>
              </div>
            </div>

            <div className="pt-3 border-t border-[#E9E5EC] flex justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-[#77717F]"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-[#6D4AFF] hover:bg-[#5835E6] text-white text-xs font-semibold rounded-lg"
              >
                Ingressar na Comunidade
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};

/* =========================================================================
   8. SHAREPOINT & M365 INTEGRATION ARCHITECTURE MODAL
   ========================================================================= */
interface SharePointModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SharePointModal: React.FC<SharePointModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const specs = SHAREPOINT_INTEGRATION_SPECS;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl w-full max-w-3xl shadow-2xl border border-[#E9E5EC] overflow-hidden flex flex-col max-h-[88vh]">
        
        {/* Header */}
        <div className="p-5 border-b border-[#E9E5EC] flex items-center justify-between bg-[#F7F6F8]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#27C7C9]/20 text-[#0E7490] flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#6D4AFF] uppercase tracking-wider block">
                Arquitetura de Integração Técnica
              </span>
              <h3 className="text-base font-bold text-[#17151D]">
                Mapeamento Microsoft 365 / SharePoint Moderno
              </h3>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 text-[#77717F] hover:text-[#17151D]">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 space-y-6 text-xs text-[#17151D]">
          
          <div className="p-3 bg-[#F0ECFF] rounded-xl border border-[#DDD6FE] text-[#6D4AFF] text-xs">
            Esta interface foi projetada em conformidade direta com a arquitetura de dados do Microsoft 365, pronta para ser acoplada a Microsoft Lists, fluxos do Power Automate e extensões do Power Apps.
          </div>

          {/* SharePoint Lists */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#77717F] mb-3">
              1. Microsoft Lists / Listas de SharePoint
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {specs.lists.map((list) => (
                <div key={list.name} className="p-3 bg-[#F7F6F8] rounded-xl border border-[#E9E5EC]">
                  <span className="font-mono font-bold text-[#6D4AFF] block mb-1">{list.name}</span>
                  <p className="text-[11px] text-[#77717F] mb-2">{list.description}</p>
                  <div className="text-[10px] text-[#17151D] font-mono bg-white p-1.5 rounded border border-[#E9E5EC]">
                    Colunas: {list.columns.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Power Automate */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#77717F] mb-3">
              2. Fluxos do Power Automate Mapeados
            </h4>
            <div className="space-y-3">
              {specs.powerAutomateFlows.map((fl) => (
                <div key={fl.name} className="p-3.5 bg-[#F7F6F8] rounded-xl border border-[#E9E5EC]">
                  <span className="font-bold text-[#17151D] block">{fl.name}</span>
                  <span className="text-[11px] text-[#059669] font-medium block mt-0.5">
                    Gatilho: {fl.trigger}
                  </span>
                  <ul className="mt-2 space-y-1 text-[11px] text-[#77717F] list-disc pl-4">
                    {fl.actions.map((act, idx) => (
                      <li key={idx}>{act}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Power Apps */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#77717F] mb-2">
              3. Extensões Power Apps e Power BI
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {specs.powerAppsModules.map((mod) => (
                <div key={mod.name} className="p-3 bg-white border border-[#E9E5EC] rounded-xl">
                  <span className="font-bold text-[#17151D] block mb-1">{mod.name}</span>
                  <p className="text-[11px] text-[#77717F]">{mod.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F7F6F8] border-t border-[#E9E5EC] flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#17151D] hover:bg-[#6D4AFF] text-white text-xs font-semibold rounded-lg"
          >
            Fechar Especificação
          </button>
        </div>

      </div>
    </div>
  );
};

/* =========================================================================
   9. MY REGISTRATIONS MODAL
   ========================================================================= */
interface MyRegistrationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  registeredActivities: Activity[];
  onUnregister: (id: string) => void;
}

export const MyRegistrationsModal: React.FC<MyRegistrationsModalProps> = ({
  isOpen,
  onClose,
  registeredActivities,
  onUnregister,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl border border-[#E9E5EC] overflow-hidden flex flex-col max-h-[80vh]">
        
        <div className="p-5 border-b border-[#E9E5EC] flex items-center justify-between bg-[#F7F6F8]">
          <div>
            <span className="text-[11px] font-bold text-[#059669] uppercase tracking-wider block">
              Minhas Atividades Confirmadas
            </span>
            <h3 className="text-base font-bold text-[#17151D]">
              Agenda Pessoal de Participação ({registeredActivities.length})
            </h3>
          </div>
          <button onClick={onClose} className="p-1 text-[#77717F] hover:text-[#17151D]">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-5 space-y-3">
          {registeredActivities.length === 0 ? (
            <div className="py-8 text-center text-xs text-[#77717F]">
              <p className="font-semibold text-[#17151D] mb-1">Nenhuma inscrição ativa no momento.</p>
              <p>Explore a seção de atividades e participe das próximas rodas e oficinas.</p>
            </div>
          ) : (
            registeredActivities.map((act) => (
              <div
                key={act.id}
                className="p-3.5 rounded-xl bg-[#F7F6F8] border border-[#E9E5EC] text-xs flex items-center justify-between"
              >
                <div>
                  <span className="font-bold text-[#17151D] block">{act.title}</span>
                  <span className="text-[11px] text-[#77717F]">
                    {act.date} às {act.time} · {act.format}
                  </span>
                </div>
                <button
                  onClick={() => onUnregister(act.id)}
                  className="px-2.5 py-1 text-xs text-rose-600 hover:bg-rose-50 rounded-lg transition-colors font-medium border border-rose-200"
                >
                  Cancelar
                </button>
              </div>
            ))
          )}
        </div>

        <div className="p-4 bg-[#F7F6F8] border-t border-[#E9E5EC] flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#17151D] text-white text-xs font-semibold rounded-lg"
          >
            Fechar
          </button>
        </div>

      </div>
    </div>
  );
};
