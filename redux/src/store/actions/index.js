

export const moviesList = () => {
    return {
        type: 'MOVIES_LIST',
        payload: [
            {id:1, name:"Pulp Fiction"},
            {id:2, name:"Harry Potter"},
            {id:3, name:"Rambo"},
        ]
    }
}