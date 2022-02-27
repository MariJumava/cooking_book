import { recipes } from '../components/Recipes';
import { ACTION_TYPES } from './consts';
import user_photo from '../pictures/user/user_photo.png';

const initialState = {
    recipes: recipes,
    user: {
        id: 1,
        name: 'John Doe',
        email: 'test',
        status: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo non ac eros, velit dapibus consequat vestibulum sapien pharetra. Bibendum vel sollicitudin at purus egestas tincidunt.',
        img: user_photo,
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
        case ACTION_TYPES.EDIT_NAME_USER:
            return {
                ...state,
                user: { ...state.user, name: action.payload },
            };
        case ACTION_TYPES.EDIT_EMAIL_USER:
            return {
                ...state,
                user: { ...state.user, email: action.payload },
            };
        case ACTION_TYPES.ADD_USER_NOTES:
            return {
                ...state,
                user: {
                    ...state.user,
                    myrecipes: state.user.myrecipes.map((x) => {
                        if (x.id === action.payload.id) {
                            x.notes = action.payload.notes;
                        }
                        return x;
                    }),
                },
            };
        default:
            return state;
    }
};
