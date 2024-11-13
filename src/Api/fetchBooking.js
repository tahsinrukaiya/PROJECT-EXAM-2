import { API_URLS } from "../config";
import { API_KEY } from "../config";

const fetchBookings = async (profileName, token) => {
    const url = `${API_URLS.ALL_BOOKINGS}${profileName}/bookings`;
    const apiKey = API_KEY;

    try {
        const response = await fetch(
            url,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    "X-Noroff-API-Key": apiKey,
                }
            }
        );

        if (!response.ok) {
            throw new Error('Failed to fetch bookings.');
        }

        const data = await response.json();
        return data.data;
    } catch (err) {
        throw new Error(err.message);
    }
};

export default fetchBookings;
