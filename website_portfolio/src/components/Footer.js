import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import '../css/Footer.css'
import { padding } from '@mui/system';

function Footer() {
  return (
    <div className='footer'>
        <div className='IconLinks'>
            <a href='https://www.linkedin.com/in/hanne-verschueren-5683b2248/'><LinkedInIcon/></a>
            <a href='https://github.com/HVerschueren'><GitHubIcon/></a>
            <a href='mailto:testEmail.com'><EmailIcon/></a>
        </div>
        <p>&copy;2023 hanne.sinners.be</p>
    </div>
  )
}

export default Footer