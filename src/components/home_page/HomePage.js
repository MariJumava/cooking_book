import main_picture from '../../pictures/main_picture.png';
//import { recipes } from '../Recipes';
import { CardRecipes } from './CardRecipes';
import styled from 'styled-components';

const Wrap = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h2`
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 48px;
    color: #181818;
`;

const Section = styled.section`
    background: #ffbc01;
`;

//const recipesBaking = recipes.filter(r => r.category === 'baking')

//const recipesBasic = recipes.filter(r => r.category === 'basic')

//const recipesSweet = recipes.filter(r => r.category === 'sweet')

export const HomePage = () => {
    return (
        <Wrap>
            <img src={main_picture} />
            <Title>Highest-Rated Recipes</Title>
            <CardRecipes />
            <Title>Most Popular CookBooks</Title>
            <CardRecipes />
            <Section>
                <Title>Trending Recepies</Title>
                <CardRecipes />
            </Section>
        </Wrap>
    );
};
