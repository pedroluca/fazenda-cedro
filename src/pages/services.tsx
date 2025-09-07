import { Page } from '../components/base-page'
import { Button } from '../components/button'

export function ServicesPage() {
  const services = [
    {
      id: 'pecuaria',
      title: 'Pecuária Sustentável',
      description: 'Criação de gado bovino com técnicas modernas e sustentáveis, focando no bem-estar animal e na preservação ambiental.',
      features: [
        'Manejo rotacional de pastagens',
        'Melhoramento genético do rebanho',
        'Suplementação nutricional balanceada',
        'Controle sanitário rigoroso',
        'Rastreabilidade completa'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      )
    },
    {
      id: 'agricultura',
      title: 'Agricultura Familiar',
      description: 'Cultivos adaptados ao clima semiárido com foco na segurança alimentar e geração de renda para a comunidade local.',
      features: [
        'Culturas resistentes à seca',
        'Sistemas de irrigação eficientes',
        'Agricultura orgânica certificada',
        'Sementes crioulas preservadas',
        'Técnicas de conservação do solo'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 12v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      id: 'consultoria',
      title: 'Consultoria Rural',
      description: 'Assessoramento técnico especializado para produtores rurais da região, compartilhando conhecimento e boas práticas.',
      features: [
        'Planejamento de propriedades rurais',
        'Gestão de recursos hídricos',
        'Orientação em sustentabilidade',
        'Capacitação técnica',
        'Análise de viabilidade econômica'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      id: 'turismo',
      title: 'Turismo Rural',
      description: 'Experiências autênticas no sertão baiano, conectando visitantes com a cultura rural e a natureza da Caatinga.',
      features: [
        'Visitas guiadas à propriedade',
        'Vivência na vida rural',
        'Degustação de produtos locais',
        'Trilhas ecológicas',
        'Hospedagem rural'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 'produtos',
      title: 'Produtos Orgânicos',
      description: 'Produção e comercialização de alimentos orgânicos certificados, garantindo qualidade e sustentabilidade.',
      features: [
        'Certificação orgânica',
        'Produtos frescos e naturais',
        'Rastreabilidade completa',
        'Embalagens sustentáveis',
        'Entrega local e regional'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      id: 'energia',
      title: 'Energia Renovável',
      description: 'Implementação de soluções de energia sustentável, contribuindo para a matriz energética limpa da região.',
      features: [
        'Painéis solares fotovoltaicos',
        'Sistemas de energia eólica',
        'Bioenergia de resíduos agrícolas',
        'Eficiência energética',
        'Consultoria em energia renovável'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ]

  return (
    <Page className=''>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#092519] mb-6">
            Nossos Serviços
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções completas em agronegócio sustentável, combinando tradição 
            sertaneja com inovação tecnológica para o desenvolvimento rural.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 text-green-600">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-[#092519] mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button variant="outline" size="sm" className="w-full">
                Saiba Mais
              </Button>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-green-50 rounded-lg p-8 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-[#092519] mb-6">
              Por Que Escolher a Fazenda Cedro?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#092519] mb-2">Experiência Comprovada</h3>
                <p className="text-gray-600">Mais de 150 anos de tradição no agronegócio sertanejo.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#092519] mb-2">Sustentabilidade</h3>
                <p className="text-gray-600">Práticas ambientalmente responsáveis em todos os processos.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#092519] mb-2">Inovação Tecnológica</h3>
                <p className="text-gray-600">Soluções modernas adaptadas ao contexto regional.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-[#092519] text-center mb-12">
            Como Trabalhamos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-semibold text-[#092519] mb-2">Diagnóstico</h3>
              <p className="text-gray-600 text-sm">Análise detalhada das necessidades e potencialidades.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-semibold text-[#092519] mb-2">Planejamento</h3>
              <p className="text-gray-600 text-sm">Desenvolvimento de estratégias personalizadas e sustentáveis.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-semibold text-[#092519] mb-2">Implementação</h3>
              <p className="text-gray-600 text-sm">Execução das soluções com acompanhamento técnico.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="font-semibold text-[#092519] mb-2">Monitoramento</h3>
              <p className="text-gray-600 text-sm">Acompanhamento contínuo e otimização dos resultados.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#092519] text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Pronto para Transformar Sua Propriedade?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para descobrir como nossos serviços podem 
            ajudar a desenvolver seu negócio rural de forma sustentável e rentável.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Solicitar Orçamento
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#092519]">
              Falar com Especialista
            </Button>
          </div>
        </div>
      </div>
    </Page>
  )
}