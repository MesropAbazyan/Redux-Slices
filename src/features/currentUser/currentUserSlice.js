export function currentUserReducer(state = {}, action) {
    if (action.type === 'edit-current-user-name') {
        return {
            name: action.payload.name
        };
    }

    return state;
}

export const initialCurrentUser = {
    name: 'John Smith'
}

export function selectName(state) {
    return state.currentUser.name;
}

export function editName(newName) {
    return {
        type: 'edit-current-user-name',
        payload: {
          name: newName
        }
      };
}   // as the returned object is "action", that's why
    // the "editName" function is called "action creator"