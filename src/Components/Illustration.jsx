import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Graphics.css';
import img1 from '../Assets/img1.png';
import img2 from '../Assets/img2.png';
import img3 from '../Assets/img3.png';
import img4 from '../Assets/img4.png';
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

            <div className="container text-center"></div>
                <div className="row" id='graprow'>
                    <div className="col-12 col-md-6" id="col1">
                        <h3>What is Illustrator</h3>
                        <p>
                            There are many career pathways for artists to purse, one is a freelance illustrator. 
                            Freelance illustration is useful in many industries, but is most popular in marketing, publishing and entertainment.
                            If you enjoy drawing, you may consider a career in illustration. 
                            In this article, we explain what freelance illustration is, what illustrators do,
                            how to start a career in freelance illustration and provide helpful tips on being a freelance illustrator.
                        </p>
                        <p>Freelance illustration is drawings and designs that a client commissions an artist to create. 
                            Many industries rely on illustrators for designing marketing content and product packaging.
                             Freelance illustrators are often self-employed,
                             but some work with advertising agencies or publishing companies as contractors.
                        </p>
                    </div>
                    <div className="col-12 col-md-6" id="col2">
                    <h3>Hire a freelance Illustrator?</h3>
                    <p >
                    Use SkillHub.com to hire an affordable Software Developer for your project. Whether you need to create a bespoke application or update and maintain and existing codebase, SkillHub.com has you covered.
                    </p>
                </div>
            </div>

    <div className="container text-center">
      <h2>How Hiring a freelance Illustrator</h2>
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
