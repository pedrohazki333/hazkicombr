export default function AboutPage() {
  return (
    <section className="bg-gray-100">
      {/* Seção com fundo gradiente */}
      <div className="bg-gradient-to-r from-orange-400 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Imagem no topo */}
          <div className="flex justify-center mb-8 mt-8">
            <img
              src="/logo.png" // Substitua pelo caminho correto
              alt="Sobre Nós"
              className="w-40 h-40"
            />
          </div>

          {/* Pequena descrição */}
          <div className="text-center">
            <h1 className="text-4xl font-extrabold mb-4">Sobre Nós</h1>
            <p className="text-lg leading-relaxed">
              Somos apaixonados por transformar ideias em soluções reais. Nossa
              missão é oferecer excelência em tudo o que fazemos, garantindo a
              satisfação dos nossos clientes e parceiros.
            </p>
          </div>
        </div>
      </div>

      {/* Texto longo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Nossa História
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            fermentum, nunc nec laoreet feugiat, ligula est dictum nunc, eget
            cursus massa justo ac metus. Vestibulum lacinia sem euismod augue
            interdum, a bibendum dolor posuere. Suspendisse potenti. Mauris
            convallis orci vel sapien ultricies, nec fringilla ligula dictum.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vivamus sed metus ac turpis scelerisque
            bibendum. Etiam in ligula vel lorem ultrices tincidunt. Phasellus
            vitae neque mauris. Phasellus sed ex ultricies, vehicula justo nec,
            dictum sapien. Nunc condimentum, eros ut malesuada sagittis, eros
            arcu aliquam est, vel accumsan nulla nisi sed quam.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Nulla facilisi. Suspendisse potenti. Ut dictum sapien vel libero
            tincidunt, vel rutrum ligula bibendum. Praesent consequat
            ullamcorper tincidunt. Integer nec ipsum eget libero fermentum
            gravida. Duis vulputate neque et tellus sodales, ut interdum purus
            laoreet. In tempus, lectus vitae feugiat luctus, metus est gravida
            turpis, a facilisis lorem lacus in justo. Mauris suscipit, ex nec
            vehicula ultricies, urna eros scelerisque velit, eget tincidunt est
            augue non velit.
          </p>
        </div>

        {/* Lista não ordenada */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Nossos Pilares
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Compromisso com a qualidade em tudo o que fazemos.</li>
            <li>Foco na inovação para criar soluções inteligentes.</li>
            <li>Atendimento personalizado para cada cliente.</li>
            <li>Ética e transparência em todos os projetos.</li>
            <li>Investimento contínuo em tecnologia e aprendizado.</li>
          </ul>
        </div>

        {/* Conclusão */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Conclusão</h2>
          <p className="text-gray-600 leading-relaxed">
            Estamos comprometidos em ajudar nossos clientes a alcançar seus
            objetivos. Seja para resolver desafios complexos ou para explorar
            novas oportunidades, estamos aqui para oferecer o suporte que você
            precisa. Junte-se a nós nessa jornada de transformação e sucesso!
          </p>
        </div>
      </div>
    </section>
  );
}
