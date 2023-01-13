import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import webmusic from "../../Assets/Projects/reproductordemusica.png";
import wheter from "../../Assets/Projects/wheter.png";
import profile from "../../Assets/Projects/First-Profile.png";
import mentor from "../../Assets/Projects/mentor-cha.png";
import quote from "../../Assets/Projects/Quotes.png";
import rick from "../../Assets/Projects/rickyandmorty.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={profile}
              isBlog={false}
              title="Pokedex"
              description="This app was created with diferents technologies like, React, Tailwind, Redux"
              ghLink="https://github.com/philtaboada/pokedex"
              demoLink="https://vocal-gnome-c9c905.netlify.app/" 
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rick}
              isBlog={false}
              title="API with Rick & Morty"
              description="Using the Ricky&Morty API, the data was displayed and we created a striking front. a search engine and some extra designs were added."
              ghLink="https://github.com/philtaboada/Ricky-Morty-API"
              demoLink="https://rickandmorty-api-2022.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wheter}
              isBlog={false}
              title="Weather App"
              description="A very interesting app, although with a not so good design, an API is used to display the data, this App takes your location and indicates the temperature of your city, you can calculate it in Kelvin and Celcius
."
              ghLink="https://github.com/philtaboada/Weather"
              demoLink="https://gorgeous-tulumba-5fe6be.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mentor}
              isBlog={false}
              title="Memory Game"
              description="This project is easy game called Memory Game, created only with react and CSS and Sounds integrated."
              ghLink="https://github.com/philtaboada/MemoryCard"
              demoLink="https://dreamy-faloodeh-2eec52.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quote}
              isBlog={false}
              title="Quotes-app"
              description="One of my first Apps made with React, it gives you a sentence randomly."
              ghLink="https://github.com/philtaboada/Quotes-react"
              demoLink="https://dainty-moxie-92ee2f.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webmusic}
              isBlog={false}
              title="Video Player"
              description="One of my last projects consuming a Youtube API, and it has a music player."
              ghLink="https://github.com/philtaboada/VideoApp"
              demoLink="https://vide-oplayer.netlify.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
