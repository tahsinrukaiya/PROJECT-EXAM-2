import { useState } from 'react';
import { updateAvatar } from '../../api/updateAvatar';

export default function UpdateProfileForm({ name, token }) {
    const [avatarUrl, setAvatarUrl] = useState('');

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!avatarUrl) {
            console.error('Avatar URL is required');
            return;
        }

        try {
            const response = await updateAvatar(name, token, avatarUrl, 'Updated Avatar');
            console.log('Avatar updated successfully:', response);
            window.location.reload();
        } catch (error) {
            console.error('Failed to update avatar:', error);
        }
    };

    return (
        <form onSubmit={handleFormSubmit} className="update-avatar-form mx-4">
            <label htmlFor="basic-url" className="form-label">Your avatar URL</label>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    id="basic-url"
                    aria-describedby="basic-addon3"
                    value={avatarUrl}
                    onChange={(e) => setAvatarUrl(e.target.value)}
                />
            </div>
            <button type="submit" className="btn rounded-pill update-avatar">Save</button>
        </form>
    );
}