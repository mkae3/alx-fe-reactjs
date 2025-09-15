import axios from "axios";

// fetchUsers تستقبل object فيه username، location و minRepos
export const fetchUsers = async ({ username, location, minRepos }) => {
  if (!username) return [];

  // بناء query
  let query = `https://api.github.com/search/users?q=${encodeURIComponent(
    username
  )}`;
  
  if (location) {
    query += `+location:${encodeURIComponent(location)}`;
  }

  if (minRepos) {
    query += `+repos:>=${minRepos}`;
  }

  try {
    const response = await axios.get(query);
    return response.data.items; // نرجعو array ديال users
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};
