import axios from "axios";
const SERVER_API_URL = process.env.REACT_APP_API_BASE;
const USERS_URL = `${SERVER_API_URL}/users`;
const api = axios.create({ baseURL: USERS_URL,withCredentials: true });

export const getProfile = async () => {
  const response = await api.post(`${USERS_URL}/profile`);
  return response;
};