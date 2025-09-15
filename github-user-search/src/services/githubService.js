/* eslint-disable no-useless-catch */
import axios from "axios";

const BASE_URL = "https://api.github.com"; // ← هادي خاصها تكون موجودة

// دالة تجيب بيانات المستخدم حسب الـ username
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

