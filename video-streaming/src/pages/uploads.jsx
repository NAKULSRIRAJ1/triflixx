import { useState } from "react";
import axios from "axios";
import "./Upload.css";

function Upload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  const handleUpload = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/videos/upload", {
      title, description, videoUrl
    });
    alert("Video uploaded!");
  };

  return (
    <div className="upload">
      <h1>Upload Video</h1>
      <form onSubmit={handleUpload}>
        <input type="text" placeholder="Title" onChange={e => setTitle(e.target.value)} />
        <textarea placeholder="Description" onChange={e => setDescription(e.target.value)} />
        <input type="text" placeholder="Video URL" onChange={e => setVideoUrl(e.target.value)} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default Upload;
