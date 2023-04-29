import React from 'react'
import './testimonial.css'
import {Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import testimonial from './testimonial.json'
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {

  return (
    <section id='testimonial'>
      <h5>Review from Teams</h5>
      <h2>Testimonials</h2>
      
        <Swiper
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container testimonial__container"

        >
       
          {testimonial.map(data =>{
            return(
              <SwiperSlide className="testimonials"  
              >
              <span>
              <h5 className='cleint_name'>{data.Name}</h5>
              <div className="client__avtar">
              <img src={data.Image} alt="img" />    
              </div>
              <small className='client__review'>
              <p>{data.Description}</p>
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