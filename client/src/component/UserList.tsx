import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';

interface User {
    id: number;
    login: string;
    avatar_url: string;
}

interface Friend {
    id: number;
    login: string;
    avatar_url: string;
}

type UserListProps = {
    users: (User | Friend)[];
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
                                image={`${user.avatar_url}?w=100&fit=crop&auto=format&dpr=2`}
                                alt={user.login}
                            />
                        </>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {user.login}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <a href={`/user/${user.login}`} style={{
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
