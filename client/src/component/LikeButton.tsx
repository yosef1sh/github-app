import React from 'react';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import useLikeButton from '../hook/useLikeButton'; 
import { useAuthContext } from '../context/AuthContext';
// Update with the correct path

interface LikeButtonProps {
  username: string;
  avatarUrl: string;
  onLike?: () => void;
}

const LikeButton: React.FC<LikeButtonProps> = ({ username, avatarUrl, onLike }) => {
  const { isLiked, showAlert, handleLike } = useLikeButton(username, avatarUrl, onLike);
  const { authUser } = useAuthContext(); 

  return (
    <>
      <Button
        variant="contained"
        color={isLiked ? 'secondary' : 'primary'}
        onClick={handleLike}
        disabled={!authUser}
      >
        {isLiked ? 'Liked' : 'Like'}
      </Button>
      {showAlert && <Alert>You have already liked this user</Alert>}
    </>
  );
};

export default LikeButton;
