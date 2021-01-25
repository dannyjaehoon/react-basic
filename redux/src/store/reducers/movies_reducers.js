import { MOVIES_LIST, MOVIES_DATA, GET_USERS } from '../types';

const DEFAULT_STORE = {
    userName: 'Francis',
    userId:1234
}

export default function(state=DEFAULT_STORE, action) {
    switch(action.type) {
        case MOVIES_LIST:
            return action.payload;
        case MOVIES_DATA:
            return {...state, movieData: action.payload}
        case GET_USERS:
            return {...state, users: action.payload }
        default:
            return state;
    }
}