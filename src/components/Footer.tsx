export default function Footer() {
  return (
    <footer className="bg-olive-700 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Minha Empresa</h3>
            <p className="text-gray-200">
              Transformando ideias em soluções reais. Entre em contato e saiba
              como podemos ajudar você!
            </p>
          </div>

          {/* Links Úteis */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-gray-200 transition"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-gray-200 transition"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-gray-200 transition"
                >
                  Contato
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-gray-200 transition"
                >
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Conecte-se</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#"
                className="text-gray-200 hover:text-gray-100 transition"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.4 3.6 8.36 8.3 9.9v-7h-2.5v-3h2.5v-2.3c0-2.48 1.5-3.85 3.75-3.85 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.2 0-1.56.74-1.56 1.5v1.85h3l-.48 3h-2.52v7c4.7-1.54 8.3-5.5 8.3-9.9 0-5.5-4.46-9.96-9.96-9.96z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-200 hover:text-gray-100 transition"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.49 4.13a9.41 9.41 0 01-2.6.7 4.52 4.52 0 001.99-2.48 9.29 9.29 0 01-2.91 1.12 4.49 4.49 0 00-7.62 4.09 12.75 12.75 0 01-9.25-4.7 4.48 4.48 0 001.39 5.98 4.43 4.43 0 01-2.03-.56v.06a4.49 4.49 0 003.6 4.4 4.48 4.48 0 01-2.01.08 4.49 4.49 0 004.2 3.13A9 9 0 012 18.32a12.74 12.74 0 006.88 2.01c8.26 0 12.77-6.84 12.77-12.77 0-.19 0-.37-.01-.56a9.2 9.2 0 002.27-2.35z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-200 hover:text-gray-100 transition"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.66c0-2.509 1.492-3.89 3.776-3.89 1.093 0 2.238.195 2.238.195v2.46h-1.262c-1.243 0-1.63.772-1.63 1.562v1.87h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 17.111 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-400 pt-6 text-center text-gray-200">
          © {new Date().getFullYear()} Minha Empresa. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
}
