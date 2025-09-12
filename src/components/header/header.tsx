import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LogoCedro from '../../assets/images/logo-clear.svg'
import { Button } from '../button'
import { HeaderNavItem } from './header-nav-item'

export function Header() {
  const navigate = useNavigate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleContactClick = () => {
    navigate('/contatos')
    setIsMobileMenuOpen(false) // Close menu when navigating
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }
  
  return (
    <>
      <header className='w-full h-16 p-2 backdrop-blur-md flex items-center justify-between border-b border-gray-100 relative z-50'>
        <section className='flex items-center gap-2'>
          <img src={LogoCedro} className='w-12 h-12' />
          <h1 className='hidden md:inline-block font-bold text-[#092519] text-lg'>Fazenda Cedro</h1>
        </section>
        
        {/* Desktop Navigation */}
        <nav className='hidden md:flex gap-4 text-base'>
          <HeaderNavItem url='/' text='Início' />
          {/* <HeaderNavItem url='/servicos' text='Serviços' /> */}
          <HeaderNavItem url='/sobre' text='Sobre' />
          <HeaderNavItem url='/contatos' text='Contatos' />
        </nav>
        
        {/* Desktop Contact Button */}
        <section className='hidden md:block'>
          <Button onClick={() => handleContactClick()}>Contate-nos</Button>
        </section>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className='md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors'
          aria-label='Toggle mobile menu'
        >
          <div className='w-6 h-6 flex flex-col justify-center items-center'>
            <span className={`block w-5 h-0.5 bg-[#092519] transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
            }`} />
            <span className={`block w-5 h-0.5 bg-[#092519] transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`} />
            <span className={`block w-5 h-0.5 bg-[#092519] transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
            }`} />
          </div>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className='fixed inset-0 bg-black/80 z-51 md:hidden'
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Side Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-52 md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className='p-4'>
          {/* Mobile Menu Header */}
          <div className='flex items-center justify-between mb-8'>
            <div className='flex items-center gap-2'>
              <img src={LogoCedro} className='w-10 h-10' />
              <h2 className='font-bold text-[#092519] text-lg'>Fazenda Cedro</h2>
            </div>
            <button
              onClick={closeMobileMenu}
              className='p-2 rounded-md hover:bg-gray-100 transition-colors'
              aria-label='Close mobile menu'
            >
              <svg className='w-6 h-6 text-gray-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className='flex flex-col space-y-1 mb-8'>
            <div onClick={closeMobileMenu}>
              <HeaderNavItem url='/' text='Início' />
            </div>
            {/* <div onClick={closeMobileMenu}>
              <HeaderNavItem url='/servicos' text='Serviços' />
            </div> */}
            <div onClick={closeMobileMenu}>
              <HeaderNavItem url='/sobre' text='Sobre' />
            </div>
            <div onClick={closeMobileMenu}>
              <HeaderNavItem url='/contatos' text='Contatos' />
            </div>
          </nav>

          {/* Mobile Contact Button */}
          <div className='border-t pt-6'>
            <Button onClick={handleContactClick} className='w-full' size='lg'>
              Contate-nos
            </Button>
          </div>

          {/* Mobile Contact Info */}
          <div className='mt-8 pt-6 border-t border-gray-200'>
            <h3 className='font-semibold text-[#092519] mb-4'>Contato Rápido</h3>
            <div className='space-y-3'>
              <a 
                href='tel:+5577991991752' 
                className='flex items-center text-gray-600 hover:text-[#092519] transition-colors'
                onClick={closeMobileMenu}
              >
                <svg className='w-5 h-5 mr-3 text-green-600' fill='currentColor' viewBox='0 0 20 20'>
                  <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                </svg>
                (77) 99199-1752
              </a>
              <a 
                href='mailto:contato@fazendacedro.com.br' 
                className='flex items-center text-gray-600 hover:text-[#092519] transition-colors'
                onClick={closeMobileMenu}
              >
                <svg className='w-5 h-5 mr-3 text-green-600' fill='currentColor' viewBox='0 0 20 20'>
                  <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                  <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                </svg>
                contato@fazendacedro.com.br
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}