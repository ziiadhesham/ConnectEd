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

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postRes = await axiosInstance.get(`/posts/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPost(postRes.data);
        setLoading(false);
        console.log("post", postRes.data);
        
      } catch (err) {
        console.error("Error fetching post:", err);
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
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
          <TextAndPhoto
            username={post.userId.username || "Unknown"}
            time={post.time}
            avatar={post.userId.profilePicture}
            content={post.content}
            video={post.video}
            image={post.image}
            likesCount={post.likesCount}
            repostsCount={post.repostsCount}
            commentsCount={post.comments?.length || 0}
            bookmarks={post.bookmarks || []}
          />

          {post.comments?.map((comment, index) => (
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
                  name: comment.userId.username || "Unknown",
                  avatar: comment.userId.profilePicture || "",
                }}
                time={comment.time}
                text={comment.text}
              />
            </Box>
          ))}

          <Box sx={{ height: "70px" }} />
        </Box>

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
