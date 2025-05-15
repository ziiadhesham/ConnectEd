import React, { useState } from "react";
import styles from "../Pages/ProfileGuessViewFeatured.module.css";
import axiosInstance from "../config/axiosInstance";
import useUserStore from "../Stores/UseUserStore"; // ✅ Import user store

function ProfileCard({
  avatar,
  name,
  handle,
  description,
  isFollowing: initialIsFollowing,
  userId, // 👈 ID of the profile being viewed
}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const [loading, setLoading] = useState(false);
  const { userId: currentUserId } = useUserStore(); // ✅ Logged-in user

  const followButtonClass = isFollowing
    ? styles.followcirclebutton2
    : styles.followcirclebutton;

  const followIconSrc = isFollowing
    ? "https://cdn.builder.io/api/v1/image/assets/TEMP/95d30ada72d342a2785fb52acd9965dfa02d7d48?placeholderIfAbsent=true&apiKey=e8c977dc9b2946bd9e217b52d0aa041e"
    : "https://cdn.builder.io/api/v1/image/assets/TEMP/76b06a60c979d1aa423735ba855f5b186b7d0dbe?placeholderIfAbsent=true&apiKey=e8c977dc9b2946bd9e217b52d0aa041e";

  const handleFollow = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.post(`/users/${userId}/follow`);

      const justFollowed = !isFollowing;
      setIsFollowing((prev) => !prev);

      // ✅ Send notification only when following (not unfollowing) and not self
      if (justFollowed && currentUserId !== userId) {
        await axiosInstance.post("/notifications", {
          type: "follow",
          senderId: currentUserId,
          receiverId: userId,
          text: "started following you",
        });
      }
    } catch (error) {
      console.error("Failed to toggle follow:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <article className={styles.profileCard}>
      <div className={styles.cardProfileFrame}>
        <div className={styles.cardProfileDetailsFrame}>
          <img src={avatar} className={styles.img27} alt={`${name}'s avatar`} />
          <div className={styles.cardUserDetailsFrame}>
            <h3 className={styles.cardUserName}>{name}</h3>
            <p className={styles.cardUserHandle}>{handle}</p>
          </div>
        </div>
        <div className={styles.buttons}>
          <button
            className={followButtonClass}
            onClick={handleFollow}
            disabled={loading}
            aria-label={isFollowing ? "Unfollow" : "Follow"}
            aria-pressed={isFollowing}
            title={isFollowing ? "Unfollow" : "Follow"}
          >
            <img
              src={followIconSrc}
              className={styles.img28}
              alt={isFollowing ? "Unfollow" : "Follow"}
            />
          </button>
        </div>
      </div>
      <div className={styles.cardDescriptionFrame}>
        <p className={styles.cardDescriptionText}>{description}</p>
      </div>
    </article>
  );
}

export default ProfileCard;
