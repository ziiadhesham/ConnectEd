import Sidebar from "../../components/Sidebar";
import { Box, useMediaQuery, useTheme } from '@mui/material';
import Feed from "./Feed";
import TrendingTopics from "./TrendingTopics";
import { useState } from "react";

const HomePage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md")); // md = 960px

    const toggleSidebar = () => setSidebarOpen(prev => !prev);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            {/* Sidebar */}
            {!isSmallScreen && (
                <Box sx={{
                    width: sidebarOpen ? "300px" : "72px",
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    height: '100vh',
                    zIndex: 1000,
                    backgroundColor: 'rgba(40, 40, 40, 0.8)',
                    transition: 'width 0.3s ease'
                }}>
                    <Sidebar open={sidebarOpen} toggleDrawer={toggleSidebar} />
                </Box>
            )}

            {/* Feed */}
            <Box sx={{
                flex: 1,
                marginLeft: !isSmallScreen ? (sidebarOpen ? '300px' : '72px') : 0,
                marginRight: !isSmallScreen ? '430px' : 0,
                marginTop: '-14px',
                padding: 2,
                minHeight: '100vh',
                transition: 'margin 0.3s ease',
                backgroundColor: 'rgba(40, 40, 40, 0.7)'
            }}>
                <Feed />
            </Box>

            {/* Trending Topics */}
            {!isSmallScreen && (
                <Box sx={{
                    width: 400,
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    height: '100vh',
                    overflowY: 'auto',
                    padding: 2,
                    backgroundColor: 'rgba(40, 40, 40, 0.8)'
                }}>
                    <TrendingTopics />
                </Box>
            )}
        </Box>
    );
};

export default HomePage;
