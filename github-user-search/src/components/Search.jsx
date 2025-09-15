import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!username) return;

    setLoading(true);
    setError("");
    const results = await fetchUserData(username);
    if (results.length === 0) {
      setError("Looks like we can't find the user");
    }
    setUsers(results);
    setLoading(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div>
        {users.map((user) => (
          <div key={user.id} style={{ margin: "10px 0" }}>
            <img src={user.avatar_url} alt={user.login} width="50" />
            <a href={user.html_url} target="_blank" rel="noreferrer">
              {user.login}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
