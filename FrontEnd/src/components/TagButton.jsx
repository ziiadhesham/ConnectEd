import React, { useState, useRef } from 'react';
import { IconButton, Popper, Paper, ClickAwayListener } from '@mui/material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Tag from './Tag'; // Your Tag list component

export default function TagButton() {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <IconButton
        ref={anchorRef}
        onClick={handleToggle}
        sx={{
          backgroundColor: '#trasparent',
          color: 'white',
          '&:hover': {
            backgroundColor: 'rgba(248, 248, 248, 0.02)',
          },
          '&:active': {
            backgroundColor: 'rgba(248, 248, 248, 0.05)',
          },
        }}
      >
        <AlternateEmailIcon />
      </IconButton>

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        placement="bottom-start"
        modifiers={[
          {
            name: 'offset',
            options: {
              offset: [0, 8], // add spacing between button and tag
            },
          },
        ]}
        style={{ zIndex: 1300 }} // ensure it's above other elements
      >
        <ClickAwayListener onClickAway={handleClickAway}>
          <Paper
            elevation={6}
            sx={{
            //   width: 450,
              borderRadius: "32px",
              backgroundColor: 'rgba(248, 248, 248, 0.05)',
              overflow: 'hidden',
            }}
          >
            <Tag />
          </Paper>
        </ClickAwayListener>
      </Popper>
    </div>
  );
}
