import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.tsx'
import Leistungen from './pages/Leistungen.jsx'
import LeistungDetail from './pages/LeistungDetail.jsx'
import UeberUns from './pages/UeberUns.jsx'
import Kontakt from './pages/Kontakt.jsx'
import Referenzen from './pages/Referenzen.tsx'
import Impressum from './pages/Impressum.tsx'
import Datenschutz from './pages/Datenschutz.tsx'
import AGB from './pages/AGB.tsx'
import CookieBanner from './components/CookieBanner.tsx'

function App() {
  return (
    <div className="site-shell">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leistungen" element={<Leistungen />} />
          <Route path="/leistungen/:slug" element={<LeistungDetail />} />
          <Route path="/referenzen" element={<Referenzen />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/agb" element={<AGB />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}

export default App
