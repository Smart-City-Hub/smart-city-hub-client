import axios from "axios";

const HttpRequest = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:3000",
    // signal: controller.signal
})

export default HttpRequest