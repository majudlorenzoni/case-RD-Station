// getRecommendations.js

const getRecommendations = (
  formData = { selectedPreferences: [], selectedFeatures: [] },
  products = []
) => {
  const {
    selectedPreferences = [],
    selectedFeatures = [],
    selectedRecommendationType
  } = formData;

  if (!products || products.length === 0) return [];

  const scoredProducts = products.map((product, index) => {
    const preferenceMatches = product.preferences.filter((p) =>
      selectedPreferences.includes(p)
    ).length;

    const featureMatches = product.features.filter((f) =>
      selectedFeatures.includes(f)
    ).length;

    return {
      ...product,
      score: preferenceMatches + featureMatches,
      originalIndex: index,
    };
  });

  const sortedProducts = scoredProducts.sort((a, b) => {
    if (b.score === a.score) {
      return a.originalIndex - b.originalIndex; 
    }
    return b.score - a.score;
  });

  let recommendations = [];

  if (selectedRecommendationType === "SingleProduct") {
    const maxScore = sortedProducts[0]?.score ?? 0;
    const bestMatches = sortedProducts.filter((p) => p.score === maxScore);
    recommendations = bestMatches.length > 0 ? [bestMatches[bestMatches.length - 1]] : [];
  } else if (selectedRecommendationType === "MultipleProducts") {
    recommendations = sortedProducts.filter((p) => p.score > 0);
  }

  return recommendations;
};

export default { getRecommendations };
