import axios from "axios";

const HttpRequest = axios.create({
    withCredentials: true,
    baseURL: import.meta.env.VITE_BASEURL,
    headers: {
        'Content-Type': 'application/json'
    }
    // signal: controller.signal
})

export default HttpRequest