/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const userData = await fetchUserData(username);
      setUsers([userData]); // هنا خزنا النتيجة كـ array باش نقدروا نديرو map
    } catch (err) {
      setError("Looks like we cant find the user");
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Search GitHub username"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {/* هنا استعملنا map باش نعرض النتائج */}
      {users.map((user) => (
        <div key={user.id}>
          <img src={user.avatar_url} alt={user.login} width={50} />
          <p>{user.login}</p>
          <a href={user.html_url} target="_blank">View Profile</a>
        </div>
      ))}
    </div>
  );
};

export default Search;
