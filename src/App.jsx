import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './component/about/About'
import Contact from './component/contact/Contact'
import Experience from './component/experience/Experience'
import Services from './component/services/Services'
import Header from './component/header/Header'
import Nav from './component/nav/Nav'
import Footer from './component/footer/Footer'
import Portfolio from './component/portfolio/Portfolio'
import Certifications from './component/certifications/Certifications'
import ParticleBackground from './component/particles/ParticleBackground'
import Resume from './component/resume/Resume'

const Portfolio_Page = () => (
  <div>
    <ParticleBackground />
    <Header />
    <Nav />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Certifications />
    {/* <Testimonial/> */}
    <Contact />
    <Footer />
  </div>
)

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio_Page />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App