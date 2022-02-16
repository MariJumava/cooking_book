import styled from 'styled-components';

const Wrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 8000;
`;

const Container = styled.div`
    position: absolute;
    top: 30%;
    left: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 35%;
    padding: 1.2em;
    margin: 10px;
    background: #ffffff;
    box-shadow: 0px 18px 60px rgba(24, 24, 24, 0.7);
    border-radius: 50px 10px 10px 10px;
`;

const ButtonClose = styled.button`
    height: 100px;
    font-size: xx-large;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #dadada;
`;

export const OpenCard = ({ closeOpenCard, selectedRecipe }) => {
    return (
        <Wrap>
            <ButtonClose onClick={closeOpenCard}>&times;</ButtonClose>
            <Container>
                <h2>{selectedRecipe.name}</h2>
                <button>Clone to My CoookBok</button>
                <img src={selectedRecipe.img} />
                <h4>Description:</h4>
                <p>{selectedRecipe.description}</p>
            </Container>
        </Wrap>
    );
};
