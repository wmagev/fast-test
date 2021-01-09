import { MOVIE_ADD, MOVIE_DELETE } from "../constants"

const reducer = (state, action) => {
    switch(action.type) {
        case MOVIE_ADD:
            return [...state, action.payload]
        case MOVIE_DELETE:            
            return state.filter( movie => movie.Title !== action.payload.Title)
        default:
            return state
    }
}

export default reducer