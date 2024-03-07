import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';

interface LoaderProps {
  loading: boolean;
}

const LoaderComponent: React.FC<LoaderProps> = ({ loading }) => (
  <div>
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  </div>
);

export default LoaderComponent;