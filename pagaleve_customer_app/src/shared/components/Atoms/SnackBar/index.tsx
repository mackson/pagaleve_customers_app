import { Snackbar, Alert, AlertColor } from '@mui/material';

type Props = {
  opened: boolean;
  handleClose: () => void;
  message: string;
  duration: number;
  alertLevel: AlertColor;
}

export const SnackBar = ({opened, handleClose, message, duration, alertLevel}:Props):JSX.Element => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={opened}
      autoHideDuration={duration}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={alertLevel} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}