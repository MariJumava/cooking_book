import { useSelector } from 'react-redux';
import { useState } from 'react';
import { UserRecipes } from './UserRecipes';
import { UserSettings } from './UserSettings';
import user_photo from '../../pictures/user/user_photo.png';
import styled from 'styled-components';

const Wrap = styled.div`
    min-height: 700px;
    padding: 170px;
    background: #f7f7f7;
`;
const User = styled.div`
    display: flex;
    align-items: flex-end;
    margin-bottom: 50px;
`;
const Name = styled.h2`
    font-size: 40px;
    line-height: 48px;
    margin-left: 30px;
`;
const Title = styled.h2`
    margin-right: 35px;
    font-weight: 600;
    font-size: 30px;
    line-height: 24px;
    cursor: pointer;
    :hover {
        color: #ffbc01;
    }
`;
const Container = styled.div`
    display: flex;
`;
const WrapRecipes = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

export const UserPage = () => {
    const recipes = useSelector((state) => state.user.myrecipes);
    const [showUserSettings, setShowUserSettings] = useState(false);

    const showMyRecipes = () => {
        setShowUserSettings(false);
    };

    const showSettings = () => {
        setShowUserSettings(true);
    };
    return (
        <Wrap>
            <User>
                <img src={user_photo} />
                <Name>John Doe</Name>
            </User>
            <Container>
                <div>
                    <Title onClick={showMyRecipes}>My Recipes</Title>
                    {showUserSettings
                        ? null
                        : recipes.map((card) => {
                              return <UserRecipes card={card} key={card.id} />;
                          })}
                </div>
                <Title onClick={showSettings}>My Settings</Title>
                {showUserSettings ? <UserSettings /> : null}
            </Container>
            <WrapRecipes></WrapRecipes>
        </Wrap>
    );
};
