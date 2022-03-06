import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddRecipe } from '../../redux/actions';
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
    left: 20%;
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
    margin: 0;
    font-family: ${baseTheme.fontFamily.secondary};
    font-size: ${baseTheme.fontSize.titleFilter}px;
`;
const ButtonClose = styled.button`
    height: 100px;
    font-size: ${baseTheme.fontSize.title}px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${baseTheme.colors.border};
`;
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Section = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;
const Button = styled.button`
    height: 50px;
    background: ${baseTheme.colors.secondary};
    border-radius: 10px;
    border: none;
`;
const Desc = styled.p`
    width: 400px;
`;
const Time = styled.p`
    font-family: ${baseTheme.fontFamily.secondary};
    font-size: ${baseTheme.fontSize.titleFilter}px;
`;

export const OpenCard = ({ closeOpenCard, selectedRecipe }) => {
    const myRecipes = useSelector((state) => state.user.myrecipes);
    const [showButtonClone, setShowButtonClone] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        if (myRecipes.findIndex((x) => x.id === selectedRecipe.id) < 0)
            setShowButtonClone(true);
        else setShowButtonClone(false);
    }, [selectedRecipe, myRecipes]);

    const cloneRecipe = () => {
        dispatch(AddRecipe(selectedRecipe));
    };
    return (
        <Wrap>
            <ButtonClose onClick={closeOpenCard}>&times;</ButtonClose>
            <Container>
                <Header>
                    <Title>{selectedRecipe.name}</Title>
                    {showButtonClone ? (
                        <Button onClick={cloneRecipe}>
                            Clone to My Recipes
                        </Button>
                    ) : null}
                </Header>
                <Section>
                    <img src={selectedRecipe.img} />
                    <div>
                        <Subtitle>Description:</Subtitle>
                        <Desc>{selectedRecipe.description}</Desc>
                    </div>
                </Section>
                <Time>Cooking time:&nbsp;{selectedRecipe.time}min</Time>
            </Container>
        </Wrap>
    );
};
