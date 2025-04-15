import React, { useState } from "react";
import ComposerInput from "../../components/ComposerInput";
import Header from "../../components/HeaderPosting";
import TextAndPhoto from "../../components/textAndPhoto";
import TextAndVedio from "../../components/TextAndVedio";
import ToggleTextButton from "../../components/ToggleTextButton";
import ProfileCard from "../../components/ProfileCard";
import { useNavigate } from "react-router-dom";
import posts from "../../MockData/PostsData"; // ✅ Import mock posts

const Feed = () => {
  const [tab, setTab] = useState("left");
  const [searchFocused, setSearchFocused] = useState(false);
  const navigate = useNavigate();

  const handleTabChange = (newTab) => {
    setTab(newTab);
  };

  const handlePostClick = (postId, e) => {
    e.stopPropagation();
    if (e.target.closest(".bookmark-button")) return;
    navigate(`/post/${postId}`);
  };

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: "100px",
      }}
    >
        <Header
            onSearchFocus={() => setSearchFocused(true)}
            onSearchBlur={() => setSearchFocused(false)}
          />
          <ComposerInput />
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
    

      {searchFocused ? (
        <div className="posts-container" style={{ maxWidth: "720px" }}>
          {tab === "left" ? (
            <>
              <ProfileCard
                name="Brandi Padberg"
                username="@Abbie_Pollich34"
                bio='The "No Code SaaS" Guy.'
                avatar="https://i.pravatar.cc/150?img=11"
                initiallyFollowing={false}
              />
              <ProfileCard
                name="Sara Techie"
                username="@sara"
                bio="Flutter Dev • Mobile UX wizard"
                avatar="https://i.pravatar.cc/150?img=10"
                initiallyFollowing={false}
              />
            </>
          ) : (
            <>
              <TextAndVedio />
              <TextAndPhoto
                username="Mohamed Shawky"
                time="2:30 PM"
                avatar="https://i.pravatar.cc/300?img=60"
                content="Check out my latest coding vlog."
                video="https://www.w3schools.com/html/mov_bbb.mp4"
                onClick={(e) => handlePostClick("2", e)}
              />
            </>
          )}
        </div>
      ) : (
        <>
          
          <div className="posts-container" style={{ maxWidth: "720px" }}>
            {posts.map((post) => (
              <TextAndPhoto
                key={post.id}
                username={post.username}
                time={post.time}
                avatar={post.avatar}
                content={post.content}
                image={post.image}
                video={post.video}
                onClick={(e) => handlePostClick(post.id, e)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Feed;
