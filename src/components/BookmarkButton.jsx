import React, { useState } from "react";
import { IconButton, Box } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkFolderModal from "./BookMarkFolderModal";
import CloseIcon from '@mui/icons-material/Close';
const BookmarkButton = ({ disabled = false }) => {
  const [active, setActive] = useState(false);
  const [interaction, setInteraction] = useState("default");
  const [showModal, setShowModal] = useState(false);

  const handleToggle = (e) => {
    e.stopPropagation();
    if (!disabled) {
      setActive((prev) => !prev);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {/* Bookmark Button */}
      <Box
        sx={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          backgroundColor:
            disabled
              ? "#555"
              : interaction === "press"
              ? "#282828"
              : interaction === "hover"
              ? "rgba(248, 248, 248, 0.23)"
              : interaction === "focus"
              ? "#333"
              : active
              ? "#444"
              : "transparent",
          cursor: disabled ? "not-allowed" : "pointer",
          transition: "background-color 0.2s ease",
        }}
        onClick={handleToggle}
        onMouseEnter={() => setInteraction("hover")}
        onMouseLeave={() => setInteraction("default")}
        onMouseDown={() => setInteraction("press")}
        onMouseUp={() => setInteraction("hover")}
        onFocus={() => setInteraction("focus")}
        onBlur={() => setInteraction("default")}
      >
        <IconButton disabled={disabled} sx={{ color: "rgba(248, 248, 248, 0.7)" }}>
          {active ? <BookmarkIcon /> : <BookmarkBorderIcon />}
        </IconButton>
      </Box>

      {/* Modal (separate from button box) */}
      {showModal && (
        <Box
          onClick={handleCloseModal} // Clicking the backdrop closes the modal
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box onClick={(e) => e.stopPropagation()}>
            {/* Clicking inside modal won't close it */}
            <BookmarkFolderModal onClose={handleCloseModal} />
          </Box>
          <IconButton
            onClick={handleCloseModal}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              backgroundColor: 'rgba(40, 40, 40, 0.7)',
              color: '#fff',
              cursor: 'pointer',
              '&:hover': {
            backgroundColor: '#2A2A2A',
          },
            }}
          >
            <CloseIcon sx={{ color: '#ccc' }} />
          </IconButton>
        </Box>
      )}
    </>
  );
};

export default BookmarkButton;
