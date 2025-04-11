import React, { useState } from "react";
import ComposerInput from "../../components/ComposerInput";
import Header from "../../components/HeaderPosting";
import TextAndPhoto from "../../components/textAndPhoto";
import TextAndVedio from "../../components/TextAndVedio";
import ToggleTextButton from "../../components/ToggleTextButton"; // Import the ToggleButton component
import ProfileCard from "../../components/ProfileCard";

const Feed = () => {
  const [tab, setTab] = useState("left"); // Track left or right tab
  const [searchFocused, setSearchFocused] = useState(false);

  // Handles tab switching
  const handleTabChange = (newTab) => {
    setTab(newTab);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* Header */}
      <Header onSearchFocus={() => setSearchFocused(true)} onSearchBlur={() => setSearchFocused(false)} />

      {/* Toggle Button with custom text */}
      {searchFocused && (
        <div className="posts-container">
          <ToggleTextButton
            tab={tab}
            handleTabChange={handleTabChange}
            leftText="People to follow"
            rightText="Trending Topics"
          />
        </div>
      )}

      {/* Content based on search focus */}
      {searchFocused ? (
        <div className="posts-container">
          {tab === "left" ? (
            // Content for "People to follow" when the left tab is selected
           <div className="posts-container" style={{ maxWidth: "720px" }}>
              <ProfileCard
              name="Brandi Padberg"
              username="@Abbie_Pollich34"
              bio='The "No Code SaaS" Guy. Building a portfolio of software companies.'
              avatar="https://i.pravatar.cc/150?img=11"
              initiallyFollowing={false}
            />
            <ProfileCard
              name="Sara Techie"
              username="@sara"
              bio="Flutter Dev • Mobile UX wizard & Coffee nerd ☕"
              avatar="https://i.pravatar.cc/150?img=10"
              initiallyFollowing={false}
            />
              {/* Add content or components for people to follow */}
            </div>
          ) : (
            // Content for "Trending Topics" when the right tab is selected
            <div>
              <div className="posts-container" style={{ maxWidth: "720px" }}>
            <TextAndVedio />
            <TextAndPhoto />
          </div>
              {/* Add content or components for trending topics */}
            </div>
          )}
        </div>
      ) : (
        <>
          <ComposerInput />
          <div className="posts-container" style={{ maxWidth: "720px" }}>
            <TextAndVedio />
            <TextAndPhoto />
          </div>
        </>
      )}
    </div>
  );
};

export default Feed;
