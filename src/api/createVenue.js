import { API_URLS } from "../config";
import { API_KEY } from "../config";

export async function createVenue(venueData) {
    const token = localStorage.getItem("accessToken");
    const apiKey = API_KEY;
    console.log(apiKey);

    console.log(token);
    if (!token) {
        throw new Error("Token not found!");
    }
    try {
        const response = await fetch(`${API_URLS.CREATE_VENUE}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                "X-Noroff-API-Key": apiKey,
            },
            body: JSON.stringify(venueData),
        });
        return await response.json();
    } catch (error) {
        console.error('Error creating venue:', error);
        throw error;
    }
}
