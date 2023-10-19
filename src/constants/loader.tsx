import { Box, CircularProgress } from '@mui/material';

export const Loader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        background: '#00000030',
        position: 'absolute',
        top: 0,
        height: '100vh',
        zIndex: 100000000000000,
        left: 0,
      }}
    >
      {/* <LinearProgress /> */}
      <CircularProgress color="primary" size={55} />
    </Box>
  );
};
