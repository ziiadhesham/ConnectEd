import React from 'react';
import './LoginForm.css';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div className="page-background">
      <div className="login-container">
        <div className="logo">
          <span>✦</span>
        </div>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="signin-button">Sign In</button>
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
