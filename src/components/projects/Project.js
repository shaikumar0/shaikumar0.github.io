import React from 'react';
import './Project.css';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="projects-heading">Projects</h2>

        <div className="project-card">
          <h3 className="project-title">Amazon Clone</h3>
          <p className="project-description">
            A fully responsive Amazon homepage clone built with HTML, CSS, and JavaScript. Features product cards, navigation bar, and modern UI styling.
          </p>
          <a className="project-link" href="https://shaikumar0.github.io/amazon_clone/" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>

        <div className="project-card">
          <h3 className="project-title">Tic Tac Toe</h3>
          <p className="project-description">
            A classic two-player Tic Tac Toe game built with JavaScript. Includes turn-based logic, win detection, and reset functionality.
          </p>
          <a className="project-link" href="https://shaikumar0.github.io/tic_tac_toe/" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>

        <div className="project-card">
          <h3 className="project-title">Currency Converter</h3>
          <p className="project-description">
            A real-time currency converter using an exchange rate API. Built with HTML, CSS, and JavaScript for live currency calculations.
          </p>
          <a className="project-link" href="https://shaikumar0.github.io/currency_converter/" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
