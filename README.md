# Project README

[Watch the Project Demo on YouTube](https://www.youtube.com/h9Fz_C-JRxo)

## Overview

This project is a GitHub explorer that allows users to interact with GitHub data, explore profiles, repositories, and friends, and even like their favorite profiles. 
The application features GitHub authentication, user liked profiles with pagination, and a sleek Material-UI styled interface.

## Getting Started

### Backend Setup

Navigate to the `server` directory.

Create a `.env` file with the following configuration:  
PORT= # Port on which the server will run  
GITHUB_API_KEY= # API key for accessing the GitHub API  
MONGO_URI= # MongoDB connection URI  
GITHUB_CLIENT_ID= # GitHub OAuth client ID  
GITHUB_CLIENT_SECRET= # GitHub OAuth client secret  
CLIENT_BASE_URL= # Base URL for the client application  

Install dependencies: `npm install`  
Start the backend server: `npm start`

### Frontend Setup

Navigate to the client directory.

Install dependencies: `npm install`  
Start the frontend development server: `npm start`  
The frontend server will run on http://localhost:3000 by default.

### Features

- Explore GitHub profiles, repositories, and friends effortlessly.
- Enjoy a seamless and infinite scroll experience when exploring profiles, repositories, and friends.
- Log in with your GitHub account for personalized features.
- View a paginated list of profiles that you have liked.
- Like profiles when logged in to express your interest.
- Switch to dark mode for a visually comfortable experience.
