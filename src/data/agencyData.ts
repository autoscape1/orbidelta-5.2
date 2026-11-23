export type PortfolioCategory =
  | 'Todos'
  | 'Pizzaria'
  | 'Culinária japonesa';

export type RestaurantSegment =
  | 'Pizzaria'
  | 'Restaurante'
  | 'Culinária japonesa'
  | 'Hamburgueria'
  | 'Gastronomia'
  | 'Delivery';

export const WHATSAPP_CONTACT = {
  display: '+55 11 91788-2507',
  url: 'https://wa.me/5511917882507?text=Ol%C3%A1%21%20Conheci%20a%20Orbidelta%20pelo%20site%20e%20gostaria%20de%20conhecer%20a%20estrat%C3%A9gia%20para%20o%20meu%20restaurante.',
};

export const PORTFOLIO_DISCLAIMER =
  'Nota de publicação: os números abaixo são simulações ilustrativas, criadas para demonstrar a apresentação visual dos indicadores. Não devem ser publicados como resultados reais ou atribuídos aos estabelecimentos sem validação e autorização. Substituir por dados comprovados antes da publicação comercial.';

export interface HeroMetricCard {
  id: string;
  prefix?: string;
  numericValue: number;
  decimals?: number;
  suffix: string;
  label: string;
}

export interface ProblemJourneyStage {
  id: string;
  number: string;
  stage: string;
  description: string;
  diagnosticTag: string;
  diagnosticSignal: string;
  image: string;
  imageAlt: string;
}

export interface MethodologyStage {
  number: string;
  code: string;
  title: string;
  description: string;
  focusLabel: string;
  image: string;
  imageAlt: string;
}

export interface First30DaysMilestone {
  days: string;
  title: string;
  summary: string;
}

export interface PortfolioKpiHighlight {
  label: string;
  initialValue: string;
  finalPrefix?: string;
  finalNumeric: number;
  finalDecimals?: number;
  finalSuffix?: string;
  finalText: string;
}

export interface PortfolioSecondaryMetric {
  label: string;
  initialValue: string;
  finalValue: string;
}

