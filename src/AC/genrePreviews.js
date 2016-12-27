import { LOAD_GENRE_PREVIEWS, SUCCESS, FAIL, START } from '../constants'

export function loadGenrePreviews(genreId, data) {
    return {
        type: LOAD_GENRE_PREVIEWS,
        payload: {
        	genreId
        },
        callApi: data.callApi,
        callApiData: data.callApiData
    }
}