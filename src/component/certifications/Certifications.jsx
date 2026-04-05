import React, { useEffect, useRef } from 'react'
import './certifications.css'
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import imageRender from './certifications.json'
import 'swiper/css';
import 'swiper/css/pagination';

const Certifications = () => {
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
    <section id='certification' ref={sectionRef}>
      <h5 className="animate-element">Credentials</h5>
      <h2 className="animate-element" style={{transitionDelay: '100ms'}}>Certifications & Appreciations</h2>
      
      <div className="animate-element pop-in" style={{transitionDelay: '200ms'}}>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="container certifications__container"
        >
          {imageRender.map((data, index) => {
            return(
              <SwiperSlide className="certifications" key={index}>
                <h5 className='cleint_name'>{data.language}</h5>
                <div className='client__review'>
                  <img src={data.certificate} alt={data.language} />      
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}

export default Certifications