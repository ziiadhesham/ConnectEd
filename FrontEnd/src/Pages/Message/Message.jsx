import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Typography,
  Avatar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import messagesData from "../../MockData/MessagesData";
import users from "../../MockData/usersAccountsData";
import MessageItem from "../../components/MessageItem";
import MessageInput from "../../components/MessageInput";
import useConversationStore from "../../Stores/useConversationStore";
import useUserStore from "../../Stores/UseUserStore";

export default function Message() {
  const { selectedUserId } = useConversationStore();
  const { userId } = useUserStore();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const currentUser = users.find((u) => u.id === userId);
  const otherUser = users.find((u) => u.id === selectedUserId);

  const [messages, setMessages] = useState([]);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    const filteredMessages = messagesData.filter(
      (msg) =>
        (msg.senderId === userId && msg.receiverId === selectedUserId) ||
        (msg.senderId === selectedUserId && msg.receiverId === userId)
    );
    setMessages(filteredMessages);
  }, [selectedUserId, userId]);

  const handleSendMessage = (newMessage) => {
    const newMsg = {
      id: messages.length + 1,
      senderId: userId,
      receiverId: selectedUserId,
      message: newMessage,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((prev) => [...prev, newMsg]);
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  if (!otherUser) {
    return (
      <Box sx={{ p: 2, color: "#fff" }}>
        No user selected. Please select a conversation.
      </Box>
    );
  }

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(40, 40, 40, 0.7)",
      }}
    >
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
          src={otherUser.profilePicture}
          alt={otherUser.name}
          sx={{ width: 40, height: 40, mr: 1 }}
        />
        <Box>
          <Typography sx={{ color: "#fff", fontWeight: 600 }}>
            {otherUser.name}
          </Typography>
          <Typography sx={{ color: "#aaa", fontSize: 12 }}>Online</Typography>
        </Box>
      </Box>

      {/* Chat Body */}
      <Box
        ref={chatContainerRef}
        sx={{
          flex: 1,
          overflowY: "scroll",
          padding: isSmallScreen ? "8px" : "16px",
          "&::-webkit-scrollbar": { display: "none" },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        }}
      >
        {messages.map((msg) => {
          const isCurrentUser = msg.senderId === userId;
          const sender = users.find((u) => u.id === msg.senderId);

          let replyInfo = null;
          if (msg.isReply && msg.replyTo) {
            const originalMsg = messages.find((m) => m.id === msg.replyTo);
            const repliedUser = users.find(
              (u) => u.id === originalMsg?.senderId
            );

            replyInfo = {
              name: repliedUser?.name || "Unknown",
              avatar: repliedUser?.profilePicture || "/avatar1.png",
              message: originalMsg?.message || "",
            };
          }

          return (
            <MessageItem
              key={msg.id}
              avatarSrc={sender?.profilePicture || "/avatar1.png"}
              name={sender?.name || "Unknown"}
              time={msg.time}
              message={msg.message}
              image={msg.image || null}
              isReply={msg.isReply}
              replyTo={replyInfo}
            />
          );
        })}
      </Box>

      {/* Input */}
      <Box
        sx={{
          width: "100%",
          position: "sticky",
          bottom: 0,
          backgroundColor: "rgba(40, 40, 40, 0.8)",
          borderTop: "1px solid #333",
          zIndex: 1000,
        }}
      >
        <MessageInput onSendMessage={handleSendMessage} />
      </Box>
    </Box>
  );
}
