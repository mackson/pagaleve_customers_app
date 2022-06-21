import {AppRoutes} from 'routes';
import { AppThemeProvider } from 'shared/contexts/ThemeContext';

export const App: React.FC = () => {
  return (
    <AppThemeProvider>
      <AppRoutes />
    </AppThemeProvider>
  );
}
