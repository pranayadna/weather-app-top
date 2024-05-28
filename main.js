const locationInput = document.querySelector('#location');
const locationSpan = document.querySelector('#locationValue');
const tempCId = document.querySelector('#c');
const tempFId = document.querySelector('#f');
const search = document.querySelector('#search');

search.addEventListener('click', (e) => {
    e.preventDefault();
    const locationValue = locationInput.value;
    // console.log(location);
    // locationValue;
    // getWeatherLocation(locationValue);

    getWeatherLocation(locationValue)
        .then(data => {
            locationSpan.textContent = data.location;
            tempCId.textContent = data.tempC;
            tempFId.textContent = data.tempF;
        });
})

function getWeatherLocation(location) {
    return fetch(`https://api.weatherapi.com/v1/current.json?key=2175467a64d44729a4b22145242705&q=${location}`, { mode: 'cors' })
        .then(function(response) {
            // console.log();
            return response.json();
        })
        .then(function(response) {
            console.log(response);
            // console.log('F: ', response.current.temp_f);
            // console.log('C: ', response.current.temp_c);

            return {
                location: response.location.name,
                tempC: response.current.temp_c,
                tempF: response.current.temp_f
            };
            // let tempF = response.current.temp_f;
        })
        // .then(function(dataTempF) {
        //     // console.log(dataTempC);
        //     // console.log('F: ', response.current.temp_f);
        //     // console.log('C: ', response.current.temp_c);

        //     return dataTempF.current.temp_f;
        //     // let tempF = response.current.temp_f;
        // })
}




// function getTempFLocation(location) {
//     return fetch(`https://api.weatherapi.com/v1/current.json?key=2175467a64d44729a4b22145242705&q=${location}`, { mode: 'cors' })
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(response) {
//             // console.log(response);
//             // console.log('F: ', response.current.temp_f);
//             // console.log('C: ', response.current.temp_c);

//             return response.current.temp_f;
//         })
// }

// getTempCLocation('spielberg')
//     .then(function(data) {
//         console.log({
//             tempC: data.tempC,
//             tempF: data.tempF
//         });
//     })
    // console.log('F: ', tempF);
    // .then(function(tempF) {
    //     // console.log(tempC);
    // })

