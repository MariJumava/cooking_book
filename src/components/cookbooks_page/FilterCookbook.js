import styled from 'styled-components';

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 272px;
    height: 292px;
    margin-left: 100px;
    margin-top: 100px;
    padding: 20px;
    background: #ffffff;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h2`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    align-items: center;
    color: #181818;
`;

const ClearForm = styled.div`
    font-family: Nunito;
    font-size: 14px;
    line-height: 19px;
    cursor: pointer;
    color: #ffbc01;
`;

const StyledInput = styled.input`
    width: 210px;
    padding: 5px;
    border: 1px solid #dadada;
    border-radius: 4px;
`;

export const FilterCookbook = ({ handleChange, setSearch }) => {
    const clearForm = () => {
        setSearch('');
    };
    return (
        <Wrap>
            <Container>
                <Title style={{ textTransform: 'uppercase' }}>Filter</Title>
                <ClearForm onClick={clearForm}>clear all</ClearForm>
            </Container>
            <StyledInput
                type="text"
                placeholder="Search by name..."
                onChange={handleChange}
            />
            <Title>Cookbook type</Title>
            <input type="checkbox" />
            <span>Vegetarian</span>
            <input type="checkbox" />
            <span>With meat</span>
            <input type="checkbox" />
            <span>Baking</span>
        </Wrap>
    );
};
