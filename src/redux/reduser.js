import { recipes } from '../components/Recipes';
import { ACTION_TYPES } from './consts';

const initialState = {
    recipes: recipes,
    user: {
        id: 1,
        name: 'John Doe',
        email: 'test',
        img: '../../pictures/user/user_photo.png',
        myrecipes: [],
    },
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_RECIPE:
            return {
                ...state,
                user: {
                    ...state.user,
                    myrecipes: [...state.user.myrecipes, action.payload],
                },
            };
        case ACTION_TYPES.DELETE_RECIPE:
            return {
                ...state,
                user: {
                    myrecipes: [
                        ...state.user.myrecipes.filter(
                            (card) => card.id !== action.payload
                        ),
                    ],
                },
            };
        default:
            return state;
    }
};
