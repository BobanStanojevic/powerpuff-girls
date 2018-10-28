import queryString from 'query-string';

export class ApiRestStatus extends Error {
	public errorCode: number;
	public apiMessage: string;
	public apiCode: number;

	constructor(message, errorCode = 0, apiMessage = '', apiCode = 0) {
		super(message); // 'Error' breaks prototype chain here
		Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain

		this.errorCode = errorCode;
		this.apiMessage = apiMessage;
		this.apiCode = apiCode;
	}
}

export default async function apiCallSettings(func, apiSettings) {
	let url = apiSettings.path;

	// apply parameters to path
	if (apiSettings.pathParameters) {
		url = Object.keys(apiSettings.pathParameters).reduce((reducedUrl, key) => {
			return reducedUrl.replace('{' + key + '}', apiSettings.pathParameters[key]);
		}, url);
	}

	// apply parameters to url
	if (apiSettings.queryParameters) {
		url += '?' + queryString.stringify(apiSettings.queryParameters);
	}

	const fetchConfig = {};
	let response;

	try {
		response = await fetch(url, {
			method: apiSettings.method,
			...fetchConfig,
		});
	} catch (err) {
		throw new ApiRestStatus(err.message);
	}

	if (!response.ok) {
		// there is a http status code from REST interface

		let apiMessage = '';
		let apiCode = 0;

		try {
			const responseData = await response.json();

			apiMessage = responseData.message;
			apiCode = responseData.code;
		} catch (err) {
			// no message
			console.warn('no api message ', err.message);
		}

		throw new ApiRestStatus(response.statusText, response.status, apiMessage, apiCode);
	}

	try {
		if (response.headers.get('Content-Type') && response.headers.get('Content-Type').includes('application/json')) {
			const responseData = await response.json();
			return func(responseData);
		} else {
			return func(response.text());
		}
	} catch (err) {
		throw new ApiRestStatus(err.message);
	}
}
