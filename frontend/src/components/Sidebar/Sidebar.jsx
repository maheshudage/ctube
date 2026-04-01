import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">

     
      <div className="menu">
        <div className="menu-item">
          <span className="icon">
            <img src="/icons/home.png" alt="Home" />
          </span>
          <span>Home</span>
        </div>

        <div className="menu-item">
          <span className="icon">
            <img src="/icons/subscriptions.png" alt="Subscriptions" />
          </span>
          <span>Subscriptions</span>
        </div>
      </div>

      
      <div className="menu">
        <div className="menu-item">
          <span className="icon">
            <img src="/icons/history.png" alt="History" />
          </span>
          <span>History</span>
        </div>

        <div className="menu-item">
          <span className="icon">
            <img src="/icons/clock.png" alt="Watch later" />
          </span>
          <span>Watch later</span>
        </div>

        <div className="menu-item">
          <span className="icon">
            <img src="/icons/like.png" alt="Liked videos" />
          </span>
          <span>Liked videos</span>
        </div>
      </div>

      
      <div className="subscriptions">
        <h4>Subscriptions</h4>

        {[...Array(7)].map((_, i) => (
          <div className="channel" key={i}>
            <div className="circle"></div> Channel Name
          </div>
        ))}

        <div className="show-more">
          Show More <span>›</span>
        </div>
      </div>

    </div>
  );
}

export default Sidebar;