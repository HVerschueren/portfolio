import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import "../css/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  console.log(id);
  const project =ProjectList[id];

  return (
    <div className="project">
      <h1> {project.name}</h1>
      <div className="imageDiv">
        <img src={project.image} />
      </div>
      
      <h2>my contribution</h2>
      <ul>
        {project.contribution.map((i) => {
            return <li>{i}</li>
          })}
        </ul>
    </div>
  );
}

export default ProjectDisplay;