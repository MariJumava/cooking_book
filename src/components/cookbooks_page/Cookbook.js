import { useState } from 'react';
import { recipes } from '../Recipes';
import { CardCookbook } from './CardCookbook';
import { FilterCookbook } from './FilterCookbook';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 30px;
    background: #f7f7f7;
`;

const Wrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 40px;
`;

const WrapTitle = styled.div`
    flex-direction: column;
`;

const Title = styled.h2`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    margin-top: 100px;
    margin-left: 40px;
    line-height: 24px;
    color: #181818;
`;

export const Cookbook = () => {
    const [search, setSearch] = useState('');
    const sortRecipes = recipes.filter((recipe) => {
        return recipe.name.toLowerCase().includes(search.toLowerCase());
    });

    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    };

    return (
        <Container>
            <FilterCookbook handleChange={handleChange} setSearch={setSearch} />
            <WrapTitle>
                <Title>Cookbook</Title>
                <Wrap>
                    {sortRecipes.map((card) => {
                        return <CardCookbook key={card.id} card={card} />;
                    })}
                </Wrap>
            </WrapTitle>
        </Container>
    );
};
