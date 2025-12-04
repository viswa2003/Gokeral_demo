import React, { useState } from 'react';
import '../styles/user_signup.css';

const UserSignup: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log('Signing up with:', { username, email, password });
  };

  return (
    <div className="backgroundImage">
      <div className="container">
        <div className="card">
          <div className="cardHeader">
            <div className="logo">
              <img src="../assets/logo.png" alt="logo" />
            </div>
            <div className="brand">
              <h2>GoKerala</h2>
              <p className="tagline">Explore God's Own Country</p>
            </div>
          </div>


          <form onSubmit={handleSubmit} className="formCard">
            <label htmlFor="username" className="label">Username</label>
            <input
              id="username"
              type="text"
              className="input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />

            <label htmlFor="email" className="label">Email</label>
            <input
              id="email"
              type="email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />

            <label htmlFor="password" className="label">Password</label>
            <input
              id="password"
              type="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />

            <label htmlFor="confirmPassword" className="label">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              className="input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />

            <button type="submit" className="button">Sign Up</button>
          </form>

          <div className="cardFooter">
            <span>Don't have an account? <a href="/signin">Sign In</a></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;