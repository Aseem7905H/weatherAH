const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const apiKey = '6b197ac3e1mshd3e90021b035127p14992djsn0bel';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6b197ac3e1mshd3e90021b035127p14992djsn0bebf50400ab',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}