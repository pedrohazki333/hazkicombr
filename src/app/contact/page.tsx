"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-16 bg-gradient-to-t from-orange-600 to-orange-400">
      <div className="mt-8 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
          Entre em Contato
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Se você tiver dúvidas antes de contratar nossos serviços, preencha o
          formulário abaixo e entraremos em contato o mais rápido possível.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nome */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Digite seu nome"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Digite seu email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {/* Mensagem */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Escreva sua mensagem"
              rows={5}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
          {/* Botão de Enviar */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-md shadow-md hover:bg-orange-400 transition duration-500"
            >
              Enviar Mensagem
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
