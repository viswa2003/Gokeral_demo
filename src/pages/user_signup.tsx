import React, { useState } from 'react';
import '../styles/user_signup.css'; // import plain CSS (not a CSS module)

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
    // Handle signup logic here, e.g., API call
    console.log('Signing up with:', { username, email, password });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h2>User Signup</h2>
        <div className="inputContainer">
          <label htmlFor="username" className="label">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            required
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="email" className="label">Email ID</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            required
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="password" className="label">New Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            required
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="confirmPassword" className="label">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="input"
            required
          />
        </div>
        <button type="submit" className="button">Sign Up</button>
      </form>
    </div>
  );
};

export default UserSignup;