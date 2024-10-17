import React from 'react';
import GrassProjectCard from './GrassProjectCard';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/ProjectInfoPage.css';

const ProjectInfoPage = () => {
  const navigate = useNavigate();

  const projectDetails = [
    {
      title: 'Soil Preparation',
      description: 'We’ve prepared the soil by testing, tilling, and amending with organic matter.',
      image: '/images/soil-preparation.jpg',
      progress: 'Completed'
    },
    {
      title: 'Planting Zoysia Grass',
      description: 'The Zoysia plugs were planted across the lawn. Watering daily during establishment.',
      image: '/images/planting-zoysia.jpg',
      progress: 'In Progress'
    },
    {
      title: 'Watering Schedule',
      description: 'We follow a watering schedule of twice a week now that the grass is established.',
      image: '/images/watering-schedule.jpg',
      progress: 'Ongoing'
    },
    {
      title: 'Lawn Care Tips for Zoysia Grass',
      description: `
        By following these steps and maintaining proper care, you can create a lush, low-maintenance Zoysia lawn that will thrive in Jamaica’s tropical environment:
        1. **Soil Testing and Preparation**: Conduct soil tests to check pH and nutrient levels. Amend soil with organic matter, and till to loosen it for strong root growth.
        2. **Planting Zoysia Grass**: Use sod, plugs, or seeds, ensuring daily watering during establishment.
        3. **Watering**: Water deeply but infrequently to promote deep roots. Once established, water 1-2 times per week.
        4. **Mowing**: Keep the lawn at 1-2 inches high, and mow weekly during the growing season.
        5. **Fertilizing**: Fertilize 2-3 times a year to provide nutrients. Use slow-release formulas for best results.
        6. **Weed and Pest Control**: Apply pre-emergent herbicides to control weeds. Zoysia is resistant to most pests.
      `,
      image: '/images/zoysia-lawn.jpg',  // Add this image to your public/images folder
      progress: 'General Care'
    }
  ];

  return (
    <div className="project-page">
      <h1>Our Grass Growing Project</h1>

      {/* Back Button */}
      <button className="btn-back" onClick={() => navigate(-1)}>Back</button>

      <div className="card-container">
        {projectDetails.map((project, index) => (
          <GrassProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            progress={project.progress}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectInfoPage;
