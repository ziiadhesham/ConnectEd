import React from "react";
import { Button, CircularProgress } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

export default function FancyButton({
  placeholder = "Button",
  loading = false,
  success = false,
  disabled = false,
  onClick,
  ...props
}) {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      disabled={disabled || loading}
      sx={{
        boxSizing: "border-box",
        minWidth: "97px",
        height: "44px",
        borderRadius: "32px",
        backgroundColor: "rgba(40, 40, 40, 0.7)",
        color: "rgba(248, 248, 248, 0.7)",
        textTransform: "none",
        fontWeight: 600,
        fontSize: "14px",
        display: "inline-flex",
        "&:hover": {
          backgroundColor: "rgba(248, 248, 248, 0.1)",
        },
        "&.Mui-disabled": {
          color: "rgba(248, 248, 248, 0.7)"
        },
      }}
      {...props}
    >
      {loading ? (
        <CircularProgress size={20} sx={{ color: "#fff" }} />
      ) : success ? (
        <CheckIcon />
      ) : (
        placeholder
      )}
    </Button>
  );
}
