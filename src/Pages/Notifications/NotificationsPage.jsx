import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import TrendingTopics from "../HomePage/TrendingTopics";
import Sidebar from "../../components/Sidebar";
import NotificationStackHeader from "../../components/NotificationStackHeader";
import useSidebarStore from "../../Stores/SideBarStore";

const NotificationsPage = () => {
  const { sidebarOpen, toggleSidebar } = useSidebarStore();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md")); // md = 960px

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
          <Sidebar open={sidebarOpen} toggleDrawer={toggleSidebar} />
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
            scrollbarWidth: "none", // Firefox
            "&::-webkit-scrollbar": {
              display: "none", // Chrome, Safari, Edge
            },
            padding: isSmallScreen ? "8px" : "16px",
          }}
        >
          <NotificationStackHeader />
        </Box>

        {/* Trending Topics */}
        <Box
          sx={{
            width: isSmallScreen ? "100%" : "30%",
            display: isSmallScreen ? "none" : "block",
            overflowY: "auto",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none", // Firefox
            "&::-webkit-scrollbar": {
              display: "none", // Chrome, Safari, Edge
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