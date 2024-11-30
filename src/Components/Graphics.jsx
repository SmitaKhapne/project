import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Graphics.css";
import img1 from "../Assets/img1.png";
import img2 from "../Assets/img2.png";
import img3 from "../Assets/img3.png";
import img4 from "../Assets/img4.png";
import gimg from "../Assets/g2.png";

const Graphics = () => {
  return (
    <div id="main">
      <Navbar
        className="navbar bg-dark border-bottom border-body"
        bg="primary"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand href="#home">Skillhub</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="sign-in">Sign-In</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      {/* ******Image************* */}
      <div id="imgdiv">
        <div class="banner-card">
          <img src={gimg} alt="My Image" />
        </div>

        <div class="banner-text">
          <h1>
            <b>Hire Expert</b>{" "}
          </h1>
          <h1>
            <b>Graphics Designers</b>{" "}
          </h1>
          <h1>
            <b>for any job</b>{" "}
          </h1>
          <h3>Millions of people use Freelancer to</h3>
          <h3>turn their ideas into reality.</h3>
        </div>
      </div>

      

<Container fluid className="mt-4" id="graprow">
      <Row>
        <Col xs={11} md={6} id="col1">
          <h3>What is Graphic Design?</h3>
          <p>
            Graphic design refers to the planning and projection of visual
            communication through the use of imagery, words, space, typography
            or fonts and color palettes. Graphic design is a critical element in
            the process of communication or product design and creation. While
            technically graphic design is a subset of communication design,
            strong synergies exist between the skills required for each
            discipline. Hence the graphic design terminology is often used
            interchangeably.
          </p>
        </Col>
        <Col xs={11} md={6} id="col2">
          <h3>Hire a Graphic Designer</h3>
          <p>
            On Skillhub.com, you can hire a Graphic Artist to design a website,
            photoshop an image, theme your WordPress blog, typeset your annual
            report... and more!
          </p>
        </Col>
      </Row>
    </Container>

      <div className="container text-center">
        <h2>How Hiring a Graphic Designer Works</h2>
        <div className="row">
          {/* Step 1: Post a Job */}
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="step-box">
              <img src={img3} alt="My Image" height="60px" />
              <h3>1. Post a Job</h3>
              <p>Tell us what you need done in seconds.</p>
            </div>
          </div>
          {/* Step 2: Choose a Freelancer */}
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="step-box">
              <img src={img4} alt="My Image" height="60px" />
              <h3>2. Choose a Freelancer</h3>
              <p>Get your first bid in seconds and choose from the best.</p>
            </div>
          </div>
          {/* Step 3: Track Progress */}
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="step-box">
              <img src={img2} alt="My Image" height="60px" />
              <h3>3. Track Progress</h3>
              <p>Chat with your freelancer and review their work 24/7.</p>
            </div>
          </div>
          {/* Step 4: Pay Safely */}
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="step-box">
              <img src={img1} alt="My Image" height="60px" />
              <h3>4. Pay Safely</h3>
              <p>Only pay when you're completely satisfied.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graphics;
