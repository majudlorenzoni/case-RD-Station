// getRecommendations.js

const getRecommendations = (formData = {}, products = []) => {
  const {
    selectedPreferences = [],
    selectedFeatures = [],
    selectedRecommendationType
  } = formData;

  if (!products || products.length === 0) return [];

  const scoredProducts = products.map((product, index) => {
    const preferenceMatches = (product.preferences || []).filter(p =>
      selectedPreferences.includes(p)
    ).length;

    const featureMatches = (product.features || []).filter(f =>
      selectedFeatures.includes(f)
    ).length;

    return { ...product, score: preferenceMatches + featureMatches, originalIndex: index };
  });

  let recommendations = [];

  if (selectedRecommendationType === "SingleProduct") {
    // Filtra apenas produtos com alguma pontuação
    const validProducts = scoredProducts.filter(p => p.score > 0);

    if (validProducts.length === 0) {
      recommendations = [];
    } else {
      // Escolhe o produto com maior score; em caso de empate, pega o último da lista original
      const maxProduct = validProducts.reduce((best, current) => {
        if (
          current.score > best.score ||
          (current.score === best.score && current.originalIndex > best.originalIndex)
        ) {
          return current;
        }
        return best;
      }, validProducts[0]);

      recommendations = [maxProduct];
    }
  } else if (selectedRecommendationType === "MultipleProducts") {
      recommendations = scoredProducts
        .filter(p => p.score > 0)
        .sort((a, b) => {
          if (b.score === a.score) return a.originalIndex - b.originalIndex;
          return b.score - a.score;
        });
    }

  return recommendations;
};

export default { getRecommendations } ;
