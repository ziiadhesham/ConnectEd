import React from 'react';

const CircularPlusButton = ({ onClick, size = 50, color = 'white', backgroundColor = '#333' }) => {
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

  const plusStyle = {
    fontSize: size * 0.6, // Adjust plus size relative to button size
    color: color,
    lineHeight: 0, // Remove extra line height
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      <span style={plusStyle}>+</span>
    </button>
  );
};

export default CircularPlusButton;