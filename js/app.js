//toggleSpinner
const toggleSpinner = displayStyle => {
  document.getElementById('spinner').style.display = displayStyle;
}
//toggle results
const toggleResult = displayStyle => {
  document.getElementById('result').style.display = displayStyle;
}

const loadCountries = () => {
    toggleSpinner('block');
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => displayCountires(data))
}

const displayCountires = countries => {
    // console.log(country[0]);
    const divContainer = document.getElementById('country');
    countries.forEach(country => {
        // console.log(country.name.common);
        const div = document.createElement('div');
        div.className = "country";
        div.innerHTML = `
        <img width="100px" src="${country.flags.png}"
        <p><span>${country.name.common}</span></p>
        <p><span>Capital: </span>${country.capital}</p>
        <p><span>Population: </span>${country.population}</p>
        <p><span>Region: </span>${country.region}</p>
        <p><span>Time zone: </span>${country.timezones}</p>
        `
        divContainer.appendChild(div);
    })
    toggleSpinner('none');
}
loadCountries();

const all = document.getElementById('all').addEventListener('click', function(){
    location.reload();
})

document.getElementById('region').addEventListener('click', function(event){
    const region = event.target.innerText;
    //spinner & result show/hide
    toggleSpinner('block');
    toggleResult('none');
    // console.log(id.innerText);
    fetch(`https://restcountries.com/v3.1/region/${region}`)
    .then(res => res.json())
    .then(data => displayCountry(data))
})
const displayCountry = countries => {
    console.log(countries);
    const divContainer = document.getElementById('country');
    divContainer.innerHTML = '';
    countries.forEach(country => {
        const div = document.createElement('div');
        div.className = "country";
        div.innerHTML = `
        <img width="100px" src="${country.flags.png}"
        <p><span>${country.name.common}</span></p>
        <p><span>Capital: </span>${country.capital}</p>
        <p><span>Population: </span>${country.population}</p>
        <p><span>Region: </span>${country.region}</p>
        <p><span>Time zone: </span>${country.timezones}</p>
        `
        divContainer.appendChild(div);
        // console.log(country);
    })
    //spinner & result show/hide
    toggleSpinner('none');
    toggleResult('block');

}