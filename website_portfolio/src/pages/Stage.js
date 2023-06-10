import React from 'react'
import "../css/stage.css";
import planVanAanpak from "../images/plan_van_aanpak_Hanne_Verschueren.pdf"
import realisatieDocument from "../images/Stage_eindverslag_Hanne_Verschueren_3DI.pdf"
import reflectieDocument from "../images/Reflectie_Hanne_Verschueren_3DI.pdf"
import logo from "../images/logo.png"
import ProjectTile from "../components/ProjectTile"
import { ProjectList } from '../helpers/ProjectList';
function stage() {
  return (
    <div className='stageDiv'>
      <img src={logo} className='logo'/>
      <h1>Innovatie in IoT</h1>
      <p>Van eind februari tot eind mei heb ik een waardevolle stage gelopen bij Imas, een dochteronderneming van Van Genechten Packaging, waar zij verantwoordelijk zijn voor de IT-diensten van VGP. Tijdens mijn stage kreeg ik de kans om verschillende opdrachten uit te voeren die allemaal gericht waren op het monitoren van diverse aspecten. Om deze monitoringtaken uit te voeren, heb ik gebruik gemaakt van tools zoals Node-RED, Ansible en de Elastic Stack.</p>
      
      <p>Naast het uitvoeren van de opdrachten, heb ik mijn aanpak beschreven in het plan van aanpak. Het realisatiedocument biedt een diepgaandere kijk op het bedrijf, de gebruikte technologieën en de manier waarop ik de opdrachten heb gemaakt. In het reflectiedocument reflecteer ik op de impact van de stage, zowel op mijn eigen groei en ontwikkeling als op het stagebedrijf.</p>
      
      <p>De stage bij Imas was een waardevolle ervaring waarin ik de mogelijkheid had om praktijkervaring op te doen en mijn vaardigheden verder te ontwikkelen. Het was een leerzame periode waarin ik heb kunnen bijdragen aan het monitoren van aspecten van de IT-diensten van VGP.</p>
      
      <div className='documents d-flex justify-content-center'  >
        <ul>
          <li><a href={planVanAanpak} target="_blank">plan van aanpak</a></li>
          <li><a href={realisatieDocument} target="_blank">realisatie document</a></li>
          <li><a href={reflectieDocument} target="_blank">reflectiedocument</a></li>
        </ul>
      </div>
      <div className='stageProjects'>
        <h2>stage projecten</h2>
        <div className='d-flex justify-content-center'>
        <div className='projectList2'>
          <ProjectTile id={9} name={ProjectList[9].name} image={ProjectList[9].image[0].picture} key={0}/>
          <ProjectTile id={10} name={ProjectList[10].name} image={ProjectList[10].image[0].picture} key={1}/>
          <ProjectTile id={11} name={ProjectList[11].name} image={ProjectList[11].image[0].picture} key={1}/>
          <ProjectTile id={12} name={ProjectList[12].name} image={ProjectList[12].image[0].picture} key={0}/>
        </div>
        </div>
      </div>

      
    </div>
  )
}

export default stage