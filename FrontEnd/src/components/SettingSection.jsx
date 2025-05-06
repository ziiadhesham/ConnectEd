import React, { useState } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SettingSection = ({ title = 'ACCOUNT', children }) => {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const containerStyle = {
    borderRadius: '12px',
    padding: '16px',
    marginBottom: '12px',
    cursor: 'pointer',
    transition: 'border 0.3s ease',
    border: hovered ? '1px solid #888' : '1px solid transparent',
    maxWidth: '300px',
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: 'transparent',
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: open ? 'rgba(207, 207, 207, 0.55)' : '#cfcfcf',
    fontWeight: 'bold',
    fontSize: '14px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    transition: 'color 0.3s ease',
  };

  const contentStyle = {
    marginTop: '12px',
    display: open ? 'block' : 'none',
    color: '#e0e0e0',
    fontSize: '14px',
    lineHeight: '1.6',
  };

  return (
    <div
      style={containerStyle}
      onClick={() => setOpen(!open)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={headerStyle}>
        {title}
        {open ? <ExpandLessIcon fontSize="small" /> : <ExpandMoreIcon fontSize="small" />}
      </div>
      <div style={contentStyle}>{children}</div>
    </div>
  );
};

export default SettingSection;
