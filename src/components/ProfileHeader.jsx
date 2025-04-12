"use client";
import React, { useState } from "react";
//import styles from "./ProfileGuessViewFeatured.module.css" in pages folder
import styles from "../pages/ProfileGuessViewFeatured.module.css";

function ProfileHeader() {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  const handleMoreOptions = () => {
    alert("Profile options menu would open here");
  };

  return (
    <header className={styles.profileCover}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/de668314661bb74cffaccc97ee188ed0a3f82c45?placeholderIfAbsent=true&apiKey=e8c977dc9b2946bd9e217b52d0aa041e"
        className={styles.img10}
        alt="Profile cover"
      />

      <div className={styles.profileInfo}>
        <div className={styles.profileInfoHeader}>
          <div className={styles.profileInfoHeaderContent}>
            <h1 className={styles.profileName}>Moyo Shiro</h1>
            <p className={styles.profileHandle}>@moyoshiro</p>
          </div>

          <div className={styles.profileHeaderActions}>
            <button
              className={styles.profileHeaderActionsButton}
              onClick={handleMoreOptions}
              aria-label="More options"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a04a1ea116d4f3330ed2d8896b4731e747670ca?placeholderIfAbsent=true&apiKey=e8c977dc9b2946bd9e217b52d0aa041e"
                className={styles.img11}
                alt="More options"
              />
            </button>
            <button
              className={styles.followbutton}
              onClick={handleFollow}
              aria-pressed={isFollowing}
            >
              {isFollowing ? "Following" : "Follow"}
            </button>
          </div>
        </div>

        <p className={styles.profileInfoDescription}>
          🎨 UI/UX Designer | 💡 Crafting seamless digital experiences🚀
          Designing user-centric interfaces📍 NYC | Post
          <span style={{ color: "rgba(248,248,248,1)" }}>
            {" "}
            on #Design #UX
          </span>{" "}
          #UI
        </p>

        <div className={styles.profileStats}>
          <ProfileStat
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/7a04a1ea116d4f3330ed2d8896b4731e747670ca?placeholderIfAbsent=true&apiKey=e8c977dc9b2946bd9e217b52d0aa041e"
            count="8"
            label="posts"
          />
          <ProfileStat
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/f31f928345e09d6bee148e8211725dbc82bce8a0?placeholderIfAbsent=true&apiKey=e8c977dc9b2946bd9e217b52d0aa041e"
            count="0"
            label="followers"
          />
          <div className={styles.profileFollowersStat2}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f01317265b5804a76d5138dc830d8d2191f66fce?placeholderIfAbsent=true&apiKey=e8c977dc9b2946bd9e217b52d0aa041e"
              className={styles.img14}
              alt="Link"
            />
            <a
              href="https://linktr.ee/tranmautritam"
              className={styles.profileFollowersStatCount2}
              style={{ textDecoration: "underline" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              https://linktr.ee/tranmautritam
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function ProfileStat({ icon, count, label }) {
  return (
    <div className={styles.profilePostsStat}>
      <img src={icon} className={styles.img12} alt="" />
      <span className={styles.profilePostsStatCount}>{count}</span>
      <div className={styles.base2Textbutton}>
        <span className={styles.profilePostsStatLabel}>{label}</span>
      </div>
    </div>
  );
}

export default ProfileHeader;
