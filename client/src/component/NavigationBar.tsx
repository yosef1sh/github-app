import React from 'react';
import { AppBar, Toolbar, Tabs, Tab } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import DarkMode from './DarkMode';
import { useAuthContext } from '../context/AuthContext';

const NavigationBar: React.FC = () => {
    const navigate = useNavigate();
    const { authUser, setAuthUser } = useAuthContext();

    const handleLogout = async () => {
        try {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/logout`, { credentials: "include" });
            const data = await res.json();
            console.log(data);
            setAuthUser(null);
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    const handleChange = () => {
        if (authUser) {
            handleLogout();
        } else {
            navigate(`/login`);
        }
    };

    return (
        <AppBar style={{ background: 'white' }} position="static">
            <Toolbar>
                <Tabs >
                    <Tab style={{ color: 'grey' }} label="Home" value="/users" component={Link} to="/users" />
                    <Tab style={{ color: 'grey' }} label={authUser ? 'Logout' : 'Login'} onClick={handleChange} />
                    <Tab style={{ color: 'grey' }} label={'Liked Profiles' } value="/likedProfiles" component={Link}   to={authUser ? '/likedProfiles' : '/login'} />
                </Tabs>
                <DarkMode />
            </Toolbar>
        </AppBar>
    );
};

export default NavigationBar;