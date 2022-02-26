const loadCountries = () => {
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
        <h5>${country.name.common}</h5>
        <p><span>Capital: </span>${country.capital}</p>
        <p><span>Population: </span>${country.population}</p>
        <p><span>Region: </span>${country.region}</p>
        <p><span>Time zone: </span>${country.timezones}</p>
        `
        divContainer.appendChild(div);
    })
}
loadCountries();

const all = document.getElementById('all').addEventListener('click', function(){
    // location.reload();
})

//load asian
const loadAsian = () => {
    git 
}