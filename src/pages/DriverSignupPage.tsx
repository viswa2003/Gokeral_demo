import React, { useState } from "react";
import "../styles/DriveSignup.css";

export default function DriverSignUpPage() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setError(""); // Reset error on new submission

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    console.log("Form submitted successfully:", { userName, email, password });
    // TODO: Add actual signup logic (e.g., API call)
  };

  return (
    <div className="signup-page-container">
      <div className="signup-form-container">
        <form onSubmit={handleSubmit} className="signup-form">
          <h2>Driver Sign Up</h2>
          <p className="signup-subtext">Create your account to start driving with us.</p>

          <div className="form-group">
            <label htmlFor="username">User Name</label>
            <input
              id="username"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email ID</label>
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="form-group">
            <label htmlFor="password">New Password</label>
            <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>

          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="signup-button">Create Account</button>
        </form>
      </div>
    </div>
  );
}