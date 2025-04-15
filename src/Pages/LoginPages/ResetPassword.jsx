import React from 'react';
import './ResetPassword.css';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  return (
    <div className="page-background">
      <div className="login-container">
        <div className="logo">
          <span>✦</span>
        </div>
       
        <input type="email" placeholder="Email" />
        <Link to="/reset-password/confirm">
          <button className="signin-button">Reset Password</button>
        </Link>
        
    
      </div>
    </div>
  );
};

/* <p style={{ marginTop: '15px' }}>
          Got Your Password? <Link to="/login">Sign In</Link>
        </p> */ 
export default ResetPassword;
