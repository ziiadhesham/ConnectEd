import React, { useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import ConversionPage from "./ConversionPage";
import Message from "./Message";

const HomePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md")); // md = 960px

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <Box sx={{ display: "flex", flexDirection: "row", minHeight: "100vh" }}>
      {/* Sidebar */}
      {!isSmallScreen && (
        <Box
          sx={{
            width: sidebarOpen ? "320px" : "72px",
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

      {/* Conversation List */}
      <Box
        sx={{
          width: isSmallScreen ? "100%" : "30%",
          borderRight: isSmallScreen ? "none" : "1px solid rgba(255, 255, 255, 0.1)",
          marginLeft: !isSmallScreen ? (sidebarOpen ? "320px" : "72px") : 0,
          transition: "margin 0.3s ease",
        }}
      >
        <ConversionPage />
      </Box>

      {/* Message Section */}
      {!isSmallScreen && (
        <Box
          sx={{
            flex: 1,
            marginLeft: !isSmallScreen ? (sidebarOpen ? "0" : "0px") : 0,
            transition: "margin 0.3s ease",
          }}
        >
          <Message />
        </Box>
      )}
    </Box>
  );
};

export default HomePage;