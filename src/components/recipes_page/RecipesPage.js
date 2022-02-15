import { useState } from 'react';
import { recipes } from '../Recipes';
import { Filter } from './Filter';
import { CardRecipesPage } from './CardRecipesPage';
import { Pagination } from './Pagination';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 30px;
    background: #f7f7f7;
`;

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 100px 200px 0 40px;
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
const itemsPerPage = 6;

export const RecipesPage = () => {
    const [sortType, setSortType] = useState('all');
    const [search, setSearch] = useState('');
    const [range, setRange] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const currentPageNumber = currentPage * itemsPerPage - itemsPerPage;

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const prevPage = () => {
        if (currentPage === 1) return;
        setCurrentPage(currentPage - 1);
    };
    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const sorted = recipes
        .filter((recipe) => {
            return (
                recipe.name.toLowerCase().includes(search.toLowerCase()) &&
                recipe.time <= range
            );
        })
        .sort((recipeA, recipeB) => {
            if (sortType === 'popularity') {
                return recipeB.popularity - recipeA.popularity;
            }
            if (sortType === 'name') {
                return recipeA.name > recipeB.name ? 1 : -1;
            }
            return recipeA;
        })
        .splice(currentPageNumber, itemsPerPage);

    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    };

    return (
        <Container>
            <Filter
                setSortType={setSortType}
                handleChange={handleChange}
                setSearch={setSearch}
                range={range}
                setRange={setRange}
            />
            <Wrap>
                <Title>Recipes</Title>
                {sorted.map((card) => {
                    return <CardRecipesPage card={card} key={card.id} />;
                })}
                <Pagination
                    paginate={paginate}
                    totalRecipes={recipes.length}
                    itemsPerPage={itemsPerPage}
                />
                <button onClick={prevPage}>Prev Page</button>
                <button onClick={nextPage}>Next Page</button>
            </Wrap>
        </Container>
    );
};
