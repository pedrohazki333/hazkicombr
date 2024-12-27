"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Curso - Introdução aos Marketplaces",
    description:
      "Oferecemos soluções sob medida para atender suas necessidades específicas, garantindo o sucesso do seu projeto.",
    image: "/introducao-marketplaces.png", // Substitua pelo caminho correto
    reverse: false, // Texto à direita da imagem
  },
  {
    title: "Curso - Como Criar Cursos",
    description:
      "Projetamos e desenvolvemos soluções tecnológicas que se adaptam perfeitamente aos seus objetivos.",
    image: "/como-criar-conteudo.png", // Substitua pelo caminho correto
    reverse: true, // Texto à esquerda da imagem
  },
  {
    title: "Consultoria MD",
    description:
      "Nossos especialistas garantem que suas soluções permaneçam funcionando perfeitamente com suporte contínuo.",
    image: "/consultoria-personalizada.png", // Substitua pelo caminho correto
    reverse: false, // Texto à direita da imagem
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-extrabold text-gray-800">
            Cursos e Serviços
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Descubra como podemos ajudar você a alcançar seus objetivos com
            nossas soluções especializadas.
          </p>
        </motion.div>

        {/* Iteração sobre os serviços */}
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`flex flex-col ${
              service.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center mb-16`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            {/* Imagem */}
            <div className="lg:w-1/2">
              <img
                src={service.image}
                alt={service.title}
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Texto */}
            <div className="lg:w-1/2 mt-8 lg:mt-0 lg:px-12 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                {service.description}
              </p>
              <a
                href="#"
                className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-md hover:bg-orange-400 transition duration-500"
              >
                Saiba Mais
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
