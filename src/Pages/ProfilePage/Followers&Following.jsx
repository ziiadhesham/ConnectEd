import { Box, useTheme, useMediaQuery ,Typography } from "@mui/material";
import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import TrendingTopics from "../HomePage/TrendingTopics";
import FollowSuggestions from "../../components/FollowSuggestions";
import ToggleTextButton from "../../components/ToggleTextButton";



const Profile = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
    const [sidebarOpen, setSidebarOpen] = useState(true);

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
                    <Sidebar open={sidebarOpen} toggleDrawer={() => setSidebarOpen(prev => !prev)} />
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
                
                

                
                <Box sx={{ mt: 2 }}>
         
      
         
         
          
         
            
            
           
              <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' , width: '100%', height: '100%' }}>
  <FollowSuggestions />
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
