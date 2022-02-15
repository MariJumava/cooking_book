import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 30px;
`;

export const Pagination = ({ itemsPerPage, totalRecipes, paginate }) => {
    const pageNumbers = [];

    const pageCount = Math.ceil(totalRecipes / itemsPerPage);
    for (let i = 1; i <= pageCount; i++) {
        pageNumbers.push(i);
    }
    return (
        <Container>
            {pageNumbers.map((number) => {
                return (
                    <div key={number}>
                        <button onClick={() => paginate(number)}>
                            {number}
                        </button>
                    </div>
                );
            })}
        </Container>
    );
};
