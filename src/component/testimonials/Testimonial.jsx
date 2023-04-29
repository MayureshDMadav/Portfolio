import React from 'react'
import './testimonial.css'
import {Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import imageRender from './testinomial.json'
import 'swiper/css';
import 'swiper/css/pagination';




const Testimonial = () => {


  console.log(imageRender[0].php)

  return (
    <section id='certification'>
      <h5>Certification & Knowledge</h5>
      <h2>Certifications & Appreciations</h2>
      
        <Swiper
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container testimonial__container"

        >
       
          {imageRender.map(data =>{
            return(
              <SwiperSlide className="testimonial"  
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