import { LOAD_GENRES, SUCCESS, FAIL, START } from '../constants'

export function loadGenres() {
    return {
        type: LOAD_GENRES,
        callApi: {
        	url: '/genre/movie/list'
        }
    }
}