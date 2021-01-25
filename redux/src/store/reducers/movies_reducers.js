const DEFAULT_STORE = {
    userName: 'Francis',
    userId:1234
}

export default function(state=DEFAULT_STORE, action) {
    switch(action.type) {
        case 'MOVIES_LIST':
            return action.payload;
        case 'MOVIES_ITEM':
            return {...state, movieItem:action.payload}
        default:
            return state;
    }
}