import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`;

const Wrap = styled.div`
    width: 272px;
    height: 292px;
    margin-left: 150px;
    margin-top: 100px;
    background: #ffffff;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
`;

const Div = styled.div`
    display: flex;
    justify-content: space-around;
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

const Clear = styled.p`
    font-family: Nunito;
    font-size: 14px;
    line-height: 19px;
    color: #ffbc01;
`;

export const Filter = () => {
    const [value, setValue] = useState('');

    return (
        <Container>
            <Wrap>
                <Div>
                    <Title>Filter</Title>
                    <Clear>clear all</Clear>
                </Div>
                <Title>Sort by</Title>
                <select
                    value={value}
                    onChange={(event) => {
                        setValue(event.target.value);
                    }}
                >
                    <option>Popularity</option>
                    <option>By name</option>
                </select>
                <Title>Cooking Time</Title>
            </Wrap>
        </Container>
    );
};
