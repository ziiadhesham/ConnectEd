import React, { useState, useEffect } from "react";
import ComposerInput from "../../components/ComposerInput";
import Header from "../../components/HeaderPosting";
import TextAndPhoto from "../../components/textAndPhoto";
import TextAndVedio from "../../components/TextAndVedio";
import ToggleTextButton from "../../components/ToggleTextButton";
import ProfileCard from "../../components/ProfileCard";
import PostComment from "../../components/PostComment";
import { Box } from "@mui/system";
import PostModal from "../../components/PostModel";
import useSidebarStore from "../../Stores/SideBarStore"; // for detecting sidebar state
import { ArrowBack } from "@mui/icons-material";


const Feed = () => {
  const [tab, setTab] = useState("left");
  const [searchFocused, setSearchFocused] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const { sidebarOpen } = useSidebarStore(); // Access sidebar state (open/closed)

  const handleTabChange = (newTab) => {
    setTab(newTab);
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleBack = () => {
    setSelectedPost(null);
  };

  // Dynamically adjust modal position based on sidebar state
  const modalStyle = {
    position: "fixed",
    bottom: 0,
    left: sidebarOpen ? "340px" : "220px", // Adjust based on sidebar open/closed
    width: "100%",
    maxWidth: "680px",
    backdropFilter: "blur(1px)",
    WebkitBackdropFilter: "blur(1px)",
    padding: "1rem",
    zIndex: 1000,
    borderRadius: "16px",
  };

  // Example posts array (you can modify this data structure as required)
  const posts = [
    {
      id: 1,
      username: "Kohaku",
      time: "10:45 AM",
      avatar: "https://i.pravatar.cc/300?img=11",
      content: "Just launched a new UI kit 🔥 Check it out!",
      image: "https://picsum.photos/200/300",
      comments: [
        {
          user: {
            name: "Brandi",
            avatar: "https://i.pravatar.cc/150?img=13",
          },
          time: "11:00 AM",
          text: "This is amazing 🔥",
        },
        {
          user: {
            name: "Tommy",
            avatar: "https://i.pravatar.cc/150?img=15",
          },
          time: "11:05 AM",
          text: "Can’t wait to try it!",
        },
      ],
    },
    {
      id: 2,
      username: "Mohamed Shawky",
      time: "2:30 PM",
      avatar: "https://i.pravatar.cc/300?img=60",
      content: "Check out my latest coding vlog.",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
  ];

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh", // ensures height is full screen
        paddingBottom: "100px", // gives space for the modal
      }}
    >
      {/* Header & Search Focused */}
      {searchFocused && (
        <div className="posts-container">
          <ToggleTextButton
            tab={tab}
            handleTabChange={handleTabChange}
            leftText="People to follow"
            rightText="Trending Topics"
          />
        </div>
      )}

      {/* Posts Container */}
      {searchFocused ? (
        <div className="posts-container" style={{ maxWidth: "720px" }}>
          {tab === "left" ? (
            <div className="posts-container" style={{ maxWidth: "720px" }}>
              <ProfileCard
                name="Brandi Padberg"
                username="@Abbie_Pollich34"
                bio='The "No Code SaaS" Guy. Building a portfolio of software companies.'
                avatar="https://i.pravatar.cc/150?img=11"
                initiallyFollowing={false}
              />
              <ProfileCard
                name="Sara Techie"
                username="@sara"
                bio="Flutter Dev • Mobile UX wizard & Coffee nerd ☕"
                avatar="https://i.pravatar.cc/150?img=10"
                initiallyFollowing={false}
              />
            </div>
          ) : (
            <div className="posts-container" style={{ maxWidth: "720px" }}>
              <TextAndVedio />
              <TextAndPhoto
                username="Mohamed Shawky"
                time="2:30 PM"
                avatar="https://i.pravatar.cc/300?img=60"
                content="Check out my latest coding vlog."
                video="https://www.w3schools.com/html/mov_bbb.mp4"
                onClick={() => handlePostClick(posts[1])} // Pass the actual post data
              />
            </div>
          )}
        </div>
      ) : selectedPost ? (
        <div className="posts-container" style={{ maxWidth: "720px" }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
              cursor: "pointer",
              marginBottom: "1rem",
              fontSize: "1.2rem",
              color: "#ccc",
              gap: "0.5rem",
              backgroundColor: "rgba(40, 40, 40, 0.7)",
              borderRadius: "50%",
              transition: "all 0.3s ease",
              margin: "0rem",
              marginTop: "0.5rem",
              "&:hover": {
                color: "#fff", // Change color on hover
                backgroundColor: "rgba(248, 248, 248, 0.1)",
              },
            }}
            onClick={handleBack}
          >
            <ArrowBack style={{ fontSize: "1.7rem" }} />
          </Box>

          {/* Full post view */}
          <TextAndPhoto
            username={selectedPost.username}
            time={selectedPost.time}
            avatar={selectedPost.avatar}
            content={selectedPost.content}
            video={selectedPost.video}
            image={selectedPost.image}
          />

          {/* Comments */}
          {selectedPost.comments?.map((comment, index) => (
            <Box sx={{ backgroundColor: "rgba(248, 248, 248, 0.02)", marginBottom: "1rem", borderRadius: "20px" }}>
              <PostComment
                key={index}
                user={{
                  name: comment.user?.name,
                  avatar: comment.user?.avatar,
                }}
                time={comment.time}
                text={comment.text}
              />
            </Box>
          ))}

          {/* Back button */}
          <button
            onClick={handleBack}
            style={{
              marginTop: "1rem",
              padding: "8px 16px",
              backgroundColor: "#333",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            ← Back to Feed
          </button>

          {/* Modal */}
          <Box sx={modalStyle}>
            <PostModal />
          </Box>
        </div>
      ) : (
        <>
          <Header
            onSearchFocus={() => setSearchFocused(true)}
            onSearchBlur={() => setSearchFocused(false)}
          />
          <ComposerInput />
          <div className="posts-container" style={{ maxWidth: "720px" }}>
            {posts.map((post) => (
              <TextAndPhoto
                key={post.id}
                username={post.username}
                time={post.time}
                avatar={post.avatar}
                content={post.content}
                image={post.image}
                video={post.video}
                onClick={() => handlePostClick(post)} // Pass the actual post data
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Feed;
