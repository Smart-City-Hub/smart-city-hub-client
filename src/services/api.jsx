import axios from "axios";
import Cookies from "js-cookie";
const token = Cookies.get('token')

// const HttpRequest = axios.create({
//     withCredentials: true,
//     baseURL: import.meta.env.VITE_BASEURL,
//     headers: {
//         'Content-Type': 'application/json',
//         // 'Authorization': 
//         'Authorization': `Bearer ${token}`
//     }
//     // signal: controller.signal
// })

const HttpRequest = (token) => {
    const token_inner = Cookies.get('token')

    return axios.create({
        withCredentials: true,
        baseURL: import.meta.env.VITE_BASEURL,
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': 
            'Authorization': `Bearer ${token_inner}`
        }
    // signal: controller.signal
})}

export default HttpRequest