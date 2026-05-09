import { createContext, useContext, useEffect, useState } from "react";
import API from "../api/axios";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchMe = async () => {
    try {
      const res = await API.get("/auth/me");
      setUser(res.data.user);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMe();
  }, []);

  const login = async (formData) => {
    try {
      const res = await API.post("/auth/login", formData);
      setUser(res.user);
      return res.data;
    } catch (error) {
      throw error.response?.data?.message || "Login failed";
    }
  };

  const register = async (formData) => {
    try {
      const res = await API.post("/auth/register", formData);
      setUser(res.user);
      return res.data;
    } catch (error) {
      throw error.response?.data?.message || "Register failed";
    }
  };

  const logout = async () => {
    try {
      const res = await API.post("/auth/logout");
      setUser(null);
      return res?.data
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        register,
        logout,
        loading,
        fetchMe,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export function useAuth() {
  return useContext(AuthContext);
}
