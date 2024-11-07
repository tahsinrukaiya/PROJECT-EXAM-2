/*import { API_URLS } from "../config";

export async function deleteVenue(id) {
    try {
        const response = await fetch(`${API_URLS.DELETE_VENUE}${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                // Add any necessary Authorization headers here
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to delete venue: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error deleting venue:', error);
        throw error;
    }
}
*/