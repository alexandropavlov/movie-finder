import { LOAD_GENRES, SUCCESS, FAIL, START } from '../constants'

const genres = [];

export default (genresState = genres, action) => {
    const { type, payload } = action

    switch (type) {
        case LOAD_GENRES:
        	//debugger;
            return genresState.concat(action.response.genres)
    }

    return genresState
}