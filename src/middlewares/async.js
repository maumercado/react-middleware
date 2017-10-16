export default ({ dispatch }) => {
    return next => action => {
        // action does not have a paylod or does not have a
        // .then prop is not a promise
        if (!action.payload || !action.payload.then) {
            return next(action);
        }

        // Make sure the action's promise resolves
        action.payload.then(response => {
            const newAction = { ...action, payload: response.data };
            dispatch(newAction);
        });
    };
};
