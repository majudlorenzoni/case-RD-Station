import { RecommendationType, SelectableList } from './Fields';
import { SubmitButton } from './SubmitButton';
import useProducts from '../../hooks/useProducts';
import useForm from '../../hooks/useForm';
import useRecommendations from '../../hooks/useRecommendations';

function Form({ onRecommendationsUpdate }) {
  const { preferences, features, products } = useProducts();
  const { formData, handleChange } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  });

  const { getRecommendations, recommendations } = useRecommendations(products);

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataRecommendations = getRecommendations(formData);
    onRecommendationsUpdate(dataRecommendations);
  };


  return (
    <form
      className="gray-100 w-full max-w-3xl mx-auto bg-gray-100 rounded-lg space-y-6"
      onSubmit={handleSubmit}
    >
    <SelectableList 
      title="Preferências"
      items={preferences}
      selectedItems={formData.selectedPreferences}
      onChange={(selected) => handleChange('selectedPreferences', selected)}
      borderColor="#003D5C"     
      checkboxColor="text-blue-500"
    />

    <SelectableList
      title="Funcionalidades"
      items={features}
      selectedItems={formData.selectedFeatures}
      onChange={(selected) => handleChange('selectedFeatures', selected)}
      borderColor="#007BFF"      
      checkboxColor="text-blue-500"
    />

      <RecommendationType
        onRecommendationTypeChange={(selected) =>
          handleChange('selectedRecommendationType', selected)
        }
      />
      <SubmitButton text="Obter recomendação" />
    </form>
  );
}

export default Form;
