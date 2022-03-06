import { useSelector } from 'react-redux';
import { CardRecipes } from './CardRecipes';
import pear_right from '../../pictures/pear_right.png';
import pear_left from '../../pictures/pear_left.png';
import main_picture from '../../pictures/main_picture.png';
import { baseTheme } from '../../style/baseTheme';
import styled from 'styled-components';

const Wrap = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Subtitle = styled.h5`
    margin-top: 100px;
    font-family: ${baseTheme.fontFamily.primary};
    font-weight: ${baseTheme.fontWeight.normal};
    font-size: ${baseTheme.fontSize.subtitle}px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: ${(props) =>
        props.primary ? baseTheme.colors.primary : baseTheme.colors.secondary};
`;

const Title = styled.h2`
    font-family: ${baseTheme.fontFamily.secondary};
    font-size: ${baseTheme.fontSize.title}px;
    color: ${baseTheme.colors.font};
`;

const Img = styled.img`
    width: 1400px;
`;
const ImgTitle = styled.h1`
    position: absolute;
    width: 740px;
    left: 165px;
    top: 251px;
    font-family: ${baseTheme.fontFamily.secondary};
    font-size: 56px;
    text-transform: capitalize;
    color: ${baseTheme.colors.primary};
`;
const Section = styled.section`
    width: 1400px;
    height: 800px;
    text-align: center;
    margin-bottom: 24px;
    border-radius: 10px 50px;
    background: ${baseTheme.colors.secondary};
`;
const ImgPearRight = styled.img`
    position: absolute;
    left: 70%;
    height: 800px;
    z-index: 1;
`;
const ImgPearLeft = styled.img`
    position: absolute;
    right: 75%;
    top: 150%;
    z-index: 1;
`;

export const HomePage = () => {
    const recipes = useSelector((state) => state.recipes);

    const recipesVeg = recipes
        .filter((r) => r.category === 'vegetarian')
        .slice(1, 4);

    const recipesBasic = recipes
        .filter((r) => r.category === 'basic')
        .slice(1, 5);

    const recipesSweet = recipes
        .filter((r) => r.category === 'sweet')
        .slice(0, 3);

    return (
        <Wrap>
            <ImgTitle>
                Find and create your favourite cookbooks And Recipies
            </ImgTitle>
            <Img src={main_picture} />
            <Subtitle>Users choice</Subtitle>
            <Title>Highest-Rated Recipes</Title>
            <CardRecipes recipes={recipesVeg} />
            <ImgPearLeft src={pear_left} />
            <Subtitle>Our choice</Subtitle>
            <Title>Most Popular CookBooks</Title>
            <CardRecipes recipes={recipesBasic} />
            <Section>
                <ImgPearRight src={pear_right} />
                <Subtitle primary>Top 10</Subtitle>
                <Title>Trending Recepies</Title>
                <CardRecipes recipes={recipesSweet} />
            </Section>
        </Wrap>
    );
};
