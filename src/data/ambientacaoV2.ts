// Extraído da cópia local do Excel; exclusivamente contagens agregadas.
// Origem: Base_Dados, Embarque, 30dias, 60dias, 90dias, Forms_respondidos e Analise_Sentimentos.
export const analyticsV2 = {
 source: 'Gestão Ambientação(Atual)_Copia.xlsx', extractedAt:'2026-10-16',
 years:[{name:'2024',value:40},{name:'2025',value:74},{name:'2026',value:24}],
 monthly: {
  '2024':[4,3,7,5,6,2,1,3,3,2,2,2],
  '2025':[2,5,8,4,9,3,9,7,10,8,5,4],
  '2026':[8,3,5,3,3,2,0,0,0,0,0,0]
 },
 directorates:[['DEX',32],['DGC',29],['GNOVA',21],['PRESI',17],['DIREX',15],['DDPRO',14],['DAE',10]],
 sex:[['Feminino',88],['Masculino',50]],
 generation:[['Geração X',98],['Geração Y',34],['Baby Boomer',6]],
 race:[['Branca',86],['Parda',38],['Preta',12],['Amarela',2]],
 relationships:[['Cedido',99],['Descentralizado',22],['Ativo Permanente',8],['Sem vínculo',6],['Exercício Provisório',2],['Anistiado',1]],
 types:[['Entrada',130],['Retorno',8]],
 positions:[['Sem função',97],['Nível 1 a 12',27],['Nível 13 a 17',14]],
 expectations:[
 ['Conquistas profissionais',[0,0,2,64,44]],['Objetivos de carreira',[0,1,4,64,41]],
 ['Remuneração',[0,9,23,57,21]],['Prestígio no trabalho',[0,3,10,66,31]],
 ['Atividades interessantes',[0,1,14,54,41]],['Preferências profissionais',[0,0,6,60,44]],
 ['Vida pessoal preservada',[0,5,21,52,32]],['Carga horária de trabalho',[0,1,17,59,33]],
 ['Qualidade de vida',[0,1,3,66,40]],['Equilíbrio pessoal e profissional',[0,2,4,65,39]]
 ],
 satisfaction:[
 ['Informações fornecidas',[0,2,0,9,46]],['Suporte logístico',[1,1,3,6,46]],
 ['Prontidão de acesso',[0,1,0,15,41]],['Reunião geral de acolhimento',[0,1,2,7,47]],
 ['Acolhimento da equipe CGGP',[0,1,2,2,52]],['Suporte da equipe CGGP',[0,1,1,7,48]],
 ['Acolhimento na unidade',[0,1,1,1,54]],['Suporte na unidade',[0,1,1,3,52]]
 ],
 score30:[[1,1],[6,3],[8,12],[9,15],[10,26]],
 score90:[[1,1],[3,1],[7,2],[8,13],[9,9],[10,31]],
 difficulties:[{name:'Links (30d)',yes:3,no:54},{name:'Estação de trabalho (30d)',yes:12,no:45},{name:'Dificuldades (60d)',yes:7,no:54},{name:'Pendências (90d)',yes:7,no:50}],
 response:[{name:'Expectativas',answered:110,sent:142},{name:'30 dias',answered:57,sent:142},{name:'60 dias',answered:61,sent:142},{name:'90 dias',answered:57,sent:142}],
 sentiments:[['Elogios',78],['Críticas',29],['Neutro / sugestão',11]]
} as const;
