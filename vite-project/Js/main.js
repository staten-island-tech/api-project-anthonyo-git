import '../css/style.css'

// async function getDATA() {
//     let res = await fetch(
//         "https://api.aviationstack.com/v1/flights?access_key=bf7d9e2a73cd688369b66157defa7668" 
//     );
//     let data = await res.json();
//     console.log(data)
// }

// getDATA()

async function getDATA() {
	let res = await fetch(
		"http://api.weatherapi.com/v1/current.json?key=76c44a18082b4133979134522231112&q=atlanta georgia&aqi=yes" 
	);
let data = await res.json();
	console.log(data)
}

getDATA()
