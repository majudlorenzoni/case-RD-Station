// src/tests/integration/getRecommendations.integration.test.js
import recommendationService from '../../services/recommendation.service';
import mockProducts from '../../mocks/mockProducts';

const { getRecommendations } = recommendationService;

describe('getRecommendations - Teste de Integração Completo', () => {

  test('Não quebra quando produtos não têm preferences ou features', () => {
    const products = [
      { id: 1, name: 'Produto Sem Dados' },
      { id: 2, name: 'RD Station CRM', preferences: ['Integração fácil com ferramentas de e-mail'], features: ['Automação de fluxos de trabalho de vendas'] },
    ];

    const formData = {
      selectedPreferences: ['Integração fácil com ferramentas de e-mail'],
      selectedFeatures: ['Automação de fluxos de trabalho de vendas'],
      selectedRecommendationType: 'MultipleProducts',
    };

    const recommendations = getRecommendations(formData, products);
    expect(recommendations).toHaveLength(1);
    expect(recommendations[0].name).toBe('RD Station CRM');
  });

  test('SingleProduct retorna o produto com maior score usando mockProducts', () => {
    const formData = {
      selectedPreferences: ['Automação de marketing', 'Testes A/B para otimização de campanhas'],
      selectedFeatures: ['Criação e gestão de campanhas de e-mail'],
      selectedRecommendationType: 'SingleProduct',
    };

    const recommendations = getRecommendations(formData, mockProducts);
    expect(recommendations).toHaveLength(1);
    expect(recommendations[0].name).toBe('RD Station Marketing');
  });

  test('SingleProduct com empate retorna o último produto original', () => {
    const products = [
      { id: 1, name: 'Produto A', preferences: ['p1'], features: ['f1'] },
      { id: 2, name: 'Produto B', preferences: ['p1'], features: ['f1'] },
    ];

    const formData = {
      selectedPreferences: ['p1'],
      selectedFeatures: ['f1'],
      selectedRecommendationType: 'SingleProduct',
    };

    const recommendations = getRecommendations(formData, products);
    expect(recommendations).toHaveLength(1);
    expect(recommendations[0].name).toBe('Produto B');
  });

  test('MultipleProducts retorna todos produtos com score > 0 usando mockProducts', () => {
    const formData = {
      selectedPreferences: ['Integração fácil com ferramentas de e-mail', 'Automação de marketing', 'Integração com chatbots'],
      selectedFeatures: ['Gestão de leads e oportunidades', 'Criação e gestão de campanhas de e-mail', 'Gestão de conversas em diferentes canais'],
      selectedRecommendationType: 'MultipleProducts',
    };

    const recommendations = getRecommendations(formData, mockProducts);
    const recommendedNames = recommendations.map(p => p.name);

    expect(recommendedNames).toEqual(
      expect.arrayContaining(['RD Station CRM', 'RD Station Marketing', 'RD Conversas'])
    );
  });

  test('Retorna [] se nenhum produto corresponde', () => {
    const formData = {
      selectedPreferences: ['Preferência inexistente'],
      selectedFeatures: ['Feature inexistente'],
      selectedRecommendationType: 'MultipleProducts',
    };

    const recommendations = getRecommendations(formData, mockProducts);
    expect(recommendations).toHaveLength(0);
  });

});
