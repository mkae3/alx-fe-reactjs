import axios from "axios";

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/search/users?q=${username}`);
    return response.data.items; // array of users
  } catch (error) {
    console.error("Error fetching user data:", error);
    return [];
  }
};
