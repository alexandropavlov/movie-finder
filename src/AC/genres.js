import { LOAD_GENRES, SUCCESS, FAIL, START } from '../constants'

export function loadGenres(data) {
    return {
        type: LOAD_GENRES,
        callApi: data.callApi,
        callApiData: data.callApiData
    }
}