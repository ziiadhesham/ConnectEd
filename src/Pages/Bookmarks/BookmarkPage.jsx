import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import useSidebarStore from "../../Stores/SideBarStore";
import BookmarksFolder from "./BookmarksFolder";
import BookmarkedPosts from "./BookmarkedPosts";

const BookmarkPage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery("(max-width: 480px)");
  const isTablet = useMediaQuery("(min-width: 481px) and (max-width: 767px)");
  const isMediumScreen = useMediaQuery("(min-width: 768px) and (max-width: 1024px)");
  const isLargeScreen = useMediaQuery("(min-width: 1025px) and (max-width: 1440px)");

  const { sidebarOpen, toggleSidebar } = useSidebarStore();
  const sidebarWidth = sidebarOpen ? 300 : 80;

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        overflow: "hidden",
        flexDirection: isSmallScreen ? "column" : "row", // Stack layout for small screens
      }}
    >
      {/* Sidebar */}
      {!isSmallScreen && (
        <Box
          sx={{
            width: `${sidebarWidth}px`,
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
          marginLeft: !isSmallScreen ? `${sidebarWidth}px` : 0,
          width: !isSmallScreen ? `calc(100vw - ${sidebarWidth}px)` : "100vw",
          height: "100vh",
          transition: "margin-left 0.3s ease, width 0.3s ease",
        }}
      >
        {/* Bookmarks Folder */}
        <Box
          sx={{
            width: isSmallScreen ? "100%" : isTablet ? "40%" : isMediumScreen ? "35%" : "31%",
            borderRight: isSmallScreen ? "none" : "1px solid rgba(255, 255, 255, 0.1)",
            overflow: "hidden",
            height: isSmallScreen ? "50vh" : "100vh", // Adjust height for small screens
          }}
        >
          <BookmarksFolder />
        </Box>

        {/* Bookmarked Posts */}
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none", // Firefox
            "&::-webkit-scrollbar": {
              display: "none", // Chrome, Safari, Edge
            },
            height: isSmallScreen ? "50vh" : "100vh", // Adjust height for small screens
          }}
        >
          <BookmarkedPosts />
        </Box>
      </Box>
    </Box>
  );
};

export default BookmarkPage;