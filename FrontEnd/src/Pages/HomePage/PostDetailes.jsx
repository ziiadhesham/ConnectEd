import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import useSidebarStore from "../../Stores/SideBarStore";
import Sidebar from "../../components/Sidebar";
import TrendingTopics from "./TrendingTopics";
import TextAndPhoto from "../../components/textAndPhoto";
import PostComment from "../../components/PostComment";
import PostModal from "../../components/PostModel";
import { ArrowBack } from "@mui/icons-material";
import axiosInstance from "../../config/axiosInstance";

const PostDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { sidebarOpen, toggleSidebar } = useSidebarStore();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axiosInstance.get(`/posts/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPost(response.data);
      } catch (err) {
        setError("Failed to load post.");
        console.error("Error fetching post:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchPost();
  }, [id, token]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!post) return <div>Post not found</div>;

  // Defensive null checks for nested fields
  const user = post.userId || {};
  const comments = Array.isArray(post.comments) ? post.comments : [];

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      {!isSmallScreen && (
        <Box
          sx={{
            width: sidebarOpen ? 300 : 72,
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
            width: 40,
            height: 40,
            cursor: "pointer",
            backgroundColor: "rgba(40, 40, 40, 0.7)",
            borderRadius: "50%",
            marginBottom: 2,
            alignSelf: "flex-start",
            "&:hover": {
              backgroundColor: "rgba(248, 248, 248, 0.1)",
            },
          }}
          onClick={() => navigate(-1)}
          aria-label="Go back"
          role="button"
        >
          <ArrowBack style={{ fontSize: 28, margin: "auto" }} />
        </Box>

        {/* Post Content */}
        <Box
          sx={{
            width: "100%",
            maxWidth: 680,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextAndPhoto
            username={user.username || "Unknown"}
            avatar={user.profilePicture || ""}
            time={post.time}
            content={post.content}
            video={post.video}
            image={post.image}
            likesCount={post.likesCount}
            repostsCount={post.repostsCount}
            commentsCount={comments.length}
            bookmarks={post.bookmarks || []}
            postId={post._id}
            likes={post.likes || []}
            reposts={post.reposts || []}
            comments={comments}
          />

          {/* Comments List */}
          {comments.map((comment, index) => {
            const commentUser = comment.userId || {};
            return (
              <Box
                key={comment._id || index}
                sx={{
                  width: "616px",
                  backgroundColor: "rgba(248, 248, 248, 0.02)",
                  borderRadius: "20px",
                  padding: "0.8rem",
                }}
              >
                <PostComment
                  user={{
                    name: commentUser.username || "Unknown",
                    avatar: commentUser.profilePicture || "",
                  }}
                  time={comment.time}
                  text={comment.text}
                />
              </Box>
            );
          })}

          <Box sx={{ height: "70px" }} />
        </Box>

        {/* Comment Input Modal */}
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            left: !isSmallScreen ? (sidebarOpen ? 300 : 72) : 0,
            right: !isSmallScreen ? 430 : 0,
            margin: "auto",
            maxWidth: 680,
            width: "100%",
            backdropFilter: "blur(1px)",
            WebkitBackdropFilter: "blur(1px)",
            padding: 2,
            zIndex: 1000,
            borderRadius: "16px",
          }}
        >
          <PostModal isCommentModal={true} />
        </Box>
      </Box>

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
