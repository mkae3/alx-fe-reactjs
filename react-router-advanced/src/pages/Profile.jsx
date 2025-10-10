import React from "react";
import { Outlet, Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      <nav style={{ marginBottom: "1rem" }}>
        <Link to="details" style={{ marginRight: "1rem" }}>
          Details
        </Link>
        <Link to="settings">Settings</Link>
      </nav>
      {/* Nested routes will render here */}
      <Outlet />
    </div>
  );
};

export default Profile;
