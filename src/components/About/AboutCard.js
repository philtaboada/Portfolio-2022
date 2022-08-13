import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Phil Tabaoda </span>
            from <span className="purple"> Lima, Perú.</span>
            <br />I am a Fronted Junior Developer and Academlo student.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Ride the bicycle
            </li>
            <li className="about-activity">
              <ImPointRight /> Learn more about programming
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Life is like a box of chocolates. You never know what you're gonna get!"{" "}
          </p>
          <footer className="blockquote-footer">Forrest Gump (character)</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
