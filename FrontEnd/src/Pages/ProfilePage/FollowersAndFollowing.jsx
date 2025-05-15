import { Box, useTheme, useMediaQuery, Typography, Avatar, CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import TrendingTopics from "../HomePage/TrendingTopics";
import ToggleTextButton from "../../components/ToggleTextButton";

const Followers = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const sidebarWidth = sidebarOpen ? 300 : 72;

  const [tab, setTab] = useState("left");
  const [followersIds, setFollowersIds] = useState([]);
  const [followingIds, setFollowingIds] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleTabChange = (newTab) => setTab(newTab);

  useEffect(() => {
    const fetchFollowersAndFollowing = async () => {
      try {
        const token = localStorage.getItem("token");

        // 1. Get the current logged-in user's followers/following
        const profileRes = await fetch("http://localhost:3001/api/users/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const profileData = await profileRes.json();
        setFollowersIds(profileData.followers || []);
        setFollowingIds(profileData.following || []);

        // 2. Get all users (so we can match by ID)
        const usersRes = await fetch("http://localhost:3001/api/users");
        const usersData = await usersRes.json();
        setAllUsers(usersData);
      } catch (error) {
        console.error("❌ Failed to fetch followers/following:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFollowersAndFollowing();
  }, []);

  const renderUsers = (ids) => {
    const matchedUsers = allUsers.filter((user) => ids.includes(user._id));
    return matchedUsers.length === 0 ? (
      <Typography sx={{ color: "#aaa", mt: 3 }}>No users found.</Typography>
    ) : (
      matchedUsers.map((user) => (
        <Box key={user._id} sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
          <Avatar src={user.profilePicture || ""} />
          <Box>
            <Typography>{user.name || "Unnamed"}</Typography>
            <Typography sx={{ color: "#aaa" }}>@{user.username}</Typography>
          </Box>
        </Box>
      ))
    );
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#2c2c2c", width: "100%" }}>
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
          <Sidebar open={sidebarOpen} toggleDrawer={() => setSidebarOpen((prev) => !prev)} notificationCount={5} />
        </Box>
      )}

      <Box
        sx={{
          width: "100%",
          flex: 1,
          marginLeft: !isSmallScreen ? `${sidebarWidth}px` : 0,
          marginRight: !isSmallScreen ? "26%" : 0,
          padding: 2,
          transition: "margin 0.3s ease",
          color: "white",
        }}
      >
        <Box sx={{ mt: 2, display: "flex", justifyContent: "center", height: "50px" }}>
          <ToggleTextButton tab={tab} handleTabChange={handleTabChange} leftText="Followers" rightText="Following" />
        </Box>

        <Box sx={{ mt: 4 }}>
          {loading ? (
            <CircularProgress color="primary" />
          ) : tab === "left" ? (
            renderUsers(followersIds)
          ) : (
            renderUsers(followingIds)
          )}
        </Box>
      </Box>

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

export default Followers;
