import { useState, useEffect } from 'react';
import { recipes } from '../Recipes';
import { Filter } from './Filter';
import { CardRecipesPage } from './CardRecipesPage';
import { Pagination } from './Pagination';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    background: #f7f7f7; ;
`;

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    margin: 100px 200px 30px 40px;
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
    const [sortRecipes, setSortRecipes] = useState([]);
    const [sortType, setSortType] = useState('all');
    const [search, setSearch] = useState('');

    const [currentPage, setCurrentPage] = useState(1);
    const recipesTotal = 20;
    const recipesPerPage = 7;

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        const sortRecipes = (type) => {
            const types = {
                all: 'all',
                popularity: 'popularity',
                name: 'name',
            };
            const sortProperty = types[type];
            const sorted = [...recipes]
                .filter((recipe) =>
                    recipe.name.toLowerCase().includes(search.toLowerCase())
                )
                .sort((a, b) => b[sortProperty] - a[sortProperty]);
            setSortRecipes(sorted);
        };

        sortRecipes(sortType);
    }, [search, sortType]);

    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    };

    return (
        <Container>
            <Filter setSortType={setSortType} handleChange={handleChange} />
            <Wrap>
                <Title>Recipes</Title>
                {sortRecipes.map((card) => {
                    return <CardRecipesPage card={card} key={card.id} />;
                })}
                <Pagination
                    recipesPerPage={recipesPerPage}
                    recipesTotal={recipesTotal}
                    paginate={paginate}
                    currentPage={currentPage}
                />
            </Wrap>
        </Container>
    );
};
