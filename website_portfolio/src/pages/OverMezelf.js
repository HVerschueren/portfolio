import React from 'react'
import "../css/OverMezelf.css";
import cvPDF from "../images/cv_Hanne_Verschueren_nederlands.pdf";
import pasfoto from "../images/Pasfoto.jpg"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
 

function OverMezelf() {
  return (
    <div className='overMezelfDiv'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-lg-4'>
            <div><img src={pasfoto} alt="pasfoto"/></div>
            <div className='d-flex justify-content-center'>
              <div className='referenceLinks d-flex align-items-center'>
                <a href='https://www.linkedin.com/in/hanne-verschueren-5683b2248/' target="_blank"><LinkedInIcon/></a>
                <a href='mailto:verschuerenhanne1@gmail.com'><EmailIcon/></a>
                <a href={cvPDF} target="_blank" className='cvButton '>CV</a>
              </div>
            </div>

          </div>
          <div className='col-sm-12 col-lg-8'>
            <div>
              <h3>over mezelf</h3>
              <p>Ik ben Hanne Verschueren, een 23-jarige studente met een passie voor audio en technologie. Na het volgen van een gerichte audio-opleiding aan Karel de Grote Hogeschool, ben ik begonnen met een nieuwe studie aan Thomas More, die ik dit schooljaar zal afronden.</p>
            </div> 
            <div>
              <h3>Multimedia en Communicatie Technologie</h3>
              <p>Op Karel de Grote Hogeschool behaalde ik mijn bachelor in Multimedia en Communicatie Technologie, met een focus op audio en video. Mijn fascinatie voor audio heeft me doen besluiten om deze keuzerichting te volgen. Na het succesvol afronden van mijn stage als audio-assistent bij multicamera-producties, heb ik mijn diploma behaald. Tijdens deze opleiding heb ik ook kort kennisgemaakt met programmeren en Arduino, wat heeft bijgedragen aan mijn beslissing om een tweede opleiding in IoT te gaan volgen.</p>
            </div>
            <div>
              <h3>Elektronica-ICT</h3>
              <p>Vanaf het begin van mijn opleiding was het duidelijk dat deze richting echt bij mij paste. In het tweede jaar koos ik voor de keuzerichting Internet of Things, wat ik ontzettend interessant vond. Tegelijkertijd sprak het projectmatig werken binnen Digital Innovation mij ook enorm aan. Daarom heb ik ervoor gekozen om mijn laatste jaar te voltooien binnen de keuzerichting Digital Innovation. De projecten die ik zowel op school als tijdens mijn stage in mijn laatste jaar heb uitgevoerd, waren uitdagend en hebben mij enorm veel geleerd.</p>
            </div>
            <div>
              <h3>freelancen</h3>
              <p>Tijdens mijn opleiding aan Thomas More ben ik gestart met freelancen als audio-assistent/geluidstechnicus in zowel België als Nederland. Dit doe ik voornamelijk in de weekenden en tijdens schoolvakanties. Het is een geweldige manier voor mij om mijn passies te combineren en praktijkervaring op te doen.</p>
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
    
  )
}

export default OverMezelf