
const BORDER_COLORS = ["#09dbb8ff", "#003D5C", "#f86d6dff", "#481583ff"];

const PRODUCT_DETAILS = {
  '1': {
    description:
    'Com o CRM da RD, você automatiza tarefas, negocia direto pelo WhatsApp e acompanha cada interação dos vendedores com os clientes. Além disso, aproveite a integração fácil com ferramentas de e-mail, personalize funis de vendas e obtenha relatórios avançados de desempenho de vendas.',
    link: 'https://www.rdstation.com/produtos/crm/',
  },
  '2': {
    description:
    'Plataforma completa de automação de marketing digital para gerar leads, nutrir contatos e aumentar conversões. Aproveite recursos de automação de marketing, realize testes A/B para otimização de campanhas e utilize segmentação avançada de leads para atingir seu público de forma mais eficiente.',
    link: 'https://www.rdstation.com/produtos/marketing/',
  },
  '3': {
    description:
    'Com o RD Station Conversas, você automatiza e organiza seus atendimentos em canais como WhatsApp, site e redes sociais. Ganhe escala, produtividade e visão total da operação sem perder o controle. Aproveite integração com chatbots, histórico unificado de interações e respostas automáticas e personalizadas para melhorar a experiência do cliente.',
    link: 'https://www.rdstation.com/produtos/conversas/',
  },
  '4': {
    description:
    'Explore seu potencial criativo, crie conteúdos com a cara da sua empresa e capture contatos numa conversa fluída, sem parecer robô. Aproveite análise preditiva de dados, recomendações personalizadas para usuários e integração com assistentes virtuais para potencializar suas estratégias.',
    link: 'https://www.rdstation.com/produtos/mentor-ia/',
  },
};

function RecommendationCard({ product, borderColor }) {
  return (
    <div
      className="bg-white border-[6px] border-b-[16px] rounded-lg p-4 shadow"
      style={{ borderColor }}
    >
      <h3 className="font-agdasima text-xl font-semibold mb-2">{product.name}</h3>
      {product.description && <p className="text-gray-700 mb-2">{product.description}</p>}
      {product.link && (
        <a
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-semibold hover:underline"
        >
          Saiba mais
        </a>
      )}
    </div>
  );
}

function RecommendationList({ recommendations }) {
  const enrichedRecommendations = (recommendations || []).map(r => ({
    ...r,
    ...PRODUCT_DETAILS[r.id],
  }));

  return (
    <div className="mt-3 mb-6 w-full max-w-3xl mx-auto p-4">
      <h2 className="font-agdasima text-3xl font-bold text-center mb-4">
        Lista de Recomendações:
      </h2>

      <div className="font-roboto space-y-4">
        {enrichedRecommendations.length === 0 ? (
          <div className="bg-white border-[6px] border-b-[16px] rounded-lg p-4 shadow text-center text-gray-500">
            Nenhuma recomendação encontrada.
          </div>
        ) : (
          enrichedRecommendations.map((product, index) => (
            <RecommendationCard
              key={product.id}
              product={product}
              borderColor={BORDER_COLORS[index % BORDER_COLORS.length]}
            />
          ))
        )}
      </div>
    </div>
  );
}


export default RecommendationList;
