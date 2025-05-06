import React from 'react';
import './ResetPassword.css';
import { Link } from 'react-router-dom';

import Logo from './Connectedlogoz.png'
import LogoTitle from './Connectedlogo.png'

const ResetPassword = () => {
  return (
    <div className="page-background">
      <div className='logoTitleContainerz'>
        <img className='logoTitlez' src={LogoTitle} alt="Logo" />
      </div>
      <div className="login-container">
      <div className="logo">
          
          <img className='logoz' src={Logo} alt="Logo" />
        
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
