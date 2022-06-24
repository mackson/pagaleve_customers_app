import { 
  BrowserRouter, 
  Routes, 
  Route,
  Navigate
} from 'react-router-dom';
import { Customers } from 'pages/Customers';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/customers" element={<Customers />} />

        <Route path="*" element={<Navigate to="/customers" />} />
      </Routes>
    </BrowserRouter>
  );
};
