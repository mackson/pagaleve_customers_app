import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export const Footer: React.FC = () => {
  return (
    <Typography variant="body2" align="center">
      <Link href="https://pagaleve.com.br">
        Pagaleve Customer App
      </Link>{' '}
      {new Date().getFullYear()}.
      {'Developed by Mackson Araujo'}
    </Typography>
  );
};