import {
  PillarType,
  Activity,
  ServiceItem,
  NewsItem,
  KnowledgeDoc,
  StrategicAction,
  CommunityInfo,
  IndicatorMetric,
} from '../types/pqvt';

export const PILLARS_CONFIG: Record<
  PillarType,
  {
    title: string;
    description: string;
    colorAccent: string;
    bgSubtle: string;
    borderAccent: string;
    badgeText: string;
    iconName: string;
  }
> = {
  saude: {
    title: 'Saúde',
    description: 'Promoção integral e prevenção ativa em saúde física e ocupacional.',
    colorAccent: '#059669', // Emerald wellness
    bgSubtle: '#ECFDF5',
    borderAccent: '#A7F3D0',
    badgeText: 'Prevenção & Cuidado',
    iconName: 'HeartPulse',
  },
  movimento: {
    title: 'Movimento',
    description: 'Atividades físicas, pausas ativas regulares e ergonomia aplicada.',
    colorAccent: '#27C7C9', // COGEM Ciano
    bgSubtle: '#F0FDFA',
    borderAccent: '#99F6E4',
    badgeText: 'Corpo & Postura',
    iconName: 'Activity',
  },
  conexao: {
    title: 'Conexão',
    description: 'Integração entre equipes, convivência empática e comunidades de prática.',
    colorAccent: '#6D4AFF', // COGEM Roxo
    bgSubtle: '#F5F3FF',
    borderAccent: '#DDD6FE',
    badgeText: 'Pessoas & Clima',
    iconName: 'Users',
  },
  equilibrio: {
    title: 'Equilíbrio',
    description: 'Saúde mental, desconexão digital no PGD e harmonia vida-trabalho.',
    colorAccent: '#4F46E5', // Indigo
    bgSubtle: '#EEF2FF',
    borderAccent: '#C7D2FE',
    badgeText: 'Mente & Teletrabalho',
    iconName: 'Compass',
  },
};

export const STRATEGIC_ACTION_ACT06: StrategicAction = {
  code: 'ACT-06',
  title: 'Plano Anual de Qualidade de Vida no Trabalho (PQVT 2026)',
  axis: 'Eixo 2 — Experiência, Bem-Estar e Inclusão das Pessoas',
  scope: [
    'Employee Experience (EX) em todo o ciclo funcional',
    'Ambientação e Onboarding Institucional',
    'Programa de Qualidade de Vida no Trabalho — PQVT/QVT',
    'Diversidade, Equidade e Inclusão — DEI',
    'Preparação para Aposentadoria e Rito de Desligamento',
    'Clima Organizacional e Apoio Psicossocial',
  ],
  description:
    'Implementação de ações preventivas de saúde mental, ergonomia em postos físicos e teletrabalho, rodas de conversa sobre sobrecarga e programas de bem-estar.',
  status: 'Em Andamento',
  progress: 50,
  responsible: 'Lucas Nogueira',
  stakeholders: ['Comissão de QVT', 'Todos os Servidores'],
  relatedDocumentCode: 'DOC-09',
  deliveries: [
    {
      id: 'del-1',
      order: 1,
      title: 'Diagnóstico de riscos psicossociais e ergonomia',
      status: 'Concluído',
      progress: 100,
      description:
        'Mapeamento consolidado das condições de trabalho presencial e teletrabalho com escuta aos servidores.',
      updatedDate: 'Concluído em 1º Tri/2026',
    },
    {
      id: 'del-2',
      order: 2,
      title: 'Ciclo de palestras sobre saúde mental e equilíbrio no PGD',
      status: 'Em Andamento',
      progress: 50,
      description:
        'Encontros mensais e oficinas temáticas com especialistas sobre gestão de estresse, desconexão e foco sustentável.',
      updatedDate: 'Em execução — 3 encontros realizados de 6 previstos',
    },
    {
      id: 'del-3',
      order: 3,
      title: 'Parceria com academia e serviço social',
      status: 'Planejado',
      progress: 0,
      description:
        'Articulação institucional para convênios de atividade física, apoio nutricional e atendimento assistencial ampliado.',
      updatedDate: 'Próximas ações em definição com a Diretoria',
    },
  ],
  nextSteps: [
    'Finalizar análise quantitativa do ciclo intermediário de palestras',
    'Submeter minuta de convênio institucional para apoio esportivo e bem-estar',
    'Publicar atualização da cartilha de ergonomia para o Programa de Gestão e Desempenho (PGD)',
  ],
};

