import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { useState } from "react";
import { Tooltip } from "@mui/material";

const Check = ({active=false}) => {
  const [online, setOnline] = useState(active);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  return (
      <div 
        onClick={() => setOnline(!online)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        style={{
        
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          transition: "color 0.3s ease-in-out",
          color: isPressed
            ? "#F8F8F833" 
            : isHovered
              ? "#F8F8F866"
            : "#F8F8F840",
        }}
      >
        {online ? <RadioButtonCheckedIcon style={{ fontSize:"1rem" }} /> : <RadioButtonUncheckedIcon style={{ fontSize:"1rem" }} />}
      </div>

  );
};

export default Check;
