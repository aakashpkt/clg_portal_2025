import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ProjectPage.css";

const ProjectsPage = () => {
  const navigate = useNavigate();

  // State for projects
  const [projects, setProjects] = useState([
    { id: 1, name: "Project 1", description: "This is the description of Project 1" },
    { id: 2, name: "Project 2", description: "This is the description of Project 2" },
    { id: 3, name: "Project 3", description: "This is the description of Project 3" },
  ]);

  // State for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State for new project form
  const [newProject, setNewProject] = useState({ name: "", description: "" });

  const handleViewDetails = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  const handleAddProject = () => {
    setIsModalOpen(true); // Show the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Hide the modal
    setNewProject({ name: "", description: "" }); // Reset the form
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newProject.name && newProject.description) {
      setProjects((prev) => [
        ...prev,
        { id: prev.length + 1, ...newProject },
      ]);
      handleCloseModal(); // Close the modal after adding
    }
  };

  return (
    <div className="container">
      <div className="header">
        <button className="add-project-btn" onClick={handleAddProject}>
          + Add Project
        </button>
      </div>
      <div className="content">
        {/* Left Side: Projects List */}
        <div className="projects-list">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <button
                className="view-details-btn"
                onClick={() => handleViewDetails(project.id)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* Right Side: Mentor Details */}
        <div className="mentor-details">
          <div className="mentor-card">
            <img
              src="https://via.placeholder.com/100"
              alt="Mentor Profile"
              className="mentor-pic"
            />
            <h3>Dr. John Doe</h3>
            <p>
              <strong>Email:</strong> john.doe@example.com
            </p>
            <p>
              <strong>Department:</strong> Computer Science
            </p>
          </div>
        </div>
      </div>

      {/* Modal for Adding Project */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Add New Project</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="name">Project Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newProject.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Project Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={newProject.description}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-actions">
                <button type="submit" className="save-btn">
                  Save Project
                </button>
                <button type="button" className="cancel-btn" onClick={handleCloseModal}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
