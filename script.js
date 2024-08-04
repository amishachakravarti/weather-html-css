//http://api.weatherapi.com/v1/current.json?key=03a15aff5c70487db2093630240906&q=patna&aqi=no
//https://api.oceandrivers.com/static/resources.json'
const fetchResults = async (targetLocation) => {
    let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    let apiUrl = `http://api.weatherapi.com/v1/current.json?key=03a15aff5c70487db2093630240906&q=${targetLocation}&aqi=no`;

    try {
        const res = await fetch(proxyUrl + apiUrl);
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

let target = 'lucknow';
fetchResults(target);
