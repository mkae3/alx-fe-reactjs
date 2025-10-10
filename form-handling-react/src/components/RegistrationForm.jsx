import React, { useState } from "react";

const RegistrationForm = () => {
  // Separate state variables
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Use plural form "errors" as required
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation with explicit checks
    if (!username) {
      setErrors("Username is required.");
      return;
    }

    if (!email) {
      setErrors("Email is required.");
      return;
    }

    if (!password) {
      setErrors("Password is required.");
      return;
    }

    // Clear errors if all fields are filled
    setErrors("");

    // Simulate API call
    const userData = { username, email, password };
    console.log("User registered:", userData);
    alert(`User ${username} registered successfully!`);

    // Reset form fields
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

        {errors && <p style={{ color: "red" }}>{errors}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
