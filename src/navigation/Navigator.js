import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from '../App.js';
import { CookbookPage } from '../components/cookbooks_page/CookbookPage.js';
import { Footer } from '../components/Footer.js';
import { Navbar } from '../components/Navbar.js';
import { RecipesPage } from '../components/recipes_page/RecipesPage.js';
import { SignIn } from '../components/login/SignIn.js';
import { UserPage } from '../components/user_page/UserPage.js';

export const Navigator = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/signin" element={<SignIn />} />
            </Routes>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
            <Routes>
                <Route path="/recipes" element={<RecipesPage />} />
            </Routes>
            <Routes>
                <Route path="/cookbook" element={<CookbookPage />} />
            </Routes>
            <Routes>
                <Route path="/user" element={<UserPage />} />
            </Routes>
            <Footer />
        </Router>
    );
};
