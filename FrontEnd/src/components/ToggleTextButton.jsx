import React from "react";
import { Box } from "@mui/material";

const ToggleTextButton = ({ tab, handleTabChange, leftText, rightText }) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        bgcolor: "rgba(40, 40, 40, 0.6)",
        borderRadius: "9999px",
        width: "300px",
        height: "40px",
        alignItems: "center",
        padding: "4px",
      }}
    >
      {/* Sliding background */}
      <Box
        sx={{
          position: "absolute",
          top: 4,
          left: tab === "left" ? 4 : "calc(50% + 2px)",
          width: "calc(50% - 6px)",
          height: "40px",
          bgcolor: "rgba(248, 248, 248, 0.05)",
          borderRadius: "9999px",
          transition: "left 0.3s ease-in-out",
          zIndex: 1,
        }}
      />

      {/* Buttons */}
      <Box sx={{ display: "flex", width: "100%", zIndex: 2 }}>
        <button
          onClick={() => handleTabChange("left")}
          style={{
            flex: 1,
            border: "none",
            background: "transparent",
            color: tab === "left" ? "#fff" : "#aaa",
            fontWeight: 600,
            fontSize: "13px",
            cursor: "pointer",
            zIndex: 2,
            padding: "8px 0",
            borderRadius: "9999px",
          }}
        >
          {leftText}
        </button>
        <button
          onClick={() => handleTabChange("right")}
          style={{
            flex: 1,
            border: "none",
            background: "transparent",
            color: tab === "right" ? "#fff" : "#aaa",
            fontWeight: 600,
            fontSize: "13px",
            cursor: "pointer",
            zIndex: 2,
            padding: "8px 0",
            borderRadius: "9999px",
          }}
        >
          {rightText}
        </button>
      </Box>
    </Box>
  );
};

export default ToggleTextButton;
