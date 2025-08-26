// getRecommendations.test.js

import recommendationService from '../../services/recommendation.service'
import mockProducts from '../../mocks/mockProducts'

const { getRecommendations } = recommendationService;

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
        mockProducts
      );

      expect(result).toHaveLength(1);
      expect(result[0]).toMatchObject({ id: 1, name: 'RD Station CRM' });
      expect(typeof result[0].score).toBe('number');
    });

    test('em caso de empate, retorna o último produto da lista original', () => {
      const result = getRecommendations(
        {
          selectedPreferences: ['Automação de marketing', 'Histórico unificado de interações'],
          selectedFeatures: [],
          selectedRecommendationType: 'SingleProduct',
        },
        mockProducts
      );
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe(3);
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
        mockProducts
      );

      expect(result.map(p => p.id)).toEqual([2, 3]);
      expect(result.every(p => p.score > 0)).toBe(true);
    });

    test('retorna [] quando nenhuma preferência/feature corresponde', () => {
      const result = getRecommendations(
        {
          selectedPreferences: ['Inexistente'],
          selectedFeatures: ['Inexistente'],
          selectedRecommendationType: 'MultipleProducts',
        },
        mockProducts
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
        mockProducts
      )
    ).not.toThrow();

    const result = getRecommendations(
      {
        selectedPreferences: [1, 2, 3],
        selectedFeatures: [999],
        selectedRecommendationType: 'MultipleProducts',
      },
      mockProducts
    );
    expect(result).toEqual([]);
  });

});
