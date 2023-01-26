import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const SuspenseLoader: React.FC = () => {
    return (
        <Box
            sx={{
                position: 'fixed',
                left: 0,
                top: 0,
                width: '100%',
                height: '100%'
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <CircularProgress size={64} disableShrink thickness={3} />
        </Box>
    )
};

export default SuspenseLoader;