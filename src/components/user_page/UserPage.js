import { useState } from 'react';
import { useSelector } from 'react-redux';
import { UserRecipes } from './UserRecipes';
import { UserSettings } from './UserSettings';
import { OpenModalMyRecipes } from './OpenModalMyRecipes';
import { baseTheme } from '../../style/baseTheme';
import styled from 'styled-components';

const Wrap = styled.div`
    min-height: 700px;
    padding: 170px;
    background: ${baseTheme.colors.background};
`;
const User = styled.div`
    width: 500px;
    margin-left: 40px;
    margin-bottom: 50px;
`;
const UserData = styled.div`
    display: flex;
    align-items: center;
`;
const Name = styled.h2`
    font-size: ${baseTheme.fontSize.title}px;
    line-height: 48px;
`;
const Title = styled.h2`
    margin-right: 35px;
    font-weight: ${baseTheme.fontWeight.weight};
    font-size: ${baseTheme.fontSize.titleCook}px;
    line-height: 24px;
    cursor: pointer;
    :hover {
        color: ${baseTheme.colors.secondary};
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
    const user = useSelector((state) => state.user);
    const recipes = useSelector((state) => state.user.myrecipes);
    const [showUserSettings, setShowUserSettings] = useState(false);
    const [showOpenModal, setShowOpenModal] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const showMyRecipes = () => {
        setShowUserSettings(false);
    };

    const showSettings = () => {
        setShowUserSettings(true);
    };

    const openSelectedCard = (id) => {
        setShowOpenModal(true);
        setSelectedCard(() => recipes.find((el) => el.id === id));
    };

    const closeModalCard = () => {
        setShowOpenModal(false);
    };
    return (
        <Wrap>
            <UserData>
                <img src={user.img} />
                <User>
                    <Name>{user.name}</Name>
                    <p>{user.status}</p>
                </User>
            </UserData>
            <Container>
                <div>
                    <Title onClick={showMyRecipes}>My Recipes</Title>
                    {showUserSettings
                        ? null
                        : recipes.map((card) => {
                              return (
                                  <UserRecipes
                                      card={card}
                                      key={card.id}
                                      openSelectedCard={() =>
                                          openSelectedCard(card.id)
                                      }
                                  />
                              );
                          })}
                </div>
                {showOpenModal && (
                    <OpenModalMyRecipes
                        selectedCard={selectedCard}
                        closeModalCard={closeModalCard}
                    />
                )}
                {!showOpenModal && null}
                <Title onClick={showSettings}>My Settings</Title>
                {showUserSettings ? <UserSettings /> : null}
            </Container>
            <WrapRecipes></WrapRecipes>
        </Wrap>
    );
};
