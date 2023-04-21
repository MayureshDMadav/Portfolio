import React from 'react'
import './header.css'
import Cta from './Cta'
import ME from '../../assets/me.png'
import Headersocial from './Headersocial'

const Header = () => {
  return (
   <header>
    <div className="container header_container">
      <h5>Hello I am a header</h5>
      <h1>Mayuresh Madav</h1>
      <h5 className="text-light">Sr. Integration Engineer</h5>
      <Cta/>
      <Headersocial/>
      <div className="me">
        <img src={ME} alt='me'></img>
      </div>
      <a href="#contact" className='scroll_down'>Scroll Down</a>
    </div>
   </header>
  )
}

export default Header