import React, { useState } from 'react';
import '../styles/ProjectDetailsPage.css';

function ProjectDetailPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const projectData = {
    title: 'E-Learning Platform Project',
    description: 'A platform to facilitate online courses and resources.',
    goals: [
      'Create a user-friendly interface for learners',
      'Integrate video lectures, quizzes, and forums',
      'Ensure scalability and responsive design'
    ],
    timeline: [
      { milestone: 'Initial Proposal', date: 'Sept 10' },
      { milestone: 'Prototype Review', date: 'Oct 5' },
      { milestone: 'Final Report Submission', date: 'Dec 10' }
    ],
    mentor: '(Dr. Smith)',
    nextDeadline: 'Next Report due Dec 10',
    teamLeader: 'Student A (student.a@example.com)'
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="tab-content">
            <h2>Overview</h2>
            <p><strong>Description:</strong> {projectData.description}</p>
            
            <h3>Goals:</h3>
            <ul className="clean-list">
              {projectData.goals.map((goal, index) => (
                <li key={index} className="list-row">
                  {goal}
                </li>
              ))}
            </ul>
            
            <h3>Timeline & Key Milestones:</h3>
            <dl className="timeline-list">
              {projectData.timeline.map((item, index) => (
                <div key={index} className="timeline-row">
                  <dt>{item.milestone}</dt>
                  <dd>{item.date}</dd>
                </div>
              ))}
            </dl>
          </div>
        );

      case 'team':
        return (
          <div className="tab-content">
            <h2>Team Members</h2>
            <p>Team Leader: {projectData.teamLeader}</p>
            <p>Team Members: Student B, Student C</p>
          </div>
        );

      case 'files':
        return (
          <div className="tab-content">
            <h2>Files</h2>
            <p>List of project documents, reports, and other shared materials.</p>
          </div>
        );

      case 'reports':
        return (
          <div className="tab-content">
            <h2>Reports</h2>
            <p>View all submitted reports and their feedback.</p>
          </div>
        );

      case 'discussion':
        return (
          <div className="tab-content">
            <h2>Discussion</h2>
            <p>A message board or chat for communication between the mentor and team.</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="project-detail-layout">
      {/* You can remove or keep headers/sidebars as needed */}
      <div className="content-area" style={{display: 'flex', alignItems: 'flex-start'}}>
        <main className="project-content">
          <div className="tabs">
            <button
              className={activeTab === 'overview' ? 'active' : ''}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button
              className={activeTab === 'team' ? 'active' : ''}
              onClick={() => setActiveTab('team')}
            >
              Team Members
            </button>
            <button
              className={activeTab === 'files' ? 'active' : ''}
              onClick={() => setActiveTab('files')}
            >
              Files
            </button>
            <button
              className={activeTab === 'reports' ? 'active' : ''}
              onClick={() => setActiveTab('reports')}
            >
              Reports
            </button>
            <button
              className={activeTab === 'discussion' ? 'active' : ''}
              onClick={() => setActiveTab('discussion')}
            >
              Discussion
            </button>
          </div>
          {renderTabContent()}
        </main>

        <aside className="right-sidebar">
          <h3>Project Info</h3>
          <dl>
            <dt>Mentor</dt>
            <dd>{projectData.mentor}</dd>

            <dt>Deadlines</dt>
            <dd>{projectData.nextDeadline}</dd>

            <dt>Team Leader</dt>
            <dd>{projectData.teamLeader}</dd>
          </dl>
        </aside>
      </div>

      <footer className="footer">
        © 2024 Sathyabama University. All Rights Reserved.
      </footer>
    </div>
  );
}

export default ProjectDetailPage;
