import React, { useState } from "react";
import { Card, CardMedia,  IconButton } from "@mui/material";
import { styled } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";

const StyledCard = styled(Card)(({ state }) => ({
  width: 120,
  height: 80,
  borderRadius: 10,
  overflow: "hidden",
  position: "relative",
  cursor: "pointer",
  transition: "transform 0.2s ease-in-out, opacity 0.3s",
  opacity: state === "disabled" ? 0.4 : 1,
  border: state === "focus" ? "2px solidrgb(255, 255, 255)" : "none",
  transform: state === "hover" ? "scale(1.05)" : state === "press" ? "scale(0.95)" : "none",
}));

const PlusIcon = styled(IconButton)(({ visible }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  color: "white",
  opacity: visible ? 1 : 0,
  transition: "opacity 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Prevents hover color change
  },
}));


const GifPhoto = ({ src }) => {
  const [state, setState] = useState("default");

  return (
    <StyledCard
      state={state}
      tabIndex={0}
      onMouseEnter={() => setState("hover")}
      onMouseLeave={() => setState("default")}
      onMouseDown={() => setState("press")}
      onMouseUp={() => setState("hover")}
      onFocus={() => setState("focus")}
      onBlur={() => setState("default")}
      onDoubleClick={() => setState("disabled")}
    >
      <CardMedia component="img" image={src} alt="GIF" sx={{ width: "100%", height: "100%" }} />
      <PlusIcon visible={state === "hover" || state === "press"}>
        <AddIcon />
      </PlusIcon>
    </StyledCard>
  );
};

export default GifPhoto;