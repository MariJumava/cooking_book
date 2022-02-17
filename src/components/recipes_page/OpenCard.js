import styled from 'styled-components';

const Wrap = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    overflow-y: scroll;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
`;

const Container = styled.div`
    position: absolute;
    top: 30%;
    left: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    padding: 50px;
    background: #ffffff;
    border-radius: 50px 10px 10px 10px;
`;

const ButtonClose = styled.button`
    height: 100px;
    font-size: xxx-large;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #dadada;
`;

const Img = styled.img`
    width: 240px;
`;

export const OpenCard = ({ closeOpenCard, selectedRecipe }) => {
    return (
        <Wrap>
            <ButtonClose onClick={closeOpenCard}>&times;</ButtonClose>
            <Container>
                <h2>{selectedRecipe.name}</h2>
                <button>Clone to My CoookBok</button>
                <Img src={selectedRecipe.img} />
                <h4>Description:</h4>
                <p>{selectedRecipe.description}</p>
            </Container>
        </Wrap>
    );
};
