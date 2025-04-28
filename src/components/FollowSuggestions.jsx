"use client";
import React, { useState } from "react";
import { Box } from "@mui/material";
import ToggleTextButton from "./ToggleTextButton";
import ProfileCard from "./ProfileCard";
import styles from "../Pages/ProfileGuessViewFeatured.module.css";
import usersAccounts from "../MockData/usersAccountsData";
import useUserStore from "../Stores/UseUserStore";

function FollowSuggestions() {
  const { userId } = useUserStore();
  const [activeTab, setActiveTab] = useState("Followers");

  const loggedInUser = usersAccounts.find((user) => user.id === userId);

  const followersData = loggedInUser
    ? usersAccounts.filter((user) => loggedInUser.followers.includes(user.id))
    : [];

  const followingData = loggedInUser
    ? usersAccounts.filter((user) => loggedInUser.following.includes(user.id))
    : [];

  const handleTabChange = (side) => {
    const selectedTab = side === "left" ? "Followers" : "Following";
    setActiveTab(selectedTab);
  };

  const handleShowMore = () => {
    alert("Show more profiles");
  };

  const displayedProfiles = activeTab === "Followers" ? followersData : followingData;

  return (
    <aside className={styles.widgetwhotofollow}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <ToggleTextButton
          tab={activeTab === "Followers" ? "left" : "right"}
          handleTabChange={handleTabChange}
          leftText="Followers"
          rightText="Following"
        />
      </Box>

      <div className={styles.profileCards}>
        {displayedProfiles.length > 0 ? (
          <div className={styles.div13}>
            {displayedProfiles.map((profile, index) => (
              <ProfileCard
                key={profile.id}
                avatar={profile.profilePicture}
                name={profile.name}
                handle={profile.username}
                description={profile.bio}
                isFollowing={loggedInUser.following.includes(profile.id)}
                index={index}
              />
            ))}
            <button
              className={styles.button}
              onClick={handleShowMore}
              aria-label="Show more profiles"
            >
              <div className={styles.avatargroup}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f1ffb197a952c1365a8e8b406e2f18ce3bc827c?placeholderIfAbsent=true&apiKey=e8c977dc9b2946bd9e217b52d0aa041e"
                  className={styles.img37}
                  alt="Avatar group"
                />
              </div>
            </button>
          </div>
        ) : (
          <div className={styles.div14}>
            <p>No {activeTab.toLowerCase()} yet.</p>
          </div>
        )}
      </div>
    </aside>
  );
}

export default FollowSuggestions;
