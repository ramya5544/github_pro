
const loadCountryAPI= () =>{
fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(data => displayCountries(data))
}
const displayCountries =countries=> {
    console.log(countries);
    const countriesHTML =countries.map(country => getCountry(country))
    const container=document.getElementById('countries');
    container.innerHTML=countriesHTML.join(' ');

}
const getCountry = (country) =>{
    console.log(country)
    return `
    <div class="country-div">
    <h2>${country.name.common}</h2>
    <img src="${country.flags.png}">
    <hr>
    <h4>population:${country.population}</h4>
    <h4>Region:${country.region}</h4>
    <h4>capital:${country.capital}</h4>
    </div>
    `
}
loadCountryAPI()  