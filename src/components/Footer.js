import twitter from '../pictures/social/twitter.svg';
import facebook from '../pictures/social/facebook.svg';
import instagram from '../pictures/social/instagram.svg';
import styled from 'styled-components';

const Wrap = styled.div`
    display: flex;
    justify-content: space-evenly;
    height: 100px;
    padding-top: 30px;
    background: #181818;
`;

const Img = styled.img`
    position: absolute;
`;

export const Footer = () => {
    return (
        <Wrap>
            <a href="https://twitter.com/">
                {' '}
                <Img src={twitter} />
            </a>
            <a href="https://facebook.com/">
                {' '}
                <Img src={facebook} />
            </a>
            <a href="https://instagram.com/">
                {' '}
                <Img src={instagram} />
            </a>
        </Wrap>
    );
};
