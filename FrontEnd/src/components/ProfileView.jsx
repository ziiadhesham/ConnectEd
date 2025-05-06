"use client";
import React from "react";
import styles from "../pages/ProfileGuessViewFeatured.module.css";
import ProfileHeader from "./ProfileHeader";
import ProfileTabs from "./ProfileTabs";
import ProfilePost from "./ProfilePost";

function ProfileView() {
  return (
    <main className={styles.profileFeaturedguessview}>
      <ProfileHeader />

      <section className={styles.postFeed}>
        <ProfileTabs />

        <div className={styles.profilepost}>
          <article className={styles.postCardContent}>
            <ProfilePost
              avatar="https://cdn.builder.io/api/v1/image/assets/TEMP/7df41a1582671b8262636f09e1d6cfce10a27164?placeholderIfAbsent=true&apiKey=e8c977dc9b2946bd9e217b52d0aa041e"
              author="Moyo Shiro"
              time="09:00 AM"
              content="One of my latest projects here, check it out ↓"
              hasNestedContent
              nestedAvatar="https://cdn.builder.io/api/v1/image/assets/TEMP/7df41a1582671b8262636f09e1d6cfce10a27164?placeholderIfAbsent=true&apiKey=e8c977dc9b2946bd9e217b52d0aa041e"
              nestedAuthor="Moyo Shiro"
              nestedTime="09:00 AM"
              nestedImage="https://cdn.builder.io/api/v1/image/assets/TEMP/b4e5530931854a4b38d675e625f622581c376f41?placeholderIfAbsent=true&apiKey=e8c977dc9b2946bd9e217b52d0aa041e"
              nestedContent="Ready to level up your portfolio game? Check out these 15 standout examples of creative, sleek, and interactive portfolio websites made in"
              likeCount="12"
              repostCount="12"
              commentCount="12"
            />

            <ProfilePost
              avatar="https://cdn.builder.io/api/v1/image/assets/TEMP/7df41a1582671b8262636f09e1d6cfce10a27164?placeholderIfAbsent=true&apiKey=e8c977dc9b2946bd9e217b52d0aa041e"
              author="Moyo Shiro"
              time="09:00 AM"
              content="Free fonts for your next projects"
              image="https://cdn.builder.io/api/v1/image/assets/TEMP/4b95d82a695b24776e4c62c08ab85e66aa06415e?placeholderIfAbsent=true&apiKey=e8c977dc9b2946bd9e217b52d0aa041e"
              isImageWide
            />
          </article>
        </div>
      </section>
    </main>
  );
}

export default ProfileView;
