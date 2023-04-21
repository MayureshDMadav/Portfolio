import React from 'react'
import './testimonial.css'
import {Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import img from '../../assets/avatar1.jpg'
import img2 from '../../assets/avatar2.jpg'
import img3 from '../../assets/avatar3.jpg'
import img4 from '../../assets/avatar4.jpg'


const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      
        <Swiper
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container testimonial__container"

        >
        <SwiperSlide className="testimonial"  
        >
          <div className="client__avtar">
            <img src={img} alt="img" />          
          </div>
          <h5 className='cleint_name'>Ernes Achiever</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cupiditate fugiat officia nam minus excepturi quae, repellendus eligendi, veritatis temporibus quia exercitationem sapiente quaerat dolorem quas, aperiam iusto quam corporis.
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial"
       
        >
          <div className="client__avtar">
            <img src={img2} alt="img" />
           
          </div>
          <h5 className='cleint_name'>Ernes Achiever</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cupiditate fugiat officia nam minus excepturi quae, repellendus eligendi, veritatis temporibus quia exercitationem sapiente quaerat dolorem quas, aperiam iusto quam corporis.
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial"
   
        >
          <div className="client__avtar">
            <img src={img3} alt="img" />
           
          </div>
          <h5 className='cleint_name'>Ernes Achiever</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cupiditate fugiat officia nam minus excepturi quae, repellendus eligendi, veritatis temporibus quia exercitationem sapiente quaerat dolorem quas, aperiam iusto quam corporis.
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial"
      
      
        >
          <div className="client__avtar">
            <img src={img4} alt="img" />
           
          </div>
          <h5 className='cleint_name'>Ernes Achiever</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cupiditate fugiat officia nam minus excepturi quae, repellendus eligendi, veritatis temporibus quia exercitationem sapiente quaerat dolorem quas, aperiam iusto quam corporis.
            </small>
        </SwiperSlide>
        </Swiper>
      
    </section>
  )
}

export default Testimonial