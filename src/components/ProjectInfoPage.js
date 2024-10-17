import React from 'react';
import GrassProjectCard from './GrassProjectCard';
import '../assets/styles/ProjectInfoPage.css';

const ProjectInfoPage = () => {
  const projectDetails = [
    {
      title: 'Soil Preparation',
      description: 'We’ve prepared the soil by testing, tilling, and amending with organic matter.',
      image: '/images/soil-preparation.jpg', // Path relative to the public folder
      progress: 'Completed'
    },
    {
      title: 'Planting Zoysia Grass',
      description: 'The Zoysia plugs were planted across the lawn. Watering daily during establishment.',
      image: '/images/planting-zoysia.jpg', // Path relative to the public folder
      progress: 'In Progress'
    },
    {
      title: 'Watering Schedule',
      description: 'We follow a watering schedule of twice a week now that the grass is established.',
      image: '/images/watering-schedule.jpg', // Path relative to the public folder
      progress: 'Ongoing'
    }
  ];

  return (
    <div className="project-page">
      <h1>Our Grass Growing Project</h1>
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
