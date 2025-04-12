import TrendingTopics from "../HomePage/TrendingTopics";
import Sidebar from "../../components/Sidebar";
import NotificationStackHeader from "../../components/NotificationStackHeader";
import useSidebarStore from "../../Stores/SideBarStore";
import { gap } from "@mui/system";




const pageStyle = {
        display: "flex",
        // flexDirection: "column",
        // alignItems: "center",
        justifyContent: "space-between",
        minHeight: "100vh",
        // width: "50vw",
        backgroundColor: "#141414",
        
    };

const stackStyle = {
    marginRight: "20px",
    flexGrow: 4

}

const NotificationsPage = () => {
    const { sidebarOpen, toggleSidebar } = useSidebarStore();
    return (
        <div style={pageStyle}>
        <div style={{ flexGrow: 1  }}>
            <Sidebar open={sidebarOpen} toggleDrawer={toggleSidebar} />
        </div>
        <div style={stackStyle}>
            <NotificationStackHeader />
        </div>
        <div style={{ flexGrow: 1 ,marginRight: "10px" ,marginTop: "10px" }}>
            <TrendingTopics />
        </div>
    </div>
    );    
};


export default NotificationsPage;


