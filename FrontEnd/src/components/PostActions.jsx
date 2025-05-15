import React from "react";
import { Box } from "@mui/material";
import LikeButton from "./likeButton";
import RepostButton from "./RepostButton";
import CommentButton from "./CommentButton";
import BookmarkButton from "./BookmarkButton";

export default function PostActions({
  likesCount = 0,
  commentsCount = 0,
  repostsCount = 0,
  bookmarksCount = 0,
  postId, // ✅ just declare it here
  likes=  [],
  comments=[],
  reposts=[],
  postOwnerId
  
}) {
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
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          paddingLeft: { xs: "0px", md: "28px" },
          justifyContent: { xs: "space-around", md: "flex-start" },
          flexGrow: 1,
        }}
      >
        <LikeButton initialLikes={likesCount} postId={postId}  likedBy={likes} postOwnerId={postOwnerId}/>
        <RepostButton initialReposts={repostsCount} postId={postId} repostedby={reposts} postOwnerId={postOwnerId}/>
        <CommentButton initialComments={commentsCount} postId={postId} postOwnerId={postOwnerId} />
      </Box>
      <Box>
        <BookmarkButton bookmarksCount={bookmarksCount} postId={postId} />
      </Box>
    </Box>
  );
}
