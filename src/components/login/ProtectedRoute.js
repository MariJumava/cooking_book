import { Navigate } from 'react-router';
import { SignIn } from './SignIn';

export const ProtectedRoute = () => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    if (isAuthenticated) {
        return <Navigate to="/user" />;
    }
    return <SignIn />;
};
