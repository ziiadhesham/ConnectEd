"use client";
import React, { useState } from "react";
import styles from "../pages/ProfileGuessViewFeatured.module.css";

function ProfilePost({
  avatar,
  author,
  time,
  content,
  image,
  isImageWide,
  hasNestedContent,
  nestedAvatar,
  nestedAuthor,
  nestedTime,
  nestedImage,
  nestedContent,
  likeCount: initialLikeCount,
  repostCount: initialRepostCount,
  commentCount: initialCommentCount,
}) {
  const [likeCount, setLikeCount] = useState(initialLikeCount);
  const [repostCount, setRepostCount] = useState(initialRepostCount);
  const [commentCount, setCommentCount] = useState(initialCommentCount);
  const [isLiked, setIsLiked] = useState(false);
  const [isReposted, setIsReposted] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount((prev) => parseInt(prev) - 1 + "");
    } else {
      setLikeCount((prev) => parseInt(prev) + 1 + "");
    }
    setIsLiked(!isLiked);
  };

  const handleRepost = () => {
    if (isReposted) {
      setRepostCount((prev) => parseInt(prev) - 1 + "");
    } else {
      setRepostCount((prev) => parseInt(prev) + 1 + "");
    }
    setIsReposted(!isReposted);
  };

  const handleComment = () => {
    // In a real app, this would open a comment dialog
    alert("Comment functionality would open here");
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleShare = () => {
    // In a real app, this would open a share dialog
    if (navigator.share) {
      navigator
        .share({
          title: `${author}'s post`,
          text: content,
          url: window.location.href,
        })
        .catch((err) => {
          alert("Sharing failed: " + err);
        });
    } else {
      alert("Share functionality would open here");
    }
  };

  const handleMoreOptions = () => {
    alert("More options would open here");
  };

  return (
    <div className={styles.postCardHeader}>
      <div className={styles.div10}>
        <div className={styles.postCardHeader2}>
          <img src={avatar} className={styles.img15} alt="User avatar" />
          <div className={styles.postCardHeaderContent}>
            <div className={styles.postContent1}>
              <div className={styles.postHeader}>
                <div className={styles.postTimestamp1}>
                  <h3 className={styles.postAuthor1}>{author}</h3>
                  <time className={styles.postTimestamp12}>{time}</time>
                </div>
                <button
                  className={styles.socialmorebutton}
                  onClick={handleMoreOptions}
                  aria-label="More options"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c51082fb3c8a90f544f4e98343ca50f9cf24a0f2?placeholderIfAbsent=true&apiKey=e8c977dc9b2946bd9e217b52d0aa041e"
                    className={styles.img16}
                    alt="More options"
                  />
                </button>
              </div>
              <p className={styles.postContent12}>{content}</p>

              {hasNestedContent && (
                <div className={styles.postcontent}>
                  <div className={styles.postContent1}>
                    <div className={styles.postHeader}>
                      <div className={styles.postTimestamp13}>
                        <h3 className={styles.postAuthor1}>{nestedAuthor}</h3>
                        <time className={styles.postTimestamp14}>
                          {nestedTime}
                        </time>
                      </div>
                      <button
                        className={styles.socialmorebutton}
                        onClick={handleMoreOptions}
                        aria-label="More options"
                      >
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c51082fb3c8a90f544f4e98343ca50f9cf24a0f2?placeholderIfAbsent=true&apiKey=e8c977dc9b2946bd9e217b52d0aa041e"
                          className={styles.img17}
                          alt="More options"
                        />
                      </button>
                    </div>
                    <div className={styles.div11}>
                      {nestedImage && (
                        <img
                          src={nestedImage}
                          className={styles.img18}
                          alt="Post thumbnail"
                        />
                      )}
                      <p className={styles.postContent13}>{nestedContent}</p>
                    </div>
                  </div>
                </div>
              )}

              {image && isImageWide && (
                <div className={styles.classicphoto}>
                  <img src={image} className={styles.img26} alt="Post image" />
                </div>
              )}
            </div>
          </div>
        </div>

        {hasNestedContent && (
          <div className={styles.postCardActions}>
            <div className={styles.postCardActionsContainer}>
              <button
                className={styles.postCardActionsLike}
                onClick={handleLike}
                aria-label={isLiked ? "Unlike" : "Like"}
                aria-pressed={isLiked}
                style={{ color: isLiked ? "#f91880" : "" }}
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fff0b18dd01b90d6a1c2a7787f2c6ff1eb8dc20d?placeholderIfAbsent=true&apiKey=e8c977dc9b2946bd9e217b52d0aa041e"
                  className={styles.img19}
                  alt="Like"
                />
                <span className={styles.postCardActionsLikeCount}>
                  {likeCount}
                </span>
              </button>
              <button
                className={styles.postCardActionsRepost}
                onClick={handleRepost}
                aria-label={isReposted ? "Undo repost" : "Repost"}
                aria-pressed={isReposted}
                style={{ color: isReposted ? "#00ba7c" : "" }}
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/66ce594885f4ed23769c28c6c7438771fa6b405d?placeholderIfAbsent=true&apiKey=e8c977dc9b2946bd9e217b52d0aa041e"
                  className={styles.img20}
                  alt="Repost"
                />
                <span className={styles.postCardActionsRepostCount}>
                  {repostCount}
                </span>
              </button>
              <button
                className={styles.postCardActionsComment}
                onClick={handleComment}
                aria-label="Comment"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/19bb67349492890e78885c96250cce9c51d6b6d3?placeholderIfAbsent=true&apiKey=e8c977dc9b2946bd9e217b52d0aa041e"
                  className={styles.img21}
                  alt="Comment"
                />
                <span className={styles.postCardActionsCommentCount}>
                  {commentCount}
                </span>
              </button>
            </div>
            <div className={styles.postCardActionsExtras}>
              <button
                className={styles.postCardActionsExtrasBookmark}
                onClick={handleBookmark}
                aria-label={isBookmarked ? "Remove bookmark" : "Bookmark"}
                aria-pressed={isBookmarked}
                style={{ color: isBookmarked ? "#1d9bf0" : "" }}
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d436869c91da928c36ecf064829106d891cb1d2?placeholderIfAbsent=true&apiKey=e8c977dc9b2946bd9e217b52d0aa041e"
                  className={styles.img22}
                  alt="Bookmark"
                />
              </button>
              <button
                className={styles.shareButton}
                onClick={handleShare}
                aria-label="Share"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3afc7455369a74515285d962330bf8accc2952e4?placeholderIfAbsent=true&apiKey=e8c977dc9b2946bd9e217b52d0aa041e"
                  className={styles.img23}
                  alt="Share"
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfilePost;
