import { combineReducers } from 'redux'
import genresReducer from './genres'
import genrePreviewsReducer from './genrePreviews'

export default combineReducers({
    genres: genresReducer,
    genrePreviews: genrePreviewsReducer
})