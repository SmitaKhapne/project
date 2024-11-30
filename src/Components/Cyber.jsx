import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Graphics.css';
import { Row, Col } from "react-bootstrap";
import img1 from '../Assets/img1.png';
import img2 from '../Assets/img2.png';
import img3 from '../Assets/img3.png';
import img4 from '../Assets/img4.png';
import gimg from "../Assets/g5.png";
const Graphics = () => {
    return (
        <div id='main'>
            <Navbar className="navbar bg-dark border-bottom border-body" bg="primary" data-bs-theme="dark">
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
        <div className="banner-card">
          <img src={gimg} alt="My Image" />
        </div>

        <div className="banner-text">
          <h1>
            <b>Hire Expert</b>{" "}
          </h1>
          <h1>
            <b>Cybersecurity </b>{" "}
          </h1>
          <h1>
            <b>for any job</b>{" "}
          </h1>
          <h3>Millions of people use Freelancer to</h3>
          <h3>turn their ideas into reality.</h3>
        </div>
      </div>
            
            {/* <div className="container text-center"></div>
                <div className="row" id='graprow'>
                    <div className="col-12 col-md-6" id="col1">
                        <h3>What is Cyber Security?</h3>
                        <p>Cybersecurity is the practice of protecting computers, networks, programs, and data from unauthorized access, attacks, damage, or theft. 
                            It is a crucial field of IT that ensures the confidentiality, integrity, and availability of information systems and protects them from cyber threats.
                        </p>
                        <p>
                        Cybersecurity encompasses a range of practices, technologies, and processes designed
                         to safeguard digital assets from various forms of cyberattacks, including hacking, phishing, 
                         ransomware, data breaches, and other malicious activities.
                        </p>
                        <p>
                        With the increasing reliance on digital technologies, cybersecurity has become a vital component for individuals, 
                        businesses, and governments to protect themselves against a wide array of cyberattacks. Effective cybersecurity reduces
                         the risk of financial loss,reputational damage, data breaches, and regulatory penalties.
                        </p>
                    </div>
                    <div className="col-12 col-md-6" id="col2">
                    <h3>Hire a Cyber Security</h3>
                    <p >
                        Use SkillHub.com to hire an affordable Cyber Security Expert for your project.
                        Whether you need to secure your web applications, perform vulnerability assessments,
                         or build a comprehensive security strategy, SkillHub.com has the right talent to keep your data safe 
                         and your systems secure.
                    </p>
                </div>
            </div> */}

    <Container className="text-center">
      <Row id="graprow">
        {/* Column 1 */}
        <Col xs={12} md={6} id="col1">
          <h3>What is Cyber Security?</h3>
          <p>
            Cybersecurity is the practice of protecting computers, networks, programs, and data from unauthorized access, attacks, damage, or theft. 
            It is a crucial field of IT that ensures the confidentiality, integrity, and availability of information systems and protects them from cyber threats.
          </p>
          <p>
            Cybersecurity encompasses a range of practices, technologies, and processes designed to safeguard digital assets from various forms of cyberattacks, including hacking, phishing, 
            ransomware, data breaches, and other malicious activities.
          </p>
          <p>
            With the increasing reliance on digital technologies, cybersecurity has become a vital component for individuals, businesses, and governments to protect themselves against a wide array of cyberattacks. 
            Effective cybersecurity reduces the risk of financial loss, reputational damage, data breaches, and regulatory penalties.
          </p>
        </Col>

        {/* Column 2 */}
        <Col xs={12} md={6} id="col2">
          <h3>Hire a Cyber Security Expert</h3>
          <p>
            Use SkillHub.com to hire an affordable Cyber Security Expert for your project.
            Whether you need to secure your web applications, perform vulnerability assessments,
            or build a comprehensive security strategy, SkillHub.com has the right talent to keep your data safe and your systems secure.
          </p>
        </Col>
      </Row>
    </Container>


    <div className="container text-center">
      <h2>How Hiring a Cyber Security</h2>
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
          <img src={img4} alt="My Image" height="60px"/>
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
          <img src={img1} alt="My Image" height="60px"/>
            <h3>4. Pay Safely</h3>
            <p>Only pay when you're completely satisfied.</p>
          </div>
        </div>
      </div>
    </div>

    </div>
    )

}


export default Graphics;
