// Import modules
import axios from "axios";

// Set API url
const baseUrl = "http://localhost:3001/api/v1/user/"

/**
 * apiProfile function.
 *
 * @param {string} token - authentication token.
 * @returns {Promise} - API response
 */
export async function apiProfile(token) {
    let url = `${baseUrl}profile`
    try {
        const response = await axios.post(url, "none", { headers: { 'authorization': `Bearer ${token}` } }); return response
    } catch (error) {
        console.error(error);
        return error
    }
}
