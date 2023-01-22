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
      <div>
        <h2>CONTEXT</h2>
        <p>{project.context}</p>
        <p>Assignment: {project.assignment}</p>
      </div>
      <div>
        {project.projectBody.map((i) => {
              return <div><h2>{i.heading}</h2> <p>{i.bodyText}</p></div>
            })}
      </div>
      <div>
        <h2>MY CONTRIBUTION</h2>
        <ul>
          {project.contribution.map((i) => {
              return <li>{i}</li>
            })}
        </ul>
      </div>
      <div>
        <h2>CONCLUSION</h2>
        <p>{project.conclusion}</p>
      </div>
    </div>
  );
}

export default ProjectDisplay;