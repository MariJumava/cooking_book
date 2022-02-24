import { Link } from 'react-router-dom';
import user from '../pictures/user/user.svg';
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
const Title = styled.h2`
    font-weight: normal;
    font-size: 20px;
    :hover {
        color: #ffbc01;
    }
`;
const Button = styled.button`
    width: 200px;
    height: 40px;
    font-size: 20px;
    color: #ffbc01;
    background-color: #fff;
    border: none;
    cursor: pointer;
    :hover {
        color: #181818;
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
