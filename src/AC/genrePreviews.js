import { LOAD_GENRE_PREVIEWS, SUCCESS, FAIL, START } from '../constants'

export function loadGenrePreviews(genreId) {
    return {
        type: LOAD_GENRE_PREVIEWS,
        payload: {
        	genreId
        },
        callApi: {
        	url: '/genre/' + genreId + '/movies'
        }
    }
}