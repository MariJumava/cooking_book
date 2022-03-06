import { baseTheme } from '../../style/baseTheme';
import styled from 'styled-components';

const Wrap = styled.div`
    width: 280px;
    padding: 35px 15px;
    margin-bottom: 24px;
    text-align: center;
    background: ${baseTheme.colors.primary};
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
`;

const Img = styled.img`
    width: 240px;
    height: 240px;
`;

export const CardCookbook = ({ card, openSelectedCard }) => {
    return (
        <Wrap onClick={openSelectedCard}>
            <Img src={card.img} />
            <h4>{card.name}</h4>
            <p>{card.shortDescription}</p>
        </Wrap>
    );
};
