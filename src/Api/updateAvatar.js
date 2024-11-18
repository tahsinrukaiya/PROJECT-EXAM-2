import { API_URLS } from "../config";
import { API_KEY } from "../config";

export async function updateAvatar(name, token) {
    if (!name || !token) {
        throw new Error('Missing name or token');
    }

    const encodedName = encodeURIComponent(name);
    const url = `${API_URLS.UPDATE_PROFILE}/${encodedName}`;
    const apiKey = API_KEY;

    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                "X-Noroff-API-Key": apiKey,
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error updating avatar:', errorData);
            throw new Error('Failed to update avatar');
        }

        const data = await response.json();
        console.log('Profile Data:', data);
        return data;

    } catch (err) {
        console.error('Error:', err);
        throw new Error('Error updating avatar');
    }
}
