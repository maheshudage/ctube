import "./Home.css";
import videos from "../../data/videos";
import { getRecommendedVideos } from "../../utils/recommendation";
import VideoCard from "../../components/VideoCard";


function Home() {

  const recommendedVideos = getRecommendedVideos(videos);

  return (
    <div className="main">
      <div className="grid">

        {recommendedVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}

      </div>
    </div>
  );
}

export default Home;