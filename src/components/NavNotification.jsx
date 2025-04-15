import React from "react";
import { Box } from "@mui/material";

const NavNotification = ({ tab, handleTabChange, labels = [] }) => {
  const tabCount = labels.length;
  const activeIndex = labels.findIndex(label => label.key === tab);
  const tabWidth = `calc(100% / ${tabCount})`;
  const leftOffset = `calc(${tabWidth} * ${activeIndex})`;

  return (
    // <div style={{ color: "white" , display: 'inline', backgroundColor: "red"}}>TESST</div>
    <Box
      sx={{
        position: "relative",
        display: "flex",
        bgcolor: "rgba(40, 40, 40, 0.6)",
        borderRadius: "9999px",
        width: "100%",
        maxWidth: "776px",
        height: "40px",
        alignItems: "center",
        padding: "4px",
        marginLeft: "0px",
      }}
    >
      {/* Sliding background */}
      <Box
        sx={{
          marginLeft: "4px",
          position: "absolute",
          top: 4,
          left: leftOffset,
          width: `calc(${tabWidth} - 8px)`,
          height: "40px",
          bgcolor: "rgba(248, 248, 248, 0.08)",
          borderRadius: "9999px",
          transition: "left 0.3s ease-in-out",
          zIndex: 1,
        }}
      />

      {/* Buttons */}
      <Box sx={{ display: "flex", width: "100%", zIndex: 2 }}>
        {labels.map((label) => (
          <button
            key={label.key}
            onClick={() => handleTabChange(label.key)}
            style={{
              flex: 1,
              border: "none",
              background: "transparent",
              color: tab === label.key ? "#fff" : "#aaa",
              fontWeight: 600,
              fontSize: "13px",
              cursor: "pointer",
              zIndex: 2,
              padding: "8px 0",
              borderRadius: "9999px",
            }}
          >
            {label.text}
          </button>
        ))}
      </Box>
    </Box>
  );
};

export default NavNotification;
