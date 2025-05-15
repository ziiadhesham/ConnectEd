import React, { useState } from 'react';
import './LoginForm.css';
import { Link, useNavigate } from 'react-router-dom';
<<<<<<< Updated upstream:FrontEnd/src/Pages/LoginPages/LoginForm.jsx
import axios from 'axios';
=======
import usersAccounts from '../../MockData/usersAccountsData';
>>>>>>> Stashed changes:src/Pages/LoginPages/LoginForm.jsx
import useUserStore from '../../Stores/UseUserStore';

import Logo from './Connectedlogoz.png';
import LogoTitle from './Connectedlogo.png';

const LoginForm = () => {
  const setUserId = useUserStore((state) => state.setUserId);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false); // NEW
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
<<<<<<< Updated upstream:FrontEnd/src/Pages/LoginPages/LoginForm.jsx
    setError('');

    try {
      const response = await axios.post('http://localhost:3001/api/users/login', {
        email,
        password,
      });

      const { token } = response.data;
      localStorage.setItem('token', token); // Save token for later requests

      // Optionally decode the token to get user ID (if needed)
      const payload = JSON.parse(atob(token.split('.')[1]));
      setUserId(payload._id); // Store user ID in Zustand

      navigate('/home');
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.error || 'Login failed. Please try again.'
      );
=======
    setIsLoading(true);
  
    try {
      const response = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }
  
      // Save token and redirect
      localStorage.setItem('token', data.token);
      setUserId(data.user.id);
      navigate('/home');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
>>>>>>> Stashed changes:src/Pages/LoginPages/LoginForm.jsx
    }
  };

  return (
    <div className="page-background">
      <div className="logoTitleContainer">
        <img className="logoTitle" src={LogoTitle} alt="Logo" />
      </div>
      <div className="login-container">
        <div className="logo">
          <img className="logoz" src={Logo} alt="Logo" />
        </div>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
<<<<<<< Updated upstream:FrontEnd/src/Pages/LoginPages/LoginForm.jsx
            required
=======
            required // NEW
>>>>>>> Stashed changes:src/Pages/LoginPages/LoginForm.jsx
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
<<<<<<< Updated upstream:FrontEnd/src/Pages/LoginPages/LoginForm.jsx
            required
=======
            required // NEW
            minLength={6} // NEW
>>>>>>> Stashed changes:src/Pages/LoginPages/LoginForm.jsx
          />
          <button 
            type="submit" 
            className="signin-button"
            disabled={isLoading} // NEW
          >
            {isLoading ? 'Signing In...' : 'Sign In'} 
          </button>

          {error && <p className="error-message">{error}</p>} {/* className added */}

          <button type="button" className="google-button">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
            />
            Sign in with Google
          </button>

          <p style={{ marginTop: '15px' }}>
            <Link
              to="/reset-password"
              style={{ color: '#ccc', textDecoration: 'underline' }}
            >
              Forgot password
            </Link>
          </p>

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