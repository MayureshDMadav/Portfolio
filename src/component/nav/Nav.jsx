import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {BsInfoCircleFill}  from 'react-icons/bs'
import {FaUserTie} from 'react-icons/fa'
import {MdOutlineMiscellaneousServices} from 'react-icons/md'
import {MdContactMail} from 'react-icons/md'
import {FaAward} from 'react-icons/fa'
import { useState } from 'react'
import {MdWorkHistory} from 'react-icons/md'


const Nav = () => {
  const [activeNav,setActive] = useState('#')
  return (
    <nav>
      <a href="#"  onClick={()=> setActive('#')} className={activeNav === '#'? 'active':''}><FaHome/></a>
      <a href="#about" onClick={()=> setActive('#about')} className={activeNav === '#about'? 'active':''} ><BsInfoCircleFill/></a>
      <a href="#experience" onClick={()=> setActive('#experience')} className={activeNav === '#experience'? 'active':''} ><FaUserTie/></a>
      <a href="#services" onClick={()=> setActive('#services')} className={activeNav === '#services'? 'active':''} ><MdOutlineMiscellaneousServices/></a>
      <a href="#portfolio" onClick={()=> setActive('#portfolio')} className={activeNav === '#portfolio'? 'active':''} ><MdWorkHistory/></a>
      <a href="#certification" onClick={()=> setActive('#certification')} className={activeNav === '#certification'? 'active':''} ><FaAward/></a>
      <a href="#contact" onClick={()=> setActive('#contact')} className={activeNav === '#contact'? 'active':''} ><MdContactMail/></a>
    </nav>
  )
}

export default Nav