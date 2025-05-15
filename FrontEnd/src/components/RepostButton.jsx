import React, { useState, useEffect } from "react";
import { IconButton, Box, Typography } from "@mui/material";
import RepeatIcon from "@mui/icons-material/Repeat";
import useUserStore from "../Stores/UseUserStore";
import axiosInstance from "../config/axiosInstance";

const RepostButton = ({ initialReposts = 0, postId, repostedby = [] }) => {
  const { userId } = useUserStore();

const [reposted, setReposted] = useState(false);

  const [interaction, setInteraction] = useState("default");
  const [repostes, setRepostes] = useState(initialReposts);

  // Sync the reposted state initially
  useEffect(() => {

    if (Array.isArray(repostedby) && repostedby.includes(userId)) {
      setReposted(true);
    }
  }, [repostedby, userId]);

  const handleToggle = async (e) => {
    e.stopPropagation();
    try {
      const res = await axiosInstance.post(`/posts/${postId}/repost/${userId}`);
      const newCount = res.data.repostsCount;
      setRepostes(newCount);
      setReposted((prev) => !prev);
    } catch (err) {
      console.error("Failed to repost:", err);
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
            // dark green background when reposted
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
