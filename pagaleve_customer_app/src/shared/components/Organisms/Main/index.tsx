import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useAppThemeContext } from 'shared/contexts';
import { Divider, Stack, TextField } from '@mui/material';

export const Main = ():JSX.Element => {
  const { themeName } = useAppThemeContext();

  return (
    <Paper sx={{ 
      maxWidth: 936, 
      margin: 'auto', 
      overflow: 'hidden', 
      boxShadow: themeName === 'light' ? 'rgb(58 53 65 / 10%) 0px 2px 10px 0px' : 'rgba(19, 8, 34, 0.7) 0px 2px 10px 0px'} }
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        p={1}
      >
        <TextField
          color='secondary'
          label={'Search'}
          size="small"
        />
        <Button color='secondary' variant="contained" startIcon={<AddIcon />} >
          Add Customer
        </Button>
      </Stack>
      
      <Divider />

      <Typography sx={{ my: 5, mx: 2 }} color="primary" align="center">
        No users for this project yet
      </Typography>
    </Paper>
  );
}