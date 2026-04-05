import React, { useEffect, useRef } from 'react'
import {BsDot} from 'react-icons/bs'
import services from './services.json'
import './services.css'

const Services = () => {
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
    <section id='services' ref={sectionRef}>
      <h5 className="animate-element">What I offer</h5>
      <h2 className="animate-element" style={{transitionDelay: '100ms'}}>Services</h2>
      
      <div className="container services_container">
        {services.map((data, index) => {
          return(
            <article 
              className="service animate-element pop-in" 
              style={{transitionDelay: `${200 + index * 100}ms`}} 
              key={data.id}
            >
              <div className="service_head">
                <h3>{data.id}</h3>
              </div>
    
              <ul className="service__list">
                {/* Dynamically iterate keys 1-5 to simplify the redundant JSX */}
                {['1', '2', '3', '4', '5'].map(key => (
                  data[key] && (
                    <li key={key}>
                      <BsDot className='service__list-icon'/>
                      <p>{data[key]}</p>
                    </li>
                  )
                ))}
              </ul>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services