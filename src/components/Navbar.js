import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 88px;
    font-family: Nunito;
    font-size: 20px;
    color: #181818;
`;

export const Navbar = () => {
    return (
        <>
            <Nav>
                <Link to="/">Main</Link>
                <Link to="/recipes">Recipes</Link>
                <Link to="/cookbook">Cookbooks</Link>
            </Nav>
        </>
    );
};
