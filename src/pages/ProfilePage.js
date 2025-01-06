import React, { useState, useEffect } from 'react';
import '../styles/Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'Student',
      bio: 'Passionate about web development and AI.',
      location: 'San Francisco, CA',
      profilePic: 'https://via.placeholder.com/150', // Placeholder image
      registrationNumber: 'S1234567',
      yearOfGraduation: 2025,
      dateOfBirth: '2003-01-15',
    };
    setUser(userData);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Implement save functionality here
    console.log("Profile saved", user);
  };

  return (
    <div className="profile-container">
      {user ? (
        <div className="profile-content">
          {/* Left Section: Profile Picture and Editable Name/Role */}
          <div className="profile-left">
            <img
              src={user.profilePic}
              alt={`${user.name}'s Profile`}
              className="profile-pic"
            />
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleInputChange}
              className="editable-input profile-name-input"
            />
            <input
              type="text"
              name="role"
              value={user.role}
              onChange={handleInputChange}
              className="editable-input role-input"
            />
          </div>

          {/* Right Section: Editable Details */}
          <div className="profile-right">
            <h2>Personal Info</h2>
            <div className="form-group">
              <label>Full Name:</label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputChange}
                className="editable-input"
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleInputChange}
                className="editable-input"
              />
            </div>
            <div className="form-group">
              <label>Registration Number:</label>
              <input
                type="text"
                name="registrationNumber"
                value={user.registrationNumber}
                onChange={handleInputChange}
                className="editable-input"
              />
            </div>
            <div className="form-group">
              <label>Year of Graduation:</label>
              <input
                type="number"
                name="yearOfGraduation"
                value={user.yearOfGraduation}
                onChange={handleInputChange}
                className="editable-input"
              />
            </div>
            <div className="form-group">
              <label>Date of Birth:</label>
              <input
                type="date"
                name="dateOfBirth"
                value={user.dateOfBirth}
                onChange={handleInputChange}
                className="editable-input"
              />
            </div>

            <div className="additional-info">
              <h2>About</h2>
              <div className="form-group">
                <label>Bio:</label>
                <textarea
                  name="bio"
                  value={user.bio}
                  onChange={handleInputChange}
                  className="editable-textarea"
                />
              </div>
              <div className="form-group">
                <label>Location:</label>
                <input
                  type="text"
                  name="location"
                  value={user.location}
                  onChange={handleInputChange}
                  className="editable-input"
                />
              </div>
            </div>

            {/* Save Button */}
            <button onClick={handleSave} className="save-button">
              Save
            </button>
          </div>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Profile;
