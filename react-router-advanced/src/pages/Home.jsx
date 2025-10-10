import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Home</h1>
    <Link to="/profile">Go to Profile</Link>
    <br />
    <Link to="/post/42">Go to Post 42</Link>
  </div>
);

export default Home;
