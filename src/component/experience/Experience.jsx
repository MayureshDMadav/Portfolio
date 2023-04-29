import React from 'react'
import '../experience/experience.css'
import frontend from './frontend.json'
import backend from './backend.json'
import Rating from '../rating/Rating'
import {BsBookmarkCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
            <h3>Frontend</h3>
            <div className="experience__content">
            {frontend.map(data =>{
              return(
               
                <article className='experience__details'>
                  <BsBookmarkCheckFill className='experience__details-icon'/>
                  <div>
                  <h4>{data.language}</h4>
                  <small className='text-light'> <Rating data={data.rating}/></small>
                  </div>
                </article>
              
              )
            })}
            </div>  
        </div>
        <div className="experience__backend">
        <h3>Backend</h3>
            <div className="experience__content">

            {backend.map(data =>{
              return(
               
                <article className='experience__details'>
                  <BsBookmarkCheckFill className='experience__details-icon'/>
                  <div>
                  <h4>{data.language}</h4>
                  <h6>{data.Description}</h6>
                  <small className='text-light'><Rating data={data.rating}/></small>
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