"use client";
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import ToggleTextButton from "./ToggleTextButton"; // Adjust the path as needed
import ProfileCard from "./ProfileCard";
import styles from "../Pages/ProfileGuessViewFeatured.module.css";

function FollowSuggestions() {
  const [activeTab, setActiveTab] = useState("Who to follow");

  const profiles = [
    {
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c62c899c4c147d8db5c1a2310fdf816d6982cd5d?placeholderIfAbsent=true&apiKey=e8c977dc9b2946bd9e217b52d0aa041e",
      name: "Kohaku",
      handle: "Lolita52",
      description: "I design digital products and ventures.",
      isFollowing: false,
    },
    {
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/55f3ab30e6a802b124a284953fba1e4230b63772?placeholderIfAbsent=true&apiKey=e8c977dc9b2946bd9e217b52d0aa041e",
      name: "Nettie Schuster",
      handle: "Precious3",
      description: "I design digital products and ventures.",
      isFollowing: true,
    },
    {
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a7ee1ecbdf1b298087dbf699526152c7cba705c8?placeholderIfAbsent=true&apiKey=e8c977dc9b2946bd9e217b52d0aa041e",
      name: "Mrs. Lola Rohan",
      handle: "Collin.Marks",
      description: "I design digital products and ventures.",
      isFollowing: true,
    },
    {
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8b2842056b06ffd20289336e2ba1238c4d6919bd?placeholderIfAbsent=true&apiKey=e8c977dc9b2946bd9e217b52d0aa041e",
      name: "Kohaku",
      handle: "Susana_Dickens",
      description: "I design digital products and ventures.",
      isFollowing: false,
    },
    {
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8ac9772bede7dce7fc60a987aa0b6c90474218d2?placeholderIfAbsent=true&apiKey=e8c977dc9b2946bd9e217b52d0aa041e",
      name: "Brandi Padberg",
      handle: "Abbie_Pollich34",
      description:
        'The "No Code SaaS" Guy. Building a portfolio of software companies. Join my newsletter and I\'ll send you free goodies on getting started in SaaS',
      isFollowing: false,
    },
  ];

  const handleTabChange = (side) => {
    const selectedTab = side === "left" ? "Who to follow" : "Trending topics";
    setActiveTab(selectedTab);
  };

  const handleShowMore = () => {
    alert("Show more profiles");
  };

  return (
    <aside className={styles.widgetwhotofollow}>
      <Box sx={{display: "flex", justifyContent: "center"}}>
        <ToggleTextButton
          tab={activeTab === "Who to follow" ? "left" : "right"}
          handleTabChange={handleTabChange}
          leftText="Followers"
          rightText="Following"
        />
      </Box>

      <div className={styles.profileCards}>
        {activeTab === "Who to follow" ? (
          <div className={styles.div13}>
            {profiles.map((profile, index) => (
              <ProfileCard
                key={index}
                avatar={profile.avatar}
                name={profile.name}
                handle={profile.handle}
                description={profile.description}
                isFollowing={profile.isFollowing}
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
            {profiles.map((profile, index) => (
              <ProfileCard
                key={index}
                avatar={profile.avatar}
                name={profile.name}
                handle={profile.handle}
                description={profile.description}
                isFollowing={profile.isFollowing}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}

export default FollowSuggestions;
