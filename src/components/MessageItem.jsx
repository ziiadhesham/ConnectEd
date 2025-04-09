import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Avatar,
  useTheme
} from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function MessageItem({
  avatarSrc = "/avatar1.png",
  name = "Kohaku",
  time = "09:00 AM",
  message = "Absolutely, I get what you mean! 🧠 I'm considering integrating some aspects of it into our upcoming project...",
  isReply = false,
  replyAvatar = "/avatar2.png",
  replyName = "Moya Shiro",
  replyText = "Yes, I just saw it. The detail is incredible...",
  showActions = false
}) {
  const [hover, setHover] = useState(false);
  const theme = useTheme();

  return (
    <Box
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: 1.5,
        maxWidth: 520,
        width: "100%",
        px: 2,
        py: 1.5,
        backgroundColor:"rgba(248, 248, 248, 0.02)",
        '&:hover': { bgcolor: "rgba(248, 248, 248, 0.07)" },
        borderRadius:"24px"
      }}
    >
     
      <Box sx={{ flex: 1 }}>
        

        {isReply && (
            
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              
              px: 1.5,
              py: 0.8,
              borderRadius: 2,
              mb: 1
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="20" viewBox="0 0 36 20" fill="none">
  <path d="M1 19V9C1 4.58172 4.58172 1 9 1H35" stroke="#F8F8F8" stroke-opacity="0.1" stroke-width="1.5" stroke-linecap="round"/>
</svg>
            <Avatar src={replyAvatar} sx={{ width: 20, height: 20, mr: 1 }} />
            <Typography
              variant="caption"
              sx={{
                color: "#888",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                fontSize: 12
              }}
            >
              <strong>{replyName}</strong> — {replyText}
            </Typography>
          </Box>
        )}
         <Box sx={{ display: "flex", alignItems:"center"}}>
         <Avatar src={avatarSrc} sx={{ width: 36, height: 36, mt: 0.3 }} />
        <Box sx={{ display: "flex", alignItems: "baseline", gap: 1, mb: 0.5 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#fff" ,paddingLeft:"10px"}}>
            {name}
          </Typography>
          <Typography variant="caption" sx={{ color: "#777", fontSize: 11 }}>
            {time}
          </Typography>
        </Box>  
         </Box>
        <Box
          sx={{
            position: "relative",
            borderRadius: 3,
            px: 2,
            py: 1.5,
            color: "#eee",
            transition: "all 0.2s ease",
            maxWidth: 460,
            fontSize: 14,
            lineHeight: 1.5
          }}
        >
          <Typography variant="body2" sx={{ whiteSpace: "pre-wrap" }}>
            {message}
          </Typography>

          {(hover || showActions) && (
            <Box
              sx={{
                position: "absolute",
                top: -30,
                right: 0,
                display: "flex",
                gap: 0.5,
                background:  "rgba(248, 248, 248, 0.07)",
                borderRadius: 2,
                px: 0.5,
                py: 0.3,
                boxShadow: "0 1px 3px rgba(0,0,0,0.4)"
              }}
            >
              <IconButton size="small" sx={{ p: 0.5 }}>
                <ReplyIcon sx={{ color: "#aaa", fontSize: 18 }} />
              </IconButton>
              <IconButton size="small" sx={{ p: 0.5 }}>
                <FavoriteBorderIcon sx={{ color: "#aaa", fontSize: 18 }} />
              </IconButton>
              <IconButton size="small" sx={{ p: 0.5 }}>
                <MoreHorizIcon sx={{ color: "#aaa", fontSize: 18 }} />
              </IconButton>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
