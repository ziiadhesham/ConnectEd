"use client";
import React, { useState } from "react";
import styles from "./ProfileGuessViewFeatured.module.css";
import Sidebar from "../components/Sidebar";
import ProfileView from "../components/ProfileView";
import FollowSuggestions from "../components/FollowSuggestions";
import useSidebarStore from "../../Stores/SideBarStore";


function ProfileGuessViewFeatured() {
  // This state could be used to coordinate between components in a real app
  const [currentView, setCurrentView] = useState("profile");
  const { sidebarOpen, toggleSidebar } = useSidebarStore();
  return (
    <section className={styles.profileguessviewFeatured}>
      <div className={styles.profile}>
      <Sidebar open={sidebarOpen} toggleDrawer={toggleSidebar} />
        <ProfileView />
        <FollowSuggestions />
      </div>
    </section>
  );
}

export default ProfileGuessViewFeatured;
