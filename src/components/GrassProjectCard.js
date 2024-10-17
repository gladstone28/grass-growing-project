import React from 'react';
import '../assets/styles/GrassProjectCard.css';

const GrassProjectCard = ({ title, description, image, progress }) => {
  return (
    <div className="card">
      <img src={process.env.PUBLIC_URL + image} alt={title} className="card-img" />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <p><strong>Progress:</strong> {progress}</p>
      </div>
    </div>
  );
};

export default GrassProjectCard;
