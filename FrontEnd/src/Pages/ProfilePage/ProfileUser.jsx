import {
  Box,
  useTheme,
  useMediaQuery,
  Typography,
  TextField,
  Button,
  Fade,
  Grow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../../components/Sidebar";
import TrendingTopics from "../HomePage/TrendingTopics";
import HeaderCard from "../../components/HeaderCard";
import EditProfileButton from "../../components/EditProfileButton";
import ToggleTextButton from "../../components/ToggleTextButton";
import TextAndPhoto from "../../components/textAndPhoto";

import useSidebarStore from "../../Stores/SideBarStore";
import useUserStore from "../../Stores/UseUserStore";

const Profile = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const { sidebarOpen, toggleSidebar } = useSidebarStore();
  const sidebarWidth = sidebarOpen ? 300 : 72;

  const [tab, setTab] = useState("left");
  const navigate = useNavigate();

  const { userId } = useUserStore();

  // Profile state
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [profilePicturee, setProfilePicture] = useState("");
  const [postslist, setPostsList] = useState([]);
  const [followersList, setFollowersList] = useState([]);
  const [followingList, setFollowingList] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");

        // Fetch user profile data
        const userRes = await fetch("http://localhost:3001/api/users/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const userData = await userRes.json();

        setName(userData.name || "");
        setUsername(userData.username || "");
        setBio(userData.bio || "");
        setProfilePicture(userData.profilePicture || "");
        setFollowersList(userData.followers || []);
        setFollowingList(userData.following || []);

        // Fetch user posts
        const postsRes = await fetch("http://localhost:3001/api/posts/my-posts", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const postsData = await postsRes.json();

        setPostsList(Array.isArray(postsData) ? postsData : []);
      } catch (err) {
        console.error("❌ Failed to fetch profile or posts:", err.message);
      }
    };

    fetchUserData();
  }, []);

  const handleTabChange = (newTab) => setTab(newTab);

  const handlePostClick = (postId, e) => {
    e.stopPropagation();
    if (e.target.closest(".bookmark-button")) return; // Prevent navigation if bookmark clicked
    navigate(`/post/${postId}`);
  };

  const handleEditToggle = () => setIsEditing(!isEditing);

  const handleProfileUpdate = async () => {
    try {
      const token = localStorage.getItem("token");
      let uploadedUrl = profilePicturee;

      // Upload new profile picture to Cloudinary if needed
      if (profilePicturee && profilePicturee instanceof File) {
        const formData = new FormData();
        formData.append("file", profilePicturee);
        formData.append("upload_preset", "Connected1"); // Your preset
        formData.append("cloud_name", "doi3fbuvz"); // Your cloud name

        const cloudRes = await fetch(
          "https://api.cloudinary.com/v1_1/doi3fbuvz/image/upload",
          { method: "POST", body: formData }
        );

        const cloudData = await cloudRes.json();
        uploadedUrl = cloudData.secure_url;
      }

      // Send updated profile data
      const res = await fetch("http://localhost:3001/api/users/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name,
          username,
          bio,
          profilePicture: uploadedUrl,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Update failed");

      setIsEditing(false);
    } catch (err) {
      console.error("Failed to update:", err.message);
      alert("Failed to update profile");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#2c2c2c",
      }}
    >
      {!isSmallScreen && (
        <Box
          sx={{
            width: sidebarWidth,
            backgroundColor: "#282828",
            height: "100vh",
            transition: "width 0.3s ease",
            position: "fixed",
            left: 0,
            top: 0,
            zIndex: 1000,
          }}
        >
          <Sidebar open={sidebarOpen} toggleDrawer={toggleSidebar} notificationCount={5} />
        </Box>
      )}

      <Box
        sx={{
          flex: 1,
          padding: 2,
          transition: "margin 0.3s ease",
          color: "white",
          display: "flex",
          justifyContent: "center",
          minHeight: "100vh",
          marginLeft: !isSmallScreen ? `${sidebarWidth}px` : 0,
          marginRight: !isSmallScreen ? "25%" : 0,
          width: "100%",
        }}
      >
        <Box sx={{ width: "100%" }}>
          {/* Profile header/avatar */}
          <HeaderCard
            profilePicture={
              profilePicturee instanceof File ? URL.createObjectURL(profilePicturee) : profilePicturee
            }
          />

          {/* Avatar change button */}
          {isEditing && (
            <Box sx={{ position: "relative", top: "-50px", left: "100px" }}>
              <Button
                component="label"
                sx={{
                  px: 2,
                  py: 1,
                  borderRadius: "20px",
                  backgroundColor: "#3a3a3a",
                  color: "#fff",
                  fontWeight: 500,
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#4a4a4a" },
                  boxShadow: "0 0 5px rgba(255,255,255,0.1)",
                }}
              >
                Change Avatar
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) setProfilePicture(file);
                  }}
                />
              </Button>
            </Box>
          )}

          {/* Name & Edit Profile Button */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
            {isEditing ? (
              <Grow in={isEditing}>
                <TextField
                  variant="outlined"
                  size="small"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  sx={{
                    input: { color: "white" },
                    width: "200px",
                    borderRadius: "20px",
                    backgroundColor: "#1e1e1e",
                    boxShadow: "0 0 4px rgba(255,255,255,0.1)",
                  }}
                />
              </Grow>
            ) : (
              <Typography sx={{ fontWeight: 600, fontSize: 20 }}>{name}</Typography>
            )}

            <EditProfileButton
              placeholder={isEditing ? "Save" : "Edit Profile"}
              loading={false}
              success={false}
              disabled={false}
              onClick={isEditing ? handleProfileUpdate : handleEditToggle}
            />

            {isEditing && (
              <Button
                variant="text"
                sx={{ color: "#aaa", textTransform: "none" }}
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </Button>
            )}
          </Box>

          {/* Username */}
          {isEditing ? (
            <Fade in={isEditing}>
              <TextField
                variant="outlined"
                size="small"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                sx={{
                  input: { color: "#ccc" },
                  mt: 1,
                  width: "200px",
                  borderRadius: "12px",
                  backgroundColor: "#1e1e1e",
                  boxShadow: "0 0 3px rgba(255,255,255,0.05)",
                }}
              />
            </Fade>
          ) : (
            <Typography sx={{ color: "#aaa", fontSize: 14 }}>{username}</Typography>
          )}

          {/* Bio */}
          {isEditing ? (
            <Fade in={isEditing}>
              <TextField
                variant="outlined"
                size="small"
                multiline
                minRows={3}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                sx={{
                  textarea: { color: "white" },
                  mt: 1.5,
                  width: "100%",
                  borderRadius: "12px",
                  backgroundColor: "#1e1e1e",
                  boxShadow: "0 0 4px rgba(255,255,255,0.07)",
                }}
              />
            </Fade>
          ) : (
            <Typography sx={{ mt: 1.5, fontSize: 14, lineHeight: 1.6, whiteSpace: "pre-line" }}>
              {bio}
            </Typography>
          )}

          {/* Stats and external link */}
          <Box sx={{ display: "flex", gap: 2, mt: 2, fontSize: 14 }}>
            <Box>{postslist.length} posts</Box>
            <Box
              onClick={() => navigate("/followers")}
              sx={{ cursor: "pointer", "&:hover": { textDecoration: "underline" } }}
            >
              {followersList.length} followers
            </Box>
            <Box
              onClick={() => navigate("/followers")}
              sx={{ cursor: "pointer", "&:hover": { textDecoration: "underline" } }}
            >
              {followingList.length} following
            </Box>
            <Box>
              🔗{" "}
              <a
                href="https://linktr.ee/tranmautritam"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#4ea1f3" }}
              >
                https://linktr.ee/tranmautritam
              </a>
            </Box>
          </Box>

          {/* Tab toggle (Posts / Featured) */}
          <Box sx={{ mt: 3, display: "flex", justifyContent: "center", height: "50px" }}>
            <ToggleTextButton
              tab={tab}
              handleTabChange={handleTabChange}
              leftText="Posts"
              rightText="Featured"
            />
          </Box>

          {/* Posts list */}
          <Box sx={{ mt: 3 }}>
            {tab === "left" ? (
              <div className="posts-container" style={{ maxWidth: "720px", margin: "0 auto" }}>
                {postslist.map((post) => (
                  <TextAndPhoto
                    key={post._id}
                    username={username}
                    time={post.time}
                    avatar={
                      profilePicturee instanceof File
                        ? URL.createObjectURL(profilePicturee)
                        : profilePicturee
                    }
                    content={post.content}
                    image={post.image}
                    video={post.video}
                    likes={post.likes}
                    likesCount={post.likesCount}
                    reposts={post.reposts}
                    repostsCount={post.repostsCount}
                    bookmarks={post.bookmarks}
                    bookmarksCount={post.bookmarksCount}
                    commentsCount={post.comments?.length || 0}
                    onClick={(e) => handlePostClick(post._id, e)}
                  />
                ))}
              </div>
            ) : (
              <Typography>Featured posts</Typography>
            )}
          </Box>
        </Box>
      </Box>

      {/* Trending Topics sidebar */}
      {!isSmallScreen && (
        <Box
          sx={{
            width: "25%",
            backgroundColor: "#282828",
            height: "100vh",
            overflowY: "auto",
            padding: 2,
            position: "fixed",
            right: 0,
            top: 0,
          }}
        >
          <TrendingTopics />
        </Box>
      )}
    </Box>
  );
};

export default Profile;
