var req = new XMLHttpRequest();
req.addEventListener("load", handledata);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
//a.get all the countries from the asia continent /region using the filter 
request.onload=function(){
  var countryData=JSON.parse(this.response);
  const asia=countryData.filter((element)=>{
    if(element.region==='Asia'){
      return element.name;
    }
  })
  console.log(asia);
}