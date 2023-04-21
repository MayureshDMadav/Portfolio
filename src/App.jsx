import React from 'react'
import About from './component/about/About'
import Contact from './component/contact/Contact'
import Experience from './component/experience/Experience'
import Services from './component/services/Services'
import Header from './component/header/Header'
import Nav from './component/nav/Nav'
import Footer from './component/footer/Footer'
import Portfolio from './component/portfolio/Portfolio'
import Testimonial from './component/testimonials/Testimonial'


 const App = ()=>{
  return (
    <div>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>       
      <Footer/>
    </div>
  )
 }

export default App