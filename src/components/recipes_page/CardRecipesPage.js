import styled from 'styled-components';

const Frame = styled.div`
    display: flex;
    margin-top: 30px;
    background: #ffffff;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
    border-radius: 50px 10px 10px 10px;
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
`;

const Img = styled.img`
    width: 240px;
    height: 240px;
    margin-top: 40px;
`;

export const CardRecipesPage = ({ card }) => {
    return (
        <Frame>
            <Img src={card.img} />
            <Description>
                <h4>{card.name}</h4>
                <p>{card.shortDescription}</p>
            </Description>
        </Frame>
    );
};
