import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {SlOrganization} from 'react-icons/sl'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import Currentexp from '../typewriter/currentexp'
import Me from '../../assets/me-about.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>6+ years of Working</small>
            </article>

            <article className="about__card">
              <SlOrganization className='about_icon'/>
              <h5>Organizations</h5>
              <small>Worked with more then 5 Organizations</small>
            </article>

            <article className="about__card">
              <AiOutlineFundProjectionScreen className='about_icon'/>
              <h5>Projects</h5>
              <small>worked on 7+ projects</small>
            </article>

            </div>
            <p>
          <Currentexp/>
        </p>

        <a href="#contact" className='btn btn-primary' >Let's Talk</a>

      </div>     
      </div>
    </section>
  )
}

export default About