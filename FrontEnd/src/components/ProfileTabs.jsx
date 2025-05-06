"use client";
import React, { useState } from "react";
import styles from "../pages/ProfileGuessViewFeatured.module.css";

function ProfileTabs() {
  const [activeTab, setActiveTab] = useState("Featured");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    // In a real app, this would change the content displayed
    console.log(`Switched to ${tab} tab`);
  };

  return (
    <nav className={styles.postFeedNavigation}>
      <button
        className={
          activeTab === "Posts"
            ? styles.postFeedNavigationItem2
            : styles.postFeedNavigationItem
        }
        onClick={() => handleTabChange("Posts")}
        aria-selected={activeTab === "Posts"}
        role="tab"
      >
        <span className={styles.postFeedNavigationItemLabel}>Posts</span>
      </button>
      <button
        className={
          activeTab === "Featured"
            ? styles.postFeedNavigationItem2
            : styles.postFeedNavigationItem
        }
        onClick={() => handleTabChange("Featured")}
        aria-selected={activeTab === "Featured"}
        role="tab"
      >
        Featured
      </button>
      <button
        className={
          activeTab === "Media"
            ? styles.postFeedNavigationItem2
            : styles.postFeedNavigationItem
        }
        onClick={() => handleTabChange("Media")}
        aria-selected={activeTab === "Media"}
        role="tab"
      >
        <span className={styles.postFeedNavigationItemLabel}>Media</span>
      </button>
    </nav>
  );
}

export default ProfileTabs;
