import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 88px;
    font-family: Nunito;
    font-size: 25px;
    color: #181818;
`;
const Button = styled.button`
    width: 200px;
    height: 40px;
    font-size: 20px;
    color: #ffbc01;
    background-color: #fff;
    border: none;
`;

export const Navbar = () => {
    const handleLogout = () => {
        localStorage.clear();
        window.location.pathname = '/signin';
    };
    return (
        <>
            <Nav>
                <Link to="/">Main</Link>
                <Link to="/recipes">Recipes</Link>
                <Link to="/cookbook">Cookbooks</Link>
                <Button onClick={handleLogout}>Logout</Button>
            </Nav>
        </>
    );
};
