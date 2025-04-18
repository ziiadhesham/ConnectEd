import React, { useState } from 'react';
import './LoginForm.css';
import { Link, useNavigate } from 'react-router-dom';
import usersAccounts from '../../MockData/usersAccountsData'; // Import mock user data

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handle form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Check if user exists with the provided email and password
    const user = usersAccounts.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      // Successful login, redirect to home page
      navigate('/home');
    } else {
      // Show error if credentials are invalid
      setError('Invalid email or password');
    }
  };

  return (
    <div className="page-background">
      <div className="login-container">
        <div className="logo">
          <span>✦</span>
        </div>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="signin-button">
            Sign In
          </button>

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <button className="google-button">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" />
            Sign in with Google
          </button>

          {/* Forgot password link */}
          <p style={{ marginTop: '15px' }}>
            <Link to="/reset-password" style={{ color: '#ccc', textDecoration: 'underline' }}>
              Forgot password
            </Link>
          </p>

          {/* Sign up redirect */}
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>

      <div className="footer">
        <p>
          Join over <strong>2M</strong> global social media users
        </p>
        <div className="avatars">
          <img src="https://i.pravatar.cc/40?img=5" alt="avatar" />
          <img src="https://i.pravatar.cc/40?img=6" alt="avatar" />
          <img src="https://i.pravatar.cc/40?img=7" alt="avatar" />
          <img src="https://i.pravatar.cc/40?img=8" alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
