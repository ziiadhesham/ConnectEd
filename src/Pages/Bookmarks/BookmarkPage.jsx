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

      {/* Main Area (Conversation + Message) */}
     <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginLeft: !isSmallScreen ? (sidebarOpen ? "300px" : "80px") : 0,
              width: !isSmallScreen
                ? `calc(100vw - ${sidebarOpen ? "300px" : "80px"})`
                : "100vw",
              height: "100vh",
              transition: "margin-left 0.3s ease, width 0.3s ease",
            }}
          >

        {/* Conversation List */}
        <Box
                  sx={{
                    width: isSmallScreen ? "100%" : "30%",
                    borderRight: isSmallScreen ? "none" : "1px solid rgba(255, 255, 255, 0.1)",
                    display: isSmallScreen ? (sidebarOpen ? "none" : "block") : "block",
                    overflow: "hidden",
                  }}
                >
          <BookmarksFolder />
        </Box>

        {/* Message Section */}
        <Box
                  sx={{
                    flex: 1,
                    display: isSmallScreen ? (sidebarOpen ? "block" : "none") : "block",
                    overflowY: "auto",
                    WebkitOverflowScrolling: "touch",
                    scrollbarWidth: "none", // Firefox
                    "&::-webkit-scrollbar": {
                      display: "none", // Chrome, Safari, Edge
                    },
                  }}
                >
         <BookmarkedPosts />
       </Box>
       
        
      </Box>
    </Box>
  );
};

export default BookmarkPage;