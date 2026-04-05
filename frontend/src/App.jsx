import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Channel from "./Pages/Channel";

function App() {
  return (
    <div style={{ background: "#000", minHeight: "100vh" }}>

      {/* Navbar */}
      <Navbar />

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div
        style={{
          marginTop: "60px",     
          marginLeft: "220px",   
          padding: "20px",
        }}
      >
        <Channel />
      </div>

    </div>
  );
}

export default App;