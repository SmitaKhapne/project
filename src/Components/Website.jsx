import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Graphics.css';
import img1 from '../Assets/img1.png';
import img2 from '../Assets/img2.png';
import img3 from '../Assets/img3.png';
import img4 from '../Assets/img4.png';
import gimg from "../Assets/w1.png";
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


          <div className="container text-center"></div>
                <div className="row" id='graprow'>
                    <div className="col-12 col-md-6" id="col1">
                        <h3>What is Website Design?</h3>
                        <p>When considering the term website design more often consumers reference the 
                            process of creating visual elements of a website for distribution 
                            to end-users, via the internet. The color schemes, typography or fonts,
                            imagery, layout and overall graphical appearance are typically forefront of one’s mind as a visible
                            demonstration of careful planning and design formation. 
                            </p>
                    </div>
                    <div className="col-12 col-md-6" id="col2">
                        <h3>Hire a Website Designer</h3>
                        <p >
                            On SkillHub.com, you can hire a Web Designer to create a 
                            website or update your existing website, whether it's completely
                            custom or hosted on platforms like Squarespace, Wix... and more!
                        </p>
                </div>
            </div>

    <div className="container text-center">
      <h2>How Hiring a Website Designer Works</h2>
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
