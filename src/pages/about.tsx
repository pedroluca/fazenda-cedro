import { Page } from '../components/base-page'

export function AboutPage() {
  return (
    <Page className=''>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#092519] mb-6">
            Sobre a Fazenda Cedro
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mais de 20 anos de tradição, inovação e compromisso com a sustentabilidade 
            no coração do sertão baiano.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-[#092519] mb-4">Nossa História</h2>
            <p className="text-gray-600 leading-relaxed">
              A Fazenda Cedro, de origem antiga e com data de fundação não registrada, teve um novo marco em sua trajetória em 
              2000, quando foi adquirida por Antônio Felício. Inserida no contexto da expansão da pecuária no Alto Sertão da 
              Bahia, a propriedade está localizada na região de Guanambi e, desde então, tem sido testemunha e protagonista do 
              desenvolvimento agropecuário regional.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Ao longo de mais de 20 anos, a Fazenda Cedro evoluiu de uma propriedade tradicional
              de pecuária para um centro de referência em agronegócio sustentável, mantendo sempre
              o respeito pela tradição sertaneja e pela preservação ambiental.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Hoje, continuamos a honrar nossa herança enquanto abraçamos tecnologias modernas 
              e práticas sustentáveis, contribuindo para o desenvolvimento econômico e social 
              da região de Guanambi.
            </p>
          </div>

          <div className="bg-green-100 rounded-lg p-8 flex items-center justify-center">
            <div className="text-center">
              <svg className="w-24 h-24 text-green-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-600 text-sm">Imagem histórica da fazenda</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-[#092519] text-center mb-12">Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#092519] mb-2">Sustentabilidade</h3>
              <p className="text-gray-600">Compromisso com práticas que preservam o meio ambiente e garantem a viabilidade para futuras gerações.</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#092519] mb-2">Comunidade</h3>
              <p className="text-gray-600">Valorização da cultura local e desenvolvimento socioeconômico da região de Guanambi e entorno.</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#092519] mb-2">Inovação</h3>
              <p className="text-gray-600">Adoção de tecnologias modernas e métodos inovadores para otimizar a produção e qualidade.</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-semibold text-[#092519] text-center mb-8">Em Números</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">20+</div>
              <div className="text-gray-600">Anos de História</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
              <div className="text-gray-600">Hectares</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Cabeças de Gado</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">2+</div>
              <div className="text-gray-600">Empregos Gerados</div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-[#092519] text-center mb-8">Nossa Localização</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#092519]">No Coração do Sertão Baiano</h3>
              <p className="text-gray-600 leading-relaxed">
                Estrategicamente localizada na zona rural de Guanambi, a Fazenda Cedro beneficia-se 
                da posição privilegiada no Alto Sertão da Bahia, uma região conhecida por sua 
                vocação agropecuária e rica biodiversidade da Caatinga.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nossa localização oferece acesso facilitado aos principais centros urbanos da 
                região, permitindo escoamento eficiente da produção e manutenção de parcerias 
                comerciais estratégicas.
              </p>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-[#092519] mb-3">Informações de Localização</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>Zona Rural, Guanambi - BA</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                    </svg>
                    <span>CEP: 46430-000</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                    </svg>
                    <span>Região: Alto Sertão da Bahia</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-4 bg-green-50 border-b">
                <h4 className="font-semibold text-[#092519]">Localização no Mapa</h4>
                <p className="text-sm text-gray-600">Faça uma visita virtual à nossa propriedade</p>
              </div>
              <div className="relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30932.795557760306!2d-42.932036965234374!3d-14.276566699999984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x75aeb000d5b287d%3A0xb3d3f865a19b500b!2sFazenda%20Cedro!5e0!3m2!1sen!2sbr!4v1757275275734!5m2!1sen!2sbr" 
                  width="100%" 
                  height="400" 
                  style={{border: 0}}
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Fazenda Cedro"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#092519] text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Conheça Nossa Fazenda</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Interessado em conhecer mais sobre nossos métodos sustentáveis e visitar nossa propriedade? 
            Entre em contato conosco para agendar uma visita.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contatos" 
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition-colors font-medium"
            >
              Entre em Contato
            </a>
            <a 
              href="tel:+5577991991752" 
              className="border border-white hover:bg-white hover:text-[#092519] text-white px-6 py-3 rounded-md transition-colors font-medium"
            >
              Ligar Agora
            </a>
          </div>
        </div>
      </div>
    </Page>
  )
}