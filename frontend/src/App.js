import React, { useState } from 'react';
import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList/RecommendationList';

function App() {
  const [recommendations, setRecommendations] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false); // controla se o form foi submetido

  const handleFormSubmit = (newRecommendations) => {
    setRecommendations(newRecommendations);
    setIsSubmitted(true);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <header className="w-full bg-[#D9D9D9]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <img
            src="/imgs/rd-station-default.svg"
            alt="RD Station Logo"
            className="h-10"
          />
        </div>
      </header>

      <div className="p-6 rounded-lg w-full md:w-full lg:w-4/5 xl:w-3/4 grid grid-cols-1">
        <div className="mb-4">
          <h1 className="font-agdasima text-4xl text-center font-bold mb-2">Recomendador de Produtos RD Station</h1>
          <p className="font-roboto text-lg text-center">
            Nossa plataforma oferece uma ampla gama de soluções, desde CRM e Marketing até Conversas e Inteligência Artificial, todas desenvolvidas para atender às necessidades do seu negócio. Preencha o formulário abaixo indicando suas preferências e funcionalidades desejadas, e receba recomendações personalizadas dos produtos que melhor se encaixam nos seus objetivos.
          </p>
        </div>
        <div id="form">
          <Form onRecommendationsUpdate={handleFormSubmit} />
        </div>
        
       {isSubmitted && (
          <div id="recommendations">
            <RecommendationList recommendations={recommendations} />
          </div>
        )}
      </div>


    </div>
  );
}

export default App;
