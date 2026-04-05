import React, { useEffect, useRef } from 'react'
import '../experience/experience.css'
import frontend from './frontend.json'
import backend from './backend.json'
import Rating from '../rating/Rating'
import {BsBookmarkCheckFill} from 'react-icons/bs'

const Experience = () => {
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

  return (
    <section id='experience' ref={sectionRef}>
      <h5 className="animate-element">Core Competencies</h5>
      <h2 className="animate-element" style={{transitionDelay: '100ms'}}>Technical Experience</h2>
      
      <div className="container experience__container">
        
        {/* FRONTEND PANEL */}
        <div className="experience__frontend animate-element" style={{transitionDelay: '200ms'}}>
            <h3>Frontend Architecture</h3>
            <div className="experience__content">
            {frontend.map((data, index) => {
              return(
                <article className='experience__details animate-element' style={{transitionDelay: `${300 + index * 50}ms`}} key={data.language || index}>
                  <BsBookmarkCheckFill className='experience__details-icon'/>
                  <div className="experience__info">
                    <h4>{data.language}</h4>
                    <span className='experience__rating-wrapper'>
                      <Rating data={data.rating}/>
                    </span>
                  </div>
                </article>
              )
            })}
            </div>  
        </div>

        {/* BACKEND PANEL */}
        <div className="experience__backend animate-element" style={{transitionDelay: '400ms'}}>
        <h3>Backend & Systems</h3>
            <div className="experience__content">
            {backend.map((data, index) => {
              return(
                <article className='experience__details animate-element' style={{transitionDelay: `${500 + index * 50}ms`}} key={data.language || index}>
                  <BsBookmarkCheckFill className='experience__details-icon'/>
                  <div className="experience__info">
                    <h4>{data.language}</h4>
                    {data.Description && <p className="desc-text">{data.Description}</p>}
                    <span className='experience__rating-wrapper'>
                      <Rating data={data.rating}/>
                    </span>
                  </div>
                </article>
              )
            })}
            </div>
        </div>
        
      </div>
    </section>
  )
}

export default Experience