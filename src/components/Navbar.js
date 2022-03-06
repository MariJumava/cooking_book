import { Link } from 'react-router-dom';
import user from '../pictures/user/user.svg';
import { baseTheme } from '../style/baseTheme';
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: ${baseTheme.sizes.navbar.height}px;
    font-family: ${baseTheme.fontFamily.primary};
    font-size: ${baseTheme.fontSize.titleFilter}px;
    color: ${baseTheme.colors.font};
`;
const Title = styled.h2`
    font-weight: normal;
    font-size: ${baseTheme.fontSize.titleFilter}px;
    :hover {
        color: ${baseTheme.colors.secondary};
    }
`;
const Button = styled.button`
    width: 200px;
    height: 40px;
    font-size: ${baseTheme.fontSize.titleFilter}px;
    color: ${baseTheme.colors.secondary};
    background-color: ${baseTheme.colors.primary};
    border: none;
    cursor: pointer;
    :hover {
        color: ${baseTheme.colors.font};
    }
`;

export const Navbar = () => {
    const handleLogout = () => {
        localStorage.clear();
        window.location.pathname = '/signin';
    };
    return (
        <>
            <Nav>
                <Link to="/">
                    <Title>Main</Title>
                </Link>
                <Link to="/recipes">
                    <Title>Recipes</Title>
                </Link>
                <Link to="/cookbook">
                    <Title>Cookbooks</Title>
                </Link>
                <Link to="/user">
                    <img src={user} />
                </Link>
                <Button onClick={handleLogout}>Logout</Button>
            </Nav>
        </>
    );
};
