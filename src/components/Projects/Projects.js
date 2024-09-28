import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Study Mate"
              description="An educational platform where users can register as either students or teachers. Teachers can upload videos, create playlists, and track their content's performance. Students can watch a limited number of free videos, purchase subscriptions for more access, and view their profile, including billing history and watched videos."
              ghLink="https://github.com/DrLivesey-Shura/StudyMate"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="DrLivesey Store"
              description="This is a full-stack e-commerce application built using the MERN stack (MongoDB, Express.js, React, and Node.js) with Braintree payment integration and a chat feature powered by a Python-based server. The project combines MongoDB and PostgreSQL databases to handle different parts of the application, leveraging the strength of each technology for optimal performance and scalability."
              ghLink="https://github.com/DrLivesey-Shura/mern-ecommerce"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="We Translate"
              description="Translation Platform is a file translation management system built using the MERN stack. It allows users to upload files for translation, handle payments through Braintree, and download the translated files once completed. Administrators can manage translation requests, upload the translated documents, and oversee the entire translation process."
              ghLink="https://github.com/DrLivesey-Shura/TranslationPlatform/tree/main"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Mezzenger"
              description="We Message is a Full Stack Chatting App. Uses Socket.io for real time communication and stores user details in encrypted format in Mongo DB Database."
              ghLink="https://github.com/DrLivesey-Shura/Soket-IO-Real-Time-Chat-Application"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Do it"
              description="SimpleTodoManager is a straightforward task management application that allows users to create, update, delete, and track their daily to-dos. Built using the MERN stack, it offers a clean interface for managing tasks efficiently, making it ideal for personal use or small-scale project management."
              ghLink="https://github.com/DrLivesey-Shura/SimpleTodoManager"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
