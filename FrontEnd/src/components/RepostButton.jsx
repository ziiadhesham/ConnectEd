import React, { useState, useEffect } from "react";
import { IconButton, Box, Typography } from "@mui/material";
import RepeatIcon from "@mui/icons-material/Repeat";
import useUserStore from "../Stores/UseUserStore";
import axiosInstance from "../config/axiosInstance";

const RepostButton = ({ initialReposts = 0, postId, repostedby = [], postOwnerId }) => {
  const { userId } = useUserStore();

  const [reposted, setReposted] = useState(false);
  const [interaction, setInteraction] = useState("default");
  const [repostes, setRepostes] = useState(initialReposts);

  useEffect(() => {
    if (Array.isArray(repostedby) && repostedby.includes(userId)) {
      setReposted(true);
    }
  }, [repostedby, userId]);

  const handleToggle = async (e) => {
    e.stopPropagation();
    if (!userId || !postId) return;

    try {
      // Toggle repost
      const res = await axiosInstance.post(`/posts/${postId}/repost/${userId}`);
      const newCount = res.data.repostsCount;
      const justReposted = !reposted;

      setRepostes(newCount);
      setReposted(justReposted);

      // Send notification if it's a new repost and not user's own post
      if (justReposted && userId !== postOwnerId) {
        await axiosInstance.post("/notifications", {
          type: "repost",
          senderId: userId,
          receiverId: postOwnerId,
          text: "reposted your post",
        });
      }
    } catch (err) {
      console.error("Failed to repost or send notification:");
      console.error("Message:", err.message);
      console.error("Response data:", err.response?.data);
      console.error("Stack:", err.stack);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: "50px",
        display: "inline-flex",
        alignItems: "center",
        gap: 1,
        padding: "5px 10px",
        borderRadius: 20,
        backgroundColor:
          interaction === "press"
            ? "#282828"
            : interaction === "hover"
            ? "rgba(248, 248, 248, 0.23)"
            : reposted
            ? "#2e7d32"
            : "transparent",
        cursor: "pointer",
        transition: "background-color 0.2s ease",
      }}
      onClick={handleToggle}
      onMouseEnter={() => setInteraction("hover")}
      onMouseLeave={() => setInteraction("default")}
      onMouseDown={() => setInteraction("press")}
      onMouseUp={() => setInteraction("hover")}
    >
      <IconButton
        sx={{
          color: reposted ? "green" : "rgba(248, 248, 248, 0.7)",
          padding: 0,
        }}
      >
        <RepeatIcon />
      </IconButton>
      <Typography sx={{ color: "rgba(248, 248, 248, 0.7)", fontSize: 16 }}>
        {repostes}
      </Typography>
    </Box>
  );
};

export default RepostButton;
