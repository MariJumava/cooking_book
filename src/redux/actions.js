import { ACTION_TYPES } from './consts';

export const AddRecipe = (selectedRecipe) => {
    return {
        type: ACTION_TYPES.ADD_RECIPE,
        payload: selectedRecipe,
    };
};

export const DeleteRecipe = (id) => {
    return {
        type: ACTION_TYPES.DELETE_RECIPE,
        payload: id,
    };
};
