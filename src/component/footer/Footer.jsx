import React, { useEffect, useRef } from 'react'
import './footer.css'
import {AiOutlineFacebook} from 'react-icons/ai'
import {GrInstagram} from 'react-icons/gr'
import {FiTwitter} from 'react-icons/fi'

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-animation');
        }
      });
    }, { threshold: 0.1 });

    if (footerRef.current) {
      const elements = footerRef.current.querySelectorAll('.animate-element');
      elements.forEach((el) => observer.observe(el));

      return () => elements.forEach((el) => observer.unobserve(el));
    }
  }, []);

  return (
    <footer ref={footerRef}>
      <a href="#" className='footer__logo animate-element'>MAYURESH</a>

      <ul className='permalinks animate-element' style={{transitionDelay: '100ms'}}>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#certification">Credentials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials animate-element" style={{transitionDelay: '200ms'}}>
        <a href="https://www.facebook.com/mayur.madav/" target="_blank" rel="noreferrer"><AiOutlineFacebook/></a>
        <a href="https://www.instagram.com/mayuresh_madav/" target="_blank" rel="noreferrer"><GrInstagram/></a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer"><FiTwitter/></a>
      </div>

      <div className="footer__copyright animate-element" style={{transitionDelay: '300ms'}}>
        <small>&copy; Mayuresh. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer