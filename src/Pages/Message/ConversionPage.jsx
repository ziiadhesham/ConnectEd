import React, { useState } from "react";
import {
  Box,
  IconButton,
  Avatar,
  Typography,
  Stack,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import ConversationItem from "../../components/ConversationItem";
import ToggleTextButton from "../../components/ToggleTextButton";
import ComposerInput from "../../components/ComposerInput";
import CreateNewConversation from "../../components/CreateNewConversation";

const ConversionPage = () => {
  const [tab, setTab] = useState("left");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleTabChange = (newTab) => setTab(newTab);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const users = [
    {
      name: "Kohaku",
      message: "I'm thinking we could use som...",
      time: "1m",
      avatarUrl: "https://i.pravatar.cc/40?img=6",
    },
    {
      name: "Moyo Shiro",
      message: "Because we need to disable the zoom",
      time: "50m",
      avatarUrl: "https://i.pravatar.cc/40?img=7",
    },
    {
      name: "Totoro",
      message: "Want to make sure you're aware of the points t...",
      time: "1h",
      avatarUrl: "https://i.pravatar.cc/40?img=8",
    },
    {
      name: "Ryo",
      message: "That's so good. I like your style",
      time: "23h",
      avatarUrl: "https://i.pravatar.cc/40?img=9",
    },
    {
      name: "Kira Tora",
      message: "We need to fix the search box",
      time: "1d",
      avatarUrl: "https://i.pravatar.cc/40?img=10",
    },
  ];

  const onlineUsers = [
    "https://i.pravatar.cc/40?img=11",
    "https://i.pravatar.cc/40?img=12",
    "https://i.pravatar.cc/40?img=13",
    "https://i.pravatar.cc/40?img=14",
    "https://i.pravatar.cc/40?img=15",
  ];

  return (
    <>
      <Box
        sx={{
          width: "360px",
          backgroundColor: "rgba(40, 40, 40, 0.8)",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        {/* Search and Add */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
          <ComposerInput />
          <IconButton
            onClick={handleOpenModal}
            sx={{
              backgroundColor: "#2a2a2a",
              borderRadius: "50%",
              color: "#fff",
              ml: 1,
            }}
          >
            <AddIcon />
          </IconButton>
        </Box>

        {/* Tabs */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
          <ToggleTextButton
            tab={tab}
            handleTabChange={handleTabChange}
            leftText="Primary"
            rightText="Request"
          />
        </Box>

        {/* Conversation List */}
        <Box sx={{ flex: 1, overflowY: "auto", pr: 1 }}>
          {users.map((user, index) => (
            <Box
              key={index}
              onClick={() => setSelectedIndex(index)}
              sx={{ cursor: "pointer", mb: "10px" }}
            >
              <ConversationItem
                name={user.name}
                message={user.message}
                time={user.time}
                avatarUrl={user.avatarUrl}
                state={selectedIndex === index ? "selected" : "default"}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Modal */}
      {showModal && (
        <Box
          onClick={handleCloseModal}
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box onClick={(e) => e.stopPropagation()}>
            <CreateNewConversation onClose={handleCloseModal} />
          </Box>
          <IconButton
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              backgroundColor: "rgba(40, 40, 40, 0.7)",
              color: "#fff",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#2A2A2A",
              },
            }}
          >
            <CloseIcon sx={{ color: "#ccc" }} />
          </IconButton>
        </Box>
      )}
    </>
  );
};

export default ConversionPage;