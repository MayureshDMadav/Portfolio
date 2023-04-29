import React from 'react'
import About from './component/about/About'
import Contact from './component/contact/Contact'
import Experience from './component/experience/Experience'
import Services from './component/services/Services'
import Header from './component/header/Header'
import Nav from './component/nav/Nav'
import Footer from './component/footer/Footer'
import Portfolio from './component/portfolio/Portfolio'
import Certifications from './component/certifications/Certifications'
import Testimonial from './component/testimonial/Testimonial'

 const App = ()=>{
  return (
    <div>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/> 
      <Certifications/>
      <Testimonial/>
      <Contact/>  
      <Footer/>
    </div>
  )
 }

export default App