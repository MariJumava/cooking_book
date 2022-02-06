import main_picture from '../../pictures/main_picture.png';
import { recipes } from '../Recipes';
import { CardRecipes } from './CardRecipes';
import styled from 'styled-components';

const Wrap = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Subtitle = styled.h5`
    margin: 100px 0 0 0;
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #ffbc01;
`;

const Title = styled.h2`
    text-align: center;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 48px;
    color: #181818;
`;

const Section = styled.section`
    width: 1600px;
    height: 800px;
    background: #ffbc01;
`;

const recipesBaking = recipes
    .filter((r) => r.category === 'baking')
    .slice(1, 4);

const recipesBasic = recipes.filter((r) => r.category === 'basic').slice(1, 5);

const recipesSweet = recipes.filter((r) => r.category === 'sweet').slice(0, 3);

export const HomePage = () => {
    return (
        <Wrap>
            <img src={main_picture} />
            <Subtitle>Users choice</Subtitle>
            <Title>Highest-Rated Recipes</Title>
            <CardRecipes recipes={recipesBaking} />
            <Subtitle>Our choice</Subtitle>
            <Title>Most Popular CookBooks</Title>
            <CardRecipes recipes={recipesBasic} />
            <Section>
                <Subtitle style={{ color: '#FFFFFF' }}>Top 10</Subtitle>
                <Title>Trending Recepies</Title>
                <CardRecipes recipes={recipesSweet} />
            </Section>
        </Wrap>
    );
};
