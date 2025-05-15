import PostActions from "./PostActions";
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PhotoAvatar from './PhotoAvatar';

const ContainerStyles = {
  width: "616px",
  padding: "12px",
  borderRadius: "20px",
  backgroundColor: "rgba(248, 248, 248, 0.02)",
  margin: "12px",
  cursor: "pointer",
};

const InfoStyles = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  marginBottom: "12px",
  marginTop: "12px",
  color: "rgba(248, 248, 248, 0.7)",
};

const TextStyles = {
  flex: 1,
  fontSize: "14px",
  color: "rgba(248, 248, 248, 0.7)",
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
  color: "rgba(248, 248, 248, 0.7)",
};

const ImageStyles = {
  width: "528px",
  height: "304px",
  borderRadius: "24px",
  marginBottom: "0px",
  marginLeft: "64px",
};

const VideoStyles = {
  ...ImageStyles,
  objectFit: "cover",
};

function ThreeDotsMenu() {
  return (
    <IconButton aria-label="settings" sx={{ marginLeft: "8px", color: "rgba(248, 248, 248, 0.7)" }}>
      <MoreHorizIcon />
    </IconButton>
  );
}

const TextAndPhoto = ({
  username = "John Doe",
  time = "09:00 AM",
  avatar ,
  content = "Ready to level up your portfolio game? Check out these 15 standout examples of creative, sleek, and interactive portfolio websites made in...",
  image = "",
  video = "",
  likesCount = 0,
  commentsCount = 0,
  repostsCount = 0,
  bookmarksCount = 0,
  onClick,
  postId,
  likes=[],    
  comments=[],
  reposts=[],

  

  
}) => {
  return (
    
    <div
      style={ContainerStyles}
      className="text-and-photo-container"
      onClick={onClick}
    >
      {/* Info Section */}
      <div style={InfoStyles}>
        
        <PhotoAvatar src={avatar} />
        <div style={TextStyles}>
          <strong>{username}</strong>
          <span style={TimeStyles}>{time}</span>
        </div>
        <ThreeDotsMenu />
      </div>

      {/* Post Text */}
      {content && <p style={ContentStyles}>{content}</p>}

      {/* Post Image */}
      {image && <img src={image} alt="Post visual" style={ImageStyles} />}

      {/* Post Video */}
      {video && (
        <video style={VideoStyles} controls>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Post Actions */}
      <div className="bookmark-button">
        <PostActions
          likesCount={likesCount}
          commentsCount={commentsCount}
          repostsCount={repostsCount}
          bookmarksCount={bookmarksCount}
          postId={postId}
          likes={likes||[]}
          comments={comments||[]}
          reposts={reposts||[]}
        />
      </div>
    </div>
  );
};

export default TextAndPhoto;
