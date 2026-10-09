import React, { Fragment, useState } from 'react';
import { ChevronDown, ChevronRight, ExternalLink, Search, SlidersHorizontal } from 'lucide-react';
import data from '../data/idePractices.json';

const requirements = new Map(data.requirements.map((item) => [item.id, item]));
const dimensions = [...new Set(data.requirements.map((item) => item.dimension))];
const normalize = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR');

export function IdePracticesSection() {
  const [query, setQuery] = useState('');
  const [requirement, setRequirement] = useState('');
  const [dimension, setDimension] = useState('');
  const [expanded, setExpanded] = useState<Set<number>>(() => new Set());
  const [sort, setSort] = useState<'id' | 'title'>('id');
  const [descending, setDescending] = useState(false);
  const filtered = data.practices.filter((practice) => {
    const linked = practice.requirementIds.map((id) => requirements.get(id)!);
    return (!requirement || practice.requirementIds.includes(Number(requirement)))
      && (!dimension || linked.some((item) => item.dimension === dimension))
      && normalize([practice.id, practice.title, practice.description, practice.organization, practice.evidence, practice.source, practice.mappingNotes, ...linked.map((item) => item.text)].join(' ')).includes(normalize(query.trim()));
  }).sort((a, b) => (sort === 'id' ? a.id - b.id : a.title.localeCompare(b.title, 'pt-BR')) * (descending ? -1 : 1));

  function toggle(id: number) {
    setExpanded((previous) => {
      const next = new Set(previous);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }
  function order(column: 'id' | 'title') {
    setDescending(sort === column ? !descending : false);
    setSort(column);
  }
  const hasFilters = Boolean(query || requirement || dimension);

  return <section id="praticas-ide" className="sp-card scroll-mt-44 p-5 sm:p-8" aria-labelledby="ide-title">
    <div className="mb-5 flex items-start gap-3">
      <div className="rounded-lg bg-[#F0ECFF] p-3 text-[#5B3DE0]"><SlidersHorizontal aria-hidden="true" className="h-5 w-5" /></div>
      <div><p className="sp-section-label">Diversidade, equidade e inclusão</p><h2 id="ide-title" className="mt-1 text-2xl font-bold">Práticas IDE da Enap</h2><p className="mt-2 text-sm text-[#5F5A65]">Pesquise, combine filtros e expanda cada prática para consultar sua descrição e evidência.</p></div>
    </div>
    <div className="ide-filters">
      <label className="ide-control"><span>Pesquisar práticas</span><div className="relative"><Search aria-hidden="true" className="absolute left-3 top-3 h-4 w-4 text-[#77717F]" /><input className="pl-9" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Título, descrição, requisito ou evidência…" /></div></label>
      <label className="ide-control"><span>Dimensão do Modelo IDE</span><select value={dimension} onChange={(event) => setDimension(event.target.value)}><option value="">Todas as dimensões</option>{dimensions.map((item) => <option key={item}>{item}</option>)}</select></label>
      <label className="ide-control"><span>Requisito do Modelo IDE</span><select value={requirement} onChange={(event) => setRequirement(event.target.value)}><option value="">Todos os requisitos</option>{data.requirements.map((item) => <option key={item.id} value={item.id}>{item.text}</option>)}</select></label>
      <button className="ide-clear" disabled={!hasFilters} onClick={() => { setQuery(''); setDimension(''); setRequirement(''); }}>Limpar filtros</button>
    </div>
    <p className="my-4 text-xs text-[#5F5A65]" role="status">{filtered.length} de {data.practices.length} práticas • Busca e filtros operam em conjunto</p>
    <div className="overflow-x-auto rounded-lg border border-[#E1DFE5]">
      <table className="ide-table"><caption className="sr-only">Práticas da Enap relacionadas aos requisitos do Modelo IDE</caption><thead><tr>
        <th scope="col" aria-sort={sort === 'id' ? descending ? 'descending' : 'ascending' : 'none'}><button onClick={() => order('id')}>ID {sort === 'id' ? descending ? '↓' : '↑' : ''}</button></th>
        <th scope="col" aria-sort={sort === 'title' ? descending ? 'descending' : 'ascending' : 'none'}><button onClick={() => order('title')}>Título {sort === 'title' ? descending ? '↓' : '↑' : ''}</button></th>
        <th scope="col">Requisitos</th><th scope="col">Fonte</th>
      </tr></thead><tbody>{filtered.map((practice) => {
        const open = expanded.has(practice.id);
        const linked = practice.requirementIds.map((id) => requirements.get(id)!).sort((a, b) => a.id - b.id);
        return <Fragment key={practice.id}><tr className={open ? 'ide-open' : ''}>
          <td className="whitespace-nowrap tabular-numbers">{String(practice.id).padStart(2, '0')}</td>
          <th scope="row"><button className="ide-expand" aria-expanded={open} aria-controls={`ide-detail-${practice.id}`} onClick={() => toggle(practice.id)}>{open ? <ChevronDown aria-hidden="true" /> : <ChevronRight aria-hidden="true" />}<span>{practice.title}</span><span className="sr-only"> — {open ? 'Recolher' : 'Expandir'} detalhes</span></button></th>
          <td><ul className="ide-requirements">{linked.map((item) => <li key={item.id}>{item.text}</li>)}</ul></td>
          <td><a className="ide-source" href={practice.source} target="_blank" rel="noopener noreferrer">Consultar fonte<ExternalLink aria-hidden="true" className="h-3.5 w-3.5" /><span className="sr-only"> de {practice.title} (nova aba)</span></a></td>
        </tr><tr hidden={!open} id={`ide-detail-${practice.id}`}><td colSpan={4} className="ide-detail-cell">{open ? <article className="ide-detail" aria-label={`Detalhes de ${practice.title}`}>
          <div className="ide-cover" aria-hidden="true"><span>ENAP</span><strong>IDE</strong><span>Diversidade<br />Equidade<br />Inclusão</span><small>Prática {String(practice.id).padStart(2, '0')}</small></div>
          <div className="min-w-0 space-y-4"><h3 className="font-bold"><span>Título: </span>{practice.title}</h3><p><strong>Descrição: </strong>{practice.description}</p><p><strong>Órgão: </strong>{practice.organization}</p><p><strong>Norma/Evidência: </strong><a href={practice.source} target="_blank" rel="noopener noreferrer">{practice.evidence}<span className="sr-only"> (nova aba)</span></a></p><div><strong>Requisitos Modelo IDE:</strong><ul className="mt-2 space-y-2">{linked.map((item) => <li key={item.id}>{item.text}</li>)}</ul></div><p><strong>Mais informações: </strong><a className="break-all" href={practice.source} target="_blank" rel="noopener noreferrer">{practice.source}<span className="sr-only"> (nova aba)</span></a></p><div className="ide-note"><strong>Observações sobre a vinculação: </strong>{practice.mappingNotes}</div></div>
        </article> : null}</td></tr></Fragment>;
      })}{filtered.length === 0 ? <tr><td colSpan={4} className="py-10 text-center">Nenhuma prática encontrada. Ajuste a pesquisa ou limpe os filtros.</td></tr> : null}</tbody></table>
    </div>
    <p className="mt-4 text-xs leading-relaxed text-[#6F6B75]">Requisitos transcritos da planilha original do Modelo IDE. A vinculação de uma prática a um requisito não comprova seu atendimento integral. Consulte as observações e a evidência de cada registro.</p>
  </section>;
}
