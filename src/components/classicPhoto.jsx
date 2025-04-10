import React, { useState } from 'react';
import Card from '@mui/material/Card';

const ClassicPhoto = ({ disabled = false }) => {
  const [state, setState] = useState('default');

  const handleMouseEnter = () => {
    if (!disabled) setState('hover');
  };

  const handleMouseLeave = () => {
    if (!disabled) setState('default');
  };

  const handleMouseDown = () => {
    if (!disabled) setState('press');
  };

  const handleMouseUp = () => {
    if (!disabled) setState('default');
  };

  const handleFocus = () => {
    if (!disabled) setState('focus');
  };

  const handleBlur = () => {
    if (!disabled) setState('default');
  };

  const getImageSource = () => {
    switch (state) {
      case 'focus':
        return 'https://dashboard.codeparrot.ai/api/image/Z_WsHYDi91IKZZvY/photo-16.png';
      case 'hover':
        return 'https://dashboard.codeparrot.ai/api/image/Z_WsHYDi91IKZZvY/photo-16-4.png';
      case 'press':
        return 'https://dashboard.codeparrot.ai/api/image/Z_WsHYDi91IKZZvY/photo-16-5.png';
      case 'disable':
        return 'https://dashboard.codeparrot.ai/api/image/Z_WsHYDi91IKZZvY/photo-16-3.png';
      default:
        return 'https://dashboard.codeparrot.ai/api/image/Z_WsHYDi91IKZZvY/photo-16-2.png';
    }
  };

  const containerStyle = {
    position: 'relative',
    width: '194px',
    height: '128px',
    borderRadius: '24px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    overflow: 'hidden',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: disabled ? 0.5 : 1,
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: state === 'hover' ? 'rgba(248, 248, 248, 0.1)' : 'transparent',
  };

  const focusWrapperStyle = {
    position: 'absolute',
    top: '-4px',
    left: '-4px',
    width: '202px',
    height: '136px',
    borderRadius: '28px',
    border: state === 'focus' ? '1.5px solid #d9d9d9' : 'none',
    backgroundColor: state === 'focus' ? 'rgba(248, 248, 248, 0.1)' : 'transparent',
    pointerEvents: 'none',
  };

  return (
    <Card
      tabIndex={disabled ? -1 : 0}
      style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <img src={getImageSource()} alt="Classic photo" style={imageStyle} />
      <div style={overlayStyle} />
      <div style={focusWrapperStyle} />
    </Card>
  );
};

export default ClassicPhoto;