export const FEATURED_DOC09: KnowledgeDoc = {
  id: 'doc-09',
  code: 'DOC-09',
  title: 'Guia de Saúde Mental e Prevenção do Esgotamento no Teletrabalho',
  subtitle:
    'Diretrizes institucionais, práticas de higiene digital e orientações de autocuidado e acolhimento para o regime de teletrabalho e híbrido.',
  docType: 'Guia Prático e Institucional',
  pillar: 'equilibrio',
  version: 'Versão 2.1 — Atualizado 2026',
  updatedAt: 'Fevereiro de 2026',
  readTime: '8 min de leitura',
  summary:
    'Documento de referência da Enap com recomendações práticas para manter o equilíbrio emocional, estabelecer limites no PGD, organizar pausas ativas e acionar canais de apoio psicossocial.',
  keyPoints: [
    'Higiene digital e delimitação saudável da jornada de trabalho no PGD',
    'Direito e prática da desconexão fora do horário acordado no plano de entregas',
    'Ergonomia física e organização do posto de trabalho domiciliar',
    'Protocolo de pausas ativas a cada 90 minutos de atividade contínua de tela',
    'Canais institucionais de acolhimento e escuta qualificada sem julgamento',
    'Sinais precoces de sobrecarga cognitiva e prevenção ao burnout',
  ],
  sections: [
    {
      title: '1. Propósito e Natureza das Orientações',
      content:
        'Este guia constitui conteúdo institucional de promoção da saúde e qualidade de vida no trabalho na Enap. Suas diretrizes não substituem consulta, diagnóstico ou acompanhamento médico e psicológico individualizado, atuando como bússola preventiva e educativa para a rotina no PGD.',
    },
    {
      title: '2. Higiene Digital e o Direito à Desconexão',
      content:
        'O teletrabalho exige delimitação intencional entre o tempo funcional e a vida pessoal. Recomenda-se desativar notificações institucionais no celular após o encerramento do expediente acordado, evitar o envio de e-mails em horários noturnos e finais de semana (utilizando agendamento de envio) e instituir períodos sem reuniões para foco profundo.',
    },
    {
      title: '3. Ergonomia e Micro-Pausas Ativas',
      content:
        'Manter postura neutra da coluna com apoio lombar, monitor na altura da linha dos olhos e antebraços apoiados em 90 graus. A cada 60 a 90 minutos de tela contínua, execute a pausa ativa de 3 minutos: olhar para um ponto distante a 6 metros (regra 20-20-20), alongar ombros e trapézio e beber água.',
    },
    {
      title: '4. Reconhecendo Sinais de Sobrecarga e Burnout',
      content:
        'Sensação constante de cansaço mesmo após o repouso, distanciamento emocional em relação às entregas, irritabilidade atípica e dificuldade de concentração são sinais de alerta. O diálogo aberto com a chefia imediata e com a equipe de gestão de pessoas é fundamental para reavaliar cargas e prazos.',
    },
    {
      title: '5. Canais Institucionais de Apoio e Acolhimento',
      content:
        'Servidores que necessitarem de escuta qualificada, orientações sobre saúde funcional ou apoio em situações de vulnerabilidade podem contatar com total sigilo a equipe de apoio psicossocial pelo e-mail qvt@enap.gov.br ou via agendamento presencial no campus.',
    },
  ],
  tags: ['Saúde Mental', 'PGD', 'Teletrabalho', 'Ergonomia', 'Desconexão', 'Bem-Estar'],
  isFeatured: true,
  downloadsCount: 142,
};

export const OTHER_KNOWLEDGE_DOCS: KnowledgeDoc[] = [
  {
    id: 'doc-ergonomia',
    code: 'DOC-12',
    title: 'Cartilha de Ergonomia: Posto de Trabalho e Home Office',
    subtitle: 'Checklist ilustrado para ajuste de cadeira, altura da tela, iluminação e apoios.',
    docType: 'Cartilha Técnica',
    pillar: 'movimento',
    version: 'v1.4',
    updatedAt: 'Janeiro de 2026',
    readTime: '5 min de leitura',
    summary:
      'Instruções técnicas para adequar a estação física de trabalho, evitando lesões por esforço repetitivo (LER/DORT) e desconfortos osteomusculares.',
    keyPoints: [
      'Ajuste ergonômico de cadeiras com suporte lombar',
      'Posicionamento de telas simples e duplas',
      'Iluminação natural e controle de reflexos',
      'Exercícios diários de mobilidade articular',
    ],
    sections: [],
    tags: ['Ergonomia', 'Postura', 'Prevenção', 'Checklist'],
    downloadsCount: 98,
  },
  {
    id: 'doc-inclusao',
    code: 'DOC-15',
    title: 'Manual de Linguagem Inclusiva e Acolhedora na Enap',
    subtitle: 'Elaborado pela CoP Diversidade, Equidade e Clima Humanizado.',
    docType: 'Manual Prático',
    pillar: 'conexao',
    version: 'v2.0',
    updatedAt: 'Novembro de 2025',
    readTime: '6 min de leitura',
    summary:
      'Guia de diretrizes textuais e comportamentais para comunicação interna respeitosa, equitativa e livre de vieses inconscientes.',
    keyPoints: [
      'Termos recomendados e expressões a evitar',
      'Acessibilidade em documentos digitais',
      'Comunicação não-violenta no ambiente de trabalho',
      'Casos práticos de redação oficial inclusiva',
    ],
    sections: [],
    tags: ['Inclusão', 'Linguagem Inclusiva', 'CoP', 'Comunicação'],
    downloadsCount: 115,
  },
  {
    id: 'doc-pgd-equilibrio',
    code: 'DOC-18',
    title: 'Boas Práticas de Gestão Humanizada no PGD',
    subtitle: 'Orientações para lideranças e equipes na pactuação de planos sustentáveis.',
    docType: 'Recomendação de Gestão',
    pillar: 'equilibrio',
    version: 'v1.1',
    updatedAt: 'Dezembro de 2025',
    readTime: '7 min de leitura',
    summary:
      'Recomendações para líderes e equipes equilibrarem produtividade com bem-estar, estabelecendo entregas claras sem induzir sobrecarga invisível.',
    keyPoints: [
      'Pactuação realista de metas por complexidade',
      'Rituais de alinhamento quinzenal de bem-estar',
      'Prevenção da cultura de urgência constante',
    ],
    sections: [],
    tags: ['Liderança', 'PGD', 'Gestão Humanizada', 'Clima'],
    downloadsCount: 76,
  },
  {
    id: 'doc-assedio-prevencao',
    code: 'DOC-22',
    title: 'Protocolo de Prevenção e Combate ao Assédio Moral e Sexual',
    subtitle: 'Fluxos institucionais de acolhimento seguro, canais de escuta e apuração.',
    docType: 'Norma & Protocolo',
    pillar: 'conexao',
    version: 'v1.0',
    updatedAt: 'Outubro de 2025',
    readTime: '9 min de leitura',
    summary:
      'Garantias de segurança psicológica, canais de denúncia anônima via Ouvidoria e etapas do fluxo de acolhimento psicossocial.',
    keyPoints: [
      'Definição legal e conceitual dos tipos de assédio',
      'Canal protegido e sigilo no atendimento',
      'Papel das lideranças no clima seguro',
    ],
    sections: [],
    tags: ['Acolhimento', 'Ética', 'Prevenção ao Assédio', 'Segurança'],
    downloadsCount: 64,
  },
];

export const COP_DIVERSITY_INFO: CommunityInfo = {
  name: 'CoP Diversidade, Equidade e Clima Humanizado',
  type: 'Comunidade de Prática Institucional',
  domain: 'Ações afirmativas, saúde mental dos servidores, acessibilidade e prevenção ao assédio.',
  membersCount: 31,
  frequency: 'Encontros quinzenais',
  meetingSchedule: 'Quintas-feiras, 14h30 às 16h (Formato híbrido)',
  facilitators: ['Mariana Albuquerque (DGP)', 'Rafael Cavalcanti (COGEM)'],
  recentOutcomes: [
    'Elaboração e publicação do Manual de Linguagem Inclusiva e Acolhedora',
    'Roda de conversa temática sobre neurodiversidade e rotinas de trabalho',
    'Mapeamento consultivo para adaptação física e tecnológica de postos de trabalho',
    'Ciclo de palestras e sensibilização sobre equidade racial e de gênero no serviço público',
  ],
  nextActionsState: 'Próximas ações em definição — Pauta aberta para colaboração dos membros.',
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'srv-1',
    title: 'Orientações de Saúde e Prevenção',
    pillar: 'saude',
    shortDescription: 'Acesse materiais, campanhas vacinais e orientações preventivas de saúde.',
    fullDescription:
      'Serviço institucional dedicado ao acompanhamento de saúde ocupacional, encaminhamento para exames periódicos, campanhas de vacinação no campus e ações de conscientização sobre doenças crônicas e hábitos saudáveis.',
    audience: 'Todos os servidores e colaboradores da Enap',
    channels: [
      { type: 'email', label: 'E-mail', value: 'saude.ocupacional@enap.gov.br' },
      { type: 'intranet', label: 'Ramal Interno', value: 'Ramal 4120' },
      { type: 'location', label: 'Atendimento', value: 'Bloco A, Sala 108 — Campus Enap' },
    ],
    hoursOrDeadline: 'Segunda a sexta, das 8h às 17h',
    steps: [
      'Consulte a documentação prévia necessária no portal',
      'Envie mensagem ou compareça no posto de atendimento',
      'Receba orientação personalizada ou encaminhamento institucional',
    ],
    responsibles: 'Coordenação-Geral de Gestão de Pessoas / Serviço de Saúde',
  },
  {
    id: 'srv-2',
    title: 'Apoio Psicológico e Acolhimento',
    pillar: 'equilibrio',
    shortDescription: 'Encontre informações, escuta qualificada e canais institucionais de apoio.',
    fullDescription:
      'Canal sigiloso e humanizado de acolhimento psicossocial para servidores que enfrentam situações de estresse elevado, luto, sobrecarga funcional, ansiedade ou conflitos interpessoais. Não realiza psicoterapia clínica continuada, mas oferece triagem e direcionamento acolhedor.',
    audience: 'Servidores ativos, comissionados e estagiários',
    channels: [
      { type: 'email', label: 'Canal Sigiloso', value: 'acolhimento.psico@enap.gov.br' },
      { type: 'teams', label: 'Microsoft Teams', value: 'Chat reservado "Plantão de Acolhimento"' },
      { type: 'form', label: 'Formulário', value: 'Agendamento sigiloso de escuta' },
    ],
    hoursOrDeadline: 'Retorno inicial em até 24 horas úteis',
    steps: [
      'Preencha a solicitação de acolhimento ou envie mensagem direta',
      'A equipe técnica agenda horário seguro (online ou presencial)',
      'Sessão individual de escuta com definição de plano de apoio',
    ],
    responsibles: 'Equipe Multiprofissional de Atenção Psicossocial',
  },
  {
    id: 'srv-3',
    title: 'Ergonomia no Posto e Teletrabalho',
    pillar: 'movimento',
    shortDescription: 'Orientações, laudos e suporte para postos físicos e ambiente de teletrabalho.',
    fullDescription:
      'Avaliação ergonômica preventiva de estações presenciais no campus e consultoria técnica remota para adequação ergonômica do posto de trabalho em home office (cadeira, altura de monitores, apoios de punho e pés).',
    audience: 'Servidores em trabalho presencial ou PGD teletrabalho',
    channels: [
      { type: 'form', label: 'Solicitação', value: 'Chamado de Avaliação Ergonômica' },
      { type: 'email', label: 'Contato', value: 'ergonomia@enap.gov.br' },
    ],
    hoursOrDeadline: 'Atendimento presencial em 48h; laudo remoto em 5 dias',
    steps: [
      'Envie fotos do seu posto de trabalho ou solicite visita presencial',
      'O especialista avalia conformidade com a NR-17',
      'Receba recomendações técnicas e requisição de adequação de equipamentos',
    ],
    responsibles: 'Setor de Engenharia de Segurança e Medicina do Trabalho',
  },
  {
    id: 'srv-4',
    title: 'Pausas Ativas e Movimento',
    pillar: 'movimento',
    shortDescription: 'Iniciativas de ginástica laboral, pausas ativas e incentivo ao movimento.',
    fullDescription:
      'Programação semanal de pausas ativas guiadas, vídeos com séries rápidas de alongamento de 5 minutos para teletrabalhadores e grupo de caminhada no bosque da Enap nos intervalos.',
    audience: 'Comunidade Enap em todos os regimes de trabalho',
    channels: [
      { type: 'teams', label: 'Canal Teams', value: 'Equipe "Pausa Ativa Enap"' },
      { type: 'location', label: 'Encontro Físico', value: 'Bosque Central / Espaço de Convivência' },
    ],
    hoursOrDeadline: 'Terças e quintas às 10h30 e 15h30 (transmissão de 10 min)',
    steps: [
      'Ingresse no canal do Teams para receber os lembretes',
      'Participe ao vivo ou assista às pílulas gravadas no seu tempo',
      'Convide os colegas de equipe para a pausa coletiva',
    ],
    responsibles: 'Comissão de QVT em parceria com educadores físicos',
  },
  {
    id: 'srv-5',
    title: 'Apoio e Acolhimento Funcional',
    pillar: 'conexao',
    shortDescription: 'Canais de escuta para ambientação, transição e relacionamento na equipe.',
    fullDescription:
      'Espaço de apoio aos servidores recém-chegados (onboarding), em mudança de unidade funcional ou em preparação para aposentadoria. Foco em relações humanas respeitosas, cooperação e sentimento de pertencimento.',
    audience: 'Novos servidores, gestores e equipes em transição',
    channels: [
      { type: 'email', label: 'E-mail', value: 'experiencia.servidor@enap.gov.br' },
      { type: 'form', label: 'Atendimento', value: 'Sessão de Orientação de Carreira e Clima' },
    ],
    hoursOrDeadline: 'Agendamento semanal sob demanda',
    steps: [
      'Agende uma conversa de acolhimento funcional',
      'Identificação de necessidades de adaptação ou alinhamento',
      'Encaminhamento de soluções conjuntas com a liderança',
    ],
    responsibles: 'Coordenação de Gestão Estratégica e Modernização (COGEM)',
  },
  {
    id: 'srv-6',
    title: 'Diversidade, Equidade e Inclusão',
    pillar: 'conexao',
    shortDescription: 'Conheça iniciativas afirmativas, acessibilidade e prevenção ao assédio.',
    fullDescription:
      'Atuação articulada com a CoP de Diversidade e comitês institucionais para garantir acessibilidade comunicacional e arquitetônica, acolhimento a grupos de afinidade e aplicação rigorosa das diretrizes anti-assédio.',
    audience: 'Toda a comunidade Enap e público externo participante',
    channels: [
      { type: 'email', label: 'Comitê DEI', value: 'diversidade@enap.gov.br' },
      { type: 'intranet', label: 'Ouvidoria', value: 'Canal Fala.BR Enap' },
    ],
    hoursOrDeadline: 'Plantão quinzenal e atendimento contínuo',
    steps: [
      'Participe dos encontros abertos da CoP quinzenalmente',
      'Acesse as cartilhas de boas práticas e linguagem inclusiva',
      'Reporte sugestões de melhorias em acessibilidade',
    ],
    responsibles: 'CoP Diversidade & Comitê de Equidade da Enap',
  },
];

export const ACTIVITIES_CALENDAR: Activity[] = [
  {
    id: 'act-1',
    title: 'Roda de Conversa: Sobrecarga Cognitiva e Foco Sustentável no PGD',
    pillar: 'equilibrio',
    category: 'Saúde Mental',
    date: '14 de Outubro, 2026',
    rawDate: '2026-10-14',
    time: '14h30 às 16h00',
    format: 'Híbrido',
    location: 'Auditório Anísio Teixeira e transmissão Teams',
    audience: 'Servidores, estagiários e terceirizados',
    description:
      'Espaço dialógico e seguro sobre os desafios da hiperconectividade, estratégias para delimitar a jornada no PGD e técnicas de preservação de energia mental no trabalho cotidiano.',
    capacity: 60,
    enrolledCount: 42,
    facilitator: 'Dra. Helena Martins (Psicóloga Convidada) e Lucas Nogueira (PQVT)',
    prerequisites: 'Leitura prévia do DOC-09 recomendada.',
    isOfficialData: false,
  },
  {
    id: 'act-2',
    title: 'Oficina Prática de Ergonomia Postural e Adaptação do Home Office',
    pillar: 'movimento',
    category: 'Ergonomia',
    date: '22 de Outubro, 2026',
    rawDate: '2026-10-22',
    time: '10h00 às 11h30',
    format: 'Online (Teams)',
    location: 'Sala Virtual Teams — Sala QVT 01',
    audience: 'Servidores em regime de teletrabalho e híbrido',
    description:
      'Demonstração prática ao vivo com fisioterapeuta do trabalho: ajustes milimétricos de cadeira, posicionamento de teclado/mouse e sequência de pausas ativas para prevenir LER/DORT.',
    capacity: 100,
    enrolledCount: 78,
    facilitator: 'Carlos Eduardo Santos (Ergonomista / SIASS)',
    prerequisites: 'Possibilidade de ligar a câmera para feedback postural individual.',
    isOfficialData: false,
  },
  {
    id: 'act-3',
    title: 'Encontro Quinzenal da CoP: Pauta Aberta sobre Acessibilidade e Clima',
    pillar: 'conexao',
    category: 'Diversidade & Inclusão',
    date: '29 de Outubro, 2026',
    rawDate: '2026-10-29',
    time: '14h30 às 16h00',
    format: 'Híbrido',
    location: 'Espaço Conecta — 2º Andar e Teams',
    audience: 'Membros da CoP e qualquer servidor interessado',
    description:
      'Discussão participativa das próximas ações do plano anual, relatos de experiência dos postos adaptados e planejamento da semana de neurodiversidade.',
    capacity: 40,
    enrolledCount: 31,
    facilitator: 'Mariana Albuquerque e Rafael Cavalcanti',
    prerequisites: 'Aberto a todas as pessoas sem necessidade de inscrição prévia.',
    isOfficialData: false,
  },
  {
    id: 'act-4',
    title: 'Ciclo de Palestras: Nutrição, Sono Reparador e Desempenho Cognitivo',
    pillar: 'saude',
    category: 'Saúde Integral',
    date: '05 de Novembro, 2026',
    rawDate: '2026-11-05',
    time: '11h00 às 12h00',
    format: 'Presencial',
    location: 'Sala de Ideação — Campus Enap',
    audience: 'Servidores da Enap',
    description:
      'Como hábitos alimentares durante o expediente e a regulação dos ciclos de sono impactam diretamente o estresse, o ânimo e a clareza para a tomada de decisão.',
    capacity: 50,
    enrolledCount: 29,
    facilitator: 'Nutricionista convidada do Programa Viver Bem',
    prerequisites: 'Nenhum.',
    isOfficialData: false,
  },
  {
    id: 'act-5',
    title: 'Vivência Colaborativa: Caminhada Consciente e Descompressão no Bosque',
    pillar: 'movimento',
    category: 'Movimento & Natureza',
    date: '12 de Novembro, 2026',
    rawDate: '2026-11-12',
    time: '16h30 às 17h15',
    format: 'Presencial',
    location: 'Ponto de Encontro: Pérgula Central da Enap',
    audience: 'Servidores e colaboradores presenciais',
    description:
      'Pausa coletiva guiada ao ar livre com exercícios suaves de respiração e caminhada pelo bosque da escola, promovendo desconexão de telas e troca leve entre colegas.',
    capacity: 35,
    enrolledCount: 18,
    facilitator: 'Equipe de Qualidade de Vida no Trabalho',
    prerequisites: 'Calçado confortável para caminhada leve.',
    isOfficialData: false,
  },
];

export const NEWS_ARTICLES: NewsItem[] = [
  {
    id: 'news-1',
    title: 'Pesquisa de Clima e Bem-Estar 2026: Diagnóstico de Riscos Concluído',
    subtitle: 'Resultados apontam prioridade para ergonomia domiciliar e equilíbrio no PGD.',
    summary:
      'A etapa de diagnóstico do Plano Anual de Qualidade de Vida no Trabalho (ACT-06) alcançou 100% de conclusão, gerando diretrizes concretas para as próximas entregas.',
    content: [
      'A Coordenação de Gestão Estratégica e Modernização (COGEM), em parceria com a Comissão de QVT, concluiu a primeira grande entrega do ACT-06: o Diagnóstico Institucional de Riscos Psicossociais e Ergonomia.',
      'A escuta aos servidores revelou que, embora o teletrabalho traga expressivo ganho de flexibilidade, a delimitação de horários e a postura ergonômica em home office demandam acompanhamento preventivo contínuo.',
      'Com base nesses insumos de People Analytics, o ciclo de palestras e a distribuição do Guia DOC-09 foram estruturados para dar suporte imediato às rotinas dos servidores em todas as diretorias.',
    ],
    category: 'PQVT & Estratégia',
    pillar: 'equilibrio',
    publishedAt: '28 de Setembro, 2026',
    readTime: '4 min de leitura',
    author: 'Comissão de QVT / COGEM',
    authorRole: 'Gestão Estratégica',
    isFeatured: true,
    tags: ['ACT-06', 'Diagnóstico', 'People Analytics', 'PGD', 'Clima'],
    isOfficialData: true,
  },
  {
    id: 'news-2',
    title: 'CoP de Diversidade Lança Manual de Linguagem Inclusiva e Acolhedora',
    subtitle: 'Documento prático reúne recomendações para comunicações sem vieses.',
    summary:
      'Construído coletivamente pelos 31 servidores da comunidade de prática, o material oferece exemplos do cotidiano do serviço público para promover equidade.',
    content: [
      'A Comunidade de Prática em Diversidade, Equidade e Clima Humanizado celebrou a publicação do documento DOC-15, fruto de debates quinzenais ao longo do último semestre.',
      'O material aborda termos recomendados para comunicações oficiais, critérios de acessibilidade textual para leitoras de tela e orientações para reuniões que acolham a neurodiversidade.',
    ],
    category: 'Inclusão & Comunidade',
    pillar: 'conexao',
    publishedAt: '20 de Setembro, 2026',
    readTime: '3 min de leitura',
    author: 'Mariana Albuquerque',
    authorRole: 'Facilitadora da CoP',
    isSecondary: true,
    tags: ['CoP', 'Diversidade', 'Inclusão', 'Linguagem'],
    isOfficialData: true,
  },
  {
    id: 'news-3',
    title: 'Guia de Saúde Mental no Teletrabalho (DOC-09) Supera 140 Acessos',
    subtitle: 'Material institucional apoia servidores e gestores na higiene digital.',
    summary:
      'Publicação destaca pausas ativas regulares e direito à desconexão fora do horário acordado de entrega no Programa de Gestão e Desempenho.',
    content: [
      'Disponibilizado no repositório de conhecimento do COGEM-Conecta, o Guia DOC-09 tem sido utilizado como instrumento de diálogo em reuniões de alinhamento de equipe.',
      'Gestores relatam que as orientações de pausas ativas e não envio de mensagens em horários noturnos melhoraram perceptivelmente a serenidade e a clareza dos fluxos de trabalho.',
    ],
    category: 'Saúde Mental',
    pillar: 'equilibrio',
    publishedAt: '12 de Setembro, 2026',
    readTime: '3 min de leitura',
    author: 'Lucas Nogueira',
    authorRole: 'Responsável ACT-06',
    isSecondary: true,
    tags: ['DOC-09', 'Teletrabalho', 'Desconexão', 'Bem-Estar'],
    isOfficialData: true,
  },
  {
    id: 'news-4',
    title: 'Semana de Orientação Ergonômica: Atendimento Individual no Campus',
    summary:
      'Equipe de segurança do trabalho realiza checagem de estações de trabalho e orienta servidores sobre ajustes de cadeira e iluminação.',
    content: [
      'Durante três dias, especialistas estarão disponíveis no campus para visitas técnicas aos postos físicos de trabalho para quem atua em regime presencial ou híbrido.',
    ],
    category: 'Ergonomia',
    pillar: 'movimento',
    publishedAt: '05 de Setembro, 2026',
    readTime: '2 min de leitura',
    author: 'Serviço de Saúde Ocupacional',
    authorRole: 'DGP Enap',
    tags: ['Ergonomia', 'Postura', 'Prevenção'],
    isOfficialData: false,
  },
  {
    id: 'news-5',
    title: 'Novo Plantão de Acolhimento Psicossocial Disponível no Teams',
    summary:
      'Canal sigiloso amplia horários para atender servidores que buscam orientação sobre gestão do estresse e transições funcionais.',
    content: [
      'O serviço reforça que não se trata de atendimento clínico hospitalar, mas sim de escuta acolhedora, sigilosa e direcionamento institucional adequado.',
    ],
    category: 'Apoio Psicossocial',
    pillar: 'saude',
    publishedAt: '28 de Agosto, 2026',
    readTime: '2 min de leitura',
    author: 'Equipe Multiprofissional',
    authorRole: 'Apoio Psicossocial',
    tags: ['Acolhimento', 'Escuta', 'Sigilo'],
    isOfficialData: false,
  },
];

export const INDICATORS_LIST: IndicatorMetric[] = [
  {
    id: 'ind-1',
    title: 'Ações Estruturantes em Andamento',
    value: '01',
    unit: 'ação principal (ACT-06)',
    trend: '50% progresso consolidado',
    trendType: 'positive',
    description: 'Plano Anual PQVT 2026 com 1 de 3 entregas já concluídas e 1 em execução.',
    period: 'Ciclo 2026',
    source: 'Repositório COGEM-Conecta (ACT-06)',
    isDemonstrative: false,
  },
  {
    id: 'ind-2',
    title: 'Atividades e Encontros Realizados',
    value: '12',
    unit: 'encontros no ciclo',
    trend: '+4 no último bimestre',
    trendType: 'positive',
    description: 'Soma de rodas de conversa, palestras de saúde e encontros da CoP.',
    period: 'Ano 2026',
    source: 'Registros da Comissão de QVT',
    isDemonstrative: true,
  },
  {
    id: 'ind-3',
    title: 'Membros Ativos na Comunidade',
    value: '31',
    unit: 'servidores integrados',
    trend: 'Encontros quinzenais estáveis',
    trendType: 'stable',
    description: 'Servidores engajados na CoP Diversidade, Equidade e Clima Humanizado.',
    period: 'Dado atualizado',
    source: 'Repositório COGEM-Conecta (CoP)',
    isDemonstrative: false,
  },
  {
    id: 'ind-4',
    title: 'Acessos e Downloads do Guia DOC-09',
    value: '142',
    unit: 'consultas registradas',
    trend: 'Guia mais acessado do Eixo 2',
    trendType: 'positive',
    description: 'Guia de Saúde Mental e Prevenção do Esgotamento no Teletrabalho.',
    period: 'Desde a publicação',
    source: 'Biblioteca COGEM (DOC-09)',
    isDemonstrative: false,
  },
  {
    id: 'ind-5',
    title: 'Índice de Avaliação Positiva das Ações',
    value: '91,4%',
    unit: 'satisfação geral',
    trend: 'Meta institucional: > 80%',
    trendType: 'positive',
    description: 'Percepção de utilidade e relevância informada pelos participantes.',
    period: 'Média ponderada 2026',
    source: 'Formulários pós-atividade (Amostra demonstrativa)',
    isDemonstrative: true,
  },
  {
    id: 'ind-6',
    title: 'Adesão a Pausas Ativas no PGD',
    value: '68%',
    unit: 'dos respondentes do diagnóstico',
    trend: 'Em evolução preventiva',
    trendType: 'neutral',
    description: 'Percentual de servidores que afirmam realizar pausas visuais e posturais.',
    period: 'Diagnóstico 1º Tri/2026',
    source: 'Diagnóstico de Riscos (Entrega 1 do ACT-06)',
    isDemonstrative: true,
  },
];

export const CONTINUOUS_CYCLE_STEPS = [
  {
    step: '01',
    label: 'ESCUTAR',
    title: 'Escuta dos Servidores e Diagnóstico',
    description:
      'Pesquisas de clima, People Analytics, canal de acolhimento e escuta qualificada na CoP mapeiam necessidades reais de saúde e ergonomia.',
    inputs: ['Pesquisa de Clima Organizacional', 'Diagnóstico de Riscos Psicossociais', 'Demandas espontâneas da CoP'],
    cogemConnection: 'Conexão com People Analytics e Insights & Dados do COGEM-Conecta.',
  },
  {
    step: '02',
    label: 'PLANEJAR',
    title: 'Pactuação Estratégica e Planos de Ação',
    description:
      'A Comissão de QVT e a COGEM traduzem necessidades em metas no Eixo 2, alocando responsáveis e cronogramas (como o ACT-06).',
    inputs: ['Eixo 2 de Gestão de Pessoas', 'Planejamento Orçamentário e Parcerias', 'Priorização coletiva'],
    cogemConnection: 'Alinhado aos Eixos Estratégicos e Portfólio de Ações do COGEM.',
  },
  {
    step: '03',
    label: 'AGIR',
    title: 'Execução de Ações, Serviços e Rodas',
    description:
      'Realização do ciclo de palestras, publicação de guias (DOC-09), pausas ativas, adaptações ergonômicas e encontros quinzenais.',
    inputs: ['Agenda de Atividades', 'Atendimento dos 6 Serviços de QVT', 'Distribuição de Guias Técnicos'],
    cogemConnection: 'Disponibilizado na intranet e no workspace Meu Trabalho dos servidores.',
  },
  {
    step: '04',
    label: 'AVALIAR',
    title: 'Monitoramento de Indicadores e Satisfação',
    description:
      'Acompanhamento das taxas de participação, avaliação de relevância dos encontros e evolução dos indicadores de bem-estar.',
    inputs: ['Pesquisas de Satisfação pós-evento', 'Métricas de Downloads', 'Taxa de Adesão às Práticas'],
    cogemConnection: 'Painéis integrados ao módulo Indicadores do COGEM-Conecta.',
  },
  {
    step: '05',
    label: 'APRENDER',
    title: 'Gestão do Conhecimento e Melhoria Contínua',
    description:
      'Sistematização de lições aprendidas, revisão de cartilhas, adaptação de fluxos institucionais e retroalimentação do ciclo seguinte.',
    inputs: ['Lições Aprendidas registradas', 'Atualizações de versões de documentos', 'Replanejamento do ciclo'],
    cogemConnection: 'Alimentação contínua do repositório Lições Aprendidas e Conhecimento.',
  },
];

export const SHAREPOINT_INTEGRATION_SPECS = {
  lists: [
    {
      name: 'PQVT_Atividades',
      description: 'Armazena eventos, oficinas, palestras e rodas de conversa com capacidade e formato.',
      columns: ['Title', 'DataHora', 'Formato', 'LocalLink', 'Categoria', 'Vagas', 'InscritosCount', 'Facilitador'],
    },
    {
      name: 'PQVT_Inscricoes',
      description: 'Registros individuais de servidores em cada atividade com vínculo ao e-mail institucional.',
      columns: ['AtividadeID', 'ServidorNome', 'ServidorEmail', 'Matricula', 'Status', 'DataInscricao'],
    },
    {
      name: 'PQVT_Servicos',
      description: 'Catálogo de serviços institucionais, fluxos, prazos e canais de atendimento.',
      columns: ['Title', 'Pilar', 'DescricaoCurta', 'DescricaoCompleta', 'CanaisJSON', 'PrazoAtendimento'],
    },
    {
      name: 'PQVT_Documentos',
      description: 'Biblioteca de guias, cartilhas e manuais (DOC-09, DOC-12, DOC-15) com versionamento.',
      columns: ['CodigoDoc', 'Title', 'Subtitulo', 'TipoDocumento', 'Versao', 'ArquivoAnexo', 'DownloadsCount'],
    },
    {
      name: 'PQVT_Noticias',
      description: 'Artigos editoriais de comunicação interna com destaques e tags temáticas.',
      columns: ['Title', 'Subtitulo', 'CorpoArtigo', 'Categoria', 'DestaqueBoolean', 'DataPublicacao', 'Autor'],
    },
    {
      name: 'PQVT_Indicadores',
      description: 'Métricas consolidadas de clima, satisfação e andamento das entregas estratégicas.',
      columns: ['IndicadorNome', 'ValorNumerico', 'Unidade', 'Tendencia', 'FonteDados', 'DataCorte'],
    },
  ],
  powerAutomateFlows: [
    {
      name: 'PQVT_Fluxo_ConfirmacaoInscricao',
      trigger: 'Quando novo item é criado em PQVT_Inscricoes',
      actions: [
        'Envia e-mail de confirmação ao servidor via Outlook com convite de calendário (.ics / Teams)',
        'Atualiza o contador de InscritosCount na lista PQVT_Atividades',
        'Notifica facilitadores da atividade quando 80% das vagas são atingidas',
      ],
    },
    {
      name: 'PQVT_Fluxo_PublicacaoNoticia',
      trigger: 'Quando notícia é aprovada pela Comissão de QVT',
      actions: [
        'Dispara notificação no canal geral do Teams e publica card na página inicial da intranet',
        'Indexa no mecanismo de busca global do COGEM-Conecta',
      ],
    },
    {
      name: 'PQVT_Fluxo_PesquisaSatisfacaoPosEvento',
      trigger: '2 horas após o encerramento do evento registrado em PQVT_Atividades',
      actions: [
        'Dispara link de avaliação anônima no Microsoft Forms para todos os inscritos confirmados',
        'Calcula índice médio de satisfação e atualiza indicador correspondente',
      ],
    },
  ],
  powerAppsModules: [
    {
      name: 'PQVT Mobile Hub (Power Apps Canvas)',
      description: 'App para celulares funcionais permitindo inscrição com 1 toque, check-in no evento e envio de dúvidas anônimas.',
    },
    {
      name: 'Painel Gestor QVT (Power BI Embedded)',
      description: 'Dashboard de People Analytics com correlação entre adesão ao teletrabalho, pausas e índices de clima.',
    },
  ],
};
