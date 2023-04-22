import React,{ useRef } from 'react'
import emailjs from 'emailjs-com';
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FiMessageCircle} from 'react-icons/fi'
import {MdOutlineWhatsapp} from 'react-icons/md'
 
const Contact = () => {

  const form = useRef();

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
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h4>mayureshmadav@gmail.com</h4>
            <a href="mailto:mayureshmadav@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <FiMessageCircle className='contact__option-icon'/>
            <h4>Messanger</h4>
            <h4>Mayuresh Madav</h4>
            <a href="https://m.me/mayur.madav" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <MdOutlineWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h4>Mayuresh Madav</h4>
            <a href="https://api.whatsapp.com/send?phone=8286941557" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required />
          <input type="text" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact