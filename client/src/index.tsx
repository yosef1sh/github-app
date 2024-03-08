import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "./context/theme";
import { AuthContextProvider } from './context/AuthContext';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeContextProvider>
    <StyledEngineProvider injectFirst>
      <BrowserRouter >
      <AuthContextProvider>
        <App />
        </AuthContextProvider>
      </BrowserRouter>
    </StyledEngineProvider>
  </ThemeContextProvider>
);

