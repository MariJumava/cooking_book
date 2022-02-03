import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
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
                <div>
                    <Link to={'/'}>Main</Link>
                    <Link to={'/resepies'}>Resepies</Link>
                    <Link to={'/cookbook'}>Cookbooks</Link>
                </div>
            </Nav>
        </>
    );
};
