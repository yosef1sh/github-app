import React from 'react';
import { Button, Container, CssBaseline, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

const LoginPage = () => {

    const handleLoginWithGithub = () => {
        window.open(`/api/auth/github`, "_self");
    };
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div
                style={{
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '16px',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
                    backgroundColor: 'white',
                }}
            >
                <Typography component="h1" variant="h5" style={{ marginBottom: '16px' }}>
                    Login to your account
                </Typography>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<GitHubIcon />}
                    style={{ marginBottom: '16px' }}
                    onClick={handleLoginWithGithub}
                >
                    Login with Github
                </Button>
            </div>
        </Container>
    );
};

export default LoginPage;
