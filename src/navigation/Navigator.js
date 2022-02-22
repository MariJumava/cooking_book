import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from '../App.js';
import { CookbookPage } from '../components/cookbooks_page/CookbookPage.js';
import { Footer } from '../components/Footer.js';
import { Navbar } from '../components/Navbar.js';
import { RecipesPage } from '../components/recipes_page/RecipesPage.js';

export const Navigator = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<App />} />
            </Routes>
            <Routes>
                <Route path="/recipes" element={<RecipesPage />} />
            </Routes>
            <Routes>
                <Route path="/cookbook" element={<CookbookPage />} />
            </Routes>
            <Footer />
        </Router>
    );
};
