import '../css/style.css'

// async function getDATA() {
//     let res = await fetch(
//         "https://api.aviationstack.com/v1/flights?access_key=bf7d9e2a73cd688369b66157defa7668" 
//     );
//     let data = await res.json();
//     console.log(data)
// }

// getDATA()

//c248667000mshe7328309b9d141dp119080jsn52ee67a4256a
const url = 'https://timetable-lookup.p.rapidapi.com/TimeTable/NYC/ATL/20231211/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c248667000mshe7328309b9d141dp119080jsn52ee67a4256a',
		'X-RapidAPI-Host': 'timetable-lookup.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}