import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Mobile.css';
import img1 from '../Assets/img1.png';
import img2 from '../Assets/img2.png';
import img3 from '../Assets/img3.png';
import img4 from '../Assets/img4.png';
import gimg from "../Assets/m3.png";
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
            <b>Mobile App Designers</b>{" "}
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
                        <h3>What is Mobile App Developers?</h3>
                        <p>Mobile Development is the process of developing software for mobile devices. 
                            This includes coding applications for phones, tablets and other portable gadgets, 
                            as well as designing the user interface, troubleshooting bugs, creating back-ends for databases, and more. 
                            As a Mobile Developer, you'll be able to build customized applications that are 
                            tailored to the needs of individual users on a variety of platforms such as iOS and Android.
                        </p>
                        <p>
                            Some ideas of what you could get a Mobile Developer to do is to develop apps 
                            from scratch or modify an existing code base;
                            maintain and update existing apps in line with rapidly evolving technologies; 
                            optimize an app’s performance; collaborate with designers to ensure a perfect aesthetic; 
                            create effective analytics systems; and test apps for reliability and performance.
                        </p>


                    </div>
                    <div className="col-12 col-md-6" id="col2">
                    <h3>Hire a Mobile App Developer</h3>
                    <p >
                        Hiring on SkillHub.com gives you access to certified Mobile Developers from all over the world at competitive rates.
                        Browse through freelance profiles today to find the right fit for your project needs. 
                        Post a job today and hire your next Mobile Developer right away!
                    </p>
                </div>
            </div>

    <div className="container text-center">
      <h2>How Hiring a Mobile App Developer</h2>
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
