const getCountries=()=>{
const xhr= new XMLHttpRequest();
xhr.open('GET', "https://restcountries.com/v3.1/all");
xhr.send();
xhr.responseType ="json";
xhr.onload = ()=> {
const countries= xhr.response;
console.log(countries);
const countriesasia=countries.filter(asia=> asia.region==="Asia");
console.log(countriesasia);
const countriespop=countries.filter(pop=> pop.population<= 2_00_000);
console.log(countriespop);

};
};
getCountries();