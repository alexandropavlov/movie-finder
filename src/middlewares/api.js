import jquery from 'jquery'
import { HOST, API_KEY, LANGUAGE } from '../config'
import { makeURL } from '../utils'

export default store => next => action => {
	const { callApi, ...rest } = action
	if (!callApi) return next(action)

	jquery.get(makeURL(HOST, callApi.url, API_KEY, LANGUAGE))
		.done(response => {
			next({...rest, response})
		})
}