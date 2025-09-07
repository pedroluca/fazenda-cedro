export function Footer() {
  return (
    <footer className="bg-[#092519] text-white">
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-green-400">Fazenda Cedro</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Tradição e inovação no coração do sertão baiano. Comprometidos com a 
              sustentabilidade e o desenvolvimento da agropecuária regional.
            </p>
            <div className="text-sm text-gray-400">
              <p>Guanambi, Bahia - Brasil</p>
              <p>Fundada em 1870</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-400">Nossos Serviços</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#pecuaria" className="hover:text-green-400 transition-colors">Pecuária Sustentável</a></li>
              <li><a href="#agricultura" className="hover:text-green-400 transition-colors">Agricultura Familiar</a></li>
              <li><a href="#consultoria" className="hover:text-green-400 transition-colors">Consultoria Rural</a></li>
              <li><a href="#turismo" className="hover:text-green-400 transition-colors">Turismo Rural</a></li>
              <li><a href="#produtos" className="hover:text-green-400 transition-colors">Produtos Orgânicos</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-400">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#sobre" className="hover:text-green-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#historia" className="hover:text-green-400 transition-colors">Nossa História</a></li>
              <li><a href="#sustentabilidade" className="hover:text-green-400 transition-colors">Sustentabilidade</a></li>
              <li><a href="#noticias" className="hover:text-green-400 transition-colors">Notícias</a></li>
              <li><a href="#contato" className="hover:text-green-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-400">Contato</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-2 hover:cursor-pointer hover:text-green-400 transition-colors" onClick={() => window.open('https://maps.app.goo.gl/8ztmGdw3dd5G1j7c8', '_blank')}>
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Zona Rural, Guanambi - BA</span>
              </div>
              <a href="tel:+5577991991752" className="flex items-center space-x-2 hover:text-green-400 transition-colors">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>(77) 99199-1752</span>
              </a>
              <a href="mailto:contato@fazendacedro.com.br" className="flex items-center space-x-2 hover:text-green-400 transition-colors">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>contato@fazendacedro.com.br</span>
              </a>
            </div>

            <div className="space-y-2">
              <h5 className="text-sm font-medium text-green-400">Redes Sociais</h5>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.739.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/fazendacedro.gbi" className="text-gray-400 hover:text-green-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="max-w-md">
            <h4 className="text-lg font-semibold text-green-400 mb-2">Newsletter</h4>
            <p className="text-sm text-gray-300 mb-4">
              Receba notícias sobre sustentabilidade e inovações no agronegócio.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Seu e-mail"
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-l-md text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
              />
              <button className="px-4 py-2 bg-green-600 text-white rounded-r-md hover:bg-green-700 transition-colors">
                Inscrever
              </button>
            </div>
          </div>
        </div> */}

        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              <p>&copy; 2024 Fazenda Cedro. Todos os direitos reservados.</p>
            </div>
            {/* <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#privacidade" className="hover:text-green-400 transition-colors">Política de Privacidade</a>
              <a href="#termos" className="hover:text-green-400 transition-colors">Termos de Uso</a>
              <a href="#cookies" className="hover:text-green-400 transition-colors">Cookies</a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}