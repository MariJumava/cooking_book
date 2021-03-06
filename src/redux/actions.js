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

export const EditUserName = (name) => {
    return {
        type: ACTION_TYPES.EDIT_NAME_USER,
        payload: name,
    };
};

export const EditUserEmail = (email) => {
    return {
        type: ACTION_TYPES.EDIT_EMAIL_USER,
        payload: email,
    };
};
export const AddUserNotes = (id, notes) => {
    return {
        type: ACTION_TYPES.ADD_USER_NOTES,
        payload: { id, notes },
    };
};
