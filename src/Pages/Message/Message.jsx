import React, { useState } from "react";
import { Box, Typography, Avatar, useMediaQuery, useTheme } from "@mui/material";
import { messages as initialMessages } from "../../MockData/MessagesData"; // Adjust path if needed
import MessageItem from "../../components/MessageItem"; // Adjust path if needed
import MessageInput from "../../components/MessageInput";

export default function Message() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [messages, setMessages] = useState(initialMessages); // State to store messages

  const handleSendMessage = (newMessage) => {
    // Add the new message to the message list
    setMessages([
      ...messages,
      {
        avatarSrc: "https://i.pravatar.cc/150?img=3", // Placeholder avatar
        name: "Kohaku", // Placeholder name
        time: new Date().toLocaleTimeString(), // Current time
        message: newMessage,
      },
    ]);
  };

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column", backgroundColor: "rgba(40, 40, 40, 0.7)" }}>
      {/* Header */}
      <Box
        sx={{
          height: 64,
          px: 2,
          py: 1,
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid #333",
        }}
      >
        <Avatar
          src="https://i.pravatar.cc/150?img=3"
          alt="User Avatar"
          sx={{ width: 40, height: 40, mr: 1 }}
        />
        <Box>
          <Typography sx={{ color: "#fff", fontWeight: 600 }}>Kohaku</Typography>
          <Typography sx={{ color: "#aaa", fontSize: 12 }}>Online</Typography>
        </Box>
      </Box>

      {/* Chat Body */}
      <Box
        sx={{
          flex: 1,
          overflowY: "scroll",
          padding: isSmallScreen ? "8px" : "16px", // Adjust padding for small screens
        "&::-webkit-scrollbar": {
      display: "none", // Hide the scroll bar for WebKit browsers
    },
    "-ms-overflow-style": "none", // Hide the scroll bar for Internet Explorer
    "scrollbar-width": "none", // Hide the scroll bar for Firefox
  }}
      >
      
        {messages.map((message, index) => (
          <MessageItem key={index} {...message} />
        ))}
      </Box>
      <Box
        sx={{
          width: "100%",
          position: "sticky",
          bottom: 0,
          backgroundColor: "rgba(40, 40, 40, 0.8)",
          borderTop: "1px solid #333",
          zIndex: 1000, // Ensures input stays above messages
        }}
      >
        <MessageInput onSendMessage={handleSendMessage} />
      </Box>
    </Box>
    
  );
} 