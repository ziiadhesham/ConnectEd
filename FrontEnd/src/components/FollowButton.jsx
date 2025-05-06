import PropTypes from "prop-types";
import React, { useReducer } from "react";

export const FollowButton = ({
  followText = "Follow",
  unfollowText = "Following",
  button = "follow",
  className = "",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    button,
    isHovering: false,
  });

  const baseStyle = {
    padding: "8px 16px",
    borderRadius: "20px",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: "14px",
    textAlign: "center",
    display: "inline-block",
    transition: "all 0.2s ease",
    userSelect: "none",
    //semi bold font
    fontFamily: "Arial, sans-serif",
  };

  const followStyle = {
    backgroundColor: "#282828",
    color: "white",
    border: "none",
  };

  const followingStyle = {
    backgroundColor: "white",
    color: state.isHovering ? "red" : "#282828",
    border: `1px solid ${state.isHovering ? "red" : "#282828"}`,
    background: state.isHovering ? "rgba(255, 0, 0, 0.05)" : "white",
  };

  const style =
    state.button === "follow"
      ? { ...baseStyle, ...followStyle }
      : { ...baseStyle, ...followingStyle };

  return (
    <div
      style={style}
      className={className}
      onClick={() => dispatch({ type: "toggle" })}
      onMouseEnter={() => dispatch({ type: "hover", payload: true })}
      onMouseLeave={() => dispatch({ type: "hover", payload: false })}
    >
      {state.button === "follow" && followText}
      {state.button === "following" &&
        (state.isHovering ? "Unfollow" : unfollowText)}
    </div>
  );
};

function reducer(state, action) {
  switch (action.type) {
    case "toggle":
      return {
        ...state,
        button: state.button === "follow" ? "following" : "follow",
        isHovering: false,
      };
    case "hover":
      return {
        ...state,
        isHovering: action.payload,
      };
    default:
      return state;
  }
}

FollowButton.propTypes = {
  followText: PropTypes.string,
  unfollowText: PropTypes.string,
  button: PropTypes.oneOf(["follow", "following"]),
  className: PropTypes.string,
};

export default FollowButton;
