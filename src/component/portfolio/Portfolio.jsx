import React, { useEffect, useRef } from 'react'
import './portfolio.css'
import portfolio from './portfolio.json'

const Portfolio = () => {
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
    <section id='portfolio' ref={sectionRef}>
      <h5 className="animate-element">My Recent Work</h5>
      <h2 className="animate-element" style={{ transitionDelay: '100ms' }}>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolio.map((data, index) => {
          return (
            <article
              className="portfolio__item animate-element pop-in"
              style={{ transitionDelay: `${200 + index * 100}ms` }}
              key={data.title}
            >
              {/* <div className="portfolio__item-image">
                <img src={data.src} alt={data.title} />
                <div className="portfolio__item-overlay"></div>
              </div> */}

              <div className="portfolio__item-content">
                <h3>{data.title}</h3>

                <div className="portfolio__item-details">
                  <div className="portfolio__detail-row">
                    <span className="detail-label">Frontend</span>
                    <span className="detail-value">{data.frontend}</span>
                  </div>
                  <div className="portfolio__detail-row">
                    <span className="detail-label">Backend</span>
                    <span className="detail-value">{data.backend}</span>
                  </div>
                  <div className="portfolio__detail-row">
                    <span className="detail-label">Tools</span>
                    <span className="detail-value">{data.Tools}</span>
                  </div>

                  <div className="portfolio__badges">
                    <span className={`badge ${data.status === 'Active' ? 'badge-success' : 'badge-danger'}`}>
                      {data.status}
                    </span>
                    <span className={`badge ${data.access === 'Private' ? 'badge-danger' : 'badge-success'}`}>
                      {data.access === 'NA' ? 'N/A' : data.access}
                    </span>
                    <span className="worked-text">{data.worked}</span>
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio