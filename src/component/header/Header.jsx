import React from 'react'
import './header.css'
import Cta from './Cta'
import ME from '../../assets/me.png'
import {FaLongArrowAltDown,FaGithub} from 'react-icons/fa'
import Headersocial from './Headersocial'
import Headertype from '../typewriter/headertype'

const Header = () => {
  return (
   <header>
    <div className="container header_container">
      <h5>Hello Myself</h5>
      <h1>Mayuresh D. Madav <a href="https://github.com/MayureshDMadav" target='_blank'><FaGithub/></a> </h1> 
      <h5 className="text-light">Worked on Designations</h5>
      <h5 className="text-light">Sr. <Headertype/></h5>
      <Cta/>
      <Headersocial/>
      <div className="me">
        <img src={ME} alt='me' style={{height:'119%',marginLeft:'22px'}}></img>
      </div>
      <a href="#contact" className='scroll_down'>Scroll Down <FaLongArrowAltDown/> </a>
    </div>
   </header>
  )
}

export default Header