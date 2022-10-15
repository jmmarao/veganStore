import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/customer",
});

export default api;