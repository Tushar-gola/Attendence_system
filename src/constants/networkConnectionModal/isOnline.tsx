import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import AlertTitle from '@mui/material/AlertTitle';
import Alert from '@mui/material/Alert';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  height: '100px',
};

export function IsOnline() {
  return (
    <div>
      <Modal open={true} aria-labelledby="parent-modal-title" aria-describedby="parent-modal-description">
        <Box sx={{ ...style, width: 700 }}>
          <Alert severity="warning" sx={{ fontSize: '1rem', height: '100%' }}>
            <AlertTitle sx={{ fontSize: '1rem' }}>Warning - Network connection</AlertTitle>
            Your network connection is down. — <strong>Please check your internet connection.!</strong>
          </Alert>
        </Box>
      </Modal>
    </div>
  );
}
