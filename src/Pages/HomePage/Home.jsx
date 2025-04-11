import Sidebar from "../../components/Sidebar";
import { Box } from '@mui/material';
import Feed from "./Feed";
import TrendingTopics from "./TrendingTopics";
import { useState } from "react";

const HomePage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => setSidebarOpen(prev => !prev);
    
    return (
        <Box sx={{ display: 'flex' }}>
            {/* Sidebar - Fixed Left */}
            <Box sx={{
                width: sidebarOpen ? "320px" : "72px",
                position: 'fixed',
                top: 0,
                left: 0,
                height: '100vh',
                zIndex: 1000,
                // backgroundColor: 'rgba(40, 40, 40, 0.7)',
                transition: 'width 0.3s ease'
            }}>
                <Sidebar open={sidebarOpen} toggleDrawer={toggleSidebar} />
            </Box>

            {/* Feed - Middle Scrollable */}
            <Box sx={{
                flex: 1,
                marginLeft: sidebarOpen ? '320px' : '72px',
                marginRight: '430px',
                marginTop: '-14px',
                padding: 2,
                minHeight: '100vh',
                transition: 'margin-left 0.3s ease'
            }}>
                <Feed />
            </Box>

            {/* Trending Topics - Fixed Right */}
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
        </Box>
    );
};

export default HomePage;
