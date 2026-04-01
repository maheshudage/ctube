// src/App.jsx
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

// Pages
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import ForgotPassword from "./pages/Auth/ForgotPassword";

// Layout component for pages with Navbar & Sidebar
function Layout() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="main-content">
        <Outlet /> {/* Renders the nested route page */}
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pages WITHOUT Navbar/Sidebar */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Pages WITH Navbar/Sidebar */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          {/* You can add more routes here that need Navbar/Sidebar */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;