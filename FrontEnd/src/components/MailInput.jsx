import React, { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const EmailInput = ({ placeholder }) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValid = isValidEmail(value);
  const isInvalid = value && !isValid;

  const getStyles = () => {
    if (!value) {
      if (isPressed) return { background: "#12121233", border: "none", borderRadius: "12px" };
      if (isHovered) return { background: "#F8F8F81A", border: "none", borderRadius: "12px" };
      if (isFocused) return { background: "#F8F8F80D", border: "1.5px solid #F8F8F840", borderRadius: "12px" };
      return { background: "#F8F8F80D", border: "none", borderRadius: "12px" };
    } else {
      if (isInvalid) return { background: "#F8F8F80D", border: "2px solid #ff4d4d", borderRadius: "12px" };
      if (isPressed) return { background: "#12121233", border: "1px solid #777", borderRadius: "12px" };
      if (isHovered) return { background: "#F8F8F81A", border: "1px solid #555", borderRadius: "12px" };
      if (isFocused) return { background: "#F8F8F80D", border: "2px solid #FFF", borderRadius: "12px" };
      return { background: "#F8F8F80D", border: "1.5px solid #F8F8F8", borderRadius: "12px" };
    }
  };

  return (
    <TextField
      type="email"
      variant="outlined"
      placeholder={placeholder || "Email"}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsPressed(true)}
      error={isInvalid}
      sx={{
        width: "287px",
        borderRadius: "12px",
        ...getStyles(),
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused": {
            border: "none",
            boxShadow: "none",
          },
          "& fieldset": {
            border: "none",
          },
        },
      }}
      InputLabelProps={{
        shrink: value || isFocused,
        sx: {
          position: "absolute",
          top: value || isFocused ? "-0px" : "50%",
          left: "10px",
          transform: "translateY(-50%)",
          color: "#F8F8F8B2",
          fontSize: "12px",
          transition: "top 0.3s ease, font-size 0.3s ease",
          "&.Mui-focused": {
            color: "#F8F8F8B2",
          },
        },
      }}
      InputProps={{
        sx: {
          borderRadius: "12px",
          color: "#F8F8F8F2",
        },
        endAdornment: value && (
          <InputAdornment position="end">
            {isValid ? (
              <CheckCircleIcon sx={{ color: "#4caf50" }} />
            ) : (
              <ErrorOutlineIcon sx={{ color: "#ff4d4d" }} />
            )}
          </InputAdornment>
        ),
      }}
      label={placeholder}
    />
  );
};

export default EmailInput;
