import Checkbox from '../../shared/Checkbox';

function RecommendationType({ onRecommendationTypeChange }) {
  return (
    <div className="mb-6 w-full max-w-3xl mx-auto p-4">
      <h2 className="font-agdasima text-3xl font-bold text-center mb-4">Tipo de Recomendação</h2>
      <ul className="font-roboto bg-white border-[6px] border-[#00F2C9] border-b-[16px] rounded-lg p-4 flex space-x-6">
        <li className="flex items-center">
          <Checkbox
            type="radio"
            name="recommendationType"
            value="SingleProduct"
            onChange={() => onRecommendationTypeChange('SingleProduct')}
            className="mr-2"
          />
          <label htmlFor="SingleProduct">Produto Único</label>
        </li>
        <li className="flex items-center">
          <Checkbox
            type="radio"
            name="recommendationType"
            value="MultipleProducts"
            onChange={() => onRecommendationTypeChange('MultipleProducts')}
            className="mr-2"
          />
          <label htmlFor="MultipleProducts">Múltiplos Produtos</label>
        </li>
      </ul>
    </div>
  );
}

export default RecommendationType;
