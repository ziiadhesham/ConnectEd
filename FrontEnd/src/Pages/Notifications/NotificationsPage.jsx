import React, { useEffect, useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import TrendingTopics from "../HomePage/TrendingTopics";
import Sidebar from "../../components/Sidebar";
import NotificationStackHeader from "../../components/NotificationStackHeader";
import useSidebarStore from "../../Stores/SideBarStore";
import useUserStore from "../../Stores/UseUserStore";
import axiosInstance from "../../config/axiosInstance";

const NotificationsPage = () => {
  const { sidebarOpen, toggleSidebar } = useSidebarStore();
  const { userId } = useUserStore();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await axiosInstance.get(`/notifications/user/${userId}`);
        console.log(userId)
        setNotifications(res.data);
        console.log(res.data);
      } catch (err) {
        console.error("Error fetching notifications:", err);
      }
    };

    if (userId) fetchNotifications();
  }, [userId]);

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "rgba(40, 40, 40, 0.7)",
      }}
    >
      {/* Sidebar */}
      {!isSmallScreen && (
        <Box
          sx={{
            width: sidebarOpen ? "300px" : "80px",
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            zIndex: 1000,
            backgroundColor: "rgba(40, 40, 40, 0.8)",
            transition: "width 0.3s ease",
          }}
        >
          <Sidebar open={sidebarOpen} toggleDrawer={toggleSidebar} notificationCount={notifications.length} />
        </Box>
      )}

      {/* Main Area */}
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          marginLeft: !isSmallScreen ? (sidebarOpen ? "300px" : "80px") : 0,
          width: !isSmallScreen
            ? `calc(100vw - ${sidebarOpen ? "300px" : "80px"})`
            : "100vw",
          height: "100vh",
          transition: "margin-left 0.3s ease, width 0.3s ease",
        }}
      >
        {/* Notification Stack */}
        <Box
          sx={{
            flex: 1,
            borderRight: isSmallScreen ? "none" : "1px solid rgba(255, 255, 255, 0.1)",
            overflowY: "auto",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            padding: isSmallScreen ? "8px" : "16px",
          }}
        >
          <NotificationStackHeader notifications={notifications} />
        </Box>

        {/* Trending Topics */}
        <Box
          sx={{
            width: isSmallScreen ? "100%" : "30%",
            display: isSmallScreen ? "none" : "block",
            overflowY: "auto",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            padding: isSmallScreen ? "8px" : "16px",
          }}
        >
          <TrendingTopics />
        </Box>
      </Box>
    </Box>
  );
};

export default NotificationsPage;
