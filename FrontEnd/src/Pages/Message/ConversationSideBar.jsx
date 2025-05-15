import React, { useEffect, useState } from "react";
import {
  Box,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import ConversationItem from "../../components/ConversationItem";
import ToggleTextButton from "../../components/ToggleTextButton";
import CreateNewConversation from "../../components/CreateNewConversation";
import useUserStore from "../../Stores/UseUserStore";
import useConversationStore from "../../Stores/useConversationStore";
import axiosInstance from "../../config/axiosInstance";

const ConversationSideBar = () => {
  const { setSelectedUserId } = useConversationStore();
  const { userId } = useUserStore();

  const [tab, setTab] = useState("left");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [conversationsToDisplay, setConversationsToDisplay] = useState([]);

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        // const res = await fetch(`/api/messages/user/${userId}`, {
        //   headers: {
        //     Authorization: `Bearer ${localStorage.getItem("token")}`,
        //   },
        // });
        const res = await axiosInstance.get(`/messages/user/${userId}`);
        const data = await res.data;

        // Create a map of last message per conversation partner
        const map = new Map();

        data.forEach((msg) => {
          const otherUser =
            msg.senderId._id === userId ? msg.receiverId : msg.senderId;
          const key = otherUser._id;

          if (!map.has(key) || new Date(map.get(key).time) < new Date(msg.time)) {
            map.set(key, {
              id: otherUser._id,
              name: otherUser.name,
              avatarUrl: otherUser.profilePicture,
              message: msg.message,
              time: new Date(msg.time).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
              image: msg.image || null,
            });
          }
        });

        setConversationsToDisplay(Array.from(map.values()));
      } catch (error) {
        console.error("Failed to fetch messages:", error);
      }
    };

    fetchConversations();
  }, [userId]);

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
        {/* Tabs + Add Button */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1, mt: 1, alignItems: "center" }}>
          {/* <ToggleTextButton
            tab={tab}
            handleTabChange={handleTabChange}
            leftText="Primary"
            rightText="Request"
          /> */}
          <div style={{ fontSize: "22px", color: "#fff" }}>Messages</div>
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

        {/* Conversation List */}
        <Box sx={{ flex: 1, overflowY: "auto", pr: 1 }}>
          {conversationsToDisplay.map((conv, index) => (
            <Box
              key={conv.id}
              onClick={() => {
                setSelectedIndex(index);
                setSelectedUserId(conv.id);
              }}
              sx={{ cursor: "pointer", mb: "10px" }}
            >
              <ConversationItem
                name={conv.name}
                message={conv.message}
                time={conv.time}
                avatarUrl={conv.avatarUrl}
                image={conv.image}
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
