import NotificationAvatar from "./NotificationAvatar";
import styles from "../styles/NotificationContainer.module.css";

const NotificationContainer = ({ notification, sender }) => {
  if (!notification || !sender) return null;

  const getNotificationText = () => {
    switch (notification.type) {
      case "repost":
        return "reposted your post";
      case "comment":
        return "commented on your post";
      case "like":
        return "liked your post";
      case "follow":
        return "followed you";
      default:
        return "";
    }
  };

  return (
    <div className={styles["notification-container"]}>
      <div className={styles["avatar-container"]}>
        <NotificationAvatar
          imageUrl={sender.profilePicture}
          type={notification.type}
        />
      </div>
      <div className={styles["data-container"]}>
        <div className={styles["head-container"]}>
          <p className={styles["name-container"]}>{sender.name}</p>
          <p className={styles["transparent"]}>{getNotificationText()}</p>
        </div>
        <p>{notification.text}</p>
        <p className={styles["transparent"]}>
          {notification.time} hours ago
        </p>
      </div>
    </div>
  );
};

export default NotificationContainer;
