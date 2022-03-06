import { baseTheme } from '../../style/baseTheme';
import styled from 'styled-components';

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: ${baseTheme.sizes.filterWidth}px;
    height: ${baseTheme.sizes.filterHeight}px;
    margin-left: 100px;
    margin-top: 100px;
    padding: 20px;
    background: ${baseTheme.colors.primary};
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h2`
    font-family: ${baseTheme.fontFamily.secondary};
    font-weight: ${baseTheme.fontWeight.weight};
    font-size: ${baseTheme.fontSize.titleFilter}px;
    color: ${baseTheme.colors.font};
`;

const ClearForm = styled.div`
    font-family: ${baseTheme.fontFamily.primary};
    font-size: ${baseTheme.fontSize.subtitle}px;
    cursor: pointer;
    color: ${baseTheme.colors.secondary};
`;

const StyledInput = styled.input`
    width: 210px;
    padding: 5px;
    border: 1px solid ${baseTheme.colors.border};
    border-radius: 4px;
`;

const StyledSelect = styled.select`
    width: 224px;
    padding: 5px;
    font-family: ${baseTheme.fontFamily.primary};
    font-size: ${baseTheme.fontSize.subtitle}px;
    border: 1px solid ${baseTheme.colors.border};
    border-radius: 4px;
`;

const Time = styled.div`
    display: flex;
    justify-content: space-between;
    padding-right: 20px;
    color: ${baseTheme.colors.secondary};
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
        setRange(10);
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
            <input
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
