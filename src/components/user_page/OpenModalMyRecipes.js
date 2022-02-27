import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddUserNotes } from '../../redux/actions';
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
    padding: 40px;
    background: #ffffff;
    border-radius: 50px 10px 10px 10px;
`;
const Title = styled.h2`
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 48px;
`;
const Subtitle = styled.h4`
    font-family: Montserrat;
    font-style: normal;
    font-size: 23px;
`;
const ButtonClose = styled.button`
    height: 100px;
    font-size: xxx-large;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #dadada;
`;
const Time = styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-size: 23px;
`;
const Textarea = styled.textarea`
    width: 600px;
    height: fit-content;
    min-height: 100px;
    margin: 30px 0;
    background: #ffffff;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 10px;
`;
const Notes = styled.div`
    width: 570px;
    height: fit-content;
    min-height: 100px;
    padding: 30px;
    margin-top: 30px;
    font-size: 18px;
    box-shadow: 0px 0px 16px rgb(0 0 0 / 8%);
    border-radius: 10px;
`;
const Button = styled.button`
    width: 70px;
    height: 40px;
    font-size: 15px;
    color: '#ffbc01';
    background-color: white;
    border: 1px solid #ffbc01;
    border-radius: 10px;
`;

export const OpenModalMyRecipes = ({ selectedCard, closeModalCard }) => {
    const [isEditView, setIsEditView] = useState(false);
    const [notes, setNotes] = useState(selectedCard.notes);

    const dispatch = useDispatch();

    const showEditView = () => {
        setIsEditView(true);
    };
    const saveChanges = (id, notes) => {
        setIsEditView(false);
        dispatch(AddUserNotes(id, notes));
    };

    return (
        <Wrap>
            <ButtonClose onClick={closeModalCard}>&times;</ButtonClose>
            <Container>
                <Title>{selectedCard.name}</Title>
                <div>
                    <Subtitle>Description:</Subtitle>
                    <p>{selectedCard.description}</p>
                </div>
                <Time>Cooking time:&nbsp;{selectedCard.time}min</Time>

                <Subtitle>My Notes:</Subtitle>
                {isEditView ? (
                    <Textarea
                        value={notes}
                        onChange={(event) => setNotes(event.target.value)}
                    ></Textarea>
                ) : (
                    <Button primary onClick={showEditView}>
                        add notes
                    </Button>
                )}

                {isEditView ? (
                    <Button onClick={() => saveChanges(selectedCard.id, notes)}>
                        Save
                    </Button>
                ) : (
                    <Notes>{notes}</Notes>
                )}
            </Container>
        </Wrap>
    );
};
