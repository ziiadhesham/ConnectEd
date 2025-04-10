import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Typography } from "@mui/material";
import { Home, Notifications, Message, Bookmark, Person, Explore } from "@mui/icons-material";

const Sidebar = () => {
  const menuItems = [
    { text: "Home", icon: <Home /> },
    { text: "Notifications", icon: <Notifications /> },
    { text: "Messages", icon: <Message /> },
    { text: "Bookmarks", icon: <Bookmark /> },
    { text: "Profile", icon: <Person /> },
    { text: "Explore", icon: <Explore /> },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 280,
        bgcolor: "rgba(255, 255, 255, 0.8))", // Set the background to rgba(5, 5, 5, 0.5)
        color: "white",
        borderRadius: "0 20px 20px 0",
        border: "none",
        "& .MuiDrawer-paper": {
          borderRadius: "0 20px 20px 0",
          border: "none",
          bgcolor: "#2c2c2c", // Also set the paper background
        },
      }}
    >
      <List sx={{ pt: 2, pb: 2 }}>
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            sx={{
              pl: 3,
              pr: 3,
              mb: 0.5,
              ...(item.text === "Profile" && {
                bgcolor: "#282828",
                borderRadius: "8px",
              }),
            }}
          >
            <ListItemIcon sx={{ color: "white", minWidth: 36 }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} primaryTypographyProps={{color:"white", fontSize: "0.9rem" }} />
          </ListItem>
        ))}
        <Box sx={{ mt: 2, p: 3, borderTop: "1px solid #333" }}>
          
        </Box>
      </List>
    </Drawer>
  );
};

export default Sidebar;