import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import ChatHeader from "../../components/ChatHeader";
import EmojiPicker from "../../components/EmojiPicker";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SendIcon from "@mui/icons-material/Send";
import DownloadIcon from "@mui/icons-material/Download";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

const MessageItem = ({ avatar, name, time, message, image }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = image;
    link.download = "image.jpg"; // Customize the file name if needed
    link.click();
  };

  const handleMaximize = () => {
    window.open(image, "_blank"); // Opens the image in a new tab
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        marginBottom: 2,
        backgroundColor: "#2b2b2b",
        borderRadius: "12px",
        padding: 2,
        position: "relative",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <img
          src={avatar}
          alt={name}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
          }}
        />
        <Box>
          <Typography sx={{ color: "#fff", fontWeight: "bold" }}>{name}</Typography>
          <Typography sx={{ color: "#aaa", fontSize: "12px" }}>{time}</Typography>
        </Box>
      </Box>
      <Typography sx={{ color: "#fff", marginTop: 1 }}>{message}</Typography>
      {image && (
        <Box
          sx={{
            position: "relative",
            marginTop: 1,
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          <img
            src={image}
            alt="attachment"
            style={{
              width: "100%",
              borderRadius: "12px",
            }}
          />
          {/* Buttons on top-right of the image */}
          <Box
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              display: "flex",
              gap: 1,
            }}
          >
            <IconButton
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "#fff",
                "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
              }}
              onClick={handleDownload}
            >
              <DownloadIcon />
            </IconButton>
            <IconButton
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "#fff",
                "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
              }}
              onClick={handleMaximize}
            >
              <FullscreenIcon />
            </IconButton>
          </Box>
        </Box>
      )}
    </Box>
  );
};

const MessageInput = ({
  message,
  onChange,
  onSend,
  onFileUpload,
  onEmojiClick,
  showEmojiPicker,
  onEmojiSelect,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#2b2b2b",
        borderRadius: "32px",
        padding: "8px",
        position: "relative",
      }}
    >
      <IconButton component="label" sx={{ color: "#fff" }}>
        <AttachFileIcon />
        <input type="file" hidden onChange={onFileUpload} />
      </IconButton>
      <input
        type="text"
        value={message}
        onChange={onChange}
        placeholder="Type a message..."
        style={{
          flex: 1,
          backgroundColor: "transparent",
          border: "none",
          outline: "none",
          color: "#fff",
          padding: "8px",
        }}
      />
      <IconButton sx={{ color: "#fff" }} onClick={onEmojiClick}>
        <EmojiEmotionsIcon />
      </IconButton>
      {showEmojiPicker && (
        <>
          {/* Transparent Overlay */}
          <Box
            onClick={onEmojiClick} // Close EmojiPicker when clicking outside
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Transparent overlay
              zIndex: 1,
            }}
          />
          {/* EmojiPicker */}
          <Box
            sx={{
              position: "absolute",
              top: "-260px",
              right: "0px",
              zIndex: 2,
            }}
          >
            <EmojiPicker onSelect={onEmojiSelect} />
          </Box>
        </>
      )}
      <IconButton sx={{ color: "#fff" }} onClick={onSend}>
        <SendIcon />
      </IconButton>
    </Box>
  );
};

const Message = () => {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleSend = () => {
    if (message.trim()) {
      console.log("Send:", message);
      setMessage("");
      setShowEmojiPicker(false);
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("File uploaded:", file.name);
    }
  };

  const handleEmojiClick = () => {
    setShowEmojiPicker((prev) => !prev); // Toggles the visibility of the EmojiPicker
  };

  const handleEmojiSelect = (emoji) => {
    setMessage((prev) => prev + emoji); // Appends the selected emoji to the message
    setShowEmojiPicker(false); // Hides the EmojiPicker after selecting an emoji
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#1e1e1e",
        color: "#fff",
        position: "relative",
      }}
    >
      <ChatHeader />
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          padding: 2,
        }}
      >
        <MessageItem
          avatar="https://i.pravatar.cc/40"
          name="Moyo Shiro"
          time="09:15 AM"
          message="I like where you're going with this!"
        />
        <MessageItem
          avatar="https://i.pravatar.cc/40"
          name="Kohaku"
          time="09:16 AM"
          message="Good point. Let's try lazy loading!"
          image="https://www.w3schools.com/w3images/lights.jpg"
        />
      </Box>
      <MessageInput
        message={message}
        onChange={(e) => setMessage(e.target.value)}
        onSend={handleSend}
        onFileUpload={handleFileUpload}
        onEmojiClick={handleEmojiClick}
        showEmojiPicker={showEmojiPicker}
        onEmojiSelect={handleEmojiSelect}
      />
    </Box>
  );
};

export default Message;