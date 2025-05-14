import React, { useState } from 'react';
import './LoginForm.css';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
  const [error, setError] = useState(''); // NEW: Error state

  // NEW: Signup handler (add this function)
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          password: e.target.password.value,
          username: e.target.username.value
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Signup failed');
      }
      
      window.location.href = '/login';
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="page-background">
      <div className="login-container">
        <div className="logo">
          <span>✦</span>
        </div>
        {/* NEW: Add onSubmit to form */}
        <form onSubmit={handleSignup}>
          <input type="text" name="name" placeholder="Full name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="text" name="username" placeholder="Username" required />
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            required 
            minLength={6}
          />
          <button type="submit" className="signin-button">
            Create your account
          </button>
          {/* NEW: Error display */}
          {error && <p style={{ color: 'red', fontSize: '14px', marginTop: '10px' }}>{error}</p>}

          <button className="google-button">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" />
            Sign up with Google
          </button>
          <p>Already have an account? <Link to="../">Sign in</Link></p>
        </form>
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