// src/services/githubService.js
import axios from "axios";

// دالة باش تجيب بيانات user واحد من GitHub API
export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};
