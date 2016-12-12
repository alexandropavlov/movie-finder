import { LOAD_GENRE_PREVIEWS, SUCCESS, FAIL, START } from '../constants'

const genrePreviews = {};

export default (genrePreviewsState = genrePreviews, action) => {
    const { type, payload } = action

    switch (type) {
        case LOAD_GENRE_PREVIEWS:
        	let newState = {} 
            Object.assign(newState, genrePreviewsState, {
            	[payload.genreId]: action.response.results.slice(0, 5)
            })
            return newState
    }

    return genrePreviewsState
}