import styled from 'styled-components';

const Wrap = styled.div`
    width: 280px;
    height: fit-content;
    padding: 35px 15px;
    margin: 0 20px 24px 0;
    text-align: center;
    background: #ffffff;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
`;

const Img = styled.img`
    width: 240px;
    height: 240px;
`;

export const CardCookbook = ({ card }) => {
    return (
        <Wrap>
            <Img src={card.img} />
            <h4>{card.name}</h4>
            <p>{card.shortDescription}</p>
        </Wrap>
    );
};
