import React, { useEffect, useState } from "react";
import "./Videos.css";
import Video from "../../components/Video/Video";

function Videos() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch("/data/videos.json")
            .then((response) => response.json())
            .then((data) => setVideos(data))
            .catch((error) =>
                console.error("Error fetching the videos:", error)
            );
    }, []);

    return (
        <>
            <div className="fondoVideos">
                <div className="videosContainer">
                    {videos.map((video) => (
                        <div className="video" key={video.id}>
                            <Video
                                width={video.video.width}
                                height={video.video.height}
                                src={video.video.src}
                                title={video.title}
                            />
                            <p>{video.Descripcion}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Videos;
