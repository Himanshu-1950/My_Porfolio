import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import CodingProfiles from './components/CodingProfiles'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [darkMode] = useState(true)

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-slate-900 text-white">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <CodingProfiles />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
