import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'

const Headersocial = () => {
  return (
    <div className="header__socials">
        <a href="https://linkin.com" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com" target='_blank'><FaGithub/></a>
        <a href="https://facebook.com" target='_blank'><FaFacebookF/></a>
    </div>
  )
}

export default Headersocial