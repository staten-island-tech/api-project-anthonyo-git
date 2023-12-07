import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from '../vite-project/counter.js'

const apiURL = 'https://api.tomorrow.io/v4/timelines?location=40.75872069597532,-73.98529171943665&fields=temperature&timesteps=1h&units=metric&apikey=SjOQrhCncbcH7MpXTzSgct54f61IEfHv'

async function getDATA(apiURL) {
    let x = "xx"
    try{
        const response = await fetch(apiURL)
        if(response.status !=200){
            throw new Error(response.statusText);
        }
        const data = await response.json()
        console.log(data)
        document.querySelector("h2").textContent = timelines.intervals.values.temperature;
    } catch (error) {
    document.querySelector("h2").textContent = error;
    }
}





