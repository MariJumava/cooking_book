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
const Checkbox = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FilterCookbook = ({
    handleChange,
    setSearch,
    sortCategory,
    setSortCategory,
}) => {
    const clearForm = () => {
        setSearch('');
        setSortCategory([]);
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
            <Checkbox>
                <span>
                    <input
                        type="checkbox"
                        name="vegetarian"
                        сhecked={sortCategory.includes('vegetarian')}
                        onChange={(event) => {
                            setSortCategory(event.target.name);
                        }}
                    />
                    &nbsp;<span>Vegetarian</span>
                </span>
                <span>
                    <input
                        type="checkbox"
                        name="basic"
                        сhecked={sortCategory.includes('basic')}
                        onChange={(event) => {
                            setSortCategory(event.target.name);
                        }}
                    />
                    &nbsp;<span>With meat</span>
                </span>
                <span>
                    <input
                        type="checkbox"
                        name="sweet"
                        checked={sortCategory.includes('sweet')}
                        onChange={(event) => {
                            setSortCategory(event.target.name);
                        }}
                    />
                    &nbsp;<span>Sweet</span>
                </span>
            </Checkbox>
        </Wrap>
    );
};
