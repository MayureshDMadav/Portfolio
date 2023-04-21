import React from 'react'
import './portfolio.css'
import img from '../../assets/portfolio1.jpg'
import img1 from '../../assets/portfolio2.jpg'
import img2 from '../../assets/portfolio3.jpg'
import img3 from '../../assets/portfolio4.jpg'
import img4 from '../../assets/portfolio5.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={img} alt="img" />
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolil__item-cta">
            <a href="github.com" className='btn'>GitHub</a>
            <a href="github.com" className='btn btn-primary' target='_blank'>Live Demo</a> 
            </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={img1} alt="img" />
          </div>
          <h3>This is a portfolio item title</h3>
            <div className="portfolil__item-cta">
            <a href="github.com" className='btn'>GitHub</a>
            <a href="github.com" className='btn btn-primary' target='_blank'>Live Demo</a> 
            </div>
         
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={img2} alt="img" />
          </div>
          <h3>This is a portfolio item title</h3>
            <div className="portfolil__item-cta">
            <a href="github.com" className='btn'>GitHub</a>
            <a href="github.com" className='btn btn-primary' target='_blank'>Live Demo</a> 
            </div>
         
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={img3} alt="img" />
          </div>
          <h3>This is a portfolio item title</h3>
            <div className="portfolil__item-cta">
            <a href="github.com" className='btn'>GitHub</a>
            <a href="github.com" className='btn btn-primary' target='_blank'>Live Demo</a> 
            </div>
         
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={img4} alt="img" />
          </div>
          <h3>This is a portfolio item title</h3>
            <div className="portfolil__item-cta">
            <a href="github.com" className='btn'>GitHub</a>
            <a href="github.com" className='btn btn-primary' target='_blank'>Live Demo</a> 
            </div>
         
        </article>
       
        
      </div>
    </section>
  )
}

export default Portfolio