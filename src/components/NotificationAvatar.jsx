import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/NotificationAvatar.module.css';

const NotificationAvatar = ({ imageUrl, type, size }) => {
  const avatarSize = size || 44;
  const overlaySize = Math.round(avatarSize * 0.4);
  const overlayOffset = Math.round(avatarSize * 0.7);
  const iconSize = Math.round(overlaySize * 0.6);

  const overlayStyle = {
    width: overlaySize,
    height: overlaySize,
    bottom: 0 ,
    right: 0 ,
  };

  const iconStyle = {
    width: iconSize,
    height: iconSize,
  };

  const renderOverlay = () => {
    switch (type) {
      case 'repost':
        return (
          <div className={`${styles['avatar-overlay']} ${styles['repost']}`} style={overlayStyle}>
            <svg fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="white"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
                <path d="M19 7a1 1 0 0 0-1-1h-8v2h7v5h-3l3.969 5L22 13h-3V7zM5 17a1 1 0 0 0 1 1h8v-2H7v-5h3L6 6l-4 5h3v6z"></path></g></svg>
          </div>
        );
      case 'comment':
        return (
          <div className={`${styles['avatar-overlay']} ${styles['comment']}`} style={overlayStyle}>
            <svg viewBox="0 0 24 24" style={iconStyle}>
              <path
                fill="white"
                d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"
              />
            </svg>
          </div>
        );
      case 'like':
        return (
          <div className={`${styles['avatar-overlay']} ${styles['like']}`} style={overlayStyle}>
            <svg viewBox="0 0 24 24" style={iconStyle}>
              <path
                fill="white"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
            </svg>
          </div>
        );
      case 'plus':
        return (
          <div className={`${styles['avatar-overlay']} ${styles['plus']}`} style={overlayStyle}>
            <svg viewBox="0 0 24 24" style={iconStyle}>
              <path fill="white" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles['notification-avatar-container']} style={{ width: avatarSize, height: avatarSize }}>
      <img src={imageUrl} alt="Avatar" className={styles['notification-avatar-image']} style={{ width: avatarSize, height: avatarSize }} />
      {renderOverlay()}
    </div>
  );
};

NotificationAvatar.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['repost', 'comment', 'like', 'plus']),
  size: PropTypes.number,
};

NotificationAvatar.defaultProps = {
  size: 44,
  type: null,
};

export default NotificationAvatar;