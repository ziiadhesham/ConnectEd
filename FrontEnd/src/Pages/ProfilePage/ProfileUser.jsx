import {
  Box,
  useTheme,
  useMediaQuery,
  Typography,
  TextField,
  Button,
  Fade,
  Grow
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import TrendingTopics from "../HomePage/TrendingTopics";
import HeaderCard from "../../components/HeaderCard";
import EditProfileButton from "../../components/EditProfileButton";
import ToggleTextButton from "../../components/ToggleTextButton";
import TextAndPhoto from "../../components/textAndPhoto";
import TextAndVedio from "../../components/TextAndVedio";
import posts from "../../MockData/PostsData";
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
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Zoz beh");
  const [username, setUsername] = useState("@ziiadehesham");
  const [bio, setBio] = useState(`🧠 UI/UX Designer | 💡 Crafting seamless digital experiences
🚀 Designing user-centric interfaces
📍 NYC | Post on #Design #UX #UI`);
  const [postslist, setPostsList] = useState([]);
  const [profilePicturee, setProfilePicture] = useState("");
  const [followersList, setFollowersList] = useState([]);
  const [followingList, setFollowingList] = useState([]);
  

  useEffect(() => {
  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch('http://localhost:3001/api/users/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      const data = await res.json();

      setName(data.name || '');
      setUsername(data.username || '');
      setBio(data.bio || '');
      setProfilePicture(data.profilePicture || '');
      setPostsList(data.posts || []);
      setFollowersList(data.followers || []);
      setFollowingList(data.following || []);
    } catch (err) {
      console.error("Failed to fetch user:", err.message);
    }
  };

  fetchUser();
}, []);


  const handleTabChange = (newTab) => {
    setTab(newTab);
  };

  const handlePostClick = (postId, e) => {
    e.stopPropagation();
    if (e.target.closest(".bookmark-button")) return;
    navigate(`/post/${postId}`);
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

 const handleProfileUpdate = async () => {
  try {
    const token = localStorage.getItem('token'); // ✅ FIXED
    console.log("Using token:", token); // Optional debug

    const response = await fetch('http://localhost:3001/api/users/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token // ✅ Correct usage
      },
      body: JSON.stringify({
       name,
       username,
       bio,
        profilePicture: profilePicturee
      })
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Update failed');

    console.log('Profile updated:', data);
    setIsEditing(false);
  } catch (err) {
    console.error(err.message);
    alert("Failed to update profile");
  }
};


  return (
    <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#2c2c2c" }}>
      {/* Left Sidebar */}
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

      {/* Main Content Area (centered) */}
      <Box
        sx={{
          flex: 1,
          padding: 2,
          transition: "margin 0.3s ease",
          color: "white",
          display: 'flex',
          justifyContent: 'center',
          minHeight: '100vh',
          marginLeft: !isSmallScreen ? `${sidebarWidth}px` : 0,
          marginRight: !isSmallScreen ? "25%" : 0,
          width: '100%',
        }}
      >
        <Box sx={{ width: '100%' }}>
          <HeaderCard profilePicture={profilePicturee} />

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
                  "&:hover": {
                    backgroundColor: "#4a4a4a",
                  },
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
                    if (file) {
                      const imageUrl = URL.createObjectURL(file);
                      setProfilePicture(imageUrl);
                    }
                  }}
                />
              </Button>
            </Box>
          )}

          {/* Name and Edit Button */}
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
                    boxShadow: "0 0 4px rgba(255,255,255,0.1)"
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
                  boxShadow: "0 0 3px rgba(255,255,255,0.05)"
                }}
              />
            </Fade>
          ) : (
            <Typography sx={{ color: '#aaa', fontSize: 14 }}>{username}</Typography>
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
                  boxShadow: "0 0 4px rgba(255,255,255,0.07)"
                }}
              />
            </Fade>
          ) : (
            <Typography sx={{ mt: 1.5, fontSize: 14, lineHeight: 1.6, whiteSpace: 'pre-line' }}>
              {bio}
            </Typography>
          )}

          <Box sx={{ display: 'flex', gap: 2, mt: 2, fontSize: 14 }}>
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

          <Box sx={{ mt: 3, display: "flex", justifyContent: "center", height: "50px" }}>
            <ToggleTextButton
              tab={tab}
              handleTabChange={handleTabChange}
              leftText="Posts"
              rightText="Featured"
            />
          </Box>

          <Box sx={{ mt: 3 }}>
            {tab === "left" ? (
              <div className="posts-container" style={{ maxWidth: "720px" , margin: "0 auto"}}>
                {posts.filter((post) => post.userId === userId).map((post) => (
                  <TextAndPhoto
                    key={post.id}
                    username={post.username}
                    time={post.time}
                    avatar={post.avatar}
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
                    onClick={(e) => handlePostClick(post.id, e)}
                  />
                ))}
              </div>
            ) : (
              <Typography>Featured posts</Typography>
            )}
          </Box>
        </Box>
      </Box>

      {/* Right Sidebar */}
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
