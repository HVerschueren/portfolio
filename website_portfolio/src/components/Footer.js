import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import cvPDF from "../images/cv_Hanne_Verschueren_nederlands.pdf";
import '../css/Footer.css'
import { padding } from '@mui/system';

function Footer() {
  return (
    <div className='footer'>
        

        <div className='IconLinks d-flex align-items-center'>
                <a href='https://www.linkedin.com/in/hanne-verschueren-5683b2248/' target="_blank"><LinkedInIcon/></a>
                <a href='mailto:verschuerenhanne1@gmail.com'><EmailIcon/></a>
                <a href={cvPDF} target="_blank" className='cvButtonFooter '>CV</a>
              </div>
        <p>&copy;2023 hanneverschueren.com</p>
    </div>
  )
}

export default Footer