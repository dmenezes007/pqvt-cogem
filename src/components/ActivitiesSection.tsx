import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Video,
  CheckCircle2,
  AlertCircle,
  Filter,
  Download,
  Ticket,
  ChevronRight,
  Info,
} from 'lucide-react';
import { Activity } from '../types/pqvt';

interface ActivitiesSectionProps {
  activities: Activity[];
  onRegister: (activity: Activity) => void;
  onUnregister: (activityId: string) => void;
}

export const ActivitiesSection: React.FC<ActivitiesSectionProps> = ({
  activities,
  onRegister,
  onUnregister,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [selectedFormat, setSelectedFormat] = useState<string>('Todos');

  const categories = [
    'Todas',
    'Saúde Mental',
    'Ergonomia',
    'Diversidade & Inclusão',
    'Saúde Integral',
    'Movimento & Natureza',
  ];

  const formats = ['Todos', 'Híbrido', 'Presencial', 'Online (Teams)'];

  const filteredActivities = activities.filter((act) => {
    const matchCategory =
      selectedCategory === 'Todas' || act.category === selectedCategory;
    const matchFormat = selectedFormat === 'Todos' || act.format === selectedFormat;
    return matchCategory && matchFormat;
  });

  const generateICS = (activity: Activity) => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Enap//PQVT Calendar//PT
BEGIN:VEVENT
UID:${activity.id}@enap.gov.br
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
SUMMARY:PQVT Enap: ${activity.title}
DESCRIPTION:${activity.description} | Facilitador: ${activity.facilitator || 'Comissão QVT'}
LOCATION:${activity.location}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${activity.id}-convite-pqvt.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="atividades" className="py-12 bg-[#F7F6F8] border-b border-[#E9E5EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#6D4AFF] uppercase tracking-wider mb-1">
              <span>Agenda de Encontros</span>
              <span aria-hidden="true" className="text-[#C5BFE3]">·</span>
              <span>Web Part SharePoint: PQVT_Atividades</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17151D] tracking-tight">
              Próximas Atividades e Rodas
            </h2>
            <p className="text-xs sm:text-sm text-[#77717F] mt-1 max-w-2xl">
              Participe de palestras, oficinas ergonômicas, rodas de conversa sobre sobrecarga e encontros da CoP.
            </p>
          </div>

          {/* Institutional Integrity Note per User Requirement */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 border border-amber-200 text-amber-900 rounded-lg text-xs self-start md:self-auto">
            <Info className="w-3.5 h-3.5 text-amber-700 shrink-0" />
            <span className="text-[11px]">
              Exemplo de estrutura — substituir pelos dados oficiais da Comissão de QVT.
            </span>
          </div>
        </div>

        {/* Filter Toolbar (Segmented Controls) */}
        <div className="bg-white p-3.5 rounded-xl border border-[#E9E5EC] mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Categories */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            <span className="text-xs text-[#77717F] font-medium mr-1 flex items-center gap-1 shrink-0">
              <Filter className="w-3 h-3" />
              <span>Tema:</span>
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#17151D] text-white shadow-xs'
                    : 'text-[#77717F] hover:text-[#17151D] hover:bg-[#F7F6F8]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Formats */}
          <div className="flex items-center gap-1 shrink-0 border-t sm:border-t-0 sm:border-l border-[#E9E5EC] pt-2 sm:pt-0 sm:pl-3">
            <span className="text-xs text-[#77717F] font-medium mr-1 shrink-0">Formato:</span>
            {formats.map((fmt) => (
              <button
                key={fmt}
                onClick={() => setSelectedFormat(fmt)}
                className={`px-2 py-0.5 text-xs font-medium rounded transition-colors ${
                  selectedFormat === fmt
                    ? 'bg-[#F0ECFF] text-[#6D4AFF] font-semibold'
                    : 'text-[#77717F] hover:text-[#17151D]'
                }`}
              >
                {fmt}
              </button>
            ))}
          </div>
        </div>

        {/* Activities List */}
        <div className="space-y-4">
          {filteredActivities.length === 0 ? (
            <div className="bg-white rounded-xl p-8 text-center border border-[#E9E5EC]">
              <p className="text-sm font-semibold text-[#17151D]">Nenhuma atividade encontrada com os filtros selecionados.</p>
              <button
                onClick={() => {
                  setSelectedCategory('Todas');
                  setSelectedFormat('Todos');
                }}
                className="mt-2 text-xs text-[#6D4AFF] hover:underline"
              >
                Limpar todos os filtros
              </button>
            </div>
          ) : (
            filteredActivities.map((act) => {
              const spotsLeft = act.capacity ? act.capacity - act.enrolledCount : null;
              const isFull = spotsLeft !== null && spotsLeft <= 0;

              return (
                <div
                  key={act.id}
                  className={`bg-white rounded-xl border p-5 transition-all hover:shadow-xs ${
                    act.isEnrolled
                      ? 'border-[#059669] ring-1 ring-[#059669]/30 bg-[#FAFCFB]'
                      : 'border-[#E9E5EC] hover:border-[#6D4AFF]/40'
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                    
                    {/* Date Block (Col 1-3) */}
                    <div className="lg:col-span-3 flex items-start gap-3">
                      <div className="w-12 h-14 rounded-lg bg-[#F7F6F8] border border-[#E9E5EC] flex flex-col items-center justify-center shrink-0">
                        <span className="text-[10px] font-bold text-[#6D4AFF] uppercase">
                          {act.date.split(' ')[2]?.slice(0, 3) || 'OUT'}
                        </span>
                        <span className="text-lg font-black text-[#17151D] leading-none">
                          {act.date.split(' ')[0]}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-[#17151D]">{act.date}</span>
                        <span className="text-xs text-[#77717F] flex items-center gap-1 mt-0.5">
                          <Clock className="w-3 h-3 text-[#77717F]" />
                          <span>{act.time}</span>
                        </span>
                        <span className="text-[11px] font-medium text-[#6D4AFF] mt-1">
                          {act.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Block (Col 4-8) */}
                    <div className="lg:col-span-6">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-xs font-semibold text-[#17151D] flex items-center gap-1">
                          {act.format === 'Online (Teams)' ? (
                            <Video className="w-3.5 h-3.5 text-[#27C7C9]" />
                          ) : (
                            <MapPin className="w-3.5 h-3.5 text-[#6D4AFF]" />
                          )}
                          <span>{act.format}</span>
                        </span>
                        <span className="text-[#D5D1DC]">·</span>
                        <span className="text-xs text-[#77717F] truncate">{act.location}</span>
                      </div>

                      <h3 className="text-base font-bold text-[#17151D] leading-snug mb-1">
                        {act.title}
                      </h3>

                      <p className="text-xs text-[#77717F] line-clamp-2 leading-relaxed">
                        {act.description}
                      </p>

                      {act.facilitator && (
                        <p className="text-[11px] text-[#77717F] mt-2">
                          <span className="font-semibold text-[#17151D]">Facilitador: </span>
                          {act.facilitator}
                        </p>
                      )}
                    </div>

                    {/* Actions & Registration Block (Col 9-12) */}
                    <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-3 border-t lg:border-t-0 pt-3 lg:pt-0 border-[#E9E5EC]">
                      <div className="text-left lg:text-right">
                        <div className="text-xs text-[#77717F]">
                          Público: <span className="font-medium text-[#17151D]">{act.audience}</span>
                        </div>
                        {act.capacity && (
                          <div className="text-[11px] text-[#77717F] mt-0.5">
                            Vagas: <span className="font-mono font-medium">{act.enrolledCount}/{act.capacity}</span>
                            {spotsLeft !== null && spotsLeft > 0 && (
                              <span className="text-[#059669] font-medium ml-1">({spotsLeft} restantes)</span>
                            )}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-2 w-full lg:w-auto">
                        {act.isEnrolled ? (
                          <div className="flex items-center gap-2 w-full lg:w-auto">
                            <button
                              onClick={() => generateICS(act)}
                              className="p-2 text-[#059669] hover:bg-[#ECFDF5] border border-[#A7F3D0] rounded-lg transition-colors"
                              title="Baixar convite para calendário (.ics)"
                              aria-label="Baixar convite .ics"
                            >
                              <Download className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => onUnregister(act.id)}
                              className="px-3.5 py-2 bg-[#ECFDF5] hover:bg-rose-50 hover:text-rose-700 hover:border-rose-200 border border-[#A7F3D0] text-[#059669] text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 flex-1 lg:flex-initial justify-center"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>Inscrito (Cancelar)</span>
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => onRegister(act)}
                            disabled={isFull}
                            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors w-full lg:w-auto text-center ${
                              isFull
                                ? 'bg-[#E9E5EC] text-[#77717F] cursor-not-allowed'
                                : 'bg-[#6D4AFF] hover:bg-[#5835E6] text-white shadow-xs'
                            }`}
                          >
                            {isFull ? 'Lista de Espera' : 'Inscrever-se'}
                          </button>
                        )}
                      </div>

                    </div>

                  </div>
                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
};
