import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Typography,
  Avatar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MessageItem from "../../components/MessageItem";
import MessageInput from "../../components/MessageInput";
import useConversationStore from "../../Stores/useConversationStore";
import useUserStore from "../../Stores/UseUserStore";
import axiosInstance from "../../config/axiosInstance";

export default function Message() {
  const { selectedUserId } = useConversationStore();
  const { userId } = useUserStore();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [messages, setMessages] = useState([]);
  const [otherUser, setOtherUser] = useState(null);

  const chatContainerRef = useRef(null);

  // Fetch messages from backend
  useEffect(() => {
    const fetchMessages = async () => {
      if (!userId || !selectedUserId) return;

      try {
        // const res = await fetch(`/api/messages/between/${userId}/${selectedUserId}`, {
        //   headers: {
        //     Authorization: `Bearer ${localStorage.getItem("token")}`,
        //   },
        // });
        const res = await axiosInstance.get(`/messages/between/${userId}/${selectedUserId}`);
        const data = await res.data;
        setMessages(data);

        // Set the other user (from sender or receiver)
        const sampleMessage = data.find(
          (msg) => msg.senderId._id === selectedUserId || msg.receiverId._id === selectedUserId
        );
        if (sampleMessage) {
          const userInfo =
            sampleMessage.senderId._id === selectedUserId
              ? sampleMessage.senderId
              : sampleMessage.receiverId;
          setOtherUser(userInfo);
        }
      } catch (err) {
        console.error("Error fetching messages:", err);
      }
    };

    fetchMessages();
  }, [userId, selectedUserId]);

  // Auto scroll
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // Send a message to backend
  const handleSendMessage = async (newMessage) => {
    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          senderId: userId,
          receiverId: selectedUserId,
          message: newMessage,
        }),
      });

      const savedMsg = await res.json();
      setMessages((prev) => [...prev, savedMsg]);
    } catch (err) {
      console.error("Failed to send message", err);
    }
  };

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
          src={otherUser.profilePicture || "/avatar1.png"}
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
          const isCurrentUser = msg.senderId._id === userId;
          const sender = msg.senderId;

          let replyInfo = null;
          if (msg.isReply && msg.replyTo) {
            const originalMsg = messages.find((m) => m._id === msg.replyTo);
            const repliedUser = originalMsg?.senderId;

            replyInfo = {
              name: repliedUser?.name || "Unknown",
              avatar: repliedUser?.profilePicture || "/avatar1.png",
              message: originalMsg?.message || "",
            };
          }

          return (
            <MessageItem
              key={msg._id}
              avatarSrc={sender?.profilePicture || "/avatar1.png"}
              name={sender?.name || "Unknown"}
              time={new Date(msg.time).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
              message={msg.message}
              image={msg.image || null}
              isReply={msg.isReply}
              replyTo={replyInfo}
              isCurrentUser={isCurrentUser}
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
