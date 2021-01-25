import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { movieData } from '../store/actions';

const Movie = (props) => {
    const movies = useSelector(state => state.movies);
    const dispatch = useDispatch();

    const getMovie = () => {
        dispatch(movieData());
        console.log(movies);
    }
    console.log(movies);
    return (
        <>
            { movies && movies.movieData ? 
                <div>
                    <div>Name: {movies.movieData.name}</div>
                </div>
            : null}

            <button onClick={()=> getMovie()}>
                Get movies
            </button>
        </>
    )
}

export default Movie;


// import React from 'react';
// import { connect } from 'react-redux';

// const Movie = (props) => {
//     console.log(props);
//     return (
//         <div>
//             movie
//         </div>
//     )
// }


// const mapStateToProps = (state) => {
//     return { movies: state.movies }
// }
// export default connect(mapStateToProps)(Movie);
