import React from 'react'
import cvImage from '../images/cv_english.jpg'
import "../css/cv.css";
import cvPDF from "../images/cv_Hanne_Verschueren_english.pdf";

function cv() {
  return (
    <div className='imageDiv cvDiv'>
        <h1><a href={cvPDF} download>download cv </a></h1>
        <img className="d-block w-100 imageDiv" src={cvImage} alt="First slide"/>
    </div>
  )
}

export default cv