import axios from "axios";

const api = axios.create({
    baseURL: "https://pokemon-gugf.onrender.com"
})

export default api;