import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { EditUserName } from '../../redux/actions';
import { EditUserEmail } from '../../redux/actions';
import styled from 'styled-components';

const Wrap = styled.div`
    position: absolute;
    top: 570px;
    width: 600px;
    margin-right: 35px;
    padding: 60px;
    background: #ffffff;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
`;
const Title = styled.h2`
    font-weight: 600;
    font-size: 30px;
    line-height: 24px;
`;
const User = styled.p`
    font-size: 18px;
`;
const Edit = styled.p`
    color: #ffbc01;
    cursor: pointer;
`;
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;
const Input = styled.input`
    width: 250px;
    height: 30px;
    padding-left: 10px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 10px;
`;
const ButtonSave = styled.button`
    width: 50px;
    height: 30px;
    color: #ffbc01;
    background-color: white;
    border: 1px solid #ffbc01;
    border-radius: 10px;
`;

export const UserSettings = () => {
    const user = useSelector((state) => state.user);
    const [isEditView, setIsEditView] = useState(false);
    const [editableName, setEditableName] = useState(user.name);
    const [editableEmail, setEditableEmail] = useState(user.email);

    const dispatch = useDispatch();

    const showEditView = () => {
        setIsEditView(true);
    };
    const saveChanges = () => {
        setIsEditView(false);
        dispatch(EditUserName(editableName));
        dispatch(EditUserEmail(editableEmail));
    };
    return (
        <Wrap>
            <Title>Personal information</Title>
            <Container>
                <User>Name</User>
                {isEditView ? (
                    <Input
                        type="text"
                        value={editableName}
                        onChange={(event) =>
                            setEditableName(event.target.value)
                        }
                    />
                ) : (
                    <User>{user.name}</User>
                )}
                {isEditView ? (
                    <ButtonSave onClick={saveChanges}>Save</ButtonSave>
                ) : (
                    <Edit onClick={showEditView}>Edit</Edit>
                )}
            </Container>
            <Container>
                <User>Email</User>
                {isEditView ? (
                    <Input
                        type="text"
                        value={editableEmail}
                        onChange={(event) =>
                            setEditableEmail(event.target.value)
                        }
                    />
                ) : (
                    <User>{user.email}</User>
                )}
                {isEditView ? (
                    <ButtonSave onClick={saveChanges}>Save</ButtonSave>
                ) : (
                    <Edit onClick={showEditView}>Edit</Edit>
                )}
            </Container>
        </Wrap>
    );
};
