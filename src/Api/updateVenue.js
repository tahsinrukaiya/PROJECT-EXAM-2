/*import { API_URLS } from "../config";

export async function updateVenue(id, updatedData) {
    try {
        const response = await fetch(`${API_URLS.UPDATE_VENUE}${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                // Add any necessary Authorization headers here
            },
            body: JSON.stringify(updatedData),
        });

        if (!response.ok) {
            throw new Error(`Failed to update venue: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error updating venue:', error);
        throw error;
    }
}
*/