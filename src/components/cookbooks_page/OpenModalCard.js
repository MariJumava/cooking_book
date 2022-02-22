import styled from 'styled-components';

const Frame = styled.div`
    display: flex;
    align-items: flex-start;
    height: 200px;
    margin-top: 24px;
    background: #ffffff;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
`;
const Img = styled.img`
    height: 200px;
    margin-right: 24px;
`;
const ButtonSave = styled.button`
    width: 60px;
    height: 35px;
    font-size: 15px;
    color: #ffbc01;
    background-color: white;
    border: 1px solid #ffbc01;
    border-radius: 10px;
`;

export const OpenModalCard = ({ card }) => {
    return (
        <Frame>
            <Img src={card.img} />
            <div>
                <h4>{card.name}</h4>
                <p>{card.shortDescription}</p>
                <ButtonSave>Save</ButtonSave>
            </div>
        </Frame>
    );
};
