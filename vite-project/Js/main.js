import '../css/style.css'


// key airplane bf7d9e2a73cd688369b66157defa7668
async function getDATA() {
    let res = await fetch(
        "https://api.aviationstack.com/v1/flights?access_key=bf7d9e2a73cd688369b66157defa7668" 
    );
    let data = await res.json();
    console.log(data)
}

getDATA()




