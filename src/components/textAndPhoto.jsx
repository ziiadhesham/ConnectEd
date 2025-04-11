import PostActions from "./PostActions";
import Avatar from "./avatar";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from '@mui/material/IconButton';
import PhotoAvatar from './PhotoAvatar';
const ContainerStyles = {
  width: "616px",
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
  width: "44px",
  height: "44px",
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

function ThreeDotsMenu() {
  return (
    <IconButton aria-label="settings" sx={{ marginLeft: "8px" , color: "rgb(248, 248, 248,0.7)", }}>
      <MoreHorizIcon />
    </IconButton>
  );
}

const TextAndPhoto = () => {
  return (
    <div style={ContainerStyles} className="text-and-photo-container">
      
      <div style={InfoStyles}>
            {/* <Avatar style={AvatarStyles}  />
             */}
             <PhotoAvatar src="https://i.pravatar.cc/300?img=10"/>
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
      
      {/* Post Image */}
      <img 
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&w=528&h=304" 
        alt="Mountain landscape" 
        style={ImageStyles}
      />

      {/* Post Actions (Like, Comment, Share) */}
      <PostActions  />
    </div>
  );
};

export default TextAndPhoto;

// By SEIF