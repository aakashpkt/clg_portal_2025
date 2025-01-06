import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = ({ onLogout }) => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          {/* Left Side */}
          <div className="navbar-left">
            <Link to="/" className="navbar-logo">
              My App
            </Link>
            <div className="navbar-links">
              <Link
                to="/dashboard"
                className={`navbar-link ${location.pathname === "/dashboard" ? "active" : ""}`}
              >
                Dashboard
              </Link>
              <Link
                to="/projects"
                className={`navbar-link ${location.pathname === "/projects" ? "active" : ""}`}
              >
                Projects
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="navbar-right">
            <span className="username">John Doe</span>
            <div className="profile">
              <img
                src="https://via.placeholder.com/40" // Replace with the actual profile picture URL
                alt="Profile"
                className="profile-picnav"
                onClick={toggleDropdown}
              />
              <div className="inbox" onClick={toggleNotifications}>
                <i className="fas fa-inbox"></i>
              </div>

              {/* Notifications Dropdown */}
              {isNotificationsOpen && (
                <div className="notifications-dropdown">
                  <div className="notification-item">New message from Alice</div>
                  <div className="notification-item">Project update available</div>
                  <div className="notification-item">Reminder: Submit your report</div>
                </div>
              )}

              {/* Profile Dropdown */}
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <Link to="/profile" className="dropdown-item">Profile</Link>
                  <Link to="/password-reset" className="dropdown-item">Password Reset</Link>
                  <button className="dropdown-item logout-button" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="hamburger-icon" onClick={toggleSidebar}>
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </nav>

      {/* Sidebar (Optional Implementation) */}
      {isSidebarOpen && (
        <div className="sidebar">
          <Link to="/dashboard" onClick={toggleSidebar}>Dashboard</Link>
          <Link to="/projects" onClick={toggleSidebar}>Projects</Link>
          <Link to="/profile" onClick={toggleSidebar}>Profile</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
