import "./Home.css";

function Home() {
  return (
    <div className="main">
      <div className="grid">
        {[...Array(6)].map((_, i) => (
          <div className="card" key={i}>
            <div className="thumb">
              <span className="time">7:32</span>
            </div>

            <div className="card-info">
              <div className="avatar"></div>

              <div>
                <h4>Title of the video uploaded by this channel</h4>
                <p>Channel Name</p>
                <span>7,343 views • 2 Months ago</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;