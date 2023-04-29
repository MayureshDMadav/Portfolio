import React from 'react'
import './portfolio.css'
import portfolio from './portfolio.json'

const Portfolio = () => {

  console.log()

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolio.map(data=>{
          return(
            <article className="portfolio__item">
            <div className="portfolio__item-image">
            <img src={data.src} alt="img" />
            </div>
              <h3 style={{marginBottom:'0.5rem'}}>{data.title}</h3>
              <ul>
                <li>
                  <p> <h5>Frontend : {data.frontend}</h5></p>
                  <p><h5>Backend : {data.backend}</h5></p>
                  <p><h5>Tools : {data.Tools}</h5></p>
                  <p><h5>Status : <span Style={`${data.status === 'Active'?'color:green;':'color:red;'}`}>{data.status}</span></h5></p>
                  <p><h5>Repo Access : <span Style={`${data.access === 'Private'?'color:red;':'color:green;'}`}>{data.access}</span></h5></p>
                  <p><h5>Worked : {data.worked}</h5></p>
                </li>
              </ul>
              <div className="portfolil__item-cta">
              <a href={data.gitUrl} className='btn'Style={`${data.gitUrl === 'NA'? "display:none":""}`} >GitHub</a>
              <a href={data.webLink} className='btn btn-primary' Style={`${data.restricted === 'Yes'? "display:none":""}`}   target='_blank'>Live Demo</a> 
              </div>
          </article> 
    
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio