import React from 'react'
import { Link } from 'react-router-dom'

const Cta = () => {
  return (
    <div className="cta">
        <Link to="/resume" target="_blank" rel="noreferrer" className='btn'>View Resume</Link>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default Cta