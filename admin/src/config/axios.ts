import axios from "axios";

let BASE_URL = import.meta.env.VITE_NEST_API_URL;
export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
