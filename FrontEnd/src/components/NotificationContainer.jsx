import NotificationAvatar from "./NotificationAvatar";
import styles from '../styles/NotificationContainer.module.css';
import { margin } from "@mui/system";
import notifications from "../MockData/NotificationsData";  //from mockData
import usersAccounts from "../MockData/usersAccountsData";

const NotificationContainer = ({ id }) => {

    const notification = notifications.find((item) => item.id === id);
    const sender = usersAccounts.find(user => user.id === notification.senderId);
   
        const renderOverlay = () => {
            switch (notification.type) {
              case 'repost':
                return (
                    <div className={styles['notification-container']}>
                        <div className={styles['avatar-container']}>
                            <NotificationAvatar imageUrl={sender.profilePicture} type="repost" />
                        </div>
                        <div className={styles['data-container']}>
                            <div className={styles['head-container']}>
                                <p className={styles['name-container']}>{sender.name}</p> 
                                <p className={styles['transparent']}>reposted your post</p>
                            </div>
                            <p>{notification.text}</p>
                            <p className={styles['transparent']}>{notification.time} hours ago</p>
                        </div>
                  </div>
                );
              case 'comment':
                return (
                    <div className={styles['notification-container']}>
                        <div className={styles['avatar-container']}>
                            <NotificationAvatar imageUrl={sender.profilePicture} type={notification.type}/>
                        </div>
                        <div className={styles['data-container']}>
                            <div className={styles['head-container']}>
                                <p className={styles['name-container']}>{sender.name}</p> 
                                <p className={styles['transparent']}>commented on your post</p>
                            </div>
                            <p>{notification.text}</p>
                            <p className={styles['transparent']}>{notification.time} hours ago</p>
                        </div>
                  </div>
                );
              case 'like':
                return (
                    <div className={styles['notification-container']}>
                    <div className={styles['avatar-container']}>
                        <NotificationAvatar imageUrl={sender.profilePicture} type={notification.type} />
                    </div>
                    <div className={styles['data-container']}>
                        <div className={styles['head-container']}>
                            <p className={styles['name-container']}>{sender.name}</p> 
                            <p className={styles['transparent']}>liked your post</p>
                        </div>
                        <p>{notification.text}</p>
                        <p className={styles['transparent']}>{notification.time} hours ago</p>
                    </div>
              </div>
                );
              case 'follow':
                return (
                    <div className={styles['notification-container']}>
                    <div className={styles['avatar-container']}>
                        <NotificationAvatar imageUrl={sender.profilePicture} type={notification.type} />
                    </div>
                    <div className={styles['data-container']}>
                        <div className={styles['head-container']}>
                            <p className={styles['name-container']}>{sender.name}</p> 
                            <p className={styles['transparent']}>followed you</p>
                        </div>
                        <p>{notification.text}</p>
                        <p className={styles['transparent']}>{notification.time} hours ago</p>
                    </div>
              </div>
                );  
              default:
                return null;
            }
          };
   
    return (
        <div >
            {renderOverlay()}
        </div>
    );
};

export default NotificationContainer