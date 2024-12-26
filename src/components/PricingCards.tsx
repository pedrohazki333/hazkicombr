"use client";

export default function PricingCards() {
  const plans = [
    {
      title: "Básico",
      price: "R$ 49,90",
      features: ["Até 5 serviços", "Suporte básico", "Configuração inicial"],
      buttonText: "Escolher Plano",
      buttonLink: "#",
    },
    {
      title: "Intermediário",
      price: "R$ 99,90",
      features: [
        "Até 15 serviços",
        "Suporte prioritário",
        "Monitoramento mensal",
      ],
      buttonText: "Escolher Plano",
      buttonLink: "#",
    },
    {
      title: "Avançado",
      price: "R$ 199,90",
      features: ["Serviços ilimitados", "Suporte 24/7", "Análises avançadas"],
      buttonText: "Escolher Plano",
      buttonLink: "#",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold text-olive-700 mb-8">
          Planos e Preços
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center"
            >
              <h3 className="text-lg font-semibold text-grey-700">
                {plan.title}
              </h3>
              <p className="text-4xl font-extrabold text-olive-500 my-4">
                {plan.price}
              </p>
              <ul className="space-y-2 mb-6 text-gray-600">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={plan.buttonLink}
                className="px-6 py-2 bg-olive-700 text-white rounded-md hover:bg-olive-500"
              >
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
