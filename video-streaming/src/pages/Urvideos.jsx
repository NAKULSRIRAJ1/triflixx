import React from "react";
import "./UrVideos.css"; // Create this file for styling

function UrVideos() {
    const userUploadedVideos = [
        { id: 1, title: "1" },
        { id: 2, title: "2" },
        { id: 3, title: "3" },
        { id: 4, title: "4" },
        { id: 5, title: "5" }
    ];

    return (
        <div className="Urvideos">
            <h2>User Uploaded Videos</h2>
            <div className="carousel">
                {userUploadedVideos.map((video) => (
                    <div key={video.id} className="video-placeholder">
                        <h3>{video.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UrVideos;
