import { useState } from 'react';
import { updateAvatar } from '@api/updateAvatar';

export default function UpdateProfileForm({ name, token }) {
    const [avatarUrl, setAvatarUrl] = useState('');
    const [feedbackMessage, setFeedbackMessage] = useState(null);

    const isValidUrl = (url) => {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!avatarUrl) {
            setFeedbackMessage('Please provide an avatar URL to update.');
            return;
        }

        if (!isValidUrl(avatarUrl)) {
            setFeedbackMessage('The URL format seems invalid. Please provide a valid link.');
            return;
        }

        try {
            const response = await updateAvatar(name, token, avatarUrl, 'Updated Avatar');
            if (!response.ok) {
                throw new Error('Unable to update your avatar. Please check the URL and try again.');
            }
            setFeedbackMessage('Your avatar has been successfully updated!');
            window.location.reload();
        } catch (error) {
            console.error('Failed to update avatar:', error);
            setFeedbackMessage(
                'We couldn’t update your avatar. Please double-check the URL and try again.'
            );
        }
    };

    return (
        <form onSubmit={handleFormSubmit} className="update-avatar-form mx-4">
            <label htmlFor="basic-url" className="form-label">Change your avatar</label>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    id="basic-url"
                    aria-describedby="basic-addon3"
                    placeholder="Enter a valid image URL"
                    value={avatarUrl}
                    onChange={(e) => setAvatarUrl(e.target.value)}
                />
            </div>
            {feedbackMessage && (
                <div className={`feedback-message mb-3 px-2 pt-2 pb-2 ${feedbackMessage.includes('successfully') ? 'success-message' : 'error-message'}`} role="alert">
                    {feedbackMessage}
                </div>
            )}
            <button type="submit" className="btn rounded-pill mb-3 update-avatar">Save</button>
        </form>
    );
}
