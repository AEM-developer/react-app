const createRequest = function createRequest(url) {
	const httpRequest = new XMLHttpRequest(url);
	httpRequest.addEventListener('readystatechange', () =>
		responseMethod(httpRequest, updateUISuccess, updateUIError)
	);
	httpRequest.open('GET', url);
	httpRequest.send();
};

const responseMethod = function responseMethod(httpRequest, succed, fail) {
	if (httpRequest.readyState === 4) {
		if (httpRequest.status === 200) {
			succed(httpRequest.responseText);
		} else {
			fail(`${httpRequest.status}: ${httpRequest.responseText}`);
		}
	}
};

const updateUISuccess = function updateUISuccess(data) {
	const parsedData = JSON.parse(data);
	console.log(parsedData);
};

const updateUIError = function updateUIError(error) {
	console.log(error);
};

// https://www.nps.gov/subjects/developer/get-started.htm

const createRequest2 = function createRequest2(url, succed, fail) {
	fetch(url)
		.then((response) => handleError(response))
		.then((data) => succed(data))
		.catch((error) => fail(error));
};

const handleError = function handleError(response) {
	if (!response.ok) {
		throw new Error(`${response.status}: ${response.responseText}`);
	}
	return response.json();
};
