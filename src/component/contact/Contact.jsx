import React, { useEffect, useRef } from 'react'
import emailjs from 'emailjs-com';
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FiMessageCircle} from 'react-icons/fi'
import {MdOutlineWhatsapp} from 'react-icons/md'
 
const Contact = () => {
  const form = useRef();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-animation');
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.animate-element');
      elements.forEach((el) => observer.observe(el));

      return () => elements.forEach((el) => observer.unobserve(el));
    }
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j97i3tc', 'template_k9kn6z2', form.current, 'OHKQXVe0l9i3BUYP4')
      .then((result) => {
          console.log(result)
      }, (error) => {
          console.log(error)
      });
    
    e.target.reset();
  };

  return (
    <section id="contact" ref={sectionRef}>
      <h5 className="animate-element" style={{transform: 'translateY(20px)'}}>Get in Touch</h5>
      <h2 className="animate-element" style={{transitionDelay: '100ms', transform: 'translateY(20px)'}}>Contact Me</h2>

      <div className="container contact__container">
        
        <div className="contact__options animate-element slide-right" style={{transitionDelay: '200ms'}}>
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>mayureshmadav@gmail.com</h5>
            <a href="mailto:mayureshmadav@gmail.com" target='_blank' rel="noreferrer">Send a message</a>
          </article>
          
          <article className="contact__option">
            <FiMessageCircle className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Mayuresh Madav</h5>
            <a href="https://m.me/mayur.madav" target='_blank' rel="noreferrer">Send a message</a>
          </article>
          
          <article className="contact__option">
            <MdOutlineWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>Mayuresh Madav</h5>
            <a href="https://api.whatsapp.com/send?phone=8286941557" target='_blank' rel="noreferrer">Send a message</a>
          </article>
        </div>
        
        <form ref={form} onSubmit={sendEmail} className="animate-element slide-left" style={{transitionDelay: '300ms'}}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email Address' required/>
          <textarea name="message" rows="7" placeholder="Your Message Here" required></textarea>
          <button type='submit' className='btn btn-primary submit-btn'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact