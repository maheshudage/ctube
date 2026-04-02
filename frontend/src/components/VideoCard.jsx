function VideoCard({ video }) {
  return (
    <div className="card">
      
      {/* Thumbnail */}
      <div className="thumb">
        <img src={video.thumbnail} alt="thumbnail" />
        <span className="time">7:32</span>
      </div>

      {/* Video Info */}
      <div className="card-info">
        
        <div className="avatar"></div>

        <div>
          <h4>{video.title}</h4>
          <p>{video.channel}</p>
          <span>
            {video.views} views • {video.time}
          </span>
        </div>

      </div>

    </div>
  );
}

export default VideoCard;