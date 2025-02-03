import apiClient from "./apiClient";

export const login = async (login: string, password: string) => {
  try {
    await apiClient.post("/auth/login", { login, password });
    return true;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Erreur de connexion.");
  }
};

export const validateToken = async () => {
  try {
    const response = await apiClient.get("/auth/validate");
    return response.data.authenticated;
  } catch {
    return false;
  }
};

export const logout = async () => {
  await apiClient.post("/auth/logout");
};