import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useAuthContext } from '../context/AuthContext';// Update with your actual path

interface LikeButtonProps {
    username: string;
    avatarUrl: string;
    onLike?: () => void;
}


const LikeButton: React.FC<LikeButtonProps> = ({ username, onLike, avatarUrl }) => {
    const { authUser } = useAuthContext();
    const [isLiked, setIsLiked] = useState<boolean>(false);

    const handleLike = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/users/like/${username}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ avatarUrl }),
            });

            if (response.ok) {
                setIsLiked(true);
                onLike && onLike();
            } else {
                // Handle error response
                const data = await response.json();
                console.error('Error liking user:', data.error);
            }
        } catch (error) {
            console.error('Error liking user:', error);
        }
    };

    // Render the like button
    return (
        <Button
            variant="contained"
            color={isLiked ? 'secondary' : 'primary'}
            onClick={handleLike}
            disabled={!authUser} // Disable the button if the user is not authenticated
        >
            {isLiked ? 'Liked' : 'Like'}
        </Button>
    );
};

export default LikeButton;


