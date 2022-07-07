import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import developer from "../../Assets/developer.jpg";
import { FRONTENTSKILLS, BACKENDSKILLS, TOOLS, LANGUAGES } from "../../Constants";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">About Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={5} style={{ paddingBottom: "50px" }} className="about-img">
            <img src={developer} alt="about" className="image-style" />
          </Col>
        </Row>
        <Row className="skill-tools-wrapper">
          <Col className="skill-wrapper">
            <br></br>

            <h1 className="project-heading">
              <strong className="purple">Front end development</strong>
            </h1>
            {FRONTENTSKILLS.map((skill, index) => (
              <Techstack
                name={skill.name}
                initialRating={skill.initialRating}
                key={index}
              />
            ))}
            <br></br>
            <h1 className="project-heading">
              <strong className="purple">Back end development</strong>
            </h1>
            {BACKENDSKILLS.map((skill, index) => (
              <Techstack
                name={skill.name}
                initialRating={skill.initialRating}
                key={index}
              />
            ))}
            <br></br>

          </Col>

          <Col className="skill-wrapper">
            <br></br>

            <h1 className="project-heading">
              <strong className="purple">Programming Language</strong>
            </h1>
            {LANGUAGES.map((tool, index) => (
              <ul key={index} className="tool-name">
                <li>{tool}</li>
              </ul>
            ))}
            <br></br>
            <h1 className="project-heading">
              <strong className="purple">Tools | Knowledge</strong>
            </h1>
            {TOOLS.map((tool, index) => (
              <ul key={index} className="tool-name">
                <li>{tool}</li>
              </ul>
            ))}
            <br></br>

          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
