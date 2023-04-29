import React from 'react'
import {BsDot} from 'react-icons/bs'
import services from './services.json'
import './services.css'

const Services = () => {

 
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        {services.map(data=>{
          return(
            <article className="service">
            <div className="service_head">
            <h3>{data.id}</h3>
            </div>
  
          <ul className="service__list">
            <li>
            <BsDot className='service__list-icon'/>
            <p>{data['1']}</p>
            </li>
            <li>
            <BsDot className='service__list-icon'/>
            <p>{data['2']}</p>
            </li>
            <li>
            <BsDot className='service__list-icon'/>
            <p>{data['3']}</p>
            </li>
            <li>
            <BsDot className='service__list-icon'/>
            <p>{data['4']}</p>
            </li>
            <li>
            <BsDot className='service__list-icon'/>
            <p>{data['5']}</p>
            </li>
          </ul>
          </article>
          )
                 
        })}

      </div>
    </section>
  )
}

export default Services