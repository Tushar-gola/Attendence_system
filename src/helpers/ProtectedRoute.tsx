import { Navigate, Outlet } from 'react-router-dom';
export function ProtectedRoute() {
  const token = localStorage.getItem('token');
  if (token) {
    return <Outlet />;
  } else {
    return <Navigate to="/signIn" />;
  }
}
