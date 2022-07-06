import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dehui Yu </span>
            from <span className="purple"> Ontario, Canada.</span>
            <br />
            A full stack developer who loves to transform ideas into reality using
            code.
            <br />
            With experience creating
            custom web application with ReactJs, NodeJs, Kubernetes, Docker, MySQL, MongoDB...
            <br />
            I learn these skills from:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Work Experience as a developer
            </li>
            <li className="about-activity">
              <ImPointRight /> Udemy
            </li>
            <li className="about-activity">
              <ImPointRight /> University of Ottawa, Canada
            </li>
            <li className="about-activity">
              <ImPointRight /> YouTube
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
