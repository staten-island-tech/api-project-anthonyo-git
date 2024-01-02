async function getDATA() {
    let res = await fetch(
        "https://api.twelvedata.com/time_series?symbol=AMZN&interval=1min&apikey=1a9e18cfcdb848ccab1ba26debf7c920" 
    );
    let data = await res.json();
    console.log(data)
}

getDATA()