const search = document.querySelector(".btn");
const InputSearch = document.querySelector(".input-keyword")

search.addEventListener("click", setButtonFunctions);

function setButtonFunctions(){
    let country = InputSearch.value;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '98a9ad946fmsh1985c87def7a17bp14fc16jsn338e43a5169a',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
    };
    
    fetch(`https://covid-193.p.rapidapi.com/statistics?country=${country}`, options)
        .then(response => response.json())
        .then((json) => {
            let data = json.response[0];
            document.querySelector('.activeCases').innerHTML=data.cases.active;
			document.querySelector('.newCases').innerHTML=data.cases.new;
			document.querySelector('.recoveredCases').innerHTML=data.cases.recovered;
			document.querySelector('.totalCases').innerHTML=data.cases.total;
			document.querySelector('.totalDeaths').innerHTML=data.deaths.total;
			document.querySelector('.totalTests').innerHTML=data.tests.total;
        })
}