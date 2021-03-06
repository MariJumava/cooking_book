import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Filter } from './Filter';
import { CardRecipesPage } from './CardRecipesPage';
import { Pagination } from './Pagination';
import { OpenCard } from './OpenCard';
import { baseTheme } from '../../style/baseTheme';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 30px;
    background: ${baseTheme.colors.background};
`;

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 100px 200px 0 40px;
`;

const Title = styled.h2`
    font-family: ${baseTheme.fontFamily.secondary};
    font-style: normal;
    font-weight: ${baseTheme.fontWeight.weight};
    font-size: ${baseTheme.fontSize.titleCook}px;
    align-items: center;
    color: ${baseTheme.colors.font};
`;
const itemsPerPage = 5;

export const RecipesPage = () => {
    const recipes = useSelector((state) => state.recipes);
    const [showOpenCard, setShowOpenCard] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null);

    const [sortType, setSortType] = useState('all');
    const [search, setSearch] = useState('');
    const [range, setRange] = useState(120);

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

    const selectedRecipe = useMemo(
        () => recipes.find((el) => el.id === selectedItemId),
        [selectedItemId, recipes]
    );

    const openCard = (itemId) => {
        setShowOpenCard(true);
        setSelectedItemId(itemId);
    };

    const closeOpenCard = () => {
        setShowOpenCard(false);
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
                {showOpenCard ? (
                    <OpenCard
                        selectedRecipe={selectedRecipe}
                        closeOpenCard={closeOpenCard}
                    />
                ) : null}
                {sorted.map((card) => {
                    return (
                        <CardRecipesPage
                            showOpenCard={showOpenCard}
                            closeOpenCard={closeOpenCard}
                            card={card}
                            key={card.id}
                            openCard={() => openCard(card.id)}
                        />
                    );
                })}
                <Pagination paginate={paginate} recipes={recipes} />
                <button onClick={nextPage}>Next Page</button>
                <button onClick={prevPage}>Prev Page</button>
            </Wrap>
        </Container>
    );
};
