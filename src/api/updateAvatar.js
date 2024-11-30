import { API_URLS } from "../config";
import { API_KEY } from "../config";

export async function updateAvatar(name, token, avatarUrl, avatarAlt = 'Updated Avatar') {
    if (!name || !token || !avatarUrl) {
        throw new Error('Missing name, token, or avatar URL');
    }

    const encodedName = encodeURIComponent(name);
    const url = `${API_URLS.UPDATE_AVATAR}${encodedName}`;
    const apiKey = API_KEY;

    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'X-Noroff-API-Key': apiKey,
            },
            body: JSON.stringify({
                avatar: {
                    url: avatarUrl,
                    alt: avatarAlt
                }
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error updating avatar:', errorData);
            throw new Error('Failed to update avatar');
        }

        const data = await response.json();
        const userData = JSON.parse(localStorage.getItem("userData"));

        if (userData) {
            userData.avatar.url = data.avatar.url;
            localStorage.setItem("userData", JSON.stringify(userData));
        }
        return data;

    } catch (err) {
        console.error('Error:', err);
        throw new Error('Error updating avatar');
    }
}
