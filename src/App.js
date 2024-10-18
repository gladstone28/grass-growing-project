import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProjectInfoPage from './components/ProjectInfoPage';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/project-info" element={<ProjectInfoPage />} />
        </Routes>
        {/* Simple Copyright Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
