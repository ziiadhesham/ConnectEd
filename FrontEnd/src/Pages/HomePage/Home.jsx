import Sidebar from "../../components/Sidebar";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Feed from "./Feed";
import TrendingTopics from "./TrendingTopics";
import useSidebarStore from "../../Stores/SideBarStore";
const HomePage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { sidebarOpen, toggleSidebar } = useSidebarStore();

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      {!isSmallScreen && (
        <Box
          sx={{
            width: sidebarOpen ? "300px" : "72px",
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            zIndex: 1000,
            backgroundColor: "rgba(40, 40, 40, 0.8)",
            transition: "width 0.3s ease",
          }}
        >
          <Sidebar open={sidebarOpen} toggleDrawer={toggleSidebar} notificationCount={5} />
        </Box>
      )}

      <Box
        sx={{
          flex: 1,
          marginLeft: !isSmallScreen ? (sidebarOpen ? "300px" : "72px") : 0,
          marginRight: !isSmallScreen ? "430px" : 0,
          marginTop: "-14px",
          padding: 2,
          minHeight: "100vh",
          transition: "margin 0.3s ease",
          backgroundColor: "rgba(40, 40, 40, 0.7)",
        }}
      >
        <Feed />
      </Box>

      {!isSmallScreen && (
        <Box
          sx={{
            width: 400,
            position: "fixed",
            top: 0,
            right: 0,
            height: "100vh",
            overflowY: "auto",
            padding: 2,
            backgroundColor: "rgba(40, 40, 40, 0.8)",
          }}
        >
          <TrendingTopics />
        </Box>
      )}
    </Box>
  );
};

export default HomePage;
    