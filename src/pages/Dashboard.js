import React, { useState } from "react";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [progress, setProgress] = useState(30);
  const [mentorMessage, setMentorMessage] = useState("");
  const [students] = useState([
    { id: 1, name: "Alice", department: "CSE" },
    { id: 2, name: "Bob", department: "ECE" },
    { id: 3, name: "Charlie", department: "EEE" },
    { id: 4, name: "David", department: "IT" },
  ]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [notifications] = useState([
    "Project submission deadline extended.",
    "Mentor assigned to your project.",
  ]);
  const [availableMentors] = useState(["Dr. Smith", "Prof. Johnson", "Ms. Davis"]);
  const [selectedMentor, setSelectedMentor] = useState("");
  const [teamConfirmed, setTeamConfirmed] = useState(false);

  const handleSelectMentor = (e) => {
    setSelectedMentor(e.target.value);
  };

  const handleSelectTeamMembers = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions);
    const selectedStudents = selectedOptions.map((option) => ({
      id: option.value,
      name: option.text,
      department: option.getAttribute("data-department"),
    }));
    setTeamMembers(selectedStudents);
  };

  const handleConfirmSelection = () => {
    if (!selectedMentor) {
      alert("Please select a mentor.");
      return;
    }
    if (teamMembers.length === 0) {
      alert("Please select at least one team member.");
      return;
    }
    setTeamConfirmed(true);
  };

  return (
    <div className="dashboard-container">
      <div className="content-dash">

        {/* Overview Section */}
        <div id="overview" className="card overview-card">
          <h2>Overview</h2>
          <p>Track your project status, team updates, and communication with mentors all in one place.</p>
        </div>

        {/* Team and Mentor Section */}
        {!teamConfirmed ? (
          <>
            {/* Team Member Selection */}
            <div id="team" className="card team-selection-card">
              <h2>Select Team Members</h2>
              <select
                className="team-dropdown"
                multiple
                onChange={handleSelectTeamMembers}
              >
                {students.map((student) => (
                  <option
                    key={student.id}
                    value={student.id}
                    data-department={student.department}
                  >
                    {student.name} ({student.department})
                  </option>
                ))}
              </select>
              <h3>Selected Team Members:</h3>
              <ul className="team-member-list">
                {teamMembers.map((member) => (
                  <li key={member.id} className="team-member-item">
                    {member.name} ({member.department})
                  </li>
                ))}
              </ul>
            </div>

            {/* Mentor Selection */}
            <div id="mentor" className="card mentor-selection-card">
              <h2>Select a Mentor</h2>
              <select
                className="mentor-dropdown"
                value={selectedMentor}
                onChange={handleSelectMentor}
              >
                <option value="">-- Select Mentor --</option>
                {availableMentors.map((mentor, index) => (
                  <option key={index} value={mentor}>
                    {mentor}
                  </option>
                ))}
              </select>
            </div>

            {/* Confirm Button */}
            <button className="confirm-selection-btn" onClick={handleConfirmSelection}>
              Confirm Team and Mentor
            </button>
          </>
        ) : (
          <div id="team-details" className="card team-details-card">
            <h2>Team Details</h2>
            <p><strong>Team ID:</strong> {Math.floor(Math.random() * 1000)}</p>
            <h3>Team Members:</h3>
            <ul>
              {teamMembers.map((member) => (
                <li key={member.id}>
                  {member.name} ({member.department})
                </li>
              ))}
            </ul>
            <h3>Mentor:</h3>
            <p>{selectedMentor}</p>
          </div>
        )}

        {/* Mentor Communication */}
        <div className="card mentor-card">
          <h2>Communicate with Mentor</h2>
          <textarea
            className="mentor-message"
            placeholder="Write your message here..."
            value={mentorMessage}
            onChange={(e) => setMentorMessage(e.target.value)}
          />
          <button
            className="send-message-btn"
            onClick={() => alert(`Message sent to mentor: ${mentorMessage}`)}
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
