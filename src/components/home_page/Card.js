import { baseTheme } from '../../style/baseTheme';
import styled from 'styled-components';

const Frame = styled.div`
    width: 290px;
    margin-right: 24px;
    text-align: center;
    background: ${baseTheme.colors.primary};
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
`;

const Img = styled.img`
    width: 240px;
    height: 240px;
    margin-top: 40px;
    margin-right: 24px;
`;

export const Card = ({ card }) => {
    return (
        <Frame>
            <Img src={card.img} />
            <h4>{card.name}</h4>
        </Frame>
    );
};
