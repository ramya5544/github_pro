const loadcountryAPI = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
} 
const displayCountries =countries => {
console.log(countries);
const countriesHtml = countries.map(country => getCountry(country))
const container=document.getElementById('countries');
container.innerHTML = countriesHtml.join(' ');
}  
const getCountry = (country) =>{
    console.log(country)
    return `
    <div class ="country-div">
    <img src="${country.flags.png}">
    <hr>
    <h2>${country.name.common}</h2>
    <h4>Population:${country.population}</h4> 
    <h4>Region:${country.region}</h4> 
    <h4>Capital:${country.capital}</h4> 
    
    
    </div>
    
    `
}
loadcountryAPI()
