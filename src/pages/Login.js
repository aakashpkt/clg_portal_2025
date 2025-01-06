import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import '../styles/LoginPage.css';

function LoginPage({ onLogin }) {
  const [regNumber, setRegNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation
    if (!regNumber || !password) {
      setError("Please enter both registration number and password.");
      return;
    }

    // Replace with actual validation logic or API call
    const isValid = regNumber === "12345" && password === "password"; // Dummy validation

    if (!isValid) {
      setError("Invalid registration number or password.");
    } else {
      setError(""); // Clear error message
      onLogin(); // Call onLogin to set isAuthenticated to true
      navigate("/dashboard"); // Redirect to the dashboard after successful login
    }
  };

  return (
    <div className="background-container">
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="regNumber">Registration Number</label>
            <input
              type="text"
              id="regNumber"
              placeholder="Enter your registration number"
              value={regNumber} // Bind input to state
              onChange={(e) => setRegNumber(e.target.value)} // Update state on change
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password} // Bind input to state
              onChange={(e) => setPassword(e.target.value)} // Update state on change
            />
          </div>
          {error && <p className="error-message">{error}</p>} {/* Show error message if any */}
          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>
        <a href="/forgot-password" className="forgot-password">
          Forgot Password?
        </a>
      </div>

      {/* Logo Section */}
      <div className="logo-container">
        <div className="logo">
          <span className="logo-advanced">Advanced</span>
          <span className="logo-studies">Studies</span>
        </div>
        <p className="department-text">Department of Cybersecurity</p>
      </div>
    </div>
  );
}

export default LoginPage;
