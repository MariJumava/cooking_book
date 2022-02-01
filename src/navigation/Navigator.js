import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from '../App.js';
import { Navbar } from '../components/Navbar.js';

export const Navigator = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<App />} />
            </Routes>
        </Router>
    );
};
