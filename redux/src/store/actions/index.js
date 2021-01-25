import { MOVIES_LIST, MOVIES_DATA, GET_USERS } from '../types';
import axios from 'axios';
export const getUsers = async () => {
    const request = await axios.get(`https:jsonplaceholder.typicode.com/users`);
    return {
        type: GET_USERS,
        payload: request
    }
}

export const moviesList = () => {
    return {
        type: MOVIES_LIST,
        payload: [
            {id:1, name:"Pulp Fiction"},
            {id:2, name:"Harry Potter"},
            {id:3, name:"Rambo"},
        ]
    }
}

export const movieData = () => {
    return{
        type: MOVIES_DATA,
        payload: {
            id:1,
            name:'Pulp fiction',
            actors:['travolta', 'Thurman'],
            year: 1990,
            director: 'Transdo'
        }
    }
}