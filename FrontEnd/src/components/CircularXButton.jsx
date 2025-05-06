import React from 'react';

const CircularXButton = ({ onClick, size = 50, backgroundColor = '#333' }) => {
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

  const whiteXStyle = {
    fontSize: size * 0.6,
    color: 'white',
    lineHeight: 0,
    fontWeight: 'bold',
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      <span style={whiteXStyle}>×</span>
    </button>
  );
};

export default CircularXButton;