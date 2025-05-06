import React, { useReducer } from "react";
import PropTypes from "prop-types";
import { IconButton, InputBase, Typography, Box } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";

export const EmailSettingRow = ({ property1: initialState = "default", className }) => {
  const [state, dispatch] = useReducer(reducer, { property1: initialState });

  const handleMouseEnter = () => dispatch("mouse_enter");
  const handleMouseLeave = () => dispatch("mouse_leave");
  const handleClick = (type) => dispatch(type);

  const email = "moyoshiro@email.com";
  const newEmail = "new-email@email.com";
  const code = "6 7 8 9";
  const codeSentTo = "user@email.com";

  return (
    <Box
      className={`email-setting-row ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        backgroundColor: "#2c2c2e",
        padding: 3,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        fontFamily: "Inter, sans-serif",
        width: 420,
      }}
    >
      {/* DEFAULT */}
      {state.property1 === "default" && (
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center" gap={1}>
            <EmailIcon sx={{ color: "#aaa" }} />
            <Typography sx={{ color: "#aaa" }}>Email</Typography>
            <Typography sx={{ color: "#aaa" }}>{email}</Typography>
          </Box>
        </Box>
      )}

      {/* HOVER */}
      {state.property1 === "hover" && (
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center" gap={1}>
            <EmailIcon sx={{ color: "#aaa" }} />
            <Typography sx={{ color: "#aaa" }}>Email</Typography>
            <Typography sx={{ color: "#aaa" }}>{email}</Typography>
          </Box>
          <Typography
            sx={{ color: "#e0e0e0", cursor: "pointer" }}
            onClick={() => handleClick("click_on")}
          >
            Change email
          </Typography>
        </Box>
      )}

      {/* CLICK ON (edit field) */}
      {state.property1 === "click-on" && (
        <Box display="flex" alignItems="center" gap={1}>
          <EmailIcon sx={{ color: "#aaa" }} />
          <Typography sx={{ color: "#aaa" }}>Email</Typography>
          <InputBase value={email} sx={inputStyle} readOnly />
          <IconButton onClick={() => handleClick("click_118")}> <ArrowForwardIcon sx={{ color: "#ccc" }} /> </IconButton>
        </Box>
      )}

      {/* TYPING NEW EMAIL */}
      {state.property1 === "typing" && (
        <Box display="flex" alignItems="center" gap={1}>
          <EmailIcon sx={{ color: "#aaa" }} />
          <Typography sx={{ color: "#aaa" }}>Email</Typography>
          <InputBase value={newEmail} sx={inputStyle} readOnly />
          <IconButton onClick={() => handleClick("click")}> <CheckIcon sx={{ color: "#ccc" }} /> </IconButton>
        </Box>
      )}

      {/* CODE SENT */}
      {state.property1 === "code-sent" && (
        <>
          <Box display="flex" alignItems="center" gap={1}>
            <EmailIcon sx={{ color: "#aaa" }} />
            <Typography sx={{ color: "#aaa" }}>Email</Typography>
            <InputBase value="Verification code" sx={inputStyle} readOnly />
            <IconButton onClick={() => handleClick("click_134")}> <ArrowForwardIcon sx={{ color: "#ccc" }} /> </IconButton>
          </Box>
          <Typography sx={{ color: "#999", fontSize: 12 }}>
            Code sent to <strong style={{ color: "#e0e0e0" }}>{codeSentTo}</strong>
          </Typography>
          <Box display="flex" gap={2}>
            <Typography sx={{ color: "#ccc", cursor: "pointer", fontSize: 13 }} onClick={() => handleClick("click_153")}>Cancel</Typography>
            <Typography sx={{ color: "#ccc", cursor: "pointer", fontSize: 13 }}>Resend code</Typography>
          </Box>
        </>
      )}

      {/* TYPING CODE */}
      {state.property1 === "typing-code" && (
        <>
          <Box display="flex" alignItems="center" gap={1}>
            <EmailIcon sx={{ color: "#aaa" }} />
            <Typography sx={{ color: "#aaa" }}>Email</Typography>
            <InputBase value={code} sx={inputStyle} readOnly />
            <IconButton onClick={() => handleClick("click_153")}> <ArrowForwardIcon sx={{ color: "#ccc" }} /> </IconButton>
          </Box>
          <Typography sx={{ color: "#999", fontSize: 12 }}>
            Code sent to <strong style={{ color: "#e0e0e0" }}>{codeSentTo}</strong>
          </Typography>
          <Box display="flex" gap={2}>
            <Typography sx={{ color: "#ccc", cursor: "pointer", fontSize: 13 }} onClick={() => handleClick("click_153")}>Cancel</Typography>
            <Typography sx={{ color: "#ccc", cursor: "pointer", fontSize: 13 }}>Resend code</Typography>
          </Box>
        </>
      )}
    </Box>
  );
};

const inputStyle = {
  backgroundColor: "#3c3c3e",
  borderRadius: 2,
  px: 2,
  py: 0.5,
  color: "#ccc",
  fontSize: 14,
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
  minWidth: 220,
};

function reducer(state, action) {
  switch (state.property1) {
    case "default":
      if (action === "mouse_enter") return { property1: "hover" };
      break;
    case "hover":
      if (action === "mouse_leave") return { property1: "default" };
      if (action === "click_on") return { property1: "click-on" };
      break;
    case "click-on":
      if (action === "click_118") return { property1: "typing" };
      break;
    case "typing":
      if (action === "click") return { property1: "code-sent" };
      break;
    case "code-sent":
      if (action === "click_134") return { property1: "typing-code" };
      break;
    case "typing-code":
      if (action === "click_153") return { property1: "default" };
      break;
  }
  return state;
}

EmailSettingRow.propTypes = {
  property1: PropTypes.oneOf([
    "code-sent",
    "default",
    "click-on",
    "hover",
    "typing",
    "typing-code",
  ]),
  className: PropTypes.string,
};

export default EmailSettingRow;