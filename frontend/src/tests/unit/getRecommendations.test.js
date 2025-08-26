// getRecommendations.test.js

import recommendationService from '../../services/recommendation.service'

const { getRecommendations } = recommendationService;

const products = [
  {
    id: '1',
    name: 'RD Station CRM',
    category: 'Vendas',
    features: [
      'Gestão de leads e oportunidades',
      'Automação de fluxos de trabalho de vendas',
      'Rastreamento de interações com clientes',
    ],
    preferences: [
      'Integração fácil com ferramentas de e-mail',
      'Personalização de funis de vendas',
      'Relatórios avançados de desempenho de vendas',
    ],
  },
  {
    id: '2',
    name: 'RD Station Marketing',
    category: 'Marketing',
    features: [
      'Análise de retorno sobre investimento (ROI) de campanhas',
      'Rastreamento de comportamento do usuário',
      'Criação e gestão de campanhas de e-mail',
    ],
    preferences: [
      'Automação de marketing',
      'Testes A/B para otimização de campanhas',
      'Segmentação avançada de leads',
    ],
  },
  {
    id: '3',
    name: 'RD Conversas',
    category: 'Omnichannel',
    features: [
      'Integração com RD Station CRM e Marketing',
      'Chat ao vivo e mensagens automatizadas',
      'Gestão de conversas em diferentes canais',
    ],
    preferences: [
      'Histórico unificado de interações',
      'Integração com chatbots',
      'Respostas automáticas e personalizadas',
    ],
  },
  {
    id: '4',
    name: 'RD Mentor AI',
    category: 'Uso de Inteligência Artificial',
    features: [
      'Recomendação de ações com base em padrões',
      'Análise de dados para insights estratégicos',
      'Integração de funcionalidades preditivas nos produtos RD Station',
    ],
    preferences: [
      'Análise preditiva de dados',
      'Integração com assistentes virtuais',
      'Recomendações personalizadas para usuários',
    ],
  },
];

describe('getRecommendations - testes unitários', () => {

  test('retorna [] quando lista de produtos está vazia', () => {
    const result = getRecommendations(
      {
        selectedPreferences: ['Integração fácil com ferramentas de e-mail'],
        selectedFeatures: ['Gestão de leads e oportunidades'],
        selectedRecommendationType: 'SingleProduct',
      },
      []
    );
    expect(result).toEqual([]);
  });

  describe('SingleProduct', () => {
    test('retorna apenas o produto com maior score', () => {
      const result = getRecommendations(
        {
          selectedPreferences: [
            'Integração fácil com ferramentas de e-mail',
            'Personalização de funis de vendas',
          ],
          selectedFeatures: ['Gestão de leads e oportunidades'],
          selectedRecommendationType: 'SingleProduct',
        },
        products
      );

      expect(result).toHaveLength(1);
      expect(result[0]).toMatchObject({ id: '1', name: 'RD Station CRM' });
      expect(typeof result[0].score).toBe('number');
    });

    test('em caso de empate, retorna o último produto da lista original', () => {
      const result = getRecommendations(
        {
          selectedPreferences: ['Automação de marketing', 'Histórico unificado de interações'],
          selectedFeatures: [],
          selectedRecommendationType: 'SingleProduct',
        },
        products
      );
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe('3');
    });
  });

  describe('MultipleProducts', () => {
    test('retorna todos os produtos com score > 0 mantendo ordem original', () => {
      const result = getRecommendations(
        {
          selectedPreferences: [],
          selectedFeatures: ['Rastreamento de comportamento do usuário', 'Chat ao vivo e mensagens automatizadas'],
          selectedRecommendationType: 'MultipleProducts',
        },
        products
      );

      expect(result.map(p => p.id)).toEqual(['2', '3']);
      expect(result.every(p => p.score > 0)).toBe(true);
    });

    test('retorna [] quando nenhuma preferência/feature corresponde', () => {
      const result = getRecommendations(
        {
          selectedPreferences: ['Inexistente'],
          selectedFeatures: ['Inexistente'],
          selectedRecommendationType: 'MultipleProducts',
        },
        products
      );
      expect(result).toEqual([]);
    });
  });

  test('não lança erro com tipos inesperados', () => {
    expect(() =>
      getRecommendations(
        {
          selectedPreferences: [1, 2, 3],
          selectedFeatures: [999],
          selectedRecommendationType: 'MultipleProducts',
        },
        products
      )
    ).not.toThrow();

    const result = getRecommendations(
      {
        selectedPreferences: [1, 2, 3],
        selectedFeatures: [999],
        selectedRecommendationType: 'MultipleProducts',
      },
      products
    );
    expect(result).toEqual([]);
  });

});
