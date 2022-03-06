import { useDispatch } from 'react-redux';
import { DeleteRecipe } from '../../redux/actions';
import { baseTheme } from '../../style/baseTheme';
import styled from 'styled-components';

const Frame = styled.div`
    display: flex;
    width: 800px;
    margin-top: 40px;
    background: ${baseTheme.colors.primary};
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
    background-color: ${baseTheme.colors.primary};
    color: ${baseTheme.colors.secondary};
    border: 1px solid ${baseTheme.colors.secondary};
    border-radius: 10px;
    cursor: pointer;
`;
export const UserRecipes = ({ card, openSelectedCard }) => {
    const dispatch = useDispatch();
    const deleteRecipe = (id) => {
        dispatch(DeleteRecipe(id));
    };
    const removeRecipe = (event) => {
        event.stopPropagation();
        deleteRecipe(card.id);
    };
    return (
        <Frame onClick={openSelectedCard}>
            <img src={card.img} />
            <Description>
                <Header>
                    <h4>{card.name}</h4>
                    <ButtonDelete onClick={removeRecipe}>&times;</ButtonDelete>
                </Header>
                <p>{card.shortDescription}</p>
            </Description>
        </Frame>
    );
};
