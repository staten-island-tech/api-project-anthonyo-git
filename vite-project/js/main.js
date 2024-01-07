import '../css/style.css'
import { DomSelectors } from "../js/dom.js";


// async function getDATA() {
//     let res = await fetch(
//         "https://api.aviationstack.com/v1/flights?access_key=bf7d9e2a73cd688369b66157defa7668" 
//     );
//     let data = await res.json();
//     console.log(data)
// }

// getDATA()

// async function getDATA() {
// 	let res = await fetch(
// 		"http://api.weatherapi.com/v1/current.json?key=e4982ec457d44c85b1d130530233112&q=atlanta georgia&aqi=yes" 
// 	);
// let data = await res.json();
// 	console.log(data)
// }

// getDATA()

//secret key: 1a9e18cfcdb848ccab1ba26debf7c920
// https://api.twelvedata.com/symbol_search?symbol=${symbol}&apikey=1a9e18cfcdb848ccab1ba26debf7c920
// #2 key: 929916a64d344125af4e6f6b6ee54b21

const { searchForm, searchInput, resultsContainer } = DomSelectors();

searchForm.addEventListener('submit', (event) => {
	event.preventDefault();
	const symbol = searchInput.value;
	fetchData(symbol);
   });
   
//    function Printx(data) {
// 	data.values.forEach((x) => {
// 	const html = `
// 	<div class="cell">
// 	 <div class="text-container">
// 	   <h2>Datetime: ${x.datetime}</h2>
// 	   <p>Open: ${x.open}</p>
// 	   <p>High: ${x.high}</p>
// 	   <p>Low: ${x.low}</p>
// 	   <p>Close: ${x.close}</p>
// 	   <p>Volume: ${x.volume}</p>
// 	 </div>
// 	</div>`;
// 	resultsContainer.insertAdjacentHTML('afterbegin', html);
// 	});
//    }

   function Printx(data) {
	resultsContainer.innerHTML = '';
	data.values.forEach((x) => {
	const openChecked = document.querySelector('#openCheckbox');
	


   }


   async function fetchData(symbol) {
	try {
	const response = await fetch(`https://api.twelvedata.com/time_series?symbol=${symbol}&interval=30min&outputsize=5&apikey=929916a64d344125af4e6f6b6ee54b21`);
	const data = await response.json();
	Printx(data);
	} catch (error) {
	console.error('Problem: ', error.message);
	}
   }
   
   
