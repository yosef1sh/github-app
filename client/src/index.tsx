import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "./theme";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
        <ThemeContextProvider>
        <StyledEngineProvider injectFirst>
    <BrowserRouter >
      <App />
    </BrowserRouter>
    </StyledEngineProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);

