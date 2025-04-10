import PropTypes from "prop-types";
import React, { useReducer, useState } from "react";
import avatarSVG from "./AvatarProfile.svg"; // adjust path if needed

export const ComposerInput = ({ stateProp, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "inactive",
  });

  const [text, setText] = useState("");

  const isHover = state.state === "hover";

  const containerStyle = {
    alignItems: "center",
    borderRadius: 20,
    display: "flex",
    gap: 16,
    height: 30,
    overflow: "hidden",
    padding: 12,
    position: "relative",
    width: 616,
    backgroundColor: isHover
      ? "rgba(40, 40, 40, 0.8)"
      : "#f4f4f4",
    background:
      isHover &&
      `linear-gradient(0deg, rgba(40, 40, 40, 0.8), rgba(40, 40, 40, 0.8)),
       linear-gradient(0deg, rgba(248, 248, 248, 0.02), rgba(248, 248, 248, 0.02))`,
    transition: "all 0.2s ease",
  };

  const avatarStyle = {
    height: 40,
    width: 40,
    borderRadius: "50%",
    objectFit: "cover",
    flexShrink: 0,
  };

  const createPostStyle = {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    
  };

  const inputStyle = {
    width: "100%",
    border: "none",
    outline: "none",
    fontSize: "14px",
    fontWeight: 400,
    color: "#fff",
    backgroundColor: "transparent",
    lineHeight: "20px",
    opacity: text ? 1 : 0.5,
  };

  return (
    <div
      style={containerStyle}
      className={`composer-input ${state.state} ${className}`}
      onMouseEnter={() => dispatch("mouse_enter")}
      onMouseLeave={() => dispatch("mouse_leave")}
    >
      <img src={avatarSVG} alt="Avatar" style={avatarStyle} />
      <div style={createPostStyle}>
        <input
          type="text"
          value={text}
          placeholder="Start a post..."
          onChange={(e) => setText(e.target.value)}
          style={inputStyle}
        />
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return { ...state, state: "hover" };
    case "mouse_leave":
      return { ...state, state: "inactive" };
    default:
      return state;
  }
}

ComposerInput.propTypes = {
  stateProp: PropTypes.oneOf(["inactive", "hover"]),
  className: PropTypes.string,
};

export default ComposerInput;