// Import modules
import axios from "axios";

// Set API url
const baseUrl = "http://localhost:3001/api/v1/user/"

/**
 * apiEditProfile function.
 *
 * @param {string} token - authentication token.
 * @returns {Promise} - API response
 */
export async function apiEditProfile(token, firstName, lastName) {
    let url = `${baseUrl}profile`
    try {
        const response = axios.put(url, {
            "firstName": firstName,
            "lastName": lastName
        }, {
            headers: {
                'authorization': `Bearer ${token}`
            },

        });
        return response
    } catch (e) {
        console.error(e);
        return e.response
    }
}
