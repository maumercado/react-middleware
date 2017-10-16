import { combineReducers } from 'redux';
import usersReducers from './users';

const rootReducer = combineReducers({
    users: usersReducers
});

export default rootReducer;
