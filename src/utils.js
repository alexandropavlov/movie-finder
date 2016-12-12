export const makeURL = function(host, path, apiKey, language) {
	return host + path + '?api_key=' + apiKey + '&language=' + language
}