import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ component }) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    if (isAuthenticated) {
        return component;
    }

    return <Navigate to="/signin" />;
};
