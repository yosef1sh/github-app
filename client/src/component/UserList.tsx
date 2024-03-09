import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import User from '../interface/User';
import Friend from '../interface/Friend';
import LikedProfile from '../interface/LikedProfile';

type UserListProps = {
  users: (User | Friend | LikedProfile)[];
};

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <Grid container spacing={4}>
      {users.map((user) => (
        <Grid item key={user.id} md={4}>
          <Card sx={{ maxWidth: 500, margin: '12px' }}>
            <>
              <CardMedia
                component="img"
                image={`${(user as User).avatar_url || (user as LikedProfile).avatarUrl}?w=100&fit=crop&auto=format&dpr=2`}
                alt={(user as User).login || (user as LikedProfile).username}
              />
            </>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {(user as User).login || (user as LikedProfile).username}
              </Typography>
            </CardContent>
            <CardActions>
              <a href={`/user/${(user as User).login || (user as LikedProfile).username}`} style={{
                width: '100%',
                color: 'grey',
              }}>
                Visit profile
              </a>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default UserList;
