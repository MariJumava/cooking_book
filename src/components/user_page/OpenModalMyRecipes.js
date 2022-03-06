import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddUserNotes } from '../../redux/actions';
import { baseTheme } from '../../style/baseTheme';
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    padding: 40px;
    background: ${baseTheme.colors.primary};
    border-radius: 50px 10px 10px 10px;
`;
const Title = styled.h2`
    font-family: ${baseTheme.fontFamily.secondary};
    font-weight: ${baseTheme.fontWeight.weight};
    font-size: ${baseTheme.fontSize.title}px;
`;
const Subtitle = styled.h4`
    font-family: ${baseTheme.fontFamily.secondary};
    font-size: ${baseTheme.fontSize.titleCook}px;
`;
const ButtonClose = styled.button`
    height: 100px;
    font-size: ${baseTheme.fontSize.title}px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${baseTheme.colors.border};
`;
const Time = styled.p`
    font-family: ${baseTheme.fontFamily.secondary};
    font-size: ${baseTheme.fontSize.titleFilter}px;
`;
const Textarea = styled.textarea`
    width: 600px;
    min-height: 100px;
    margin: 30px 0;
    background: ${baseTheme.colors.primary};
    border: 1px solid ${baseTheme.colors.border};
    box-sizing: border-box;
    border-radius: 10px;
`;
const Notes = styled.div`
    width: 570px;
    min-height: 100px;
    padding: 30px;
    margin-top: 30px;
    font-size: ${baseTheme.fontSize.titleFilter}px;
    box-shadow: 0px 0px 16px rgb(0 0 0 / 8%);
    border-radius: 10px;
`;
const Button = styled.button`
    width: 80px;
    height: 40px;
    font-size: ${baseTheme.fontSize.subtitle}px;
    color: ${baseTheme.colors.secondary};
    background-color: ${baseTheme.colors.primary};
    border: 1px solid ${baseTheme.colors.secondary};
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
                {isEditView && (
                    <Textarea
                        value={notes}
                        onChange={(event) => setNotes(event.target.value)}
                    />
                )}
                {!isEditView && (
                    <Button onClick={showEditView}>add notes</Button>
                )}

                {isEditView && (
                    <Button onClick={() => saveChanges(selectedCard.id, notes)}>
                        Save
                    </Button>
                )}
                {!isEditView && <Notes>{notes}</Notes>}
            </Container>
        </Wrap>
    );
};
