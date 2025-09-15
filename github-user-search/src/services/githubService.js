/* eslint-disable no-unused-vars */
// src/services/githubService.js
import axios from "axios";

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_APP_GITHUB_API_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error("User not found");
  }
};
