import React, { useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import useSidebarStore from "../../Stores/SideBarStore";
import BookmarksFolder from "./BookmarksFolder";
import BookmarkedPosts from "./BookmarkedPosts";


const BookmarkPage = () => {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md")); // md = 960px

  const { sidebarOpen, toggleSidebar } = useSidebarStore();


  const sidebarWidth = sidebarOpen ? 300 : 80;

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        overflow: "hidden",
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

      {/* Main Area (Conversation + Message) */}
      <Box
  sx={{
    display: "flex",
    flexDirection: "row",
    marginLeft: !isSmallScreen ?`${sidebarWidth}px` : 0,
    width: !isSmallScreen ? `calc(100vw - ${sidebarWidth}px)` : "100vw",
    height: "100vh",
    transition: "margin-left 0.3s ease, width 0.3s ease",
  }}
>

        {/* Conversation List */}
        <Box
          sx={{
            width : "31%",
            borderRight: isSmallScreen ? "none" : "1px solid rgba(255, 255, 255, 0.1)",

            overflow: "hidden",
          }}
        >
          <BookmarksFolder />
        </Box>

        {/* Message Section */}
         <Box
         sx={{
           flex: 1,

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