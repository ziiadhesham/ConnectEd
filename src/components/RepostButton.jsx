import React, { useState } from "react";
import { IconButton, Box, Typography } from "@mui/material";
import RepeatIcon from "@mui/icons-material/Repeat";

const RepostButton = ({ initialReposts = 12 }) => {
  const [reposted, setReposted] = useState(false);
  const [interaction, setInteraction] = useState("default");
  const [repostes, setRepostes] = useState(initialReposts);

  const handleToggle = () => {
    setReposted((prev) => !prev);
    setRepostes((prev) => (reposted ? prev - 1 : prev + 1));
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
      <IconButton sx={{ color: reposted ? "green" : "white", padding: 0 }}>
        <RepeatIcon />
      </IconButton>
      <Typography sx={{ color: "white", fontSize: 16 }}>{repostes}</Typography>
    </Box>
  );
};

export default RepostButton;
