import React from 'react'
import ProjectTile from "../components/ProjectTile"
import { ProjectList } from "../helpers/ProjectList"
import "../css/Projects.css"

function Projects() {
  return (
    <div className='projects'>
      <h1>my projects</h1>
      <div className='projectList'>
        {ProjectList.map((project, index) => {//gaat door de array in ProjectList en slaat de variablen op in project
          return <ProjectTile id={index} name={project.name} image={project.image} key={index}/>
        })}

      </div>
    </div>
  )
}

export default Projects