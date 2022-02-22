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

const StyledSelect = styled.select`
    width: 224px;
    height: 40px;
    padding: 7px;
    font-family: Nunito;
    font-style: normal;
    font-size: 16px;
    line-height: 19px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 4px;
`;

const Slider = styled.input`
    width: 224px;
`;

const Time = styled.div`
    display: flex;
    justify-content: space-between;
    padding-right: 20px;
    color: #ffbc01;
`;

export const Filter = ({
    setSortType,
    handleChange,
    setSearch,
    range,
    setRange,
}) => {
    const clearForm = () => {
        setSearch('');
        setSortType('all');
        setRange();
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
            <Title>Sort by</Title>
            <StyledSelect
                onChange={(event) => {
                    setSortType(event.target.value);
                }}
            >
                <option value="all">All</option>
                <option value="popularity">Popularity</option>
                <option value="name">By name</option>
            </StyledSelect>
            <Title>Cooking Time:&nbsp;{range}&nbsp;minutes</Title>
            <Slider
                type="range"
                min="10"
                max="120"
                step="5"
                onChange={(event) => setRange(event.target.value)}
            />
            <Time>
                <p>&lt;10min</p>
                <p>2hours</p>
            </Time>
        </Wrap>
    );
};
