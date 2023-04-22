import React from 'react'
import './footer.css'
import {AiOutlineFacebook} from 'react-icons/ai'
import {GrInstagram} from 'react-icons/gr'
import {FiTwitter} from 'react-icons/fi'



const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>MAYURESH</a>

      <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><AiOutlineFacebook/></a>
        <a href="https://instagram.com"><GrInstagram/></a>
        <a href="https://twitter.com"><FiTwitter/></a>
      </div>

    <div className="footer__copyright">
      <small>&copy; Mayuresh. All rights reserved.</small>
    </div>
    </footer>
  )
}

export default Footer