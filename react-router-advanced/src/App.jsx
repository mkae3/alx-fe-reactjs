import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ProfileDetails from "./pages/ProfileDetails";
import ProfileSettings from "./pages/ProfileSettings";
import Post from "./pages/Post";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => setIsAuthenticated(true);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login onLogin={handleLogin} />} />

      {/* Protected Profile Route with Nested Routes */}
      <Route
        path="/profile/*"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Profile />
          </ProtectedRoute>
        }
      >
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Route>

      {/* Dynamic Route */}
      <Route path="/post/:postId" element={<Post />} />

      {/* Fallback Route */}
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
}

export default App;
