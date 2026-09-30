export type PillarType = 'saude' | 'movimento' | 'conexao' | 'equilibrio';

export type ActivityFormat = 'Presencial' | 'Online (Teams)' | 'Híbrido';

export interface Activity {
  id: string;
  title: string;
  pillar: PillarType;
  category: string;
  date: string;
  rawDate: string; // ISO date for sorting
  time: string;
  format: ActivityFormat;
  location: string;
  audience: string;
  description: string;
  capacity?: number;
  enrolledCount: number;
  isEnrolled?: boolean;
  facilitator?: string;
  prerequisites?: string;
  isOfficialData: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  pillar: PillarType;
  shortDescription: string;
  fullDescription: string;
  audience: string;
  channels: {
    type: 'email' | 'form' | 'teams' | 'location' | 'intranet';
    label: string;
    value: string;
  }[];
  hoursOrDeadline: string;
  steps: string[];
  responsibles: string;
}

export interface NewsItem {
  id: string;
  title: string;
  subtitle?: string;
  summary: string;
  content: string[];
  category: string;
  pillar: PillarType;
  publishedAt: string;
  readTime: string;
  author: string;
  authorRole: string;
  isFeatured?: boolean;
  isSecondary?: boolean;
  tags: string[];
  isOfficialData: boolean;
}

export interface KnowledgeDoc {
  id: string;
  code: string; // e.g. DOC-09
  title: string;
  subtitle: string;
  docType: string;
  pillar: PillarType;
  version: string;
  updatedAt: string;
  readTime: string;
  summary: string;
  keyPoints: string[];
  sections: {
    title: string;
    content: string;
  }[];
  tags: string[];
  isFeatured?: boolean;
  downloadsCount: number;
}

export interface InitiativeDelivery {
  id: string;
  order: number;
  title: string;
  status: 'Concluído' | 'Em Andamento' | 'Planejado';
  progress: number;
  description: string;
  updatedDate: string;
}

export interface StrategicAction {
  code: string; // ACT-06
  title: string;
  axis: string; // Eixo 2 — Experiência, Bem-Estar e Inclusão das Pessoas
  scope: string[];
  description: string;
  status: 'Em Andamento' | 'Concluído' | 'Planejado';
  progress: number; // 50%
  responsible: string; // Lucas Nogueira
  stakeholders: string[]; // Comissão de QVT, Todos os Servidores
  relatedDocumentCode: string; // DOC-09
  deliveries: InitiativeDelivery[];
  nextSteps: string[];
}

export interface CommunityInfo {
  name: string;
  type: string;
  domain: string;
  membersCount: number; // 31
  frequency: string; // Quinzenal
  meetingSchedule: string;
  facilitators: string[];
  recentOutcomes: string[];
  nextActionsState: string;
}

export interface IndicatorMetric {
  id: string;
  title: string;
  value: string;
  unit?: string;
  trend?: string;
  trendType?: 'positive' | 'neutral' | 'stable';
  description: string;
  period: string;
  source: string;
  isDemonstrative: boolean;
}

export type UserPersona = 'servidor' | 'gestor' | 'equipe_pqvt';
