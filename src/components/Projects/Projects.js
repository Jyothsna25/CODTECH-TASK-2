import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


import taskify from "../../Assets/Projects/crud.png";
import eCom from "../../Assets/Projects/E-com.png";
import ReactGA from "react-ga";

function Projects() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
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
              imgPath={taskify}
              isBlog={false}
              title="CRUD Operations"
              description="In this application designed and implemented the create, read, update, delete functionalities using servlets.
Developed a responsive html form interface and with java script validations. Improved the response time of database 
operations by 40% through efficient JDBC connection management and optimized SQL queries. Admin can view 10+ 
products list at a time in a table format. This application done with 95% accuracy. "
              link="https://github.com/Jyothsna25/Ecart-Application"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eCom}
              isBlog={false}
              title="One Click Shopping"
              description="Application developed by using reactjs. This is a e-commerce application done with 95% accuracy. When we use this 
application user can experience real time e-cart application. Enhanced product discovery by integrating a feature to 
display the latest products on the home page, resulting in a 20% increase in product views."
              link="https://github.com/Jyothsna25/Reactjs"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
