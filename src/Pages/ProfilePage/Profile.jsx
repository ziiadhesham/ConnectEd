import { Box, useTheme, useMediaQuery ,Typography } from "@mui/material";
import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import TrendingTopics from "../HomePage/TrendingTopics";
import HeaderCard from "../../components/HeaderCard";
import FollowButton from "../../components/FollowButton";
import ToggleTextButton from "../../components/ToggleTextButton";
import useSidebarStore from "../../Stores/SideBarStore";



const Profile = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
    const { sidebarOpen, toggleSidebar } = useSidebarStore();


    const sidebarWidth = sidebarOpen ? 300 : 72;
    const [tab, setTab] = useState("left"); // Add this near the top

const handleTabChange = (newTab) => {
  setTab(newTab);
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
                         <Sidebar open={sidebarOpen} toggleDrawer={toggleSidebar} />

                </Box>
            )}

            {/* Main Content Area */}
            <Box
                sx={{
                    flex: 1,
                    marginLeft: !isSmallScreen ? `${sidebarWidth}px` : 0,
                    marginRight: !isSmallScreen ? "26%" : 0,
                    padding: 2,
                    transition: "margin 0.3s ease",
                    color: "white",
                }}
            >
                <HeaderCard />
                

                
                <Box sx={{ maxWidth: '600px' }}>
          <Typography sx={{ fontWeight: 600, fontSize: 20 }}>
            Moyo Shiro 
            <FollowButton
        sx={{
          padding: '8px 22px',
          fontSize: '0.95rem',
          borderRadius: '999px',
          marginleft: '20px',
        }}
      />
          </Typography>
          <Typography sx={{ color: '#aaa', fontSize: 14 }}>
            @moyoshiro
          </Typography>
          <Typography sx={{ mt: 1.5, fontSize: 14, lineHeight: 1.6 }}>
            🧠 UI/UX Designer | 💡 Crafting seamless digital experiences <br />
            🚀 Designing user-centric interfaces <br />
            📍 NYC | Post on <b>#Design #UX #UI</b>
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mt: 2, fontSize: 14 }}>
            <Box>📸 8 posts</Box>
            <Box>👥 0 followers</Box>
            <Box>
              🔗{' '}
              <a
                href="https://linktr.ee/tranmautritam"
                target="_blank"
                rel="noreferrer"
                style={{ color: '#4ea1f3' }}
              >
                https://linktr.ee/tranmautritam
              </a>
              
              <Box sx={{ mt: 3, display: 'flex', justifyContent: 'right' , width: '500px', height: '50px' }}>
  <ToggleTextButton
    tab={tab}
    handleTabChange={handleTabChange}
    leftText="Posts"
    rightText="Featured"
  />
</Box>

<Box sx={{ mt: 2 }}>
  {tab === "left" ? (
    <Typography>Showing Posts...</Typography>
  ) : (
    <Typography>Showing Replies...</Typography>
  )}
</Box>

              
            </Box>

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
