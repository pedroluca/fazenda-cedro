import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header } from './components/header/header'
import { Footer } from './components/footer'
import { HomePage } from './pages/home'
import { ContactsPage } from './pages/contacs'
import { AboutPage } from './pages/about'
import { ServicesPage } from './pages/services'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/servicos' element={<ServicesPage />} />
          <Route path='/sobre' element={<AboutPage />} />
          <Route path='/contatos' element={<ContactsPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
