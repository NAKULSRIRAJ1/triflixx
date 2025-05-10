import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import VideoPlayer from "../components/VideoPlayer";
import "./Watch.css";

function Watch() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/videos/${id}`)
      .then(res => setVideo(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!video) return <h2>Loading...</h2>;

  return (
    <div className="watch">
      <h1>{video.title}</h1>
      <VideoPlayer url={video.videoUrl} />
      <p>{video.description}</p>
    </div>
  );
}

export default Watch;
