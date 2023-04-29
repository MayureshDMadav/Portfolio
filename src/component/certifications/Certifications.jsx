import React from 'react'
import './certifications.css'
import {Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import imageRender from './certifications.json'
import 'swiper/css';
import 'swiper/css/pagination';




const Testimonial = () => {



  return (
    <section id='certification'>
      <h5>Certification</h5>
      <h2>Certifications & Appreciations</h2>
      
        <Swiper
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container certifications__container"

        >
       
          {imageRender.map(data =>{
            return(
              <SwiperSlide className="certifications"  
              >
              <span>
              <h5 className='cleint_name'>{data.language}</h5>
              <small className='client__review'>
              <img style={{background:'white'}} src={data.certificate} alt="img" />      
              </small>
              </span>
              </SwiperSlide>

            )

          })}
        </Swiper>
      
    </section>
  )
}

export default Testimonial