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
    marginLeft: "10px" ,
    border: "none" ,
    backgroundColor: "transparent" ,
}

const StartNewPost = () => {
    return (
        <div style={DivStyles}>
            <PhotoAvatar />
            <input placeholder="Start a Post..." style={PStyles}></input>
        </div>
    );
};

export default StartNewPost;

// by SEIF