import React, { useState } from "react";
import { projects } from "../../constants";
import "./Work.css";


const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setSelectedImageIndex(0);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setSelectedImageIndex(0);
  };

  const selectedImages = selectedProject?.images || [selectedProject?.image];

  const showPreviousImage = () => {
    setSelectedImageIndex((currentIndex) =>
      (currentIndex - 1 + selectedImages.length) % selectedImages.length
    );
  };

  const showNextImage = () => {
    setSelectedImageIndex((currentIndex) =>
      (currentIndex + 1) % selectedImages.length
    );
  };

  return (
    <section id="work" className="work-section">
      {/* Section Title */}
      <div className="work-header">
        <h2>PROJECTS</h2>
        <div className="underline"></div>
        <p>
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="project-card"
          >
            <div className="project-image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button className="modal-close" onClick={handleCloseModal}>
              &times;
            </button>

            <div className="modal-body">
              <div className="modal-image-wrapper">
                <img
                  src={selectedImages[selectedImageIndex]}
                  alt={`${selectedProject.title} screenshot ${selectedImageIndex + 1}`}
                  className="modal-image"
                />
                {selectedImages.length > 1 && (
                  <>
                    <button
                      type="button"
                      className="gallery-arrow gallery-arrow-previous"
                      onClick={showPreviousImage}
                      aria-label="Show previous image"
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      className="gallery-arrow gallery-arrow-next"
                      onClick={showNextImage}
                      aria-label="Show next image"
                    >
                      ›
                    </button>
                    <span className="gallery-counter">
                      {selectedImageIndex + 1} / {selectedImages.length}
                    </span>
                  </>
                )}
              </div>
              <div className="modal-info">
                <h3>{selectedProject.title}</h3>
                <p>{selectedProject.description}</p>
                <div className="modal-tags">
                  {selectedProject.tags.map((tag, idx) => (
                    <span key={idx} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="modal-links">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-code"
                    >
                      View Code
                    </a>
                  )}
                  {selectedProject.webapp && (
                    <a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-live"
                    >
                      View Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
