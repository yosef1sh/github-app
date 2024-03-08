import React from 'react';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import LikeButton from './LikeButton';

interface UserDetailsProps {
  user: {
    login: string;
    avatar_url: string;
    bio: string;
    name: string;
    followers: string;
    following: string;
    public_repos: string;
    location: string;
  },
}

const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
    return (
      <Paper elevation={3} style={{ padding: 20, margin: 'auto', maxWidth: 600 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
          <Avatar  alt={user?.login} src={user?.avatar_url} style={{ width: '200px', height: '200px' }}/>
          </Grid>
          <Grid item>
            <Typography variant="h2">{user?.login}</Typography>
            <Typography variant="body1">Name: {user?.name}</Typography>
            <Typography variant="body1">Bio: {user?.bio}</Typography>
            <Typography variant="body1">Followers: {user?.followers}</Typography>
            <Typography variant="body1">Following: {user?.following}</Typography>
            <Typography variant="body1">Public Repos: {user?.public_repos}</Typography>
            <Typography variant="body1">Location: {user?.location}</Typography>
          </Grid>
        </Grid>
        <LikeButton avatarUrl={user?.avatar_url} username={user?.login} ></LikeButton>
      </Paper>
    );
  };
  
  export default UserDetails;