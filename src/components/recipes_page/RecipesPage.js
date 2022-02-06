import styled from 'styled-components';
import { recipes } from '../Recipes';
import { Filter } from './Filter';
import { CardRecipesPage } from './CardRecipesPage';

const Container = styled.div`
    display: flex;
    height: fit-content;
    background: #b1b1b1;
`;

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
`;

export const RecipesPage = () => {
    return (
        <Container>
            <Filter />
            <Wrap>
                {recipes.map((card) => {
                    return <CardRecipesPage card={card} key={card.id} />;
                })}
            </Wrap>
        </Container>
    );
};
