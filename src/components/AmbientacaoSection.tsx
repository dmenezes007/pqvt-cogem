import React, { useEffect, useMemo, useState } from 'react';
import { DesignacaoGaegFlow } from './DesignacaoGaegFlow';
import { ArrowRight, BarChart3, CheckCircle2, ChevronDown, Database, FileSpreadsheet, Lightbulb, RefreshCw, ShieldCheck, Workflow } from 'lucide-react';

type Phase = { id: string; title: string; intent: string; inputs: string[]; outputs: string[]; question: string };
type Metric = { id: string; label: string; value: number; unit?: string; description: string; phaseId?: string; source: string };
type Publication = { schemaVersion: 1; generatedAt: string; sourceUpdatedAt?: string; phases: Phase[]; metrics: Metric[]; insights: { id: string; title: string; description: string; metricIds: string[]; phaseId?: string }[] };
const DEFAULT_PHASES: Phase[] = [
  { id:'pre',title:'Pré-embarque',intent:'Preparar condições de acolhimento e trabalho antes da chegada.',inputs:['Cadastro institucional','Checklist de preparação'],outputs:['Recursos e orientações disponibilizados'],question:'O ambiente está preparado para receber a pessoa?' },
  { id:'entrada',title:'Embarque',intent:'Promover acolhimento, pertencimento e compreensão institucional.',inputs:['Ações de integração','Avaliação inicial'],outputs:['Registro de acolhimento e expectativas'],question:'Como foi a experiência inicial?' },
  { id:'30',title:'30 dias',intent:'Identificar condições reais de adaptação e apoio.',inputs:['Formulário de 30 dias','Acompanhamento das atividades'],outputs:['Dificuldades e necessidades de suporte'],question:'Quais barreiras começaram a aparecer?' },
  { id:'60',title:'60 dias',intent:'Examinar persistência ou resolução de dificuldades.',inputs:['Formulário de 60 dias','Histórico de acompanhamento'],outputs:['Pontos críticos e oportunidades'],question:'O que mudou desde a integração inicial?' },
  { id:'90',title:'90 dias',intent:'Avaliar consolidação e propor aperfeiçoamentos.',inputs:['Formulário de 90 dias','Registros de melhoria'],outputs:['Aprendizados para próximos ciclos'],question:'O que a instituição precisa aprender?' }
];
function isPublication(value: unknown): value is Publication {
  if (!value || typeof value !== 'object') return false;
  const v = value as Partial<Publication>;
  return v.schemaVersion === 1 && typeof v.generatedAt === 'string' && Array.isArray(v.phases) && Array.isArray(v.metrics) && Array.isArray(v.insights)
    && v.metrics.every(m => typeof m.id === 'string' && typeof m.label === 'string' && typeof m.value === 'number' && Number.isFinite(m.value));
}
export const AmbientacaoSection: React.FC = () => {
  const [publication,setPublication] = useState<Publication|null>(null);
  const [status,setStatus] = useState<'loading'|'ready'|'unconfigured'|'error'>('loading');
  const [phaseId,setPhaseId] = useState('pre');
  const [detailId,setDetailId] = useState<string|null>(null);
  const [reload,setReload] = useState(0);
  const endpoint = import.meta.env.VITE_PUBLIC_DATA_URL?.trim();
  useEffect(() => {
    if (!endpoint) { setPublication(null); setStatus('unconfigured'); return; }
    const controller = new AbortController();
    setStatus('loading');
    fetch(endpoint,{signal:controller.signal,cache:'no-store',headers:{Accept:'application/json'}})
      .then(async response => { if (!response.ok) throw new Error('Falha na consulta'); return response.json() as Promise<unknown>; })
      .then(data => { if (!isPublication(data)) throw new Error('Formato incompatível'); setPublication(data); setStatus('ready'); })
      .catch(() => { if (!controller.signal.aborted) { setPublication(null); setStatus('error'); } });
    return () => controller.abort();
  },[endpoint,reload]);
  const phases=publication?.phases.length ? publication.phases : DEFAULT_PHASES;
  const current=phases.find(p=>p.id===phaseId)||phases[0];
  const related=useMemo(()=>publication?.metrics.filter(m=>!m.phaseId||m.phaseId===current?.id) ?? [],[publication,current?.id]);
  const relatedInsights=publication?.insights.filter(i=>!i.phaseId||i.phaseId===current?.id)??[];
  return <section id="ambientacao" aria-labelledby="ambientacao-title" className="sp-card overflow-hidden">
    <div className="bg-gradient-to-r from-[#17151D] via-[#332754] to-[#5B3DE0] px-5 py-7 text-white sm:px-9 sm:py-9">
      <div className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.16em] text-[#C9E86A]"><Lightbulb size={15}/> Inteligência institucional · Gestão da inovação</div>
      <h1 id="ambientacao-title" className="text-2xl font-extrabold sm:text-3xl">Jornada de Ambientação</h1>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-[#E6E0F4]">Da preparação ao aprendizado: explore como os registros operacionais se conectam às avaliações, aos indicadores e às decisões de melhoria contínua.</p>
    </div>
    <div className="space-y-7 p-4 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#E1DFE5] bg-[#F7F6F8] p-4 text-xs">
        <div className="flex items-center gap-2"><Database size={16} className="text-[#6D4AFF]"/><span><strong>Origem dos indicadores:</strong> Excel Online via publicação validada</span></div>
        <button type="button" className="flex items-center gap-2 rounded-lg border border-[#D3C7FA] bg-white px-3 py-2 font-semibold text-[#5B3DE0] hover:bg-[#F0ECFF]" onClick={()=>setReload(n=>n+1)}><RefreshCw size={14}/> Atualizar consulta</button>
      </div>
      {status==='ready' && <p className="text-xs text-[#5F5A65]">Dados publicados em {new Date(publication!.generatedAt).toLocaleString('pt-BR')}{publication?.sourceUpdatedAt ? ' · Fonte atualizada em '+new Date(publication.sourceUpdatedAt).toLocaleString('pt-BR'):''}.</p>}
      {status!=='ready' && <div role="status" className="rounded-xl border border-[#E1DFE5] bg-[#FBFAFD] p-4 text-sm text-[#5F5A65]">{status==='loading'?'Consultando a fonte pública validada…':status==='unconfigured'?'Fonte Excel Online ainda não configurada. O fluxo metodológico pode ser explorado; nenhum indicador é apresentado como dado real.':'Não foi possível validar a atualização. Os indicadores foram ocultados para evitar informação desatualizada.'}</div>}
      <div><div className="sp-section-label mb-2">01 · Processo navegável</div><h2 className="text-xl font-bold">Uma jornada, informações conectadas</h2><p className="mt-2 text-sm text-[#6F6B75]">Selecione uma etapa para compreender seu propósito, as fontes relacionadas e os resultados esperados.</p></div>
      <div role="tablist" aria-label="Fases da jornada" className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5">{phases.map((p,i)=><button role="tab" aria-selected={current.id===p.id} key={p.id} onClick={()=>{setPhaseId(p.id);setDetailId(null)}} className={`min-w-0 rounded-xl border p-4 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6D4AFF] ${current.id===p.id?'border-[#6D4AFF] bg-[#F0ECFF]':'border-[#E1DFE5] bg-white hover:bg-[#F7F6F8]'}`}><span className="text-xs font-bold text-[#6D4AFF]">{String(i+1).padStart(2,'0')}</span><span className="mt-2 block text-sm font-bold">{p.title}</span><ArrowRight size={14} className="mt-3 text-[#77717F]"/></button>)}</div>
      <div role="tabpanel" className="grid gap-4 lg:grid-cols-[1.25fr_1fr]">
        <div className="rounded-xl border border-[#E9E5EC] bg-white p-5"><div className="sp-section-label">Objetivo da etapa</div><h3 className="mt-2 text-lg font-bold">{current.title}</h3><p className="mt-2 text-sm leading-7 text-[#5F5A65]">{current.intent}</p><p className="mt-4 rounded-lg border-l-4 border-[#6D4AFF] bg-[#F8F6FF] p-3 text-sm font-semibold">{current.question}</p></div>
        <div className="rounded-xl border border-[#E9E5EC] bg-[#FAF9FC] p-5"><div className="flex items-center gap-2 text-sm font-bold"><Workflow size={17} className="text-[#6D4AFF]"/> Fluxo informacional</div><div className="mt-3 space-y-3 text-xs"><div><strong>Insumos</strong><p className="mt-1 text-[#6F6B75]">{current.inputs.join(' · ')}</p></div><div className="flex justify-center"><ChevronDown size={18} className="text-[#6D4AFF]"/></div><div><strong>Resultados</strong><p className="mt-1 text-[#6F6B75]">{current.outputs.join(' · ')}</p></div></div></div>
      </div>
      {current?.id === 'entrada' && <DesignacaoGaegFlow />}
      <div><div className="sp-section-label mb-2">02 · Indicadores contextualizados</div><h2 className="text-xl font-bold">O que as evidências demonstram?</h2><p className="mt-2 text-sm text-[#6F6B75]">Os resultados só aparecem após uma publicação validada. A seleção da etapa controla a pertinência dos indicadores.</p></div>
      {status==='ready' && (related.length?<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{related.map(m=><button key={m.id} onClick={()=>setDetailId(detailId===m.id?null:m.id)} aria-expanded={detailId===m.id} className="rounded-xl border border-[#E1DFE5] bg-white p-5 text-left hover:border-[#B3A3F5]"><BarChart3 size={17} className="text-[#6D4AFF]"/><strong className="mt-2 block text-2xl tabular-nums">{new Intl.NumberFormat('pt-BR',{maximumFractionDigits:2}).format(m.value)}{m.unit||''}</strong><span className="mt-2 block text-sm font-semibold">{m.label}</span>{detailId===m.id && <span className="mt-3 block border-t pt-3 text-xs leading-6 text-[#6F6B75]">{m.description}<br/>Fonte: {m.source}</span>}</button>)}</div>:<p className="rounded-lg bg-[#F7F6F8] p-4 text-sm">Não há indicadores publicados para a etapa selecionada.</p>)}
      <div><div className="sp-section-label mb-2">03 · Interpretação e aprendizagem</div><h2 className="text-xl font-bold">Dos dados às decisões</h2><p className="mt-2 text-sm text-[#6F6B75]">As interpretações são conteúdos revisados, não inferências automáticas de causalidade.</p></div>
      {status==='ready'&&relatedInsights.length>0?<div className="grid gap-3 md:grid-cols-2">{relatedInsights.map(i=><article key={i.id} className="rounded-xl border border-[#E1DFE5] bg-white p-5"><Lightbulb className="text-[#6D4AFF]" size={18}/><h3 className="mt-2 font-bold">{i.title}</h3><p className="mt-2 text-sm leading-7 text-[#6F6B75]">{i.description}</p><p className="mt-3 text-xs text-[#77717F]">Indicadores relacionados: {i.metricIds.join(', ') || 'análise qualitativa'}</p></article>)}</div>:<div className="rounded-xl border border-dashed border-[#D3C7FA] bg-[#FAF9FF] p-5 text-sm text-[#5F5A65]">As interpretações aprovadas serão apresentadas aqui quando a fonte estiver configurada e a publicação estiver disponível.</div>}
      <div className="flex items-start gap-3 rounded-xl bg-[#EFFBF7] p-4 text-xs leading-6 text-[#20635E]"><ShieldCheck size={19} className="mt-0.5 shrink-0"/><p>Transparência com proteção de dados: este portal consome somente indicadores agregados aprovados para divulgação. Bases nominais, respostas abertas identificáveis e credenciais do Microsoft 365 não devem ser expostas nesta interface.</p></div>
      <div className="flex items-center gap-2 text-xs text-[#6F6B75]"><FileSpreadsheet size={15}/> A publicação pode ser atualizada a partir de tabelas do Excel Online sem reconstruir a aplicação. <CheckCircle2 size={15}/></div>
    </div>
  </section>;
};
