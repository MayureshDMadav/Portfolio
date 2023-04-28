import React from 'react'
import './header.css'
import Cta from './Cta'
import ME from '../../assets/me.png'
import Headersocial from './Headersocial'
import Headertype from '../typewriter/headertype'

const Header = () => {
  return (
   <header>
    <div className="container header_container">
      <h5>Hello Myself</h5>
      <h1>Mayuresh D. Madav</h1>
      <h5 className="text-light">Worked on Designations</h5>
      <h5 className="text-light">Sr. <Headertype/></h5>
      <Cta/>
      <Headersocial/>
      <div className="me">
        <img src={ME} alt='me' style={{height:'119%',marginLeft:'22px'}}></img>
      </div>
      <a href="#contact" className='scroll_down'>Scroll Down</a>
    </div>
   </header>
  )
}

export default Header