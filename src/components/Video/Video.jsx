import React from "react";
import "./Video.css";

function Video({ src, title }) {
    return (
        <iframe
            src={src}
            title={title}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
        ></iframe>
    );
}

export default Video;
