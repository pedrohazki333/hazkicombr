"use client";

import { motion } from "framer-motion";

export default function ServicesSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título e Descrição */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-extrabold text-gray-800">
            Nossos Serviços
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Soluções completas para atender suas necessidades. Escolha a melhor
            opção para você e veja como podemos transformar seu projeto.
          </p>
        </motion.div>

        {/* Lista de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Consultoria Personalizada",
              description:
                "Entenda como otimizar seus processos com nossa ajuda especializada.",
              icon: "💡",
            },
            {
              title: "Desenvolvimento Sob Medida",
              description:
                "Projetos que atendem suas necessidades específicas com eficiência.",
              icon: "🛠️",
            },
            {
              title: "Suporte e Manutenção",
              description:
                "Sempre ao seu lado para manter tudo funcionando perfeitamente.",
              icon: "🔧",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA e Vídeo */}
        <motion.div
          className="mt-16 flex flex-col lg:flex-row items-center lg:justify-between gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* CTA */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-extrabold text-gray-800 mb-4">
              Pronto para começar?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Entre em contato agora mesmo e transforme sua ideia em realidade.
            </p>
            <a
              href="#"
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
            >
              Fale Conosco
            </a>
          </div>

          {/* Vídeo */}
          <div className="relative w-full lg:w-1/2 aspect-w-16 aspect-h-9">
            <iframe
              className="rounded-lg shadow-md"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Vídeo de Demonstração"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
