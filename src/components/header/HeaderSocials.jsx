import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com/in/ahlem-heni-baa430199
' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/ahlemheni' target   ='_blank'><FaGithub/></a>
        <a href='https://gmail.com' target ='_blank'><SiGmail/></a>
        </div>
  )
}

export default HeaderSocials