import { Link } from "react-router-dom";
import "./VideoCard.css";

function VideoCard({ video }) {
  return (
    <div className="video-card">
      <Link to={`/watch/${video.id}`}>
        <img src={video.thumbnail} alt={video.title} />
        <h3>{video.title}</h3>
      </Link>
    </div>
  );
}

export default VideoCard;
