import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import useSidebarStore from "../../Stores/SideBarStore";
import Sidebar from "../../components/Sidebar";
import TrendingTopics from "./TrendingTopics";
import TextAndPhoto from "../../components/textAndPhoto";
import PostComment from "../../components/PostComment";
import PostModal from "../../components/PostModel";
import { ArrowBack } from "@mui/icons-material";
import posts from "../../MockData/PostsData"; // ✅ Mock posts import
import users from "../../MockData/usersAccountsData";

const PostDetails = () => {
  const { id } = useParams(); // Get the id from the URL (it's a string by default)
  const navigate = useNavigate();
  
  // Convert `id` to number or string depending on your data type in posts
  const postId = Number(id); // Convert to number if the posts data uses numbers for IDs

  // Find the post using the correct type for comparison
  const post = posts.find((p) => p.id === postId); // Ensure you're comparing numbers

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { sidebarOpen, toggleSidebar } = useSidebarStore();

  if (!post) return <div>Post not found</div>; // Display "Post not found" if no matching post

  // Get the user for the post using the userId
  const postUser = users.find((user) => user.id === post.userId);

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      {/* Sidebar */}
      {!isSmallScreen && (
        <Box
          sx={{
            width: sidebarOpen ? "300px" : "72px",
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            zIndex: 1000,
            backgroundColor: "rgba(40, 40, 40, 0.8)",
            transition: "width 0.3s ease",
          }}
        >
          <Sidebar open={sidebarOpen} toggleDrawer={toggleSidebar} notificationCount={5} />
        </Box>
      )}

      {/* Main Content */}
      <Box
        sx={{
          flex: 1,
          marginLeft: !isSmallScreen ? (sidebarOpen ? "300px" : "72px") : 0,
          marginRight: !isSmallScreen ? "430px" : 0,
          marginTop: "-14px",
          padding: 2,
          minHeight: "100vh",
          transition: "margin 0.3s ease",
          backgroundColor: "rgba(40, 40, 40, 0.7)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: "100px",
        }}
      >
        {/* Back Button */}
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            width: "40px",
            height: "40px",
            cursor: "pointer",
            backgroundColor: "rgba(40, 40, 40, 0.7)",
            borderRadius: "50%",
            marginBottom: "1rem",
            alignSelf: "flex-start",
            "&:hover": {
              backgroundColor: "rgba(248, 248, 248, 0.1)",
            },
          }}
          onClick={() => navigate(-1)}
        >
          <ArrowBack style={{ fontSize: "1.7rem", margin: "auto" }} />
        </Box>

        {/* Post Content */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          {/* Post Details */}
          <TextAndPhoto
            username={postUser?.name || "Unknown"}
            time={post.time}
            avatar={postUser.profilePicture}
            content={post.content}
            video={post.video}
            image={post.image}
            likesCount={post.likesCount}
            repostsCount={post.repostsCount}
            commentsCount={post.comments?.length || 0}
            bookmarks={post.bookmarks || []}
          />

          {/* Comments */}
          {post.comments?.map((comment, index) => {
            const commentUser = users.find((user) => user.id === comment.userId);

            return (
              <Box
                key={index}
                sx={{
                  width: "616px",
                  backgroundColor: "rgba(248, 248, 248, 0.02)",
                  borderRadius: "20px",
                  padding: "0.8rem",
                }}
              >
                <PostComment
                  user={{
                    name: commentUser?.name || "Unknown",
                    avatar: commentUser?.profilePicture,
                  }}
                  time={comment.time}
                  text={comment.text}
                />
              </Box>
            );
          })}

          {/* Spacer */}
          <Box sx={{ height: "70px" }} />
        </Box>

        {/* Bottom Comment Box */}
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            left: !isSmallScreen ? (sidebarOpen ? "300px" : "72px") : 0,
            right: !isSmallScreen ? "430px" : 0,
            margin: "auto",
            maxWidth: "680px",
            width: "100%",
            backdropFilter: "blur(1px)",
            WebkitBackdropFilter: "blur(1px)",
            padding: "1rem",
            zIndex: 1000,
            borderRadius: "16px",
          }}
        >
          <PostModal isCommentModal={true} />
        </Box>
      </Box>

      {/* Trending Topics */}
      {!isSmallScreen && (
        <Box
          sx={{
            width: 400,
            position: "fixed",
            top: 0,
            right: 0,
            height: "100vh",
            overflowY: "auto",
            padding: 2,
            backgroundColor: "rgba(40, 40, 40, 0.8)",
          }}
        >
          <TrendingTopics />
        </Box>
      )}
    </Box>
  );
};

export default PostDetails;
