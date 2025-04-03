import React, { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const PasswordInput = ({ placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const getStyles = () => {
    if(!value){
    if ( isPressed) return { background: "#12121233", border: "none", borderRadius: "12px" };
    else if ( isHovered) return { background: "#F8F8F81A", border: "none", borderRadius: "12px" };
    else if ( isFocused) return { background: "#F8F8F80D", border: "1.5px solid #F8F8F840", borderRadius: "12px" };
    else return { background: "#F8F8F80D", border: "none", borderRadius: "12px" };
    }
    else if(value){
    if ( isPressed) return { background: "#12121233", border: "1px solid #777", borderRadius: "12px" };
    if ( isHovered) return { background: "#F8F8F81A", border: "1px solid #555", borderRadius: "12px" };
    if ( isFocused) return  { background: "#F8F8F80D", border: "2px solid #FFF", borderRadius: "12px" };
    else return { background: "#F8F8F80D", border: "1.5px solid #F8F8F8", borderRadius: "12px" };
    }
    
  };

  return (
    <TextField
      type={showPassword ? "text" : "password"}
      variant="outlined"
      placeholder={placeholder || "Password"}
      value={value}
      onChange={handleChange}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsPressed(true)}
      //{onMouseUp={() => setIsPressed(false)}}
      sx={{ width: "287px", borderRadius: "12px", ...getStyles(), "& .MuiOutlinedInput-root": {
  "&.Mui-focused": {
    border: "none",  // Remove the default blue border color
    boxShadow: "none",  // Remove any focus shadow (if applied)
  },
  "& fieldset": {
    border: "none",  // Remove the default border styling
  },
}
}}
      InputLabelProps={{
        shrink: value || isFocused, // Ensure label is inside the border when typing or focused
        sx: {
          position: "absolute",
          top: value || isFocused ? "-0px" : "50%",
          left: "10px",
          transform: "translateY(-50%)",
          color:  "#F8F8F8B2" ,
         fontSize:  "12px",
          transition: "top 0.3s ease, font-size 0.3s ease",
          "&.Mui-focused": {
            color: "#F8F8F8B2", // Prevent blue color on focus
          },
        },
      }}
      InputProps={{
        sx: { borderRadius: "12px",
          color: "#F8F8F8F2"
         },
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleTogglePassword} sx={{ color: "#F8F8F8B2" }} edge="end">
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      label={placeholder}
    />  
  );
};

export default PasswordInput;
