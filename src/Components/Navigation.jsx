import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom"; // Import Router components
import { Navbar, Nav, Container } from 'react-bootstrap'; // Import necessary components
import './Navigation.css'; // Your custom CSS
import graphics from '../Assets/graphics.png';
import web from '../Assets/web.png';
import software from '../Assets/software.png';
import mobile from '../Assets/mobile.png';
import illu from '../Assets/illustation.png';
import data from '../Assets/data.png';
import threeD from '../Assets/threeD.png';
import cyber from '../Assets/cyber.png';

const categories = [
  { title: "Graphic designers", image: graphics, route: "/graphics" },
  { title: "Website designers", image: web, route: "/web" },
  { title: "Mobile app developers", image: mobile, route: "/mobile" },
  { title: "Software developers", image: software, route: "/software" },
  { title: "3D artists", image: threeD, route: "/threeD" },
  { title: "Illustration", image: illu, route: "/illu" },
  { title: "Data analysis", image: data, route: "/data" },
  { title: "Cybersecurity", image: cyber, route: "/cyber" },
];

const App = () => {
  return (
      <div>
        {/* Navbar */}
        <Navbar className="navbar bg-dark border-bottom border-body" bg="primary" data-bs-theme="dark" id="navbar">
          <Container>
            <Navbar.Brand href="#home">Skillhub</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#sign-in">Sign-In</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
{/* 
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
      </div> */}


        {/* Main App Content */}
        <div className="app">
          <h1 className="title">Hire freelancers by skill</h1>
          <div className="card-container">
            {categories.map((category) => (
              <Card key={category.title} category={category} />
            ))}
          </div>
        </div>

        {/* Routes */}
        <Routes>
          {categories.map((category) => (
            <Route
              key={category.title}
              path={category.route}
              element={<CategoryPage title={category.title} />}
            />
          ))}
        </Routes>
      </div>
  );
};

// Card component
const Card = ({ category }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(category.route); // Navigate to the category page
  };

  return (
    <div className="card">
      <img src={category.image} alt={category.title} className="card-image" />
      <div className="card-title">{category.title}</div>
      <button className="card-button" onClick={handleNavigate}>
       Search
      </button>
    </div>
  );
};

// Category Page (Reusable Component)
const CategoryPage = ({ title }) => {
  return (
    <div className="category-page">
      <h1>{title}</h1>
      <p>Welcome to the {title} page! Explore more details here.</p>
    </div>
  );
};

export default App;
