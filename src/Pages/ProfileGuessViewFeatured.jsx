"use client";
import React, { useState } from "react";
import styles from "./ProfileGuessViewFeatured.module.css";
import Sidebar from "../components/Sidebar";
import ProfileView from "../components/ProfileView";
import FollowSuggestions from "../components/FollowSuggestions";

function ProfileGuessViewFeatured() {
  // This state could be used to coordinate between components in a real app
  const [currentView, setCurrentView] = useState("profile");

  return (
    <section className={styles.profileguessviewFeatured}>
      <div className={styles.profile}>
        <Sidebar />
        <ProfileView />
        <FollowSuggestions />
      </div>
    </section>
  );
}

export default ProfileGuessViewFeatured;
