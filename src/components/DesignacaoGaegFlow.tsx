import React,{useState} from 'react';
import {Info,RotateCcw,Workflow} from 'lucide-react';
type Node={id:string;x:number;y:number;w?:number;h?:number;label:string;lane:string;kind?:'start'|'message'|'end'|'gateway'|'parallel'|'sub';note:string};
const nodes:Node[]=[
{id:'inicio',x:85,y:180,label:'Início',lane:'Triagem',kind:'start',note:'Início do procedimento de designação de GAEG.'},
{id:'providencia',x:176,y:162,w:95,h:62,label:'Criar Providência',lane:'Triagem',kind:'sub',note:'Abrir a providência administrativa que inicia o tratamento da designação.'},
{id:'portariaRecebida',x:176,y:270,w:95,h:62,label:'Anexar portaria ao processo',lane:'Triagem',note:'Recebimento da portaria por mensagem e sua juntada ao processo.'},
{id:'juncao',x:338,y:384,label:'Convergência dos caminhos',lane:'Executor',kind:'gateway',note:'Reúne os caminhos de abertura por providência e recebimento de portaria.'},
{id:'email',x:338,y:505,w:98,h:64,label:'Encaminhar e-mail de ambientação',lane:'Executor',note:'Acionar o comunicado de ambientação e suas orientações iniciais.'},
{id:'bifurca',x:535,y:510,label:'Atividades paralelas',lane:'Executor',kind:'parallel',note:'Inicia paralelamente os procedimentos relativos a login e portaria.'},
{id:'servidor',x:535,y:435,label:'Servidor da casa?',lane:'Executor',kind:'gateway',note:'Decidir se é necessário solicitar login e aprovação no CSE.'},
{id:'solicitarLogin',x:635,y:352,w:100,h:62,label:'Solicitar login/SEI',lane:'Executor',note:'Solicitação de credenciais e acesso ao SEI, quando aplicável.'},
{id:'aprovacao',x:635,y:40,w:100,h:62,label:'Solicitar Aprovação via CITSmart',lane:'CSE',note:'Enviar solicitação de aprovação de login pelo CITSmart.'},
{id:'mensagemCse',x:754,y:413,label:'Mensagem recebida',lane:'Executor',kind:'message',note:'Evento intermediário de retorno da solicitação ao CSE.'},
{id:'aprovar',x:848,y:352,w:100,h:62,label:'Aprovar processo no CSE',lane:'Executor',note:'Aprovar o processo no CSE após recebimento da solicitação.'},
{id:'criarLogin',x:964,y:40,w:100,h:62,label:'Criar login',lane:'CSE',note:'Disponibilizar credenciais para execução das atividades.'},
{id:'mensagemPortaria',x:580,y:580,label:'Mensagem / portaria',lane:'Executor',kind:'message',note:'Evento intermediário que aciona a tramitação da portaria.'},
{id:'paraleloPortaria',x:617,y:580,label:'Preparação paralela',lane:'Executor',kind:'parallel',note:'Preparar a documentação e alimentar a base de ambientação simultaneamente.'},
{id:'elaborar',x:690,y:545,w:102,h:60,label:'Elaborar portaria e Despacho',lane:'Executor',note:'Elaborar documentos necessários ao procedimento de designação.'},
{id:'inserir',x:690,y:615,w:102,h:60,label:'Inserir nome do servidor na planilha de ambientação',lane:'Executor',note:'Atualizar o registro operacional do ingresso na planilha de ambientação.'},
{id:'juntar',x:822,y:580,label:'Convergência documental',lane:'Executor',kind:'parallel',note:'Aguardar conclusão da elaboração e da atualização da planilha.'},
{id:'publicar',x:867,y:545,w:98,h:62,label:'Publicar portaria',lane:'Executor',note:'Providenciar publicação da portaria.'},
{id:'eventoPublicacao',x:995,y:580,label:'Comprovante disponível',lane:'Executor',kind:'message',note:'Evento que sinaliza disponibilidade do comprovante de publicação.'},
{id:'anexar',x:1048,y:545,w:105,h:68,label:'Anexar comprovante de portaria ao processo',lane:'Executor',note:'Juntar a comprovação de publicação ao processo administrativo.'},
{id:'unir',x:1112,y:435,label:'Conclusão paralela',lane:'Executor',kind:'parallel',note:'Sincroniza a obtenção de login com a publicação da portaria.'},
{id:'termo',x:1250,y:435,label:'Exige Termo de exercício?',lane:'Executor',kind:'gateway',note:'Verificar se a designação exige a assinatura de termo de exercício.'},
{id:'pedirAssinatura',x:1210,y:550,w:105,h:64,label:'Anexar e solicitar assinatura do TE',lane:'Executor',note:'Inserir o termo e solicitar assinatura pelo servidor.'},
{id:'assinar',x:1210,y:804,w:105,h:62,label:'Assinar termo de exercício',lane:'Servidor',note:'Servidor confere e assina o termo de exercício.'},
{id:'conferir',x:1327,y:652,w:100,h:60,label:'Conferir Assinatura',lane:'Executor',note:'Conferir a assinatura do termo antes do encaminhamento.'},
{id:'encaminhar',x:1412,y:550,w:100,h:64,label:'Detalhar e Encaminhar processo para SEAF',lane:'Executor',note:'Detalhar as providências e encaminhar o processo ao SEAF.'},
{id:'fim',x:1544,y:580,label:'Fim',lane:'Executor',kind:'end',note:'Encerramento do fluxo representado na modelagem original.'}
];
const edges:[string,string,string?][]=[
['inicio','providencia'],['providencia','juncao'],['portariaRecebida','juncao'],['juncao','email'],['email','bifurca'],['bifurca','servidor'],['servidor','solicitarLogin','Não'],['servidor','unir','Sim'],['solicitarLogin','aprovacao'],['aprovacao','mensagemCse'],['mensagemCse','aprovar'],['aprovar','criarLogin'],['criarLogin','unir'],['bifurca','mensagemPortaria'],['mensagemPortaria','paraleloPortaria'],['paraleloPortaria','elaborar'],['paraleloPortaria','inserir'],['elaborar','juntar'],['inserir','juntar'],['juntar','publicar'],['publicar','eventoPublicacao'],['eventoPublicacao','anexar'],['anexar','unir'],['unir','termo'],['termo','pedirAssinatura','Sim'],['termo','encaminhar','Não'],['pedirAssinatura','assinar'],['assinar','conferir'],['conferir','encaminhar'],['encaminhar','fim']
];
const lookup=Object.fromEntries(nodes.map(n=>[n.id,n])) as Record<string,Node>;
function bounds(n:Node) { const w=n.w??34,h=n.h??34; return {cx:n.x+w/2,cy:n.y+h/2,l:n.x,r:n.x+w,t:n.y,b:n.y+h}; }
type Side='left'|'right'|'top'|'bottom';
function point(n:Node,s:Side) { const b=bounds(n);return s==='left'?[b.l,b.cy]:s==='right'?[b.r,b.cy]:s==='top'?[b.cx,b.t]:[b.cx,b.b]; }
const specific:Record<string,[Side,Side,number?]>={
 'providencia:juncao':['right','top',307], 'portariaRecebida:juncao':['bottom','left',365],
 'juncao:email':['bottom','top'], 'email:bifurca':['right','left'], 'bifurca:servidor':['top','bottom'],
 'servidor:solicitarLogin':['right','left'], 'solicitarLogin:aprovacao':['top','bottom'],
 'aprovacao:mensagemCse':['right','top',762], 'mensagemCse:aprovar':['right','left'],
 'aprovar:criarLogin':['top','left',955], 'criarLogin:unir':['right','top',1100],
 'bifurca:mensagemPortaria':['bottom','left',578], 'mensagemPortaria:paraleloPortaria':['right','left'],
 'paraleloPortaria:elaborar':['right','left'], 'paraleloPortaria:inserir':['bottom','left',661],
 'elaborar:juntar':['right','top',810], 'inserir:juntar':['right','bottom',808],
 'juntar:publicar':['right','left'], 'publicar:eventoPublicacao':['bottom','left',984],
 'eventoPublicacao:anexar':['right','left'], 'anexar:unir':['top','bottom'],
 'unir:termo':['right','left'], 'termo:pedirAssinatura':['bottom','top'],
 'termo:encaminhar':['right','top',1388], 'pedirAssinatura:assinar':['bottom','top'],
 'assinar:conferir':['right','bottom',1377], 'conferir:encaminhar':['top','bottom'],
 'encaminhar:fim':['right','left'],
 'servidor:unir':['right','left',1025]
};
function route(a:Node,b:Node) {
 const A=bounds(a),B=bounds(b);
 const key=a.id+':'+b.id;
 const inferred:[Side,Side]=Math.abs(B.cx-A.cx)>=Math.abs(B.cy-A.cy)?(B.cx>=A.cx?['right','left']:['left','right']):(B.cy>=A.cy?['bottom','top']:['top','bottom']);
 const [from,to,bend]=specific[key]??inferred;
 const [sx,sy]=point(a,from),[ex,ey]=point(b,to);
 let coords:number[][]=[[sx,sy]];
 if(sx!==ex && sy!==ey){
  if(from==='top'||from==='bottom') {const mid=bend??((sy+ey)/2);coords.push([sx,mid],[ex,mid]);}
  else if(to==='top'||to==='bottom') {const mid=bend??((sx+ex)/2);coords.push([mid,sy],[mid,ey]);}
  else {const mid=bend??((sx+ex)/2);coords.push([mid,sy],[mid,ey]);}
 }
 coords.push([ex,ey]);
 const compact=coords.filter((p,i)=>i===0||p[0]!==coords[i-1][0]||p[1]!==coords[i-1][1]);
 return 'M '+compact.map(p=>p.join(' ')).join(' L ');
}
function wrapLabel(label:string,width:number):string[] {
 const max=Math.max(10,Math.floor(width/7));const words=label.split(' ');const lines:string[]=[];let line='';
 for(const word of words){ if((line+' '+word).trim().length>max && line){lines.push(line);line=word;}else line=(line+' '+word).trim();}
 if(line)lines.push(line);return lines;
}
export const DesignacaoGaegFlow:React.FC=()=>{
 const [selected,setSelected]=useState('email');
 const [hover,setHover]=useState<string|null>(null);
 const focus=lookup[selected];
 return <section aria-label="Fluxo de Designação de GAEG" className="rounded-xl border border-[#E1DFE5] bg-white p-4 sm:p-5">
  <div className="mb-3 flex flex-wrap items-center justify-between gap-3"><div><div className="sp-section-label">Fluxo interativo · Processo de embarque</div><h3 className="mt-1 text-lg font-bold text-[#17151D]">Designação de GAEG</h3><p className="mt-1 text-xs text-[#6F6B75]">Representação navegável do fluxo fornecido, com atividades por responsável, decisões e eventos.</p></div><div className="flex gap-2"><button onClick={()=>setSelected('email')} className="rounded-md border border-[#E1DFE5] px-3 py-2 text-xs"><RotateCcw size={14} className="inline"/> Reiniciar foco</button></div></div>
  <div className="overflow-auto rounded-xl border border-[#E1DFE5] bg-[#FCFCFD]" >
   <svg viewBox="0 0 1590 910" style={{minWidth:1250,width:'100%',height:'auto'}} role="group" aria-label="Diagrama interativo de designação de GAEG, use Tab para selecionar atividades">
    <defs><marker id="gaeg-arrow" orient="auto" markerWidth="7" markerHeight="7" refX="6" refY="3"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#65616C" strokeWidth="1.2"/></marker></defs>
    {([{y:0,h:125,label:'CSE'},{y:125,h:215,label:'Triagem'},{y:340,h:440,label:'Executor'},{y:780,h:130,label:'Servidor'}] as const).map((l,i)=><g key={l.label}><rect x="0" y={l.y} width="1590" height={l.h} fill={i%2?'#F9F8FB':'#FFFFFF'} stroke="#D5D1DA"/><rect x="0" y={l.y} width="42" height={l.h} fill="#F0ECF8" stroke="#D5D1DA"/><text x="24" y={l.y+l.h/2} textAnchor="middle" transform={`rotate(-90 24 ${l.y+l.h/2})`} fontSize="14" fontWeight="700" fill="#55505C">{l.label}</text></g>)}
    {edges.map(([from,to,label],i)=>{const a=lookup[from],b=lookup[to];return <g key={i}><path d={route(a,b)} fill="none" stroke="#77717F" strokeWidth="1.6" strokeLinejoin="round" markerEnd="url(#gaeg-arrow)"/>{label&&<text x={(position(a).x+position(b).x)/2} y={(position(a).y+position(b).y)/2-7} fill="#4F4A57" fontSize="12" fontWeight="700">{label}</text>}</g>})}
    {nodes.map(n=>{const x=n.x,y=n.y,w=n.w||34,h=n.h||34,active=selected===n.id,over=hover===n.id,isCircle=['start','end','message'].includes(n.kind||'');
     return <g key={n.id} role="button" tabIndex={0} aria-label={n.label+' — '+n.lane} onClick={()=>setSelected(n.id)} onKeyDown={e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();setSelected(n.id)}}} onMouseEnter={()=>setHover(n.id)} onMouseLeave={()=>setHover(null)} style={{cursor:'pointer',outline:'none'}}>
       {isCircle?<circle cx={x+17} cy={y+17} r={n.kind==='message'?15:16} fill={n.kind==='end'?'#FFE9E9':n.kind==='start'?'#EAF8DA':'#FFF9DF'} stroke={active?'#6D4AFF':n.kind==='end'?'#BB1E37':'#6A9E25'} strokeWidth={active?4:2.2}/>:n.kind==='gateway'||n.kind==='parallel'?<rect x={x+4} y={y+4} width="26" height="26" transform={`rotate(45 ${x+17} ${y+17})`} fill="#FFFADB" stroke={active?'#6D4AFF':'#B4A400'} strokeWidth={active?3:2}/>:<rect x={x} y={y} width={w} height={h} rx="8" fill={active?'#F0ECFF':n.id==='email'||n.id==='inserir'?'#FFFDE2':'#F3F7FF'} stroke={active?'#6D4AFF':'#147DB0'} strokeWidth={active?3:1.7}/>}
       {n.kind==='parallel'&&<text x={x+17} y={y+24} textAnchor="middle" fontSize="30" fontWeight="800" fill="#AFA000">+</text>}
       {n.kind==='message'&&<text x={x+17} y={y+23} textAnchor="middle" fontSize="19" fill="#8E842B">✉</text>}
       {n.w&&<text x={x+w/2} y={y+h/2} textAnchor="middle" dominantBaseline="middle" fontSize="11.5" fontWeight={active?700:500} fill="#2B2930">{wrapLabel(n.label,w-12).slice(0,5).map((line,k,lines)=><tspan key={k} x={x+w/2} dy={k===0?-(lines.length-1)*7:14}>{line}</tspan>)}</text>}

       {(over||active)&&<rect x={x-3} y={y-3} width={w+6} height={h+6} rx="9" stroke="#6D4AFF" strokeWidth="1.5" strokeDasharray="3 3" fill="none"/>}
       <title>{n.label} | {n.lane}: {n.note}</title>
     </g>})}
   </svg>
  </div>
  <div className="mt-4 grid gap-3 lg:grid-cols-[1fr_1.4fr]"><div className="rounded-lg border border-[#E1DFE5] bg-[#FAF9FC] p-4"><div className="flex items-center gap-2 text-xs font-bold text-[#5B3DE0]"><Workflow size={16}/> Atividade selecionada</div><h4 className="mt-2 text-base font-bold">{focus.label}</h4><p className="mt-1 text-xs text-[#6F6B75]">Responsável: {focus.lane}</p><p className="mt-3 text-sm leading-6">{focus.note}</p></div><div className="rounded-lg border border-[#E1DFE5] p-4 text-xs leading-6 text-[#6F6B75]"><div className="mb-2 flex gap-2 font-bold text-[#17151D]"><Info size={16}/> Como navegar</div>Selecione qualquer atividade ou decisão no diagrama usando mouse, toque ou teclado (Tab e Enter). Ao passar o cursor, consulte o resumo; ao clicar, visualize o detalhamento abaixo. O esquema preserva os participantes e as decisões essenciais do desenho Bizagi e representa a lógica do processo, mas não executa atos administrativos.<p className="mt-2 font-semibold">Fonte: diagrama “Designação de GAEG” enviado nesta conversa.</p></div></div>
 </section>;
};
