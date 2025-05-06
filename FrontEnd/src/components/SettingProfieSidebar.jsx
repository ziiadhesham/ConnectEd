import React from "react";
import AvatarProfile from "./AvatarProfile.svg";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const SettingProfileSidebar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#2b2b2b",
        borderRadius: "16px",
        padding: "12px 16px",
        minWidth: "200px",
        width: "fit-content",
        cursor: "pointer",
        transition: "background-color 0.2s ease",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <img
          src={AvatarProfile}
          alt="Avatar"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontWeight: 600, color: "#fff", fontSize: "14px" }}>
            Moyo
          </span>
          <span style={{ color: "#aaa", fontSize: "13px" }}>@moyoshiro</span>
        </div>
      </div>

      <ChevronRightIcon style={{ color: "rgba(255,255,255,0.5)" }} />
    </div>
  );
};

export default SettingProfileSidebar;
