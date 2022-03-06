import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/signin" element={<SignIn />} />
                <Route exact path="/" element={<App />} />
                <Route path="/" element={<ProtectedRoute />} />
                <Route path="/recipes" element={<RecipesPage />} />
                <Route path="/cookbook" element={<CookbookPage />} />
                <Route path="/user" element={<UserPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    );
};
