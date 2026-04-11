import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import WatchParty from "./components/WatchParty";
import Profile from "./components/Profile";
import VideoCard from "./components/VideoCard";

import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import ForgotPassword from "./pages/Auth/ForgotPassword";

const isAuth = () => Boolean(localStorage.getItem("token"));

export default function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Navigate to={isAuth() ? "/home" : "/login"} replace />}
      />

      <Route
        path="/home"
        element={isAuth() ? <Home /> : <Navigate to="/login" replace />}
      />

      <Route
        path="/login"
        element={!isAuth() ? <Login /> : <Navigate to="/home" replace />}
      />

      <Route
        path="/signup"
        element={!isAuth() ? <Signup /> : <Navigate to="/home" replace />}
      />

      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route path="/watchparty" element={<WatchParty />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/videocard" element={<VideoCard />} />

    </Routes>
  );
}