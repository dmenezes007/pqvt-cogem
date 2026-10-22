# Gestão da inovação e dados — Jornada de Ambientação

## Abordagem
Esta entrega acrescenta a rota `/ambientacao`, sem substituir a página principal nem a seção IDE. Mantém o padrão visual PQVT–COGEM e inclui: fluxo interativo por etapa, relação insumos/resultados, indicadores por etapa, interpretação validada e transparência sobre atualização.

## Excel Online como fonte
Excel Online é **fonte autoritativa editável**, não API pública. Hospedar tabelas estruturadas no SharePoint/OneDrive institucional, com IDs estáveis:
- `DimEtapas`: id, title, intent, question, inputs, outputs
- `IndicadoresPublicos`: id, label, value, unit, description, phaseId, source
- `InterpretacoesAprovadas`: id, title, description, phaseId, metricIds

Use Power Automate (gatilho de alteração, mais reconciliação agendada) ou Microsoft Graph em identidade de aplicação para ler as tabelas, validar e gerar JSON **sem dados pessoais**. A saída pode ser servida por Azure Functions/Blob, Vercel server-side ou endpoint institucional com CORS restrito conforme necessidade. O navegador consulta apenas o JSON publicado. Não criar token Graph no frontend, URL de compartilhamento anônimo da planilha nem variável `VITE_*` com segredo.

## Contrato público
Configurar `VITE_PUBLIC_DATA_URL` com URL HTTPS de endpoint público **aprovado** que entregue:
```json
{
  "schemaVersion": 1,
  "generatedAt": "2026-10-16T17:00:00-03:00",
  "sourceUpdatedAt": "2026-10-16T16:55:00-03:00",
  "phases": [{"id":"pre","title":"Pré-embarque","intent":"Preparação","question":"Pronto para receber?","inputs":["Checklist"],"outputs":["Recursos"]}],
  "metrics": [{"id":"indicador-01","label":"Cobertura de ações","value":0,"unit":"%","description":"Exemplo de contrato, não dado real","phaseId":"pre","source":"IndicadoresPublicos"}],
  "insights": [{"id":"insight-01","title":"Interpretação revisada","description":"Texto aprovado para publicação","phaseId":"pre","metricIds":["indicador-01"]}]
}
```
O JSON acima é um EXEMPLO DE FORMATO, não deve ser publicado como resultado institucional.

## Regras de publicação e qualidade
1. Somente métricas agregadas e liberadas; suprimir células pequenas e combinações reidentificáveis. Não exportar nome, CPF, respostas abertas individualizáveis, raça em células pequenas ou datas individuais.
2. Validar IDs únicos, tipos, datas, denominadores e vínculo dos indicadores às etapas; registrar execução, erro, contagem e hash de origem.
3. Gerar instantâneo completo e publicar de forma atômica após validação; manter versão anterior para rollback. Se atualização falhar, registrar alerta operacional. Definir política de frescor/SLA antes de produção.
4. Mudança no Excel → acionamento da automação (eventual atraso) → transformação/validação → endpoint JSON → próxima requisição do portal. Não é atualização instantânea garantida.
5. Para atualização imediata visível sem novo deploy, o frontend utiliza `cache: no-store` e botão de consulta. Cache HTTP/CDN do endpoint também deve ser configurado.
6. Revisar acessibilidade, licenciamento e permissões de Microsoft Graph/Power Automate e homologar regras da LGPD.

## Integração com BPMN
Os identificadores `phaseId` permitem futuramente relacionar cada etapa às tarefas BPMN, evidências, responsabilidades e melhorias. BPMN descreve o processo; os status operacionais continuam dependendo das tabelas transacionais.

## Estado atual
O frontend está pronto para consumir o contrato, mas **nenhuma planilha remota foi conectada**: faltam localização dos arquivos Excel Online, autorização institucional e endpoint de publicação. Sem isso, a página exibe a estrutura metodológica e estado de integração pendente, nunca dados fictícios.
