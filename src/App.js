import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import ResetPassword from './components/ResetPassword'; 
import ConfirmPassword from './components/ConfirmPassword';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginForm />} />
         

          <Route path="/signup" element={<SignUpForm />} />     
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/reset-password/confirm" element={<ConfirmPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
