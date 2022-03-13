import { Routes, Route } from 'react-router-dom';
import { App } from '../App.js';
import { CookbookPage } from '../components/cookbooks_page/CookbookPage.js';
import { Footer } from '../components/Footer.js';
import { Navbar } from '../components/Navbar.js';
import { RecipesPage } from '../components/recipes_page/RecipesPage.js';
import { SignIn } from '../components/login/SignIn.js';
import { UserPage } from '../components/user_page/UserPage.js';
import { ProtectedRoute } from '../components/login/ProtectedRoute.js';
import { NotFound } from '../components/NotFound.js';

export const Navigator = () => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    return (
        <>
            {isAuthenticated && <Navbar />}
            <Routes>
                <Route exact path="/signin" element={<SignIn />} />
                <Route exact path="/" element={<App />} />

                <Route
                    exact
                    path="/recipes"
                    element={<ProtectedRoute component={<RecipesPage />} />}
                />
                <Route
                    exact
                    path="/cookbook"
                    element={<ProtectedRoute component={<CookbookPage />} />}
                />
                <Route
                    exact
                    path="/user"
                    element={<ProtectedRoute component={<UserPage />} />}
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
            {isAuthenticated && <Footer />}
        </>
    );
};
