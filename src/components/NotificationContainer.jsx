import NotificationAvatar from "./NotificationAvatar";
import styles from '../styles/NotificationContainer.module.css';
import { margin } from "@mui/system";


const NotificationContainer = ({ type, name , imageUrl , time , text }) => {
   
   
        const renderOverlay = () => {
            switch (type) {
              case 'repost':
                return (
                    <div className={styles['notification-container']}>
                        <div className={styles['avatar-container']}>
                            <NotificationAvatar imageUrl={imageUrl} type="repost" />
                        </div>
                        <div className={styles['data-container']}>
                            <div className={styles['head-container']}>
                                <p className={styles['name-container']}>{name}</p> 
                                <p className={styles['transparent']}>reposted your post</p>
                            </div>
                            <p>{text}</p>
                            <p className={styles['transparent']}>{time} hours ago</p>
                        </div>
                  </div>
                );
              case 'comment':
                return (
                    <div className={styles['notification-container']}>
                        <div className={styles['avatar-container']}>
                            <NotificationAvatar imageUrl={imageUrl} type="comment" />
                        </div>
                        <div className={styles['data-container']}>
                            <div className={styles['head-container']}>
                                <p className={styles['name-container']}>{name}</p> 
                                <p className={styles['transparent']}>commented on your post</p>
                            </div>
                            <p>{text}</p>
                            <p className={styles['transparent']}>{time} hours ago</p>
                        </div>
                  </div>
                );
              case 'like':
                return (
                    <div className={styles['notification-container']}>
                    <div className={styles['avatar-container']}>
                        <NotificationAvatar imageUrl={imageUrl} type="like" />
                    </div>
                    <div className={styles['data-container']}>
                        <div className={styles['head-container']}>
                            <p className={styles['name-container']}>{name}</p> 
                            <p className={styles['transparent']}>liked your post</p>
                        </div>
                        <p>{text}</p>
                        <p className={styles['transparent']}>{time} hours ago</p>
                    </div>
              </div>
                );
              case 'follow':
                return (
                    <div className={styles['notification-container']}>
                    <div className={styles['avatar-container']}>
                        <NotificationAvatar imageUrl={imageUrl} type="plus" />
                    </div>
                    <div className={styles['data-container']}>
                        <div className={styles['head-container']}>
                            <p className={styles['name-container']}>{name}</p> 
                            <p className={styles['transparent']}>followed you</p>
                        </div>
                        <p>{text}</p>
                        <p className={styles['transparent']}>{time} hours ago</p>
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