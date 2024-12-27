export default function CoursesAndServices() {
  const courses = [
    {
      id: 1,
      title: "Curso de Marketing Digital",
      description:
        "Aprenda as melhores estratégias de marketing digital para alavancar seus negócios online.",
      image: "/introducao-marketplaces.png", // Substitua pelo caminho correto
      link: "/courses/marketing-digital",
      priceLink: "/purchase/marketing-digital",
    },
    {
      id: 2,
      title: "Curso de Desenvolvimento Web",
      description:
        "Domine as tecnologias mais modernas e crie websites incríveis e responsivos.",
      image: "/como-criar-conteudo.png",
      link: "/courses/web-development",
      priceLink: "/purchase/web-development",
    },
    {
      id: 3,
      title: "Consultoria de Negócios",
      description:
        "Receba uma análise detalhada e soluções para expandir seu negócio de forma estratégica.",
      image: "/consultoria-personalizada.png",
      link: "/services/business-consulting",
      priceLink: "/purchase/business-consulting",
    },
  ];

  return (
    <section className="bg-gray-100">
      {/* Seção CTA */}
      <div className="bg-gradient-to-r from-orange-400 to-orange-600 text-white py-16">
        <div className="mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:justify-between">
          {/* Texto do CTA */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl font-extrabold mb-4">
              Explore Nossos Cursos e Serviços
            </h1>
            <p className="text-lg leading-relaxed">
              Descubra as melhores opções para transformar sua carreira
              profissional e impulsionar seu sucesso.
            </p>
          </div>

          {/* Barra de Pesquisa */}
          <div className="lg:w-1/2 flex justify-center">
            <input
              type="text"
              placeholder="Pesquise por um curso ou serviço..."
              className="w-full max-w-lg px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Lista de Cursos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Imagem do Curso */}
              <div className="md:w-1/3">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Conteúdo do Curso */}
              <div className="md:w-2/3 p-6 flex flex-col justify-between">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {course.title}
                </h2>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                  <a
                    href={course.link}
                    className="px-6 py-2 mb-2 sm:mb-0 bg-orange-600 text-white font-semibold rounded-md hover:bg-orange-500 transition duration-500"
                  >
                    Saiba Mais
                  </a>
                  <a
                    href={course.priceLink}
                    className="px-6 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-500"
                  >
                    Adquirir Agora
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
