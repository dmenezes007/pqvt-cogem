import React,{useState} from 'react';
import {BarChart3,Database,Info,Users,TrendingUp} from 'lucide-react';

// Extração local da planilha anexada, agregada por critérios explícitos.
// Não contém registros nominais nem respostas abertas.
const snapshot={
  reference:'Cópia Excel anexada em 16/10/2026',
  years:[{name:'2024',value:40},{name:'2025',value:74},{name:'2026',value:24}],
  units:[{name:'DEX',value:32},{name:'DGC',value:29},{name:'GNOVA',value:21},{name:'PRESI',value:17},{name:'DIREX',value:15},{name:'DDPRO',value:14},{name:'DAE',value:10}],
  sex:[{name:'Feminino',value:91},{name:'Masculino',value:51}],
  ratings:[
    {name:'30 dias',n:57,average:8.95,distribution:[{name:'1',value:1},{name:'6',value:3},{name:'8',value:12},{name:'9',value:15},{name:'10',value:26}]},
    {name:'90 dias',n:57,average:9,distribution:[{name:'1',value:1},{name:'3',value:1},{name:'7',value:2},{name:'8',value:13},{name:'9',value:9},{name:'10',value:31}]}
  ],
  difficulties:[{name:'30 dias',yes:12,no:45},{name:'60 dias',yes:7,no:54},{name:'90 dias',yes:7,no:50}]
};
type ChartMode='years'|'units'|'sex';
const datasets={years:snapshot.years,units:snapshot.units,sex:snapshot.sex};
const labels:{[K in ChartMode]:string}={years:'Entradas por ano',units:'Registros por unidade',sex:'Distribuição por sexo'};
const BarRows=({data,max}:{data:{name:string,value:number}[],max?:number})=><div className="space-y-3">{data.map(d=><div key={d.name} className="grid grid-cols-[65px_1fr_40px] items-center gap-3 text-xs sm:grid-cols-[110px_1fr_40px]"><span className="truncate text-[#5F5A65]" title={d.name}>{d.name}</span><div className="h-7 overflow-hidden rounded-md bg-[#F0ECFF]"><div className="h-full rounded-md bg-[#6D4AFF] transition-all duration-300" style={{width:`${100*d.value/(max||Math.max(...data.map(x=>x.value),1))}%`}}/></div><strong className="tabular-nums">{d.value}</strong></div>)}</div>;
export const AmbientacaoAnalytics:React.FC=()=>{
 const [mode,setMode]=useState<ChartMode>('years');
 const [rating,setRating]=useState(0);
 const selected=snapshot.ratings[rating];
 return <section id="ambientacao-dados" aria-labelledby="ambientacao-dados-title" className="sp-card overflow-hidden p-5 sm:p-8">
  <div className="sp-section-label mb-2">Exploração dos dados · Recorte histórico</div>
  <h2 id="ambientacao-dados-title" className="text-xl font-extrabold sm:text-2xl">O que os registros nos mostram?</h2>
  <p className="mt-2 max-w-4xl text-sm leading-7 text-[#6F6B75]">Visualizações interativas produzidas a partir de contagens agregadas das abas Base_Dados, 30dias, 60dias e 90dias. Cada visual apresenta universo e interpretação, evitando misturar bases com denominadores distintos.</p>
  <div className="mt-5 flex flex-wrap gap-2">
   {[{id:'years',text:'Evolução temporal'},{id:'units',text:'Unidades'},{id:'sex',text:'Perfil'}].map(x=><button key={x.id} aria-pressed={mode===x.id} onClick={()=>setMode(x.id as ChartMode)} className={`rounded-lg border px-4 py-2 text-xs font-bold transition-colors ${mode===x.id?'border-[#6D4AFF] bg-[#6D4AFF] text-white':'border-[#E1DFE5] bg-white text-[#5F5A65] hover:bg-[#F0ECFF]'}`}>{x.text}</button>)}
  </div>
  <div className="mt-4 grid gap-4 lg:grid-cols-[1.5fr_1fr]">
   <div className="rounded-xl border border-[#E9E5EC] bg-white p-5"><div className="flex items-center gap-2 text-sm font-bold"><Users size={16} className="text-[#6D4AFF]"/>{labels[mode]}</div><p className="mt-2 text-xs text-[#6F6B75]">Base cadastral: {mode==='years'?'138 entradas com data válida':mode==='sex'?'142 registros com categoria preenchida':'138 registros com unidade identificada'}.</p><div className="mt-5"><BarRows data={datasets[mode]}/></div></div>
   <div className="rounded-xl border border-[#E9E5EC] bg-[#FAF9FC] p-5"><Info className="text-[#6D4AFF]" size={19}/><h3 className="mt-3 font-bold">Como interpretar</h3><p className="mt-2 text-sm leading-7 text-[#5F5A65]">{mode==='years'?'As entradas registradas concentram-se em 2025. A distribuição de 2026 é parcial e não deve ser comparada como ano encerrado.':mode==='units'?'Os registros identificados estão distribuídos por sete unidades. Volume de entradas não mede, isoladamente, qualidade ou efetividade da ambientação.':'O perfil cadastral permite descrever o público atendido, mas não demonstra diferenças de experiência entre grupos. Cruzamentos adicionais exigem validação estatística e proteção contra reidentificação.'}</p></div>
  </div>
  <div className="mt-6 grid gap-4 lg:grid-cols-2">
   <div className="rounded-xl border border-[#E9E5EC] p-5"><div className="flex items-center gap-2 text-sm font-bold"><TrendingUp size={17} className="text-[#6D4AFF]"/> Avaliação da experiência</div><div className="mt-4 flex gap-2">{snapshot.ratings.map((r,i)=><button key={r.name} aria-pressed={rating===i} onClick={()=>setRating(i)} className={`rounded-lg border px-3 py-2 text-xs font-bold ${rating===i?'bg-[#17151D] text-white':'border-[#E1DFE5]'}`}>{r.name}</button>)}</div><strong className="mt-4 block text-3xl tabular-nums">{selected.average.toLocaleString('pt-BR',{minimumFractionDigits:2})} <span className="text-sm font-normal text-[#6F6B75]">/ 10 · média</span></strong><p className="mt-1 text-xs text-[#6F6B75]">{selected.n} avaliações numéricas; distribuição das notas:</p><div className="mt-4"><BarRows data={selected.distribution} max={31}/></div><p className="mt-4 text-xs leading-6 text-[#6F6B75]">As avaliações de 30 e 90 dias não são tratadas como painel longitudinal pareado. Sem verificar os respondentes, não é possível afirmar evolução individual.</p></div>
   <div className="rounded-xl border border-[#E9E5EC] p-5"><div className="flex items-center gap-2 text-sm font-bold"><BarChart3 size={17} className="text-[#6D4AFF]"/> Dificuldades reportadas</div><p className="mt-2 text-xs text-[#6F6B75]">Respostas Sim/Não disponíveis em cada formulário.</p><div className="mt-6 space-y-6">{snapshot.difficulties.map(d=>{const total=d.yes+d.no;return <div key={d.name}><div className="mb-2 flex justify-between text-xs"><span>{d.name}</span><strong>{d.yes} de {total} ({(d.yes/total*100).toFixed(1).replace('.',',')}%)</strong></div><div className="flex h-7 overflow-hidden rounded-lg bg-[#E5E1EE]"><div style={{width:`${d.yes/total*100}%`}} className="bg-[#E28C7D]"/><div style={{width:`${d.no/total*100}%`}} className="bg-[#91CCBF]"/></div></div>})}</div><div className="mt-5 flex gap-4 text-xs text-[#5F5A65]"><span>🟠 Sim</span><span>🟢 Não</span></div><p className="mt-4 text-xs leading-6 text-[#6F6B75]">As perguntas e amostras diferem entre etapas. Os percentuais descrevem respostas, não estimativas de causalidade ou redução comprovada de dificuldades.</p></div>
  </div>
  <div className="mt-5 flex items-start gap-2 rounded-lg border border-[#E1DFE5] bg-[#F7F6F8] p-4 text-xs leading-6 text-[#5F5A65]"><Database className="mt-1 shrink-0 text-[#6D4AFF]" size={16}/><span><strong>Proveniência:</strong> {snapshot.reference}. Recorte estático agregado, sujeito à revisão de duplicidades e consistência. Esta visualização não atualiza automaticamente pelo Excel Online. Categorias com contagens individuais reduzidas foram omitidas dos recortes por vínculo; nenhum nome, CPF, comentário aberto ou dado individual é publicado.</span></div>
 </section>;
};
