import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Graphics.css';
import img1 from '../Assets/img1.png';
import img2 from '../Assets/img2.png';
import img3 from '../Assets/img3.png';
import img4 from '../Assets/img4.png';
import gimg from "../Assets/da1.png";

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

        <div className="banner-text">
          <h1>
            <b>Hire Expert</b>{" "}
          </h1>
          <h1>
            <b>Data Analysis</b>{" "}
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
                        <h3>What is Data Analysis?</h3>
                        <p>Data analysis is a comprehensive method of inspecting, cleansing, transforming, 
                            and modeling data to discover useful information, draw conclusions, and support decision-making. 
                            It is a multifaceted process involving various techniques and methodologies to
                             interpret data from various sources in different formats, both structured and unstructured.
                        </p>
                        <p>Data analysis is the key to unlocking the potential of big data. It helps organizations to make sense of this data, 
                            turning it into actionable insights. 
                            These insights can be used to improve products and services, enhance experiences, 
                            streamline operations, and increase profitability.
                        </p>
                        <p>
                        Organizations may use data analysis to make better decisions, increase efficiency, and forecast future consequences.
                         Data analysis is widely utilized in many industries,
                         including business, healthcare, marketing, finance, and scientific research, to gain insights and solve problems.
                        </p>
                    </div>
                    <div className="col-12 col-md-6" id="col2">
                    <h3>Hire a Data Analysis</h3>
                    <p >
                    Use SkillHub.com to hire an affordable Data Analyst for your project.
                    Whether you need to analyze large datasets, generate insightful reports, or create predictive models, 
                    SkillHub.com has the right talent for you.
                    </p>
                </div>
            </div>

    <div className="container text-center">
      <h2>How Hiring a Data Analysis</h2>
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
