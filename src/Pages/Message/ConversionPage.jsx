import React, { useState } from 'react';
import CreateNewConversation from '../../components/CreateNewConversation';
import ConversationItem from '../../components/ConversationItem';
import HeaderPostingformessage from '../../components/HeaderPostingformessage';
import { Box, Paper } from '@mui/material';

const ConversionPage = () => {
  const [isPosting, setIsPosting] = useState(false);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 2,
        padding: '16px',
        backgroundColor: '#1e1e1e',
        color: '#fff',
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      {/* Semi-transparent background overlay */}
      {isPosting && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 10,
          }}
          onClick={() => setIsPosting(false)} // Close when clicking outside
        />
      )}

      {/* Header */}
      <HeaderPostingformessage isPosting={isPosting} setisPosting={setIsPosting} />

      {/* Create New Conversation */}
      {isPosting && (
        <Box
          sx={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 11,
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)', // Shadow for the modal 
            borderRadius: '16px',

                      }}
        >
          <CreateNewConversation />
        </Box>
      )}

      {/* Conversation Items */}
      <Box
  sx={{
    width: '100%',
    maxWidth: '720px',
    backgroundColor: 'rgba(40, 40, 40, 0.7)',
    borderRadius: '12px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: 1.5,
  }}
>
  <ConversationItem name="Kohaku" time="1m" message="I know, right? 🤔 I'm thinking we could use some..." isOnline={true} />
  <ConversationItem name="Moyo Shiro" time="50m" message="Because we need to disable the zoom" isOnline={true} />
  <ConversationItem name="Totoro" time="1h" message="Want to make sure you're aware of the points 1..." isOnline={false} />
  <ConversationItem name="Ryo" time="23h" message="That's so good, I like your style" isOnline={true} />
  <ConversationItem name="Kira Tora" time="1d ago" message="We need to fix the search box" isOnline={false} />
  <ConversationItem name="Wjnd" time="2d ago" message="Is there a good email I could reach you at?" isOnline={false} />
  <ConversationItem name="Spline" time="4 Aug" message="I would change the checkbox 💬" isOnline={false} />
</Box>
    </Box>
  );
};

export default ConversionPage;