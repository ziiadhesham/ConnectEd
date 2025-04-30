import React, { useEffect, useState } from "react";
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
import useConversationStore from "../../Stores/useConversationStore";

const ConversationSideBar = () => {
  const { setSelectedUserId } = useConversationStore();

  const [tab, setTab] = useState("left");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const { userId } = useUserStore();

  // Get current user
  const currentUser = users.find(user => user.id === userId);
  const following = currentUser?.following || [];

  // Filter messages where current user is sender or receiver
  const userMessages = messages.filter(
    (msg) => msg.senderId === userId || msg.receiverId === userId
  );

  

  // Create map of last message per other user
  const conversationMap = new Map();

  userMessages.forEach((msg) => {
    const otherUserId = msg.senderId === userId ? msg.receiverId : msg.senderId;

    // Always use the latest message by id (or sort by timestamp if available)
    if (
      !conversationMap.has(otherUserId) ||
      conversationMap.get(otherUserId).id < msg.id
    ) {
      conversationMap.set(otherUserId, msg);
    }
  });

  const conversationsToDisplay = Array.from(conversationMap.entries()).map(
    ([otherUserId, message]) => {
      const otherUser = users.find((u) => u.id === otherUserId);

      return {
        id: otherUserId,
        name: otherUser?.name || "Unknown",
        avatarUrl: otherUser?.profilePicture || "",
        message: message.message,
        time: message.time,
        image: message.image || null,
      };
    }
  );

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
          {conversationsToDisplay.map((conv, index) => (
           <Box
           key={conv.id}
           onClick={() => {
             setSelectedIndex(index);
             setSelectedUserId(conv.id); // store the selected user's ID
           }}
           sx={{ cursor: "pointer", mb: "10px" }}
         >
          
              <ConversationItem
                name={conv.name}
                message={conv.message}
                time={conv.time}
                avatarUrl={conv.avatarUrl}
                image={conv.image} // optional, if your component uses it
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
