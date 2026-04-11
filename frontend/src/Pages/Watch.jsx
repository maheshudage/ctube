import Navbar from "../components/Navbar";
import VideoCard from "../components/VideoCard";

const videos = Array.from({ length: 10 }, (_, i) => ({ id: i }));

const Watch = () => {
  return (
    <div>
      <Navbar />

      <div className="watch-layout">
        <main>
          <div className="player"></div>
          <h2>Video Title</h2>
        </main>

        <aside>
          {videos.map((v) => (
            <VideoCard key={v.id} horizontal />
          ))}
        </aside>
      </div>
    </div>
  );
};

export default Watch;