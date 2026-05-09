import API from "../api/axios";

 
export const registerUser = async (data) => {
  try {
    const res = await API.post("/auth/register", data);
    return res.data;
  } catch (error) {
    throw error.response?.data?.message || "Registration failed";
  }
};
 

export const loginUser = async (data) => {
  try {
    const res = await API.post("/auth/login", data);
    return res.data;
  } catch (error) {
    throw error.response?.data?.message || "Login failed";
  }
};