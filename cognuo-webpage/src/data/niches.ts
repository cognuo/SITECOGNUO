export interface NicheProblem {
  title: string;
  cost: string;
}

export interface NicheSolution {
  title: string;
  desc: string;
  outcome: string;
}

export interface NicheCase {
  sector: string;
  headline: string;
  problem: string;
  what: string;
  result: string;
  metrics: { label: string; value: string; bar: number; highlight?: boolean }[];
}

export interface Niche {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  heroHeadline: string;
  heroSub: string;
  eyebrow: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  problems: NicheProblem[];
  solutions: NicheSolution[];
  caseStudy: NicheCase;
}

export const niches: Niche[] = [
  {
    slug: 'ecommerce',
    name: 'E-commerce e Varejo Digital',
    shortName: 'E-commerce',
    tagline: 'Para lojas que vendem em vários canais e travam na operação',
    eyebrow: 'Automação para E-commerce',
    heroHeadline: 'Seu e-commerce vende bem. A operação que não acompanha.',
    heroSub:
      'Pedidos descoordenados, estoque fora de sincronia, atendimento no limite. Construímos os sistemas que resolvem isso sem precisar contratar mais ninguém.',
    seoTitle: 'Automação para E-commerce e Varejo Digital | Cognuo',
    seoDescription:
      'Integração de marketplaces, automação de pedidos e atendimento inteligente para e-commerces que precisam escalar sem aumentar custo operacional.',
    seoKeywords:
      'automação ecommerce, integração marketplace, sistema para loja virtual, gestão de pedidos automática, atendimento automatizado ecommerce',
    problems: [
      {
        title: 'Pedidos chegam de vários canais e alguém faz a ponte manualmente',
        cost: 'Erro humano, atraso e cliente insatisfeito',
      },
      {
        title: 'Estoque desatualizado entre loja, marketplace e ERP',
        cost: 'Vende o que não tem. Devolução e reputação caindo',
      },
      {
        title: 'Atendimento pós-venda sobrecarregado com perguntas repetitivas',
        cost: 'Time no limite, cliente esperando',
      },
      {
        title: 'Frete e nota fiscal ainda dependem de alguém para emitir',
        cost: 'Atraso na expedição, risco de multa',
      },
      {
        title: 'Dados de vendas espalhados em relatórios diferentes',
        cost: 'Decisão de estoque no escuro',
      },
      {
        title: 'Devoluções e trocas gerenciadas por e-mail e planilha',
        cost: 'Processo lento, cliente frustrado',
      },
    ],
    solutions: [
      {
        title: 'Integração central de pedidos',
        desc: 'Todos os seus canais (Shopee, Magalu, Mercado Livre, loja própria) centralizados em um único lugar. O sistema sincroniza estoque, faz o roteamento do pedido e dispara a nota sem ninguém tocar.',
        outcome: 'Menos erro, mais velocidade, menos contratação',
      },
      {
        title: 'Atendimento que não para quando sua equipe para',
        desc: 'Respondemos rastreamento, prazo, troca e pergunta de produto automaticamente. Quando o cliente precisa de uma pessoa, encaminhamos com contexto completo. Sem ele precisar repetir tudo.',
        outcome: '80%+ dos atendimentos resolvidos sem humano',
      },
      {
        title: 'Painel de operação em tempo real',
        desc: 'Uma tela para ver o que está pendente, o que atrasou, o que precisa de atenção. Chega de abrir quatro sistemas para saber como o dia está indo.',
        outcome: 'Decisão rápida, problema identificado antes de virar reclamação',
      },
    ],
    caseStudy: {
      sector: 'E-commerce / Marketplaces',
      headline: 'De 4 horas de operação manual por dia para 20 minutos',
      problem:
        'A equipe de operações gastava a manhã inteira baixando pedidos de cinco plataformas, atualizando estoque e emitindo notas. Qualquer desvio (estoque errado, prazo perdido) virava reclamação.',
      what:
        'Construímos uma integração central que puxa os pedidos de todas as plataformas, sincroniza estoque em tempo real, emite a nota e atualiza o rastreamento automaticamente. A equipe passou a só intervir em exceções.',
      result:
        'A operação de pedidos que levava 4 horas passou a rodar em 20 minutos. O volume dobrou sem contratar ninguém novo. As avaliações nas plataformas subiram de 3,8 para 4,6.',
      metrics: [
        { label: 'Tempo de operação diária', value: '-92%', bar: 92, highlight: true },
        { label: 'Erros de estoque', value: 'Quase zero', bar: 97 },
        { label: 'Avaliação nas plataformas', value: '4.6 / 5', bar: 92 },
        { label: 'Até produção', value: '6 semanas', bar: 40 },
      ],
    },
  },

  {
    slug: 'saude',
    name: 'Clínicas e Saúde',
    shortName: 'Saúde',
    tagline: 'Para clínicas que cresceram além da agenda em papel',
    eyebrow: 'Automação para Clínicas',
    heroHeadline: 'Sua clínica cuida dos pacientes. O sistema deveria cuidar do resto.',
    heroSub:
      'Confirmação manual de consultas, agenda cheia de faltas, prontuários espalhados. Construímos a operação que deixa sua equipe focada no atendimento.',
    seoTitle: 'Sistema para Clínicas e Automação na Saúde | Cognuo',
    seoDescription:
      'Agendamento automático, confirmação de consultas, integração de prontuários e gestão financeira para clínicas que querem reduzir faltas e retrabalho.',
    seoKeywords:
      'sistema para clínica, automação consultório, agendamento automático clínica, reduzir faltas consulta, confirmação de consulta automática, prontuário integrado',
    problems: [
      {
        title: 'Secretária liga para confirmar cada consulta manualmente',
        cost: 'Horas por dia que poderiam ir para o atendimento',
      },
      {
        title: 'Paciente falta sem avisar. Agenda vazia, slot perdido',
        cost: 'Receita perdida que não volta',
      },
      {
        title: 'Prontuário em papel ou em sistema que não integra com nada',
        cost: 'Informação travada, risco de erro',
      },
      {
        title: 'Pós-consulta dependente de retorno de ligação',
        cost: 'Paciente some, evolução interrompida',
      },
      {
        title: 'Financeiro feito em planilha por fora do sistema de agendamento',
        cost: 'Sem visão real de receita e inadimplência',
      },
      {
        title: 'Equipe responde as mesmas perguntas no WhatsApp o dia todo',
        cost: 'Tempo desperdiçado em dúvidas que um sistema resolve',
      },
    ],
    solutions: [
      {
        title: 'Confirmação e lembrete automático de consultas',
        desc: 'WhatsApp, SMS ou e-mail: o sistema confirma, lembra e coleta o cancelamento antes que vire falta. Você recebe o slot de volta com antecedência suficiente para encaixar outro paciente.',
        outcome: 'Menos faltas, agenda mais previsível',
      },
      {
        title: 'Atendimento digital que funciona fora do horário',
        desc: 'Dúvidas sobre exames, preparo, localização e resultados respondidas automaticamente. Quando é algo que precisa de atenção humana, o sistema encaminha com contexto completo.',
        outcome: 'Paciente atendido a qualquer hora sem sobrecarregar a equipe',
      },
      {
        title: 'Integração entre agenda, prontuário e financeiro',
        desc: 'O que acontece no atendimento reflete no financeiro. O que o paciente pagou aparece na ficha. Sem digitação dupla, sem inconsistência.',
        outcome: 'Uma fonte de dados para toda a operação',
      },
    ],
    caseStudy: {
      sector: 'Clínica / Saúde',
      headline: 'Faltas caíram 60% sem contratar mais secretárias',
      problem:
        'A clínica tinha 3 secretárias e ainda assim a agenda virava caos toda semana. Ligações de confirmação, reagendamentos no último minuto e dúvidas no WhatsApp consumiam o dia inteiro.',
      what:
        'Implantamos um fluxo automático de confirmação com 48h de antecedência. Pacientes que não confirmavam recebiam um segundo contato. Cancelamentos abriam o horário automaticamente para a lista de espera.',
      result:
        'As faltas sem aviso caíram 60% no primeiro mês. A equipe parou de ligar para confirmação e passou a atender quem realmente precisava de atenção. A receita por dia de atendimento subiu 22%.',
      metrics: [
        { label: 'Redução de faltas', value: '-60%', bar: 60, highlight: true },
        { label: 'Tempo em confirmações manuais', value: '-85%', bar: 85 },
        { label: 'Receita por dia de atendimento', value: '+22%', bar: 22 },
        { label: 'Até produção', value: '5 semanas', bar: 35 },
      ],
    },
  },

  {
    slug: 'contabilidade',
    name: 'Escritórios Contábeis',
    shortName: 'Contabilidade',
    tagline: 'Para escritórios que cresceram a carteira mas não a equipe',
    eyebrow: 'Automação para Contabilidade',
    heroHeadline: 'Seus clientes crescem. A operação do escritório que não acompanha.',
    heroSub:
      'Documentos chegando por WhatsApp, prazos controlados em planilha, cobranças feitas manualmente. Construímos o sistema que deixa sua equipe focada na análise, não na logística.',
    seoTitle: 'Automação para Escritórios Contábeis | Cognuo',
    seoDescription:
      'Portal do cliente, automação de coleta de documentos, controle de prazos fiscais e cobranças automáticas para escritórios contábeis que querem escalar sem aumentar equipe.',
    seoKeywords:
      'automação escritório contábil, sistema para contador, portal do cliente contabilidade, coleta de documentos automática, controle de prazos fiscais',
    problems: [
      {
        title: 'Documentos chegam via WhatsApp, e-mail e até papel',
        cost: 'Alguém passa o dia organizando o que o cliente deveria entregar organizado',
      },
      {
        title: 'Prazos fiscais controlados em planilha ou na cabeça',
        cost: 'Um prazo perdido pode custar multa ao cliente. E o cliente não volta',
      },
      {
        title: 'Cobranças de honorários feitas manualmente mês a mês',
        cost: 'Tempo do sócio em tarefa que um sistema faz em segundos',
      },
      {
        title: 'Cliente não sabe o que está pendente e você também não tem certeza',
        cost: 'Retrabalho, re-contato, reunião que não precisaria acontecer',
      },
      {
        title: 'Novos clientes exigem mais da equipe sem gerar mais receita proporcional',
        cost: 'O escritório cresce em volume mas não em margem',
      },
      {
        title: 'Relatórios entregues em PDF estático que o cliente não entende',
        cost: 'Percepção de valor baixa. O cliente não vê o que você faz por ele',
      },
    ],
    solutions: [
      {
        title: 'Portal do cliente com coleta estruturada',
        desc: 'Cada cliente tem um ambiente próprio para enviar documentos, ver o que está pendente e acompanhar o que já foi processado. Chega de organizar WhatsApp.',
        outcome: 'Documentos no lugar certo, no prazo, sem perseguição',
      },
      {
        title: 'Controle de prazos com alertas automáticos',
        desc: 'O sistema monitora todas as obrigações da carteira e avisa você, sua equipe e o cliente com antecedência suficiente para agir. Prazo perdido vira exceção, não rotina.',
        outcome: 'Zero surpresa de vencimento',
      },
      {
        title: 'Cobrança e relatório automatizados',
        desc: 'Honorários emitidos e cobrados automaticamente. Relatórios mensais gerados e enviados sem ninguém precisar montar manualmente. Você aparece para o cliente sem precisar aparecer.',
        outcome: 'Mais clientes, mesma equipe',
      },
    ],
    caseStudy: {
      sector: 'Escritório Contábil',
      headline: 'Carteira cresceu 40% sem contratar. Prazos cumpridos à risca',
      problem:
        'O escritório tinha capacidade para crescer a carteira, mas cada novo cliente aumentava o caos operacional. Documentos chegavam de qualquer jeito, prazos eram controlados em planilha e a equipe perdia horas por semana só em organização.',
      what:
        'Construímos um portal de cliente com checklist dinâmico por competência, notificações automáticas de pendência e integração com o sistema contábil existente. As cobranças passaram a ser emitidas e monitoradas automaticamente.',
      result:
        'O escritório onboardou 40% mais clientes em 6 meses. Os prazos perdidos caíram para zero. O tempo de equipe gasto em coleta e organização de documentos caiu de 18 horas semanais para menos de 3.',
      metrics: [
        { label: 'Crescimento da carteira', value: '+40%', bar: 40, highlight: true },
        { label: 'Tempo em organização doc.', value: '-83%', bar: 83 },
        { label: 'Prazos perdidos', value: 'Zero', bar: 100 },
        { label: 'Até produção', value: '7 semanas', bar: 47 },
      ],
    },
  },

  {
    slug: 'imobiliarias',
    name: 'Imobiliárias e Corretoras',
    shortName: 'Imobiliárias',
    tagline: 'Para imobiliárias que perdem negócio por lentidão no follow-up',
    eyebrow: 'Automação para Imobiliárias',
    heroHeadline: 'Seu corretor atende o cliente. O lead do portal não pode esperar.',
    heroSub:
      'Lead sem follow-up, contrato feito no Word, imóvel anunciado em seis lugares diferentes. Construímos a operação que fecha mais negócios com a mesma equipe.',
    seoTitle: 'Sistema para Imobiliárias e Automação de CRM | Cognuo',
    seoDescription:
      'CRM imobiliário com follow-up automático, gestão de contratos e sincronização de portais para imobiliárias que querem fechar mais negócios sem perder lead.',
    seoKeywords:
      'sistema para imobiliária, CRM imobiliário, automação follow-up imóveis, gestão de contratos imobiliários, integração portais imobiliários',
    problems: [
      {
        title: 'Lead chega no portal e fica horas sem resposta',
        cost: 'Cliente foi falar com outra imobiliária',
      },
      {
        title: 'Follow-up depende do corretor se lembrar de ligar',
        cost: 'Negócio que estava quente esfriou por falta de contato',
      },
      {
        title: 'Imóvel anunciado em seis portais que ninguém atualiza junto',
        cost: 'Anúncio desatualizado, cliente frustrado, corretor sem credibilidade',
      },
      {
        title: 'Contrato de locação ou venda gerado no Word e revisado manualmente',
        cost: 'Horas para algo que deveria levar minutos, ainda com risco de erro',
      },
      {
        title: 'Sem visão de qual corretor está respondendo quantos leads',
        cost: 'Gestão no escuro, sem saber onde o funil está quebrando',
      },
      {
        title: 'Documentação do cliente coletada por WhatsApp e e-mail',
        cost: 'Processo lento, documento perdido, negócio atrasado',
      },
    ],
    solutions: [
      {
        title: 'Resposta imediata ao lead. Todo dia, toda hora',
        desc: 'Quando o lead chega do portal, recebe uma resposta em segundos com as informações do imóvel e uma pergunta de qualificação. O corretor entra na conversa com o contexto pronto.',
        outcome: 'Lead qualificado antes do concorrente entrar em contato',
      },
      {
        title: 'CRM com follow-up automático por etapa',
        desc: 'Cada lead tem uma sequência de contatos definida por você. O sistema executa. Quando o cliente responde, o corretor é acionado. Nenhum contato esquecido.',
        outcome: 'Pipeline ativo sem depender da memória do corretor',
      },
      {
        title: 'Gestão centralizada de imóveis e contratos',
        desc: 'Um cadastro atualiza todos os portais. Contrato gerado automaticamente a partir do cadastro do imóvel e do cliente. Sem copiar e colar, sem risco de versão errada.',
        outcome: 'Menos retrabalho, mais negócios fechados',
      },
    ],
    caseStudy: {
      sector: 'Imobiliária',
      headline: 'Taxa de conversão dobrou sem aumentar a equipe de corretores',
      problem:
        'A imobiliária recebia mais de 200 leads por mês dos portais. Mas a maioria ficava mais de 2 horas sem resposta, e o follow-up dependia de cada corretor se organizar. Muitos negócios se perdiam antes do primeiro contato real.',
      what:
        'Construímos um CRM com resposta automática ao lead, qualificação por mensagem e distribuição inteligente para o corretor. Cada etapa do funil tem um fluxo de follow-up automático. O corretor vê tudo numa tela.',
      result:
        'O tempo de primeiro contato caiu de 2h para menos de 2 minutos. A taxa de conversão de lead para visita dobrou. Os corretores passaram mais tempo em visitas e negociações do que em follow-up manual.',
      metrics: [
        { label: 'Tempo de primeiro contato', value: '< 2 min', bar: 98, highlight: true },
        { label: 'Conversão lead → visita', value: '+110%', bar: 100 },
        { label: 'Leads sem follow-up', value: 'Zero', bar: 100 },
        { label: 'Até produção', value: '6 semanas', bar: 40 },
      ],
    },
  },
];

export const nicheMap = Object.fromEntries(niches.map((n) => [n.slug, n]));
