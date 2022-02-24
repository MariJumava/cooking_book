import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddRecipe } from '../../redux/actions';
import { recipes } from '../Recipes';
import { OpenModalCard } from './OpenModalCard';
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

const ButtonClose = styled.button`
    height: 100px;
    font-size: xxx-large;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #dadada;
`;
const Title = styled.h2`
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 48px;
`;
const Subtitle = styled.h4`
    margin: 0;
    font-family: Montserrat;
    font-style: normal;
    font-size: 23px;
`;
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const AddButton = styled.button`
    width: 40px;
    height: 40px;
    background-color: white;
    color: #ffbc01;
    border: 1px solid #ffbc01;
    border-radius: 10px;
`;
const Section = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 50px;
`;
const Desc = styled.p`
    width: 400px;
`;
const Item = styled.li`
    margin-top: 7px;
    font-family: Nunito;
    font-weight: normal;
    font-size: 15px;
    color: #ffbc01;
`;
const ItemText = styled.span`
    color: #181818;
`;

const randomRecipes = recipes.filter((r) => r.category === 'sweet').slice(0, 2);

export const OpenModal = ({ selectedCard, closeModalCard }) => {
    const myRecipes = useSelector((state) => state.user.myrecipes);
    const [showButtonAdd, setShowButtonAdd] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (myRecipes.findIndex((x) => x.id === selectedCard.id) < 0)
            setShowButtonAdd(true);
        else setShowButtonAdd(false);
    }, [selectedCard, myRecipes]);

    const cloneRecipe = () => {
        dispatch(AddRecipe(selectedCard));
    };
    return (
        <Wrap>
            <ButtonClose onClick={closeModalCard}>&times;</ButtonClose>
            <Container>
                <Header>
                    <Title>{selectedCard.name}</Title>
                    {showButtonAdd ? (
                        <AddButton onClick={cloneRecipe}>+</AddButton>
                    ) : null}
                </Header>
                <Section>
                    <img src={selectedCard.img} />
                    <div>
                        <Subtitle>Description:</Subtitle>
                        <Desc>{selectedCard.shortDescription}</Desc>
                        <Subtitle>
                            Ingredients:
                            <Item>
                                <ItemText>first ingredient, 100g</ItemText>
                            </Item>
                            <Item>
                                <ItemText>second ingredient, 200g</ItemText>
                            </Item>
                            <Item>
                                <ItemText>third ingredient, 1400g</ItemText>
                            </Item>
                            <Item>
                                <ItemText>fourth ingredient, 100g</ItemText>
                            </Item>
                        </Subtitle>
                    </div>
                </Section>
                <Subtitle>Recipes</Subtitle>
                {randomRecipes.map((card) => {
                    return <OpenModalCard card={card} key={card.id} />;
                })}
            </Container>
        </Wrap>
    );
};
