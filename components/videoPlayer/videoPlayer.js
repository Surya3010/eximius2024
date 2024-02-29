"use client";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
    let videosrc = "https://youtu.be/lCIhdRWTF1c?si=0ZHVZBO_iifReo27";
    const [isRenderVideo, setIsRenderVideo] = useState(false)

    useEffect(() => {
        setIsRenderVideo(true)
    }, [])

    return (
        <div style={{display:'flex', width: '100%', margin:'25px 0px'}}>
            {isRenderVideo ? <div style={{display:'flex', width: '100%'}}>
                <ReactPlayer
                    width="100%"
                    height="500px"
                    url={videosrc}
                    controls={true}
                    allowFullScreen
                    // light is usefull incase of dark mode
                    light={false}
                    // picture in picture
                    pip={true}
                />
                <source src={videosrc} type="video/mp4" />
            </div>: <></>}

        </div>
    );
};

export default VideoPlayer;