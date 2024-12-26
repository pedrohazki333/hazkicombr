"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-olive-500 to-olive-700 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        {/* Texto */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <motion.h1
            className="text-4xl font-extrabold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Transforme suas ideias em realidade
          </motion.h1>
          <motion.p
            className="text-lg mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Oferecemos soluções sob medida para atender às suas necessidades.
            Faça parte da nossa jornada para criar algo incrível.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row sm:justify-center lg:justify-start items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <a
              href="#"
              className="px-6 py-3 bg-white text-olive-700 font-semibold rounded-md hover:bg-gray-100"
            >
              Saiba Mais
            </a>
            <span className="text-gray-300">ou entre em contato conosco</span>
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
