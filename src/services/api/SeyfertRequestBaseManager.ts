import axios from "axios";

const apiSeyfert = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL_SEYFERT,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default apiSeyfert;
