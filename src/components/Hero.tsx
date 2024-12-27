"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-orange-600 to-orange-500 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        {/* Texto */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <motion.h1
            className="text-4xl font-extrabold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Transforme seu negócio digital ainda hoje!
          </motion.h1>
          <motion.p
            className="text-lg mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Escolha o caminho para o sucesso online: cursos para marketplaces e
            criação de conteúdo, consultoria especializada para mercado digital
            ou landing pages personalizadas que convertem. Faça parte dessa
            transformação agora!
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row sm:justify-center lg:justify-start items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <a
              href="#pricingCards"
              className="px-6 py-3 bg-orange-700 text-white font-semibold rounded-md hover:bg-orange-800 transition duration-500"
            >
              Adquirir acesso
            </a>
            <span className="text-gray-200">
              Entre no mercado digital agora!
            </span>
          </motion.div>
        </div>

        {/* Imagem */}
        <motion.div
          className="lg:w-1/2 mt-8 lg:mt-0"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <img
            src="/hero-image.png"
            alt="Hero"
            className="w-full max-w-lg mx-auto lg:mx-0"
          />
        </motion.div>
      </div>
    </section>
  );
}
