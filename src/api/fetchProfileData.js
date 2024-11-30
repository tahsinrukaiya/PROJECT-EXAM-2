import { API_URLS } from "../config";
import { API_KEY } from "../config";

export async function fetchProfileData(name, token) {
    if (!name || !token) {
        throw new Error('Please log in to see your profile');
    }

    const encodedName = encodeURIComponent(name);
    const url = `${API_URLS.PROFILE}/${encodedName}`;
    const apiKey = API_KEY;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                "X-Noroff-API-Key": apiKey,
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error fetching profile data:', errorData);
            throw new Error('Failed to fetch profile data');
        }

        const data = await response.json();
        return data;

    } catch (err) {
        console.error('Error:', err);
        throw new Error('Error fetching profile data');
    }
}
