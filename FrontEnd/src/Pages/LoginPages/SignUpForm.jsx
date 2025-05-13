import React, { useState } from 'react';
import './LoginForm.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUpForm = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handle form submission
  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const newUser = {
        name: fullName,
        username,
        email,
        password,
      };

      // Make the API call to create a new user
      const response = await axios.post('http://localhost:3001/api/users', newUser);

      // On success, navigate to the login page or home page
      console.log('Sign up successful:', response.data);
      navigate('/'); // or another page you want to redirect to after sign up

    } catch (error) {
      console.error('Sign up failed:', error.response?.data);
      setError(error.response?.data?.error || 'Sign up failed');
    }
  };

  return (
    <div className="page-background">
      <div className="login-container">
        <div className="logo">
          <span>✦</span>
        </div>

        {/* Sign Up Form */}
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="Full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="signin-button">
            Create your account
          </button>
        </form>

        {/* Google SignUp Button */}
        <button className="google-button">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" />
          Sign up with Google
        </button>

        {/* Error Message */}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <p>
          Already have an account? <Link to="/">Sign in</Link>
        </p>
      </div>

      <div className="footer">
        <p>
          Join over <strong>2M</strong> global social media users
        </p>
        <div className="avatars">
          <img src="https://i.pravatar.cc/40?img=1" alt="avatar" />
          <img src="https://i.pravatar.cc/40?img=2" alt="avatar" />
          <img src="https://i.pravatar.cc/40?img=3" alt="avatar" />
          <img src="https://i.pravatar.cc/40?img=4" alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
