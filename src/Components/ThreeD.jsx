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
                        <h3>What is 3D Designer?</h3>
                        <p>At SkillHub.com, professional 3D designers who are adept at planning and representing ideas of businesses or products are available for hire.
                             These 3D designers are able to clearly portray messages for easier understanding by clients and other businesses. 
                             Freelance experts in visual arts who are individuals adept in the creation of plans are also available. 
                             Expert designers who are skilled in numerous skills are available for hire.
                              Through SkillHub.com, you can have an expert designer that is creative, has a business perspective,
                             and can communicate concisely. are dozens of coding languages available that your expert might need to be fluent in 
                             (though to be fair one can get away with knowing just one or two of the most popular/modern ones).
                        </p>
                        <ul typeof='disc'>
                            <li>Express thoughts and intentions into a visual representation</li>
                            <li>Translate ideas into the priorities of the client or organization</li>
                            <li>Communicate through a cross-functional team to advance designs</li>
                            <li>Monitor each step of the production</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-6" id="col2">
                    <h3>Hire a 3D Designer</h3>
                    <p >
                        With SkillHub.com, you can hire your own expert designer out of over 19 million freelancers without leaving the comfort of your home. 
                        All you have to do is post a project, which is free of charge, on the site.
                        Feel free to include any details about your project in order to find the expert who is the best fit for your needs.
                        You may also include a timeline and estimated cost to ensure that your project gets done on time and within budget. 
                        Then, a number of competitive bids will come your way. You can chat with each of these expert designers and browse through each of their profiles to see which of their specific skill sets fits right with your project.
                        Once you have selected your expert designer, you may discuss terms of payment.
                        Payments may be done whenever a significant bulk of your project is finished, once a specified number of hours is done, or when the project is finished in its entirety.
                        <br />
                        <p>Post a project to find the best expert 3D designer, and bring out the best in your business!</p>
                    </p>
                </div>
            </div>

    <div className="container text-center">
      <h2>How Hiring a 3D Designer</h2>
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
