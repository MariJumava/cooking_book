// eslint-disable-next-line import/named
import { Redirect, Route } from 'react-router-dom';

export const ProtectedRoute = ({ component: Component, ...restOfProps }) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    return (
        <Route
            {...restOfProps}
            render={(props) =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/signin" />
                )
            }
        />
    );
};
