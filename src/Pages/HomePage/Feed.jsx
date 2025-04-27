import React, { useState } from "react";
import Header from "../../components/HeaderPosting";
import TextAndPhoto from "../../components/textAndPhoto";
import TextAndVedio from "../../components/TextAndVedio";
import ToggleTextButton from "../../components/ToggleTextButton";
import ProfileCard from "../../components/ProfileCard";
import { useNavigate } from "react-router-dom";
import initialPosts from "../../MockData/PostsData"; // rename to initialPosts

const Feed = () => {
  const [tab, setTab] = useState("left");
  const [searchFocused, setSearchFocused] = useState(false);
  const [posts, setPosts] = useState(initialPosts); // 🔥 make posts dynamic!
  const navigate = useNavigate();

  const handleTabChange = (newTab) => {
    setTab(newTab);
  };

  const handlePostClick = (postId, e) => {
    e.stopPropagation();
    if (e.target.closest(".bookmark-button")) return;
    navigate(`/post/${postId}`);
  };

  const handleAddPost = (newPost) => {
    const newPostObject = {
      id: Date.now().toString(), // unique id
      username: "You",
      time: "Just now",
      avatar: "https://i.pravatar.cc/150?img=68",
      content: newPost.text,
      image: newPost.file ? URL.createObjectURL(newPost.file) : null,
      video: null,
      likes: [],
      likesCount: 0,
      reposts: [],
      repostsCount: 0,
      bookmarks: [],
      bookmarksCount: 0,
      comments: [],
    };
    setPosts([newPostObject, ...posts]); // Prepend new post at the top
  };

  return (
    <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", paddingBottom: "100px" }}>
      <Header
        onSearchFocus={() => setSearchFocused(true)}
        onSearchBlur={() => setSearchFocused(false)}
        onPost={handleAddPost} // pass the post handler! 🔥
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
              likes={post.likes}
              likesCount={post.likesCount}
              reposts={post.reposts}
              repostsCount={post.repostsCount}
              bookmarks={post.bookmarks}
              bookmarksCount={post.bookmarksCount}
              commentsCount={post.comments?.length || 0}
              onClick={(e) => handlePostClick(post.id, e)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Feed;
