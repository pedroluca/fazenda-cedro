import { Page } from '../components/base-page'
import { Section } from '../components/base-section'
import Background from '../assets/images/background.png'
import { Button } from '../components/button'
import { useNavigate } from 'react-router-dom'
import { Wheat } from 'lucide-react'

export function HomePage() {
  const navigate = useNavigate()

  const handleContactClick = () => {
    navigate('/contatos')
  }

  return (
    <Page className='items-center justify-between'>
      <Section className='flex flex-col items-center gap-4 max-w-2xl text-center'>
        <p className='text-sm text-[#092519] font-semibold flex items-center gap-2'>
          <Wheat className='transform rotate-y-180' />
          Compromisso com qualidade e respeito ao campo
          <Wheat />
        </p>
        <h1 className='text-3xl font-bold text-[#092519]'>Sustentabilidade e Tradição na Pecuária da Fazenda Cedro</h1>
        <h2 className='text-sm'>
          Produzimos leite de excelência, criamos gado de corte Nelore e
          preservamos a paixão pelo cavalo Mangalarga Marchador. Da terra ao
          campo, unimos tradição, cuidado e responsabilidade.
        </h2>
        <div className='flex gap-4'>
          <Button>Conheça nossa produção</Button>
          <Button variant='outline' onClick={() => handleContactClick()}>
            Fale conosco
          </Button>
        </div>
      </Section>
      <Section
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
        }}
      />
    </Page>
  )
}
