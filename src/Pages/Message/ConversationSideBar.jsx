import React, { useState } from "react";
import {
  Box,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import ConversationItem from "../../components/ConversationItem";
import ToggleTextButton from "../../components/ToggleTextButton";
import ComposerInput from "../../components/ComposerInput";
import CreateNewConversation from "../../components/CreateNewConversation";
import useUserStore from "../../Stores/UseUserStore";
import users from "../../MockData/usersAccountsData";
import messages from "../../MockData/MessagesData";

const ConversationSideBar = () => {
  const [tab, setTab] = useState("left");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const { userId } = useUserStore();

  // Find the current user object
  const currentUser = users.find(user => user.id === userId);
console.log(currentUser);

  // Fallback to empty array if following is undefined
  const following = currentUser?.following || [];

  // Show only users that the current user follows
  const usersToDisplay =users.filter(user => following.includes(user.id));
  

  const handleTabChange = (newTab) => setTab(newTab);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Box
        sx={{
          width: "auto",
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
          {usersToDisplay.map((user, index) => (
            <Box
              key={index}
              onClick={() => setSelectedIndex(index)}
              sx={{ cursor: "pointer", mb: "10px" }}
            >
              
          
              <ConversationItem
                name={user.name}
                message={user.message}
                time={user.time}
                avatarUrl={user.profilePicture}
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

export default ConversationSideBar;
