import { Card } from './Card';
import styled from 'styled-components';

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
`;

export const CardRecipes = ({ recipes }) => {
    return (
        <Wrapper>
            {recipes.map((card) => {
                return <Card card={card} key={card.id} />;
            })}
        </Wrapper>
    );
};
