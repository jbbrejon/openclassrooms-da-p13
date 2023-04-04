import axios from "axios";

const baseUrl = "http://localhost:3001/api/v1/user/"

export default async function apiLogin(email, password) {
    let url = `${baseUrl}login`;
    let response;

    try {
        response = await axios.post(url, { email: email, password: password });
        return response
    } catch (e) {
        console.error(e);
        return e.response;
    }
}
