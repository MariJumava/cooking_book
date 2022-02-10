import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 30px;
`;

export const Pagination = ({
    recipesPerPage,
    recipesTotal,
    paginate,
    currentPage,
}) => {
    const pageNumbers = [];
    const pageCount = Math.round(recipesTotal / recipesPerPage);
    const start = currentPage - 2 <= 0 ? 1 : currentPage - 2;
    const end = currentPage + 2 > pageCount ? pageCount : currentPage + 2;
    for (let i = start; i <= end; i++) {
        pageNumbers.push(i);
    }
    return (
        <Container>
            {pageNumbers.includes(1) ? null : (
                <button onClick={() => paginate(1)}>{1}</button>
            )}
            {pageNumbers.map((number) => {
                return (
                    <div key={number}>
                        <button onClick={() => paginate(number)}>
                            {number}
                        </button>
                    </div>
                );
            })}
            {pageNumbers.includes(pageCount) ? null : (
                <button onClick={() => paginate(pageCount)}>{pageCount}</button>
            )}
        </Container>
    );
};
