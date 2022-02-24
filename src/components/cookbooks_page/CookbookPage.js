import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CardCookbook } from './CardCookbook';
import { FilterCookbook } from './FilterCookbook';
import { OpenModal } from './OpenModal';
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

export const CookbookPage = () => {
    const recipes = useSelector((state) => state.recipes);
    const [showOpenModal, setShowOpenModal] = useState(false);
    const [selectedCardId, setSelectedCardId] = useState(null);
    const [search, setSearch] = useState('');
    const [sortCategory, setSortCategory] = useState([]);

    const sortRecipes = recipes
        .filter((recipe) => {
            return recipe.name.toLowerCase().includes(search.toLowerCase());
        })
        .filter((recipe) => {
            return sortCategory?.length
                ? sortCategory.includes(recipe.category)
                : recipe;
        });

    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    };

    const selectedCard = useMemo(
        () => recipes.find((el) => el.id === selectedCardId),
        [selectedCardId, recipes]
    );

    const openSelectedCard = (cardId) => {
        setShowOpenModal(true);
        setSelectedCardId(cardId);
    };

    const closeModalCard = () => {
        setShowOpenModal(false);
    };

    return (
        <Container>
            <FilterCookbook
                handleChange={handleChange}
                setSearch={setSearch}
                sortCategory={sortCategory}
                setSortCategory={setSortCategory}
            />
            <WrapTitle>
                <Title>Cookbook</Title>
                {showOpenModal ? (
                    <OpenModal
                        selectedCard={selectedCard}
                        closeModalCard={closeModalCard}
                    />
                ) : null}
                <Wrap>
                    {sortRecipes.map((card) => {
                        return (
                            <CardCookbook
                                key={card.id}
                                card={card}
                                openSelectedCard={() =>
                                    openSelectedCard(card.id)
                                }
                            />
                        );
                    })}
                </Wrap>
            </WrapTitle>
        </Container>
    );
};
