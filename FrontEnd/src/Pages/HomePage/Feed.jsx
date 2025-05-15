import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/HeaderPosting";
import TextAndPhoto from "../../components/textAndPhoto";
import TextAndVedio from "../../components/TextAndVedio";
import ToggleTextButton from "../../components/ToggleTextButton";
import ProfileCard from "../../components/ProfileCard";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../Stores/UseUserStore";
import axiosInstance from "../../config/axiosInstance";

const Feed = () => {
  const [headertab, headersetTab] = useState("following");
  const [tab, setTab] = useState("left");
  const [searchFocused, setSearchFocused] = useState(false);
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const { userId } = useUserStore();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsRes, usersRes, currentUserRes] = await Promise.all([
          axiosInstance.get("/posts"),
          axiosInstance.get("/users"),
          axiosInstance.get(`/users/${userId}`),
        ]);

        setPosts(postsRes.data);
        setUsers(usersRes.data);
        setCurrentUser(currentUserRes.data);
        console.log("posts", postsRes.data[0], "users", usersRes.data[0], "currentUser", currentUserRes.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userId]);

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
      id: Date.now().toString(),
      userId: { _id: userId }, // mock userId for new posts
      time: "Just now",
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
    setPosts([newPostObject, ...posts]);
  };

  const normalizedUserId = userId?.toString();
  const normalizedFollowingIds = (currentUser?.following || []).map((id) => id.toString());

  const followingPosts = posts.filter((post) => {
    const postUserId = post.userId?._id?.toString();
    return normalizedFollowingIds.includes(postUserId) || postUserId === normalizedUserId;
  });

  const forYouPosts = [...posts].sort((a, b) => b.likesCount - a.likesCount);

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
        onPost={handleAddPost}
        tab={headertab}
        setTab={headersetTab}
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
          {(headertab === "following" ? followingPosts : forYouPosts).map((post) => {
            const postUser = users.find((u) => u._id === post.userId?._id);
            if (!postUser) return null;

            return (
              <TextAndPhoto
                key={post._id}
                postId={post._id}
                username={postUser.username}
                avatar={postUser.profilePicture}
                time={post.time}
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
                onClick={(e) => handlePostClick(post._id, e)}
                comments={post.comments}
                
        
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Feed;
