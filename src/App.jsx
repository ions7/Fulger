import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Prices from './pages/Prices'
import About from './pages/About'
import Contact from './pages/Contact'
import CallButton from './components/CallButton'
import LanguageToggle from './components/LanguageToggle'
import BottomNav from "./components/BottomNav.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
    <BottomNav/>
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicii" element={<Services />} />
          <Route path="/preturi" element={<Prices />} />
          <Route path="/despre" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <CallButton />
    </div>
  )
}

export default App
