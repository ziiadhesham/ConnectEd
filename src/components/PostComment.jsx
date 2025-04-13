import React from "react";
import {
  Box,
  Avatar,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PostActions from "./PostActions"; // your reusable action button set

const PostComment = ({ user = {}, time = "", text = "" }) => {
    return (
      <Box
        sx={{
          boxSizing: "border-box",
          color: "#fff",
          p: 2,
          borderRadius: 2,
          width: "616px",
        }}
      >
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" spacing={2}>
            <Avatar
              alt={user.name || "User"}
              src={user.avatar}
              sx={{ width: 40, height: 40 }}
            />
            <Box>
              <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
                {user.name || "Unknown User"}
                <Typography
                  component="span"
                  sx={{ ml: 1, color: "#aaa", fontSize: 12 }}
                >
                  {time}
                </Typography>
              </Typography>
              <Typography sx={{ fontSize: 14, mt: 0.5 }}>{text}</Typography>
            </Box>
          </Stack>
  
          <IconButton sx={{ color: "#aaa" }}>
            <MoreHorizIcon fontSize="small" />
          </IconButton>
        </Stack>
  
        <Box sx={{ mt: 2 }}>
          <PostActions likes={12} reposts={12} comments={12} />
        </Box>
      </Box>
    );
  };
export default PostComment;
