import axios from "axios";

const baseUrl = "http://localhost:3001/api/v1/user/"

export async function apiProfile(token) {
    let url = `${baseUrl}profile`
    try {
        const response = await axios.post(url, "none", { headers: { 'authorization': `Bearer ${token}` } }); return response
    } catch (error) {
        console.error(error);
        return error
    }
}
