import {AppRoutes} from 'routes';
import { AppThemeProvider } from 'shared/contexts/ThemeContext';
import { MainLayout } from 'shared/layouts';

export const App: React.FC = () => {
  return (
    <AppThemeProvider>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </AppThemeProvider>
  );
};
