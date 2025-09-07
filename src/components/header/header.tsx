import { useNavigate } from 'react-router-dom'
import LogoCedro from '../../assets/images/logo-clear.svg'
import { Button } from '../button'
import { HeaderNavItem } from './header-nav-item'

export function Header() {
  const navigate = useNavigate()

  const handleContactClick = () => {
    navigate('/contatos')
  }
  
  return (
    <header className='w-full h-16 p-2 backdrop-blur-md flex items-center justify-between border-b border-gray-100'>
      <section className='flex items-center gap-2'>
        <img src={LogoCedro} className='w-12 h-12' />
        <h1 className='hidden md:inline-block font-bold text-[#092519] text-lg'>Fazenda Cedro</h1>
      </section>
      <nav className='flex gap-4 text-base'>
        <HeaderNavItem url='/' text='Início' />
        <HeaderNavItem url='/servicos' text='Serviços' />
        <HeaderNavItem url='/sobre' text='Sobre' />
        <HeaderNavItem url='/contatos' text='Contatos' />
      </nav>
      <section className=''>
        <Button onClick={() => handleContactClick()}>Contate-nos</Button>
      </section>
    </header>
  )
}