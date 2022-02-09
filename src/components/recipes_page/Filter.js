import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    margin-right: 40px;
`;

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

const Div = styled.div`
    display: flex;
    justify-content: space-between;
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

const Select = styled.select`
    width: 224px;
    height: 40px;
    padding: 10px;
    font-family: Nunito;
    font-style: normal;
    font-size: 16px;
    line-height: 19px;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 4px;
`;

export const Filter = ({ setSortType }) => {
    //const [search, setSearch] = useState('');

    // const handleChange = (e) => {
    //     e.preventDefault();
    //     setSearch(e.target.value);
    // };
    // const listItem = recipes
    //     .filter((recipe) => {
    //         if (search === '') {
    //             return recipe;
    //         } else if (
    //             recipe.name.toLowerCase().includes(search.toLowerCase())
    //         ) {
    //             return recipe;
    //         }
    //     })
    //     .map((item) => {
    //         return (
    //             <div key={item.id}>
    //                 <h5>{item.name}</h5>
    //             </div>
    //         );
    //     });

    return (
        <Container>
            <Wrap>
                <Div>
                    <Title style={{ textTransform: 'uppercase' }}>Filter</Title>
                    <Clear>clear all</Clear>
                </Div>
                {/* <input type="text" onChange={handleChange} value={search} />
                <div>{listItem}</div> */}
                <Title>Sort by</Title>
                <Select
                    onChange={(event) => {
                        setSortType(event.target.value);
                    }}
                >
                    <option value="all">All</option>
                    <option value="popularity">Popularity</option>
                    <option value="name">By name</option>
                </Select>
                <Title>Cooking Time</Title>
            </Wrap>
        </Container>
    );
};
