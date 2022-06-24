import { Snackbar, Alert, AlertColor } from '@mui/material';
import { useAppThemeContext } from 'shared/contexts';

type Props = {
  opened: boolean;
  handleClose: () => void;
  message: string;
  duration: number;
  alertLevel: AlertColor;
}

export const SnackBar = ({opened, handleClose, message, duration, alertLevel}:Props):JSX.Element => {
  const { themeName } = useAppThemeContext();
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={opened}
      autoHideDuration={duration}
      onClose={handleClose}
      sx={{boxShadow: themeName === 'light' ? 'rgb(58 53 65 / 10%) 0px 2px 10px 0px' : 'rgba(19, 8, 34, 0.7) 0px 2px 10px 0px'}}
    >
      <Alert onClose={handleClose} severity={alertLevel} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};