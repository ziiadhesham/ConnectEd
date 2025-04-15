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
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: isSmallScreen ? 1 : 3,
          WebkitOverflowScrolling: "touch", // smooth scrolling on iOS
          scrollbarWidth: "none", // Firefox
          "&::-webkit-scrollbar": {
            display: "none", // Chrome, Safari, Edge
          },
        }}
      >
        {/* Loop through mock data and display messages */}
        {messages.map((message, index) => (
          <MessageItem key={index} {...message} />
        ))}
      </Box>

      {/* Message Input Box - Fixed at bottom */}
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