import React, { useState } from 'react';

const ALREADY_LIKED = 'ALREADY_LIKED';

interface LikeButtonState {
  isLiked: boolean;
  showAlert: boolean;
}

const useLikeButton = (username: string, avatarUrl: string, onLike?: () => void) => {
  const [state, setState] = useState<LikeButtonState>({
    isLiked: false,
    showAlert: false,
  });

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
        setState({ ...state, isLiked: true });
        onLike && onLike();
      } else {
        const data = await response.json();
        if (data.error === ALREADY_LIKED) {
          setState({ ...state, showAlert: true });
        }
        console.error('Error liking user:', data.error);
      }
    } catch (error) {
      console.error('Error liking user:', error);
    }
  };

  return {
    isLiked: state.isLiked,
    showAlert: state.showAlert,
    handleLike,
  };
};

export default useLikeButton;
