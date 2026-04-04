import React from "react";
import { BrowserRouter, Routes, Route, Outlet, useLocation } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

// Pages
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import Profile from "./pages/Profile/Profile";
import Channel from "./Pages/Channel";
import WatchParty from "./Pages/WatchParty";

// Layout
function Layout() {
  const location = useLocation();
  const isWatchParty = location.pathname === "/watchparty";

  return (
    <div style={{ background: "#000", minHeight: "100vh" }}>
      
      <Navbar />

      {/* Hide Sidebar on WatchParty */}
      {!isWatchParty && <Sidebar />}

      <div
      className="main-content"
      style={
       isWatchParty
      ? { margin: 0, padding: 0 }   // ✅ FULL WIDTH
      : { marginLeft: "220px", padding: "10px" }
  }
>
        <Outlet />
      </div>

    </div>
  );
}

// App
function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Main */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/channel" element={<Channel />} />
          <Route path="/watchparty" element={<WatchParty />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;