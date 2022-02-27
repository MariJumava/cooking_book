import { useSelector } from 'react-redux';
import { CardRecipes } from './CardRecipes';
import pear_right from '../../pictures/pear_right.png';
import pear_left from '../../pictures/pear_left.png';
import main_picture from '../../pictures/main_picture.png';
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
    color: ${(props) => (props.primary ? '#ffffff' : '#ffbc01')};
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

const Img = styled.img`
    width: 1400px;
`;
const ImgTitle = styled.h1`
    position: absolute;
    width: 740px;
    left: 165px;
    top: 251px;
    font-family: Montserrat;
    font-weight: 600;
    font-size: 56px;
    line-height: 72px;
    text-transform: capitalize;
    color: #ffffff;
`;
const Section = styled.section`
    width: 1400px;
    height: 800px;
    margin-bottom: 24px;
    border-radius: 10px 50px;
    background: #ffbc01;
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