export interface PortfolioCase {
  id: string;
  code: string;
  category: Exclude<PortfolioCategory, 'Todos'>;
  clientName: string;
  period: string;
  image: string;
  imageAlt: string;
  featuredKpis: PortfolioKpiHighlight[];
  secondaryMetrics: PortfolioSecondaryMetric[];
  highlights: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const HERO_DEMO_CARDS: HeroMetricCard[] = [
  {
    id: 'compras',
    prefix: '+',
    numericValue: 176,
    suffix: '%',
    label: 'em compras (simulação)',
  },
  {
    id: 'roas',
    numericValue: 6,
    decimals: 2,
    suffix: 'x',
    label: 'ROAS em campanhas',
  },
  {
    id: 'cpa',
    prefix: '-',
    numericValue: 45,
    suffix: '%',
    label: 'no custo por compra',
  },
];

export const PROBLEM_JOURNEY_STAGES: ProblemJourneyStage[] = [
  {
    id: 'atracao',
    number: '01',
    stage: 'Atração',
    description:
      'O cliente até encontra seu restaurante, mas a comunicação não desperta vontade suficiente para comprar.',
    diagnosticTag: 'Alcance sem desejo',
    diagnosticSignal: 'Cliques dispersos no perfil',
    image: '/src/assets/images/portfolio_cafeteria_1794881479226.jpg',
    imageAlt: 'Café especial e croissant recém-assado servidos em mesa de madeira',
  },
  {
    id: 'decisao',
    number: '02',
    stage: 'Decisão',
    description:
      'Falta de ofertas estratégicas, diferenciação e informações dificulta a escolha.',
    diagnosticTag: 'Ausência de combos e âncoras',
    diagnosticSignal: 'Comparação apenas por preço',
    image: '/src/assets/images/portfolio_restaurant_menu_1794880719178.jpg',
    imageAlt: 'Pratos principais e cardápio de restaurante contemporâneo',
  },
  {
    id: 'conversao',
    number: '03',
    stage: 'Conversão',
    description:
      'O interesse não se transforma em pedidos na proporção que poderia.',
    diagnosticTag: 'Demanda represada',
    diagnosticSignal: 'Pedidos abaixo do potencial',
    image: '/src/assets/images/portfolio_delivery_packaging_1794880720061.jpg',
    imageAlt: 'Embalagens de delivery gastronômico prontas para envio ao cliente',
  },
];

export const METHODOLOGY_STAGES: MethodologyStage[] = [
  {
    number: '01',
    code: 'ETAPA 01',
    title: 'Diagnóstico e estratégia',
    description:
      'Auditamos Instagram, cardápio, jornada de compra e campanhas atuais para definir prioridades de venda.',
    focusLabel: 'Foco de auditoria',
    image: '/src/assets/images/portfolio_restaurant_menu_1794880719178.jpg',
    imageAlt: 'Análise estratégica de apresentação de pratos e cardápio comercial',
  },
  {
    number: '02',
    code: 'ETAPA 02',
    title: 'Estruturação comercial',
    description:
      'Otimizamos cardápio, combos, ofertas, descrições e identidade visual para facilitar a escolha do cliente.',
    focusLabel: 'Pontos de contato',
    image: '/src/assets/images/pizzaria_dois_case_1795188815293.jpg',
    imageAlt: 'Apresentação comercial de pizzas artesanais em mesa de madeira',
  },
  {
    number: '03',
    code: 'ETAPA 03',
    title: 'Produção e aquisição',
    description:
      'Produzimos fotos, vídeos e criativos de conversão integrados a campanhas segmentadas de aquisição.',
    focusLabel: 'Execução em mídia',
    image: '/src/assets/images/audiovisual_production_bts_1794880720778.jpg',
    imageAlt: 'Produção audiovisual gastronômica em cozinha profissional',
  },
  {
    number: '04',
    code: 'ETAPA 04',
    title: 'Análise e otimização',
    description:
      'Monitoramos CPA, ROAS e pedidos, testamos ofertas e ajustamos a operação para escalar resultados.',
    focusLabel: 'Ciclo contínuo',
    image: '/src/assets/images/pizzaria_tres_case_1795188815228.jpg',
    imageAlt: 'Produtos gastronômicos prontos para campanhas de alta conversão',
  },
];

export const FIRST_30_DAYS_TIMELINE: First30DaysMilestone[] = [
  {
    days: 'Dias 01–07',
    title: 'Diagnóstico e planejamento',
    summary: 'Auditoria completa de Instagram, cardápio, ofertas e definições de escopo.',
  },
  {
    days: 'Dias 08–15',
    title: 'Estruturação e produção',
    summary: 'Otimização comercial do cardápio, comunicação visual e criação dos anúncios.',
  },
  {
    days: 'Dias 16–23',
    title: 'Ativação e rastreamento',
    summary: 'Publicação das campanhas, públicos estratégicos e leitura inicial de pedidos.',
  },
  {
    days: 'Dias 24–30',
    title: 'Revisão e continuidade',
    summary: 'Balanço dos primeiros resultados, ajustes finos e plano para o próximo ciclo.',
  },
];

export const FIRST_30_DAYS_INCLUDED: string[] = [
  'Diagnóstico e planejamento estratégico.',
  'Otimização do cardápio e apresentação dos produtos.',
  'Estruturação da comunicação do Instagram.',
  'Desenvolvimento de conteúdos e criativos previstos no escopo.',
  'Estruturação e ativação das campanhas.',
  'Configuração de rastreamento, quando tecnicamente disponível.',
  'Acompanhamento inicial e otimizações.',
];

export const TRACKED_INDICATORS: string[] = [
  'Investimento em mídia.',
  'Taxa de cliques (CTR).',
  'Volume de compras identificadas.',
  'Custo por compra (CPA).',
  'Ticket médio.',
  'Faturamento atribuído às campanhas.',
  'Retorno sobre investimento em anúncios (ROAS).',
];

export const OFFER_CONDITIONS: string[] = [
  'Os primeiros 30 dias não possuem honorários de gestão.',
  'O investimento em anúncios é pago diretamente pelo restaurante às plataformas, com recomendação inicial a partir de R$ 1.000, conforme mercado e objetivo.',
  'Eventuais custos externos de produção ou contratação de terceiros são informados e aprovados previamente.',
  'As entregas estão limitadas ao escopo acordado antes do início do trabalho.',
];

export const PORTFOLIO_CASES: PortfolioCase[] = [
  {
    id: 'pizzaria-1',
    code: 'PROJETO 01',
    category: 'Pizzaria',
    clientName: 'Pizzaria 1',
    period: '90 dias',
    image: '/src/assets/images/pizzaria_um_case_1795188816764.jpg',
    imageAlt:
      'Fatia de pizza artesanal com queijo derretido e manjericão fresco diante do forno a lenha',
    featuredKpis: [
      {
        label: 'Compras',
        initialValue: '127',
        finalNumeric: 350,
        finalText: '350',
      },
      {
        label: 'Custo por compra',
        initialValue: 'R$ 22,05',
        finalPrefix: 'R$ ',
        finalNumeric: 12,
        finalDecimals: 2,
        finalText: 'R$ 12,00',
      },
      {
        label: 'ROAS',
        initialValue: '3,18x',
        finalNumeric: 6,
        finalDecimals: 2,
        finalSuffix: 'x',
        finalText: '6,00x',
      },
    ],
    secondaryMetrics: [
      { label: 'Investimento', initialValue: 'R$ 2.800', finalValue: 'R$ 4.200' },
      { label: 'CTR', initialValue: '1,2%', finalValue: '2,4%' },
      { label: 'Ticket médio', initialValue: 'R$ 70', finalValue: 'R$ 72' },
      {
        label: 'Faturamento atribuído',
        initialValue: 'R$ 8.890',
        finalValue: 'R$ 25.200',
      },
    ],
    highlights: [
      '+176% em compras',
      '-45% no custo por compra',
      '+183% no faturamento atribuído',
    ],
  },
  {
    id: 'pizzaria-2',
    code: 'PROJETO 02',
    category: 'Pizzaria',
    clientName: 'Pizzaria 2',
    period: '90 dias',
    image: '/src/assets/images/pizzaria_dois_case_1795188815293.jpg',
    imageAlt:
      'Duas pizzas artesanais de pepperoni e cebola caramelizada servidas sobre mesa rústica de madeira',
    featuredKpis: [
      {
        label: 'Compras',
        initialValue: '100',
        finalNumeric: 240,
        finalText: '240',
      },
      {
        label: 'Custo por compra',
        initialValue: 'R$ 25,00',
        finalPrefix: 'R$ ',
        finalNumeric: 15,
        finalDecimals: 2,
        finalText: 'R$ 15,00',
      },
      {
        label: 'ROAS',
        initialValue: '3,12x',
        finalNumeric: 5.67,
        finalDecimals: 2,
        finalSuffix: 'x',
        finalText: '5,67x',
      },
    ],
    secondaryMetrics: [
      { label: 'Investimento', initialValue: 'R$ 2.500', finalValue: 'R$ 3.600' },
      { label: 'CTR', initialValue: '1,1%', finalValue: '2,1%' },
      { label: 'Ticket médio', initialValue: 'R$ 78', finalValue: 'R$ 85' },
      {
        label: 'Faturamento atribuído',
        initialValue: 'R$ 7.800',
        finalValue: 'R$ 20.400',
      },
    ],
    highlights: [
      '+140% em compras',
      '-40% no custo por compra',
      '+162% no faturamento atribuído',
    ],
  },
  {
    id: 'pizzaria-3',
    code: 'PROJETO 03',
    category: 'Pizzaria',
    clientName: 'Pizzaria 3',
    period: '90 dias',
    image: '/src/assets/images/pizzaria_tres_case_1795188815228.jpg',
    imageAlt:
      'Fatias de pizza romana quadrada crocante com burrata, presunto parma e rúcula fresca sobre tábua de madeira',
    featuredKpis: [
      {
        label: 'Compras',
        initialValue: '140',
        finalNumeric: 310,
        finalText: '310',
      },
      {
        label: 'Custo por compra',
        initialValue: 'R$ 25,00',
        finalPrefix: 'R$ ',
        finalNumeric: 16.13,
        finalDecimals: 2,
        finalText: 'R$ 16,13',
      },
      {
        label: 'ROAS',
        initialValue: '2,40x',
        finalNumeric: 3.97,
        finalDecimals: 2,
        finalSuffix: 'x',
        finalText: '3,97x',
      },
    ],
    secondaryMetrics: [
      { label: 'Investimento', initialValue: 'R$ 3.500', finalValue: 'R$ 5.000' },
      { label: 'CTR', initialValue: '1,0%', finalValue: '1,9%' },
      { label: 'Ticket médio', initialValue: 'R$ 60', finalValue: 'R$ 64' },
      {
        label: 'Faturamento atribuído',
        initialValue: 'R$ 8.400',
        finalValue: 'R$ 19.840',
      },
    ],
    highlights: [
      '+121% em compras',
      '-35% no custo por compra',
      '+136% no faturamento atribuído',
    ],
  },
  {
    id: 'restaurante-japones',
    code: 'PROJETO 04',
    category: 'Culinária japonesa',
    clientName: 'Restaurante japonês',
    period: '90 dias',
    image: '/src/assets/images/restaurante_japones_case_1795188815977.jpg',
    imageAlt:
      'Combinado artesanal de sushi e sashimi servido em pedra escura com niguiris maçaricados e rolinhos crocantes',
    featuredKpis: [
      {
        label: 'Compras',
        initialValue: '180',
        finalNumeric: 400,
        finalText: '400',
      },
      {
        label: 'Custo por compra',
        initialValue: 'R$ 22,22',
        finalPrefix: 'R$ ',
        finalNumeric: 15,
        finalDecimals: 2,
        finalText: 'R$ 15,00',
      },
      {
        label: 'ROAS',
        initialValue: '4,59x',
        finalNumeric: 7.33,
        finalDecimals: 2,
        finalSuffix: 'x',
        finalText: '7,33x',
      },
    ],
    secondaryMetrics: [
      { label: 'Investimento', initialValue: 'R$ 4.000', finalValue: 'R$ 6.000' },
      { label: 'CTR', initialValue: '1,3%', finalValue: '2,7%' },
      { label: 'Ticket médio', initialValue: 'R$ 102', finalValue: 'R$ 110' },
      {
        label: 'Faturamento atribuído',
        initialValue: 'R$ 18.360',
        finalValue: 'R$ 44.000',
      },
    ],
    highlights: [
      '+122% em compras',
      '-32,5% no custo por compra',
      '+140% no faturamento atribuído',
    ],
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'qualquer-restaurante',
    question: 'A Orbidelta atende qualquer tipo de restaurante?',
    answer:
      'Nosso foco é o segmento de alimentação, incluindo restaurantes, pizzarias, hamburguerias, sushi, delivery e outros negócios gastronômicos.',
  },
  {
    id: 'orcamento-anuncios',
    question: 'Preciso ter um orçamento para anúncios?',
    answer:
      'Sim. O investimento em mídia é separado dos honorários de gestão e pago diretamente às plataformas. Nossa recomendação inicial é a partir de R$ 1.000, podendo variar conforme o mercado e os objetivos.',
  },
  {
    id: 'primeiros-30-dias-gratuitos',
    question: 'Os primeiros 30 dias realmente não têm honorários de gestão?',
    answer:
      'Sim. O período inicial contempla diagnóstico, planejamento e execução das entregas previstas no escopo acordado. O investimento em anúncios e eventuais custos externos não estão incluídos.',
  },
  {
    id: 'depois-dos-30-dias',
    question: 'O que acontece depois dos primeiros 30 dias?',
    answer:
      'Apresentamos uma análise da evolução inicial e, caso faça sentido para ambas as partes, uma proposta de continuidade com um modelo comercial definido de acordo com a operação.',
  },
  {
    id: 'receber-materiais',
    question: 'Vou receber os materiais produzidos?',
    answer:
      'Sim. Os materiais desenvolvidos para o restaurante serão disponibilizados ao cliente, respeitando eventuais licenças e direitos de terceiros.',
  },
  {
    id: 'fidelidade-multa',
    question: 'Existe fidelidade ou multa para cancelar?',
    answer:
      'Não trabalhamos com fidelidade obrigatória ou multas abusivas. As condições de encerramento e eventuais compromissos em andamento são estabelecidos com transparência contratual.',
  },
  {
    id: 'garantia-vendas',
    question: 'A Orbidelta garante um número específico de vendas?',
    answer:
      'Não prometemos resultados artificiais ou números garantidos. Nosso compromisso é estruturar, executar e otimizar a estratégia, acompanhando os indicadores e buscando oportunidades reais de crescimento.',
  },
];
