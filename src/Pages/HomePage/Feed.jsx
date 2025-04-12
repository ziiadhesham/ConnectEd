import React, { useState } from "react";
import ComposerInput from "../../components/ComposerInput";
import Header from "../../components/HeaderPosting";
import TextAndPhoto from "../../components/textAndPhoto";
import TextAndVedio from "../../components/TextAndVedio";
import ToggleTextButton from "../../components/ToggleTextButton";
import ProfileCard from "../../components/ProfileCard";
import PostComment from "../../components/PostComment";

const Feed = () => {
  const [tab, setTab] = useState("left");
  const [searchFocused, setSearchFocused] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleTabChange = (newTab) => {
    setTab(newTab);
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleBack = () => {
    setSelectedPost(null);
  };

  const handleClick = () =>
    handlePostClick({
      id: 1,
      username: "Kohaku",
      time: "10:45 AM",
      avatar: "https://i.pravatar.cc/300?img=11",
      content: "Just launched a new UI kit 🔥 Check it out!",
      image: "https://picsum.photos/200/300",
      comments: [
        {
          user: {
            name: "Brandi",
            avatar: "https://i.pravatar.cc/150?img=13",
          },
          time: "11:00 AM",
          text: "This is amazing 🔥",
        },
        {
          user: {
            name: "Tommy",
            avatar: "https://i.pravatar.cc/150?img=15",
          },
          time: "11:05 AM",
          text: "Can’t wait to try it!",
        },
      ],
    });

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Header
        onSearchFocus={() => setSearchFocused(true)}
        onSearchBlur={() => setSearchFocused(false)}
      />

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
            </div>
          ) : (
            <div className="posts-container" style={{ maxWidth: "720px" }}>
              <TextAndVedio />
              <TextAndPhoto
                username="Mohamed Shawky"
                time="2:30 PM"
                avatar="https://i.pravatar.cc/300?img=60"
                content="Check out my latest coding vlog."
                video="https://www.w3schools.com/html/mov_bbb.mp4"
              />
            </div>
          )}
        </div>
      ) : selectedPost ? (
        <div className="posts-container" style={{ maxWidth: "720px" }}>
          {/* Full post view */}
          <TextAndPhoto
            username="Mohamed Shawky"
            time="2:30 PM"
            avatar="https://i.pravatar.cc/300?img=60"
            content="Check out my latest coding vlog."
            video="https://www.w3schools.com/html/mov_bbb.mp4"
            image="https://picsum.photos/200/300"
          />

          {/* Comments */}
          {selectedPost.comments?.map((comment, index) => (
            <PostComment
              key={index}
              user={{
                name: comment.user?.name,
                avatar: comment.user?.avatar,
              }}
              time={comment.time}
              text={comment.text}
            />
          ))}

          {/* Back button */}
          <button
            onClick={handleBack}
            style={{
              marginTop: "1rem",
              padding: "8px 16px",
              backgroundColor: "#333",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            ← Back to Feed
          </button>
        </div>
      ) : (
        <>
          <ComposerInput />
          <div className="posts-container" style={{ maxWidth: "720px" }}>
            <TextAndVedio />
            <TextAndPhoto
              username="Kohaku"
              time="10:45 AM"
              avatar="https://i.pravatar.cc/300?img=11"
              content="Just launched a new UI kit 🔥 Check it out!"
              image="https://picsum.photos/200/300"
              onClick={handleClick}
              video="https://www.w3schools.com/html/mov_bbb.mp4"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Feed;
