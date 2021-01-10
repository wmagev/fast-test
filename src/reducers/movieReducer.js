import { MOVIE_ADD, MOVIE_DELETE, SEARCH_TERM_ADD } from "../constants"

const reducer = (state, action) => {    
    switch(action.type) {
        case MOVIE_ADD:
            return {
                query: state.query,
                movies: [...state.movies, action.payload]
            }
        case MOVIE_DELETE:
            return {
                query: state.query,
                movies: state.movies.filter( movie => movie.Title !== action.payload.Title)
            }
        case SEARCH_TERM_ADD:
            return {
                query: action.payload,
                movies: state.movies
            }
        default:
            return state
    }
}

export default reducer