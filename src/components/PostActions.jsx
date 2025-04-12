import React from "react";
import { Box } from "@mui/material";
import LikeButton from "./likeButton";
import RepostButton from "./RepostButton";
import CommentButton from "./CommentButton";
import BookmarkButton from "./BookmarkButton";

export default function PostActions() {
  return (
    <Box
      sx={{
        maxWidth: "540px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: { xs: "row", md: "row" },
        padding: 1,
        marginLeft: "30px",
        marginTop: "0px",
      
      }}
    >
      {/* Desktop & Mobile Layouts */}
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          paddingLeft: { xs: "0px", md: "28px" },
          justifyContent: { xs: "space-around", md: "flex-start" },
          flexGrow: 1,

        }}
      >
        <LikeButton />
        <RepostButton />
        <CommentButton />
      </Box>
      <Box>
        <BookmarkButton />
      </Box>
    </Box>
  );
}
