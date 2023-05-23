import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import videoplayer from "../../Assets/Projects/videoplayer.png";
import NogalWeb from "../../Assets/Projects/nogal.png";
import pokedex from "../../Assets/Projects/pokedex.png";  
import memorygame from "../../Assets/Projects/memorygame.png";
import rick from "../../Assets/Projects/rickyandmorty.png";
import AmazonClone from "../../Assets/Projects/Amazon-clon.png";

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
              imgPath={videoplayer}
              isBlog={false}
              title="Video Player"
              description="One of my last projects consuming a Youtube API, and it has a music player."
              ghLink="https://github.com/philtaboada/VideoApp"
              demoLink="https://vide-oplayer.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AmazonClone}
              isBlog={false}
              title="Mini-Amazon"
              description="This project was created with React, Firebase, Stripe, and Material UI. It is a mini Amazon, where you can add products to the cart and pay with Stripe."
              ghLink="https://github.com/philtaboada/E-commerce-Firebase/"
              demoLink="https://e-commerce-firebase.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pokedex}
              isBlog={false}
              title="Pokedex"
              description="This app was created with diferents technologies like, React, Tailwind, Redux"
              ghLink="https://github.com/philtaboada/pokedex"
              demoLink="https://vocal-gnome-c9c905.netlify.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memorygame}
              isBlog={false}
              title="Memory Game"
              description="This project is easy game called Memory Game, created only with react and CSS and Sounds integrated."
              ghLink="https://github.com/philtaboada/MemoryCard"
              demoLink="https://dreamy-faloodeh-2eec52.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NogalWeb}
              isBlog={false}
              title="Nogal Web"
              description="This project was created with React, Tailwind is a only front-end project. Landing page for a company. Is very responsive."
              ghLink="https://github.com/philtaboada/NogalCana"
              demoLink="https://remarkable-nougat-d6d8cf.netlify.app/"
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


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
