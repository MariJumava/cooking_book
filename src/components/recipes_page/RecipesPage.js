//import { useState } from 'react';
import { recipes } from '../Recipes';
import { Filter } from './Filter';
import { CardRecipesPage } from './CardRecipesPage';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    background: #f7f7f7; ;
`;

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    margin: 100px 200px 100px 40px;
`;

const Title = styled.h2`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 24px;
    align-items: center;
    color: #181818;
`;

export const RecipesPage = () => {
    //const [changeRecipe, setChangeRecipe] = useState('all');

    return (
        <Container>
            <Filter />
            <Wrap>
                <Title>Recipes</Title>
                {recipes.map((card) => {
                    return <CardRecipesPage card={card} key={card.id} />;
                })}
            </Wrap>
        </Container>
    );
};
