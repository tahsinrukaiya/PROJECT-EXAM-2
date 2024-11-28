import { API_URLS } from "../config";
import { API_KEY } from "../config";

export async function updateVenue(venueData) {
    const token = localStorage.getItem("accessToken");
    const apiKey = API_KEY;

    if (!token) {
        throw new Error("Token not found!");
    }

    try {
        const { id } = venueData;

        if (!id) {
            throw new Error('Venue ID is missing');
        }

        const venueDataFormatted = {
            ...venueData,
            media: venueData.media || [],
            meta: venueData.meta || {
                wifi: false,
                parking: false,
                breakfast: false,
                pets: false,
            },
            location: venueData.location || {
                address: null,
                city: null,
                country: null,
            },
        };

        console.log('Venue data being sent to API:', venueDataFormatted);
        console.log('API URL:', `${API_URLS.UPDATE_VENUE}${venueData.id}`);

        const response = await fetch(`${API_URLS.UPDATE_VENUE}${venueData.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'X-Noroff-API-Key': apiKey,
            },
            body: JSON.stringify(venueDataFormatted),
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            console.log('API Response:', errorResponse);
            throw new Error(`Failed to update venue: ${response.statusText}`);
        }

        const responseBody = await response.json();
        console.log('Venue updated successfully:', responseBody);
        return responseBody;
    } catch (error) {
        console.error('Error updating venue:', error);
        throw error;
    }
}
