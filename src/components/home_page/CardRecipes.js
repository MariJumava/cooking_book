import { recipes } from '../Recipes';
import { Card } from './Card';
import styled from 'styled-components';

const Wrapper = styled.section`
    display: flex;
    flex-direction: row;
`;

export const CardRecipes = () => {
    return (
        <Wrapper>
            {recipes.map((card) => {
                return <Card card={card} key={card.id} />;
            })}
        </Wrapper>
    );
};
