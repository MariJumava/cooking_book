import { useDispatch } from 'react-redux';
import { DeleteRecipe } from '../../redux/actions';
import styled from 'styled-components';

const Frame = styled.div`
    display: flex;
    width: 800px;
    margin-top: 40px;
    background: #ffffff;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
    border-radius: 50px 10px 10px 10px;
    cursor: pointer;
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 24px;
`;
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const ButtonDelete = styled.button`
    width: 30px;
    height: 30px;
    background-color: white;
    color: #ffbc01;
    border: 1px solid #ffbc01;
    border-radius: 10px;
    cursor: pointer;
`;
export const UserRecipes = ({ card }) => {
    const dispatch = useDispatch();
    const deleteRecipe = (id) => {
        dispatch(DeleteRecipe(id));
    };
    return (
        <Frame>
            <img src={card.img} />
            <Description>
                <Header>
                    <h4>{card.name}</h4>
                    <ButtonDelete onClick={() => deleteRecipe(card.id)}>
                        &times;
                    </ButtonDelete>
                </Header>
                <p>{card.shortDescription}</p>
            </Description>
        </Frame>
    );
};
