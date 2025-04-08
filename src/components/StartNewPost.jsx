import * as React from 'react';
import PhotoAvatar from './PhotoAvatar';

const DivStyles = {
    display: "flex",
    alignItems: "center",
    width: "616px",
    height: "68px",
}

const PStyles = {
    fontSize: "16px",
    color : "silver",
    marginLeft: "10px"
}

const StartNewPost = () => {
    return (
        <div style={DivStyles}>
            <PhotoAvatar />
            <p style={PStyles}>Start a Post...</p>
        </div>
    );
};

export default StartNewPost;

// by SEIF