import PostActions from "./PostActions";
import Avatar from "./avatar";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from '@mui/material/IconButton';
import Box from "@mui/material/Box";
import { maxWidth } from "@mui/system";


const ContainerStyles = {
  maxWidth: "616px",
  height: "480px", 
  padding: "12px",
  borderRadius: "20px",
  backgroundColor: "rgb(248, 248, 248,2%)", 
  margin: "12px ",

};

const InfoStyles = {
  width: "100%",
  height: "24px",
  display: "flex",
  alignItems: "center", 
  gap: "12px", 
  marginBottom: "12px",
  marginTop: "12px",
  color: "rgb(248, 248, 248,0.7)",
};

const AvatarStyles = {
  width: "40px",
  height: "40px",
  borderRadius: "50%", 
  marginTop: "8px",
};

const TextStyles = {
  flex: 1, 
  fontSize: "14px",
  color: "rgb(248, 248, 248,0.7)",
};

const TimeStyles = {
  fontSize: "12px",
  color: "#777",
  marginLeft: "20px", 
};

const ContentStyles = {
  fontSize: "14px",
  lineHeight: "24px",
  marginBottom: "12px",
  marginLeft: "64px",
  color: "rgb(248, 248, 248,0.7)",
};

const ImageStyles = {
  width: "528px",
  height: "304px",
  borderRadius: "24px",
  marginBottom: "0px",
  marginLeft: "64px",
};

const TimerBoxStyles = {
  position: "absolute",
  top: "270px",
  right: "410px",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  color: "silver",
  padding: "4px 8px",
  borderRadius: "24px",
  fontSize: "12px",
};

const videoContainerStyles = {
    position: "relative",
    width: "528px",
    marginBottom: "12px",
    
}

function ThreeDotsMenu() {
  return (
    <IconButton aria-label="settings" sx={{ marginLeft: "8px" , color: "rgb(248, 248, 248,0.7)", }}>
      <MoreHorizIcon />
    </IconButton>
  );
}

const TextAndVedio = () => {
  return (
    <div style={ContainerStyles} className="text-and-photo-container">
      
      <div style={InfoStyles}>
            <Avatar style={AvatarStyles} />
            <div style={TextStyles}>
                <strong>John Doe</strong>
                <span style={TimeStyles}>09:00 AM</span>
            </div>
            <ThreeDotsMenu />
      </div>

      {/* Post Content */}
      <p style={ContentStyles}>
        Ready to level up your portfolio game? Check out these 15 standout examples 
        of creative, sleek, and interactive portfolio websites made in...
      </p>
      
      <div className="video-container" style={videoContainerStyles}>
        <img 
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&w=528&h=304" 
                alt="Mountain landscape" 
                style={ImageStyles}
            />

            <Box sx={TimerBoxStyles}>0:09</Box>
            
      </div>
        

      {/* Post Actions (Like, Comment, Share) */}
      <PostActions />
    </div>
  );
};

export default TextAndVedio;

// By SEIF