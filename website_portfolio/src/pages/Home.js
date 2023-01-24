import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineElement from '../components/TimelineElement';
import { TimelineList } from "../helpers/TimelineList"
import ProjectTile from "../components/ProjectTile"
import { ProjectList } from '../helpers/ProjectList';
import '../css/Home.css'

//https://stackoverflow.com/questions/2627650/why-javascript-gettime-is-not-a-function
// parse a date in yyyy-mm-dd format
function parseDate(input) {
  var parts = input.match(/(\d+)/g);
  // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
  return new Date(parts[0], parts[1]-1, parts[2]); // months are 0-based
}
//https://stackoverflow.com/questions/4060004/calculate-age-given-the-birth-date-in-the-format-yyyymmdd
function _calculateAge(date_of_birth) { // birthday is a date
  var birthday = parseDate(date_of_birth)
  
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function Home() {
  return (
    <div className='homePage'>
      <div className='introduction homeDiv'>
        <p>Welcome on my portfolio website! My name is <b>Hanne Verschueren</b>, I'm {_calculateAge('1999-12-31')} years old and currently studying Electronics-ICT at Thomas More. Check out my projects or my CV.</p>
      </div>

      <div className='featuredProjects homeDiv'>
        <h2>featured projects</h2>
        <div className='projectList'>
          <ProjectTile id={0} name={ProjectList[0].name} image={ProjectList[0].image[0].picture} key={0}/>
          <ProjectTile id={5} name={ProjectList[5].name} image={ProjectList[5].image[0].picture} key={1}/>
          <ProjectTile id={6} name={ProjectList[6].name} image={ProjectList[6].image[0].picture} key={1}/>
      </div>
      </div>

    
    <div className='timeline homeDiv'>
      <h2>timeline</h2>
      <VerticalTimeline lineColor='#13a89e'>
        {TimelineList.map((project, index) => {//gaat door de array in ProjectList en slaat de variablen op in project
          return <TimelineElement id={index} date={project.date} title={project.title} key={index} place={project.place} explanation={project.explanation} icon={project.icon} color={project.color}/>
        })}
    </VerticalTimeline>
    </div>
    </div>
  )
}

export default Home