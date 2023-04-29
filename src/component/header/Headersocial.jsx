import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'

const Headersocial = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/mayuresh-madav-3761921a0/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/MayureshDMadav" target='_blank'><FaGithub/></a>
        <a href="https://www.facebook.com/mayur.madav/" target='_blank'><FaFacebookF/></a>
    </div>
  )
}

export default Headersocial