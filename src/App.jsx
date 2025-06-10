import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Appointment from './pages/Appointment'
import OpeningHours from './pages/OpeningHours'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import WhatsAppButton from './components/common/WhatsAppButton'
import ServicesSection from './pages/Services'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/opening-hours" element={<OpeningHours />} />
      </Routes>
      <WhatsAppButton />
      <Footer />
    </Router>
  )
}

export default App