import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import "../css/ProjectDisplay.css";
import {Carousel} from 'react-bootstrap';

function ProjectDisplay() {
  const { id } = useParams();
  console.log(id);
  const project =ProjectList[id];

  return (
    <div className="project">
      <h1> {project.name}</h1>
      <p>{project.date}</p>
      <div className="smallScreenImage imageDiv">
        <img src={project.image[0].picture} />
      </div>
      <div className="carouselDiv">
      <Carousel slide={false}>
          {/* <Carousel.Item>
            <img className="d-block w-100" src={Project1} alt="First slide"/>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Project2} alt="First slide"/>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item> */}
        {project.image.map((i) => {
                return (
                  <Carousel.Item>
                    <img className="d-block w-100 imageDiv" src={i.picture} alt="First slide"/>
                    {/* <Carousel.Caption>
                      <p className="carouselP">{i.pText}</p>
                    </Carousel.Caption> */}
                  </Carousel.Item>
                )
              })}
      </Carousel>
      </div>
      <div className="contextDiv">
        <h2>CONTEXT</h2>
        <p>{project.context}</p>
        <br></br>
        <p>Assignment: {project.assignment}</p>
        <p>{project.team}</p>
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