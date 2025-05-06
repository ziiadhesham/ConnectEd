import React from 'react';
import './ResetPassword.css';
import { Link } from 'react-router-dom';

const ConfirmPassword = () => {
  return (
    <div className="page-background">
      <div className="login-container">
        <div className="logo">
          <span>✦</span>
        </div>
       
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        
        <button className="signin-button">Create New Password</button>

        {/* Add the "Got Your Password? Sign In" link here */}
        <p style={{ marginTop: '15px' }}>
          Got Your Password? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default ConfirmPassword;
