import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Channel from "./Pages/Channel";

// Pages
import Home from "./Pages/Home/Home";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import Profile from "./Pages/Profile/Profile";

// Layout Component
function Layout() {
  return (
    <div style={{ background: "#000", minHeight: "100vh" }}>
      <Navbar />
      <Sidebar />
      <div className="main-content">
        <Channel />
        <Outlet />
      </div>
    </div>
  );
}

// Main App
function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Routes WITHOUT Navbar */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Routes WITH Navbar + Sidebar */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;