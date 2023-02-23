//Get all the countries from the Asia continent 

/*
fetch("https://restcountries.com/v3.1/all")
.then(response=> response.json())
.then(data=>{
    data.forEach(countries => {
         if(countries.region=="Asia"){
          console.log(countries.name.common
             );    
         }
       
      //console.log(countries); 
 
    });
})
.catch(console.error())
*/

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Get all the countries from the Asia continent /region using the Filter function

/*
fetch("https://restcountries.com/v3.1/all")
.then(response=> response.json())
.then(countries=>{
    var asainCountries=countries.filter(country=>country.region.includes('Asia'))
   var countryName=asainCountries.map(country=>country.name.common)
   console.log(countryName)

})
.catch(console.error())
*/

//---------------------------------------------------------------------------------------------------------------------------------------------------------

//Get all the countries with a population of less than 2 lakhs using Filter function

/*
fetch("https://restcountries.com/v3.1/all")
.then(response=> response.json())
.then(countries=>{
    var population2l=countries.filter(country=>country.population<=200000)
   var countryName=population2l.map(country=>country.name.common)
   console.log(countryName)

})
.catch(console.error())

*/

//--------------------------------------------------------------------------------------------------------------------------------------------------

//Get all the countries with a population of less than 2 lakhs
/*
fetch("https://restcountries.com/v3.1/all")
.then(response=> response.json())
.then(data=>{
data.forEach(countries => {
    if(countries.population<=200000){
        console.log(countries.name.common)
    }
});
})

.catch(console.error())
*/
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Print the following details name, capital, flag using forEach function

/*
fetch("https://restcountries.com/v3.1/all")
.then(response=>response.json())
.then(data=>{
    data.forEach(countries=>{
        console.log(`country name:${countries.name.common}`)
        console.log(`country capital:${countries.capital}`)
       console.log(`country flag:${countries.flag}`)
       // console.log(countries)
    })
})
.catch(console.error())
*/
//---------------------------------------------------------------------------------------------------------------------------------

// Print the total population of countries using reduce function
/*
fetch("https://restcountries.com/v3.1/all")
.then(response=>response.json())
.then(countries=>{
    var totalPopulation=countries.reduce((acc,country)=>acc+country.population,0)
    console.log(totalPopulation)
})
*/
//---------------------------------------------------------------------------------------------------------------------------
//Print the country which uses US Dollars as currency.
/*
fetch("https://restcountries.com/v3.1/all")
.then(response=>response.json())
.then(data=>{
   data.forEach(countries => {
    USD=console.log(countries.currencies.USD)
    console.log(USD)
   }); 
})
  .catch(console.error())
  */