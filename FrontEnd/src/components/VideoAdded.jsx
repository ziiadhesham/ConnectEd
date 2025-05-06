import React from 'react';
import PhotoAvatar from './PhotoAvatar';
import { Box, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

const MainContainer = styled(Box)(({ theme }) => ({
  width: "616px",
  height: "608px",
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const AvatarNameContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  alignSelf: 'flex-start',
  marginLeft: theme.spacing(2),
  marginTop: theme.spacing(2),
}));

const NameTypography = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  fontWeight: 'bold',
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '528px',
  height: '532px',
  borderRadius: 32,
  overflow: 'hidden',
  marginTop: theme.spacing(1),
}));

const StyledImage = styled('img')({
  width: '100%',
  height: '100%',
});

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  color: 'silver',
  top: theme.spacing(1),
  right: theme.spacing(1),
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
}));

export const TimerBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(1),
  left: theme.spacing(2),
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: 'silver',
  padding: theme.spacing(0.5, 1),
  borderRadius: '24px',
  fontSize: 12,
  fontWeight: 'bold',
}));

function VedioAdded() {
  return (
    <MainContainer>
      <AvatarNameContainer>
        <PhotoAvatar />
        <NameTypography variant="subtitle1" color='silver'> moyo shiro</NameTypography> {/* Replace "User Name" with actual data */}
      </AvatarNameContainer>
      <Box sx={{ position: 'relative', mt: 1 }}>
        <ImageContainer>
          <StyledImage
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&w=1200"
            alt="Video Added"
          />
          <CloseButton size="small">
            <CloseIcon sx={{ fontSize: 24 }} />
          </CloseButton>
          <TimerBox>0:09</TimerBox>
        </ImageContainer>
      </Box>
    </MainContainer>
  );
}

export default VedioAdded;

// By SEIF