import React from 'react';

const CircularRedButton = ({ onClick, size = 50, color = 'red', backgroundColor = '#333' }) => {
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

  const redXStyle = {
    fontSize: size * 0.6,
    color: color,
    lineHeight: 0,
    fontWeight: 'bold',
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      <span style={redXStyle}>×</span>
    </button>
  );
};

export default CircularRedButton;