// =========================================================
// DADOS: listas de serviços por certificação (edite aqui)
// Para adicionar um serviço: coloque o nome na lista da
// certificação e inclua a explicação correspondente no
// objeto EXPLICACOES, logo abaixo.
// =========================================================
const SERVICOS_NOMES = {
  "CLF-C02": [
    "Amazon EC2", "AWS Lambda", "Amazon ECS", "Amazon EKS", "AWS Fargate",
    "AWS Elastic Beanstalk", "Amazon S3", "Amazon S3 Glacier", "Amazon EBS",
    "Amazon EFS", "Amazon FSx", "AWS Storage Gateway", "AWS Backup",
    "Amazon RDS", "Amazon Aurora", "Amazon DynamoDB", "Amazon Redshift",
    "Amazon ElastiCache", "Amazon VPC", "Amazon Route 53", "Amazon CloudFront",
    "Elastic Load Balancing", "AWS Direct Connect", "AWS IAM",
    "AWS IAM Identity Center", "AWS KMS", "AWS Shield", "AWS WAF",
    "Amazon GuardDuty", "Amazon Inspector", "Amazon Macie", "Amazon Cognito",
    "AWS Artifact", "Amazon CloudWatch", "AWS CloudTrail", "AWS Config",
    "AWS CloudFormation", "AWS Systems Manager", "AWS Trusted Advisor",
    "AWS Organizations", "AWS Control Tower", "AWS Cost Explorer",
    "AWS Budgets", "Amazon SNS", "Amazon SQS", "Amazon EventBridge",
    "Amazon Athena", "Amazon Kinesis", "AWS Glue", "Amazon Comprehend",
    "Amazon Kendra", "Amazon Lex", "Amazon Polly", "Amazon Q",
    "Amazon Rekognition", "Amazon SageMaker AI", "Amazon Textract",
    "Amazon Transcribe", "Amazon Translate"
  ],
  "AIF-C01": [
    "Amazon Bedrock", "Amazon Bedrock AgentCore", "Amazon Nova",
    "Amazon SageMaker AI", "Amazon SageMaker JumpStart", "Amazon Q",
    "Amazon Comprehend", "Amazon Lex", "Amazon Personalize", "Amazon Polly",
    "Amazon Rekognition", "Amazon Textract", "Amazon Transcribe",
    "Amazon Translate", "Amazon Kendra", "Amazon Augmented AI (A2I)",
    "Amazon OpenSearch Service", "AWS Glue", "AWS Lake Formation",
    "Amazon DocumentDB", "Amazon Neptune", "Amazon Aurora", "Amazon EC2",
    "AWS Lambda", "Amazon ECS", "Amazon EKS", "AWS IAM", "AWS KMS",
    "Amazon Macie", "Amazon Inspector", "AWS Secrets Manager",
    "AWS Artifact", "AWS Audit Manager", "AWS CloudTrail", "AWS Config",
    "AWS Trusted Advisor", "Kiro", "Strands Agents"
  ]
};

// Explicações por nome de serviço (2 a 3 frases: o que é, para
// que serve e quando usar). Compartilhadas entre certificações.
const EXPLICACOES = {
  "Amazon EC2": "É um serviço que oferece servidores virtuais (instâncias) na nuvem. Serve para rodar aplicações sem precisar comprar hardware físico. Use quando precisar de controle total sobre o sistema operacional e a configuração da máquina.",
  "AWS Lambda": "É um serviço de computação serverless que executa código sem você gerenciar servidores. Serve para rodar funções pequenas em resposta a eventos, como upload de arquivo ou chamada de API. Use quando a carga de trabalho for curta e você quiser pagar só pelo tempo de execução.",
  "Amazon ECS": "É um serviço de orquestração de containers Docker gerenciado pela AWS. Serve para executar e escalar aplicações em containers sem gerenciar o cluster manualmente. Use quando sua aplicação já estiver containerizada e você quiser simplicidade de operação dentro do ecossistema AWS.",
  "Amazon EKS": "É um serviço gerenciado de Kubernetes na AWS. Serve para rodar e escalar aplicações em containers usando o padrão Kubernetes. Use quando sua equipe já trabalha com Kubernetes ou precisa de portabilidade entre nuvens.",
  "AWS Fargate": "É um mecanismo de computação serverless para containers, usado com ECS ou EKS. Serve para rodar containers sem precisar provisionar ou gerenciar servidores. Use quando quiser simplicidade total, sem cuidar da infraestrutura por trás dos containers.",
  "AWS Elastic Beanstalk": "É um serviço de orquestração que facilita implantar aplicações web sem gerenciar a infraestrutura manualmente. Serve para subir código e deixar a AWS cuidar de servidores, balanceamento e escalonamento. Use quando quiser simplicidade para publicar uma aplicação rapidamente.",
  "Amazon S3": "É um serviço de armazenamento de objetos altamente durável e escalável. Serve para guardar arquivos como imagens, vídeos, backups e dados de aplicações. Use quando precisar armazenar grandes volumes de dados com alta disponibilidade e custo baixo.",
  "Amazon S3 Glacier": "É uma classe de armazenamento do S3 voltada para arquivamento de dados de longo prazo. Serve para guardar dados pouco acessados a um custo bem menor. Use quando os dados puderem demorar minutos a horas para serem recuperados.",
  "Amazon EBS": "É um serviço de armazenamento em bloco para usar com instâncias EC2. Serve como o 'disco rígido' da instância, guardando o sistema operacional e dados. Use quando precisar de armazenamento persistente e de baixa latência atrelado a uma instância.",
  "Amazon EFS": "É um serviço de armazenamento de arquivos totalmente gerenciado e escalável. Serve para compartilhar arquivos entre várias instâncias EC2 ou containers ao mesmo tempo. Use quando múltiplos servidores precisarem acessar os mesmos arquivos simultaneamente.",
  "Amazon FSx": "É um serviço que fornece sistemas de arquivos gerenciados, como Windows File Server e Lustre. Serve para migrar ou rodar cargas de trabalho que dependem de sistemas de arquivos específicos. Use quando precisar de compatibilidade com Windows ou processamento de alta performance.",
  "AWS Storage Gateway": "É um serviço híbrido que conecta ambientes locais (on-premises) ao armazenamento da AWS. Serve para estender ou migrar dados locais para a nuvem de forma gradual. Use quando sua empresa ainda tem infraestrutura física e quer integrá-la à nuvem.",
  "AWS Backup": "É um serviço centralizado para automatizar backups de outros serviços AWS, como EC2, RDS e EFS. Serve para criar políticas de backup e retenção em um só lugar. Use quando quiser padronizar e automatizar backups de vários recursos.",
  "Amazon RDS": "É um serviço de banco de dados relacional gerenciado, que suporta engines como MySQL, PostgreSQL e SQL Server. Serve para rodar bancos de dados sem se preocupar com manutenção de infraestrutura. Use quando precisar de um banco relacional tradicional com backups e atualizações automatizadas.",
  "Amazon Aurora": "É um banco de dados relacional da AWS compatível com MySQL e PostgreSQL, otimizado para performance. Serve para aplicações que precisam de alta disponibilidade e velocidade superior a bancos tradicionais. Use quando quiser desempenho de banco relacional com menor custo de manutenção.",
  "Amazon DynamoDB": "É um banco de dados NoSQL totalmente gerenciado, com latência de milissegundos em qualquer escala. Serve para armazenar dados não relacionais, como sessões de usuário ou catálogos. Use quando precisar de alta performance e escalabilidade automática sem schema rígido.",
  "Amazon Redshift": "É um serviço de data warehouse (armazém de dados) voltado para análises em grande escala. Serve para rodar consultas complexas sobre grandes volumes de dados históricos. Use quando precisar de business intelligence e relatórios analíticos pesados.",
  "Amazon ElastiCache": "É um serviço de cache em memória gerenciado, compatível com Redis e Memcached. Serve para acelerar aplicações guardando dados frequentemente acessados em memória. Use quando quiser reduzir a carga no banco de dados e melhorar o tempo de resposta.",
  "Amazon VPC": "É um serviço que permite criar uma rede virtual isolada dentro da AWS. Serve para controlar sub-redes, rotas e segurança dos seus recursos na nuvem. Use sempre que precisar organizar e proteger a rede onde seus recursos vivem.",
  "Amazon Route 53": "É um serviço de DNS (Domain Name System) escalável e altamente disponível. Serve para gerenciar domínios e direcionar o tráfego dos usuários para seus recursos. Use quando precisar registrar domínios ou configurar roteamento inteligente de tráfego.",
  "Amazon CloudFront": "É uma rede de distribuição de conteúdo (CDN) da AWS. Serve para entregar conteúdo como vídeos e páginas web com baixa latência, usando servidores próximos ao usuário. Use quando quiser acelerar a entrega de conteúdo globalmente.",
  "Elastic Load Balancing": "É um serviço que distribui automaticamente o tráfego de entrada entre múltiplos recursos, como instâncias EC2. Serve para aumentar a disponibilidade e tolerância a falhas de uma aplicação. Use quando tiver mais de um servidor e precisar balancear a carga entre eles.",
  "AWS Direct Connect": "É um serviço que cria uma conexão de rede dedicada entre o ambiente local e a AWS. Serve para ter uma conexão mais estável e rápida do que a internet pública. Use quando precisar de alta performance e baixa latência entre seu data center e a AWS.",
  "AWS IAM": "É o serviço de gerenciamento de identidade e acesso da AWS. Serve para controlar quem pode acessar quais recursos, com usuários, grupos, papéis e políticas. Use sempre que precisar definir permissões de acesso de forma segura.",
  "AWS IAM Identity Center": "É um serviço que centraliza o acesso de usuários a múltiplas contas AWS e aplicações. Serve para gerenciar login único (SSO) em ambientes com várias contas. Use quando sua empresa tiver várias contas AWS e quiser um único ponto de autenticação.",
  "AWS KMS": "É um serviço de gerenciamento de chaves de criptografia. Serve para criar e controlar chaves usadas para criptografar dados em outros serviços AWS. Use quando precisar proteger dados sensíveis em repouso com criptografia gerenciada.",
  "AWS Shield": "É um serviço de proteção contra ataques DDoS (negação de serviço distribuída). Serve para proteger aplicações contra tráfego malicioso em grande escala. Use quando quiser uma camada extra de defesa contra ataques de disponibilidade.",
  "AWS WAF": "É um firewall de aplicações web (Web Application Firewall). Serve para bloquear tráfego malicioso, como SQL injection e cross-site scripting, antes que chegue à aplicação. Use quando precisar proteger APIs e sites contra ataques comuns na camada web.",
  "Amazon GuardDuty": "É um serviço de detecção de ameaças que monitora contas e cargas de trabalho da AWS. Serve para identificar atividades suspeitas e comportamentos anômalos automaticamente. Use quando quiser monitoramento de segurança contínuo sem configurar regras manualmente.",
  "Amazon Inspector": "É um serviço de avaliação automatizada de vulnerabilidades. Serve para escanear instâncias EC2, containers e funções Lambda em busca de falhas de segurança. Use quando quiser identificar vulnerabilidades conhecidas antes que sejam exploradas.",
  "Amazon Macie": "É um serviço que usa aprendizado de máquina para encontrar dados sensíveis, como informações pessoais, no Amazon S3. Serve para ajudar a proteger a privacidade e cumprir regulamentações. Use quando precisar descobrir e classificar dados sensíveis armazenados na nuvem.",
  "Amazon Cognito": "É um serviço de gerenciamento de identidade para aplicações web e mobile. Serve para autenticar e autorizar usuários finais, incluindo login social. Use quando sua aplicação precisar de cadastro e login de usuários de forma simples e escalável.",
  "AWS Artifact": "É um portal de autoatendimento para acessar relatórios de conformidade e acordos da AWS. Serve para baixar documentos como certificações e relatórios de auditoria. Use quando precisar comprovar conformidade regulatória da AWS para auditorias.",
  "Amazon CloudWatch": "É um serviço de monitoramento de recursos e aplicações na AWS. Serve para coletar métricas, logs e configurar alarmes sobre o comportamento do sistema. Use quando precisar acompanhar a saúde e performance da sua infraestrutura em tempo real.",
  "AWS CloudTrail": "É um serviço que registra todas as chamadas de API feitas na conta AWS. Serve para auditoria, rastreando quem fez o quê e quando. Use quando precisar investigar atividades ou cumprir requisitos de auditoria e segurança.",
  "AWS Config": "É um serviço que avalia, audita e registra as configurações dos recursos AWS ao longo do tempo. Serve para verificar se os recursos seguem as regras de conformidade definidas. Use quando quiser rastrear mudanças de configuração e garantir conformidade contínua.",
  "AWS CloudFormation": "É um serviço de infraestrutura como código (IaC). Serve para criar e gerenciar recursos AWS a partir de templates (JSON ou YAML), de forma automatizada e repetível. Use quando quiser provisionar infraestrutura de forma consistente e versionada.",
  "AWS Systems Manager": "É um serviço que centraliza a visibilidade e o controle operacional sobre recursos AWS e locais. Serve para automatizar tarefas, como patches e execução de comandos em várias instâncias. Use quando precisar gerenciar operações em escala em servidores e instâncias.",
  "AWS Trusted Advisor": "É um serviço que analisa a conta AWS e dá recomendações sobre custo, segurança, performance e tolerância a falhas. Serve como um 'consultor automático' que aponta boas práticas não seguidas. Use quando quiser identificar rapidamente oportunidades de melhoria na conta.",
  "AWS Organizations": "É um serviço para gerenciar e consolidar várias contas AWS em uma estrutura única. Serve para aplicar políticas e consolidar faturamento entre contas. Use quando sua empresa tiver múltiplas contas AWS e precisar de governança centralizada.",
  "AWS Control Tower": "É um serviço que automatiza a criação de um ambiente multiconta seguindo boas práticas da AWS. Serve para configurar rapidamente uma estrutura organizacional (landing zone) com guarda-corpos de segurança. Use quando estiver começando a estruturar um ambiente com múltiplas contas.",
  "AWS Cost Explorer": "É uma ferramenta de visualização e análise de custos e uso da AWS. Serve para entender onde o dinheiro está sendo gasto, com gráficos e filtros detalhados. Use quando precisar analisar tendências de gastos e identificar oportunidades de economia.",
  "AWS Budgets": "É um serviço que permite definir orçamentos personalizados e receber alertas. Serve para monitorar custos e uso em relação a limites definidos por você. Use quando quiser ser avisado antes de gastar além do planejado.",
  "Amazon SNS": "É um serviço de mensagens de publicação e assinatura (pub/sub). Serve para enviar notificações para múltiplos destinos, como e-mail, SMS ou outras aplicações. Use quando precisar distribuir uma mensagem para vários assinantes ao mesmo tempo.",
  "Amazon SQS": "É um serviço de filas de mensagens totalmente gerenciado. Serve para desacoplar e desacelerar a comunicação entre componentes de uma aplicação. Use quando quiser garantir que mensagens sejam processadas de forma confiável, mesmo sob picos de carga.",
  "Amazon EventBridge": "É um serviço de barramento de eventos sem servidor. Serve para conectar aplicações usando eventos gerados por serviços AWS, aplicações próprias ou SaaS. Use quando quiser criar arquiteturas orientadas a eventos de forma desacoplada.",
  "Amazon Athena": "É um serviço de consultas interativas que analisa dados diretamente no Amazon S3 usando SQL padrão. Serve para analisar grandes volumes de dados sem precisar carregar em um banco de dados. Use quando precisar fazer consultas pontuais em dados armazenados no S3.",
  "Amazon Kinesis": "É um serviço para coletar, processar e analisar dados em streaming em tempo real. Serve para lidar com grandes volumes de dados contínuos, como logs ou cliques de usuários. Use quando precisar processar dados à medida que eles chegam, não em lote.",
  "AWS Glue": "É um serviço de integração de dados sem servidor, usado para ETL (extração, transformação e carga). Serve para preparar e mover dados entre fontes diferentes de forma automatizada. Use quando precisar limpar, transformar ou catalogar dados para análise.",
  "Amazon Comprehend": "É um serviço de processamento de linguagem natural (NLP) baseado em machine learning. Serve para extrair informações de textos, como sentimentos, entidades e temas. Use quando precisar analisar textos em grande volume automaticamente.",
  "Amazon Kendra": "É um serviço de busca inteligente baseado em machine learning. Serve para encontrar informações relevantes dentro de documentos e bases de conhecimento usando linguagem natural. Use quando quiser um motor de busca corporativo mais inteligente que uma busca por palavra-chave.",
  "Amazon Lex": "É um serviço para criar interfaces de conversação, como chatbots, usando reconhecimento de voz e texto. Serve para construir assistentes virtuais que entendem a intenção do usuário. Use quando quiser automatizar atendimento por chat ou voz.",
  "Amazon Polly": "É um serviço que converte texto em fala (text-to-speech) de forma realista. Serve para gerar áudio a partir de textos em várias vozes e idiomas. Use quando precisar adicionar narração de voz a aplicações ou conteúdos.",
  "Amazon Q": "É um assistente de inteligência artificial generativa da AWS, voltado para produtividade e desenvolvimento. Serve para responder perguntas, gerar código e ajudar em tarefas usando dados da sua empresa. Use quando quiser acelerar tarefas do dia a dia com apoio de IA generativa.",
  "Amazon Rekognition": "É um serviço de análise de imagens e vídeos baseado em machine learning. Serve para identificar objetos, rostos, textos e atividades em mídias visuais. Use quando precisar automatizar reconhecimento visual, como moderação de conteúdo.",
  "Amazon SageMaker AI": "É um serviço completo para construir, treinar e implantar modelos de machine learning. Serve para cientistas de dados criarem modelos personalizados do início ao fim. Use quando precisar desenvolver uma solução de machine learning sob medida para o seu problema.",
  "Amazon Textract": "É um serviço que extrai texto e dados estruturados automaticamente de documentos digitalizados. Serve para transformar formulários e documentos em dados utilizáveis, sem digitação manual. Use quando precisar automatizar a extração de informações de documentos como notas fiscais.",
  "Amazon Transcribe": "É um serviço que converte fala em texto (speech-to-text) automaticamente. Serve para gerar transcrições de áudio e vídeo, como reuniões ou ligações. Use quando precisar transformar conteúdo falado em texto para análise ou acessibilidade.",
  "Amazon Translate": "É um serviço de tradução automática de texto entre idiomas, baseado em machine learning. Serve para traduzir conteúdo em tempo real ou em lote. Use quando precisar tornar uma aplicação ou conteúdo acessível em múltiplos idiomas.",
  "Amazon Bedrock": "É um serviço totalmente gerenciado que oferece acesso a modelos de fundação (FMs) de várias empresas de IA. Serve para construir aplicações de IA generativa sem gerenciar infraestrutura de modelos. Use quando quiser usar ou personalizar modelos de linguagem prontos para seu caso de uso.",
  "Amazon Bedrock AgentCore": "É um conjunto de capacidades do Bedrock para criar e operar agentes de IA em escala empresarial. Serve para dar aos agentes memória, identidade e ferramentas de forma segura. Use quando precisar colocar agentes de IA generativa em produção com confiabilidade.",
  "Amazon Nova": "É a família de modelos de fundação multimodais criados pela própria AWS. Serve para tarefas de texto, imagem e vídeo dentro do Amazon Bedrock. Use quando quiser um modelo de IA generativa nativo da AWS com bom custo-benefício.",
  "Amazon SageMaker JumpStart": "É um hub dentro do SageMaker com modelos pré-treinados e soluções prontas para uso. Serve para acelerar projetos de machine learning usando modelos já existentes. Use quando quiser começar rápido sem treinar um modelo do zero.",
  "Amazon Personalize": "É um serviço de machine learning para criar recomendações personalizadas. Serve para sugerir produtos, conteúdos ou ações com base no comportamento do usuário. Use quando quiser adicionar recomendações, como 'você também pode gostar', a uma aplicação.",
  "Amazon Augmented AI (A2I)": "É um serviço para adicionar revisão humana a previsões de machine learning. Serve para revisar e corrigir resultados de modelos de IA quando a confiança é baixa. Use quando precisar combinar automação com verificação humana em decisões sensíveis.",
  "Amazon OpenSearch Service": "É um serviço gerenciado para busca e análise de dados em grande escala, baseado no OpenSearch. Serve para indexar logs, métricas e textos para busca rápida. Use quando precisar de busca full-text ou análise de logs em tempo real.",
  "AWS Lake Formation": "É um serviço que facilita a criação e o gerenciamento seguro de data lakes. Serve para organizar, catalogar e controlar o acesso a dados armazenados no S3. Use quando precisar centralizar dados de várias fontes com governança de acesso.",
  "Amazon DocumentDB": "É um banco de dados de documentos gerenciado, compatível com MongoDB. Serve para armazenar dados em formato JSON de forma flexível e escalável. Use quando sua aplicação precisar de um banco orientado a documentos com compatibilidade MongoDB.",
  "Amazon Neptune": "É um banco de dados de grafos totalmente gerenciado. Serve para armazenar e consultar dados altamente conectados, como redes sociais ou sistemas de recomendação. Use quando o relacionamento entre os dados for tão importante quanto os próprios dados.",
  "AWS Secrets Manager": "É um serviço para armazenar e gerenciar credenciais, como senhas e chaves de API, de forma segura. Serve para evitar deixar segredos fixos no código, com rotação automática. Use quando precisar proteger e rotacionar credenciais usadas por aplicações.",
  "AWS Audit Manager": "É um serviço que ajuda a avaliar continuamente riscos e conformidade com regulamentações. Serve para coletar evidências de auditoria automaticamente a partir dos recursos AWS. Use quando precisar simplificar o processo de auditoria e conformidade regulatória.",
  "Kiro": "É um ambiente de desenvolvimento com inteligência artificial que ajuda a programar de forma assistida. Serve para gerar, editar e explicar código em conjunto com o desenvolvedor, usando specs e automações. Use quando quiser acelerar o desenvolvimento de software com apoio de IA integrada ao editor.",
  "Strands Agents": "É um SDK open source para construir agentes de IA de forma simples, usando modelos de linguagem e ferramentas. Serve para criar agentes que decidem e executam ações com poucas linhas de código. Use quando quiser desenvolver agentes de IA generativa de forma leve e flexível."
};

// Monta as listas finais no formato { nome, explicacao } a
// partir dos nomes acima e do dicionário de explicações.
function montarServicos(nomes) {
  return nomes.map((nome) => ({
    nome,
    explicacao: EXPLICACOES[nome] || "Explicação não cadastrada ainda."
  }));
}

const SERVICOS = {
  "CLF-C02": montarServicos(SERVICOS_NOMES["CLF-C02"]),
  "AIF-C01": montarServicos(SERVICOS_NOMES["AIF-C01"])
};

// =========================================================
// ESTADO
// =========================================================
let certificacaoEscolhida = null;
let servicoAnterior = null;
let servicoAtual = null;
let sorteando = false;
let respostaVisivel = false;

// =========================================================
// ELEMENTOS
// =========================================================
const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const btnClf = document.getElementById("btnClf");
const btnAif = document.getElementById("btnAif");
const certChosen = document.getElementById("certChosen");
const rouletteBox = document.getElementById("rouletteBox");
const rouletteText = document.getElementById("rouletteText");
const drawBtn = document.getElementById("drawBtn");
const resultInstruction = document.getElementById("resultInstruction");
const changeCertBtn = document.getElementById("changeCertBtn");
const confettiContainer = document.getElementById("confettiContainer");
const checkAnswerBtn = document.getElementById("checkAnswerBtn");
const answerCard = document.getElementById("answerCard");
const answerTitle = document.getElementById("answerTitle");
const answerText = document.getElementById("answerText");

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

// =========================================================
// FUNÇÕES AUXILIARES
// =========================================================

// Embaralha uma cópia do array (Fisher-Yates)
function embaralhar(array) {
  const copia = array.slice();
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function esconderResposta() {
  respostaVisivel = false;
  answerCard.classList.add("hidden");
  checkAnswerBtn.textContent = "Verificar resposta";
}

function limparRoleta() {
  rouletteText.textContent = "?";
  rouletteText.classList.remove("final", "slide-in");
  resultInstruction.textContent = "";
  servicoAnterior = null;
  servicoAtual = null;
  drawBtn.disabled = false;
  drawBtn.textContent = "Sortear";
  checkAnswerBtn.classList.add("hidden");
  esconderResposta();
}

function selecionarCertificacao(cert) {
  certificacaoEscolhida = cert;

  const nomeCompleto =
    cert === "CLF-C02"
      ? "Cloud Practitioner (CLF-C02)"
      : "AI Practitioner (AIF-C01)";
  certChosen.textContent = `Certificação escolhida: ${nomeCompleto}`;

  limparRoleta();

  screen1.classList.add("hidden");
  screen2.classList.remove("hidden");
}

function trocarCertificacao() {
  sorteando = false;
  certificacaoEscolhida = null;
  limparRoleta();

  screen2.classList.add("hidden");
  screen1.classList.remove("hidden");
}

function dispararConfete() {
  const cores = ["#FF9900", "#232F3E", "#FFFFFF", "#FFC266"];
  const quantidade = 40;

  for (let i = 0; i < quantidade; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.background = cores[Math.floor(Math.random() * cores.length)];
    piece.style.animationDelay = `${Math.random() * 0.3}s`;
    piece.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
    confettiContainer.appendChild(piece);

    setTimeout(() => piece.remove(), 2200);
  }
}

// =========================================================
// LÓGICA DO SORTEIO
// =========================================================
function sortear() {
  if (sorteando || !certificacaoEscolhida) return;

  const listaCompleta = SERVICOS[certificacaoEscolhida];

  // Serviço final decidido ANTES da animação (sem repetir o anterior)
  let candidatos = listaCompleta;
  if (servicoAnterior && listaCompleta.length > 1) {
    candidatos = listaCompleta.filter((s) => s.nome !== servicoAnterior);
  }
  const servicoFinal =
    candidatos[Math.floor(Math.random() * candidatos.length)];

  // Sequência embaralhada passando por todos os serviços, terminando no final
  let sequencia = embaralhar(listaCompleta).filter(
    (s) => s.nome !== servicoFinal.nome
  );
  sequencia.push(servicoFinal);

  sorteando = true;
  drawBtn.disabled = true;
  rouletteText.classList.remove("final");
  resultInstruction.textContent = "";
  checkAnswerBtn.classList.add("hidden");
  esconderResposta();

  // Se o usuário prefere menos movimento, mostra o resultado direto
  if (prefersReducedMotion) {
    finalizarSorteio(servicoFinal);
    return;
  }

  const totalPassos = sequencia.length;
  let passoAtual = 0;

  // Delays: começa rápido (~50ms) e desacelera até parar, totalizando ~3-4s
  const duracaoTotalMs = 3500;
  const delayMinimo = 50;
  const delayMaximo = 350;

  function proximoPasso() {
    const servico = sequencia[passoAtual];
    mostrarNomeNaRoleta(servico.nome);
    passoAtual++;

    if (passoAtual >= totalPassos) {
      // Último nome já é o servicoFinal
      setTimeout(() => finalizarSorteio(servicoFinal), delayMaximo);
      return;
    }

    // Progresso de 0 a 1 para curva de desaceleração (easing quadrático)
    const progresso = passoAtual / totalPassos;
    const easing = progresso * progresso;
    const delayAtual = delayMinimo + (delayMaximo - delayMinimo) * easing;

    setTimeout(proximoPasso, delayAtual);
  }

  proximoPasso();
}

function mostrarNomeNaRoleta(nome) {
  rouletteText.classList.remove("slide-in");
  rouletteText.textContent = nome;
  // força reflow para reiniciar a animação
  void rouletteText.offsetWidth;
  rouletteText.classList.add("slide-in");
}

function finalizarSorteio(servicoFinal) {
  rouletteText.textContent = servicoFinal.nome;
  rouletteText.classList.add("final");

  rouletteBox.classList.remove("blink");
  void rouletteBox.offsetWidth;
  rouletteBox.classList.add("blink");

  dispararConfete();

  resultInstruction.textContent = `Agora explique o serviço ${servicoFinal.nome}: o que é, para que serve e quando usar.`;

  servicoAnterior = servicoFinal.nome;
  servicoAtual = servicoFinal;
  sorteando = false;
  drawBtn.disabled = false;
  drawBtn.textContent = "Sortear de novo";
  checkAnswerBtn.classList.remove("hidden");
}

// =========================================================
// VERIFICAR RESPOSTA
// =========================================================
function alternarResposta() {
  if (!servicoAtual) return;

  if (respostaVisivel) {
    esconderResposta();
    return;
  }

  answerTitle.textContent = `Resposta: ${servicoAtual.nome}`;
  answerText.textContent = servicoAtual.explicacao;
  answerCard.classList.remove("hidden");
  checkAnswerBtn.textContent = "Esconder resposta";
  respostaVisivel = true;
}

// =========================================================
// EVENTOS
// =========================================================
btnClf.addEventListener("click", () => selecionarCertificacao("CLF-C02"));
btnAif.addEventListener("click", () => selecionarCertificacao("AIF-C01"));
drawBtn.addEventListener("click", sortear);
changeCertBtn.addEventListener("click", trocarCertificacao);
checkAnswerBtn.addEventListener("click", alternarResposta);
