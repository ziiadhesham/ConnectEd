import React from 'react';

const CircularCheckButton = ({ onClick, size = 50, color = 'white', backgroundColor = '#333' }) => {
  const buttonStyle = {
    width: 40,
    height: 40,
    borderRadius: '50%',
    backgroundColor: backgroundColor,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
  };

  const checkStyle = {
    fontSize: size * 0.6, // Adjust check size relative to button size
    color: color,
    lineHeight: 0, // Remove extra line height
    fontWeight: 'bold', // Make the checkmark bolder
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      <span style={checkStyle}>✓</span>
    </button>
  );
};

export default CircularCheckButton;