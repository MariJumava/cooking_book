import styled from 'styled-components';

const Frame = styled.div`
    display: flex;
    width: 800px;
    margin-top: 40px;
    background: #ffffff;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
    border-radius: 50px 10px 10px 10px;
    cursor: pointer;
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 24px;
`;

export const CardRecipesPage = ({ card, openCard }) => {
    return (
        <Frame onClick={openCard}>
            <img src={card.img} />
            <Description>
                <h4>{card.name}</h4>
                <p>{card.shortDescription}</p>
            </Description>
        </Frame>
    );
};
