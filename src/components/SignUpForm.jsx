import React from 'react';
import './LoginForm.css';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
  return (
    <div className="page-background">
      <div className="login-container">
        <div className="logo">
          <span>✦</span>
        </div>
        <input type="text" placeholder="Full name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="signin-button">Create your account</button>
        <button className="google-button">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" />
          Sign up with Google
        </button>
        <p>Already have an account? <Link to="/login">Sign in</Link></p>
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
