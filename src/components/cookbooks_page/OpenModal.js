import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddRecipe } from '../../redux/actions';
import { recipes } from '../Recipes';
import { OpenModalCard } from './OpenModalCard';
import { baseTheme } from '../../style/baseTheme';
import styled from 'styled-components';

const Wrap = styled.div`
    position: fixed;
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
    width: 50%;
    padding: 40px;
    background: ${baseTheme.colors.primary};
    border-radius: 50px 10px 10px 10px;
`;

const ButtonClose = styled.button`
    height: 100px;
    font-size: ${baseTheme.fontSize.title}px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${baseTheme.colors.border};
`;
const Title = styled.h2`
    font-family: ${baseTheme.fontFamily.secondary};
    font-weight: ${baseTheme.fontWeight.weight};
    font-size: ${baseTheme.fontSize.title}px;
`;
const Subtitle = styled.h4`
    margin: 0;
    font-family: ${baseTheme.fontFamily.secondary};
    font-size: ${baseTheme.fontSize.titleFilter}px;
`;
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const AddButton = styled.button`
    width: 40px;
    height: 40px;
    background-color: ${baseTheme.colors.primary};
    color: ${baseTheme.colors.secondary};
    border: 1px solid ${baseTheme.colors.secondary};
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
    font-family: ${baseTheme.fontFamily.primary};
    font-weight: ${baseTheme.fontWeight.normal};
    font-size: ${baseTheme.fontSize.subtitle}px;
    color: ${baseTheme.colors.secondary};
`;
const ItemText = styled.span`
    color: ${baseTheme.colors.font};
`;

export const OpenModal = ({ selectedCard, closeModalCard }) => {
    const randomRecipes = recipes
        .filter((r) => r.category === 'sweet')
        .slice(0, 2);
    const myRecipes = useSelector((state) => state.user.myrecipes);
    const [showButtonAdd, setShowButtonAdd] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        if (myRecipes.findIndex((x) => x.id === selectedCard.id) < 0) {
            setShowButtonAdd(true);
        } else {
            setShowButtonAdd(false);
        }
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
