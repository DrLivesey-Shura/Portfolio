import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Merah Alaeddine </span>
            from <span className="purple"> Chlef, Algeria.</span>
            <br />
            I am currently searching for a job as a software developer.
            <br />
            I have completed my study as a computer science student and aiming
            for the dectora .
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Practicing Sport
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "A life spent making mistakes is not only more honorable, but more
            useful than a life spent doing nothing!"{" "}
          </p>
          <footer className="blockquote-footer">alaeddine</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
