import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Our Grass Growing Project!</h1>
      <p>Explore the progress and details of our Zoysia grass lawn project below.</p>
      <Link to="/project-info">
        <button className="btn">View Project Details</button>
      </Link>
    </div>
  );
};

export default HomePage;
