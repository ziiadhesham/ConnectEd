import React from 'react';
import { IconButton } from '@mui/material';
import MoodIcon from '@mui/icons-material/Mood';

const SmileyButton = ({ isOn, onClick }) => {
    return (
        <IconButton
            onClick={onClick}
            sx={{
                backgroundColor: isOn ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                borderRadius: '12px',
                width: isOn ? '60px' : '40px',
                height: isOn ? '60px' : '40px',
                transition: 'all 0.3s ease',
                color: isOn ? 'white' : '#9E9E9E',
                '&:hover': {
                    backgroundColor: isOn ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)',
                },
            }}
        >
            <MoodIcon
                sx={{
                    fontSize: isOn ? '32px' : '20px',
                }}
            />
        </IconButton>
    );
};

export default SmileyButton;