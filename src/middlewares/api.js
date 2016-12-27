import jquery from 'jquery'
import { makeURL } from '../utils'

export default store => next => action => {
	const { callApi, callApiData, ...rest } = action
	if (!callApi) return next(action)

	callApi(callApiData, (response) => {
		// success
		next({...rest, response: JSON.parse(response)})
	}, (response) => {
		//error

	});
}