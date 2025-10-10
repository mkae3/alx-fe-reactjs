import React, { useState } from "react";

const RegistrationForm = () => {
  // Separate states for each input
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");

    // Simulate API call
    const userData = { username, email, password };
    console.log("User registered:", userData);
    alert(`User ${username} registered successfully!`);

    // Reset form
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="form-container">
      <h2>User Registration (Controlled Form)</h2>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
