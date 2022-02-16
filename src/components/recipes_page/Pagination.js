import { recipes } from '../Recipes';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 30px;
`;

export const Pagination = ({ paginate }) => {
    const pageNumbers = [...Array(recipes.length).keys()];

    return (
        <Container>
            {pageNumbers.map((number) => {
                return (
                    <div key={number}>
                        <button onClick={() => paginate(number)}>
                            {number + 1}
                        </button>
                    </div>
                );
            })}
        </Container>
    );
};
