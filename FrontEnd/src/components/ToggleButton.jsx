import PropTypes from "prop-types";
import React, { useReducer } from "react";

export const ToggleButton = ({ active, stateProp }) => {
  const [state, dispatch] = useReducer(reducer, {
    active: active || "off",
    state: stateProp || "default",
  });

  const styles = {
    container: {
      display: "inline-block",
      cursor: "pointer",
      position: "relative",
      width: "60px",
      height: "30px",
      backgroundColor: state.active === "on" ? "#424242" : "#ccc",  // Change to greyish-black for "on"
      borderRadius: "30px",
      transition: "background-color 0.3s",
    },
    toggleCircle: {
      position: "absolute",
      top: "3px",
      left: state.active === "on" ? "33px" : "3px",
      width: "24px",
      height: "24px",
      backgroundColor: "white",
      borderRadius: "50%",
      transition: "left 0.3s",
    },
  };

  return (
    <div
      style={styles.container}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div style={styles.toggleCircle} />
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "click":
      return {
        ...state,
        active: state.active === "on" ? "off" : "on",
        state: "default",
      };
    default:
      return state;
  }
}

ToggleButton.propTypes = {
  active: PropTypes.oneOf(["off", "on"]),
  stateProp: PropTypes.oneOf(["hover", "default"]),
};

ToggleButton.defaultProps = {
  active: "off",
  stateProp: "default",
};

export default ToggleButton;
