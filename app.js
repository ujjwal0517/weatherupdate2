let form = document.getElementById("form-main");
let city = document.getElementById("txtt");

form.addEventListener('submit', function(e){
let xhr = new XMLHttpRequest();
xhr.open("GET",'https://api.openweathermap.org/data/2.5/weather?q='+ city.value + '&units=metric'+ '&appid=d3c63fa06c1efb4abcce4025732c2b82', true);
// 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=c10bb3bd22f90d636baa008b1529ee25"
xhr.onprogress = function () {
    console.log("i am running");
  };
xhr.onload = function(){
    
    if(this.status == 200){
        
        let data = JSON.parse(this.responseText);
         console.log(data);

        let maxtemp = data.main.temp_max;
        let temp = data.main.temp;
        let mintemp = data.main.temp_min;
        let cit = data.name;
        let desc = data.weather[0].description;

        document.getElementById('temp-min').innerHTML = mintemp+`<sup>o</sup>C`;
        document.getElementById('temp-max').innerHTML = maxtemp+`<sup>o</sup>c`;
        document.getElementById('temp').innerHTML = temp+`<sup>o</sup>c`;
        document.getElementById('city').innerHTML = cit;
        document.getElementById('desc').innerHTML = desc;
 }
   
 xhr.onerror = function(){
        console.log("there is something wrong");
    }
}
    xhr.send();

    document.getElementById('res').style.display = "block";

    e.preventDefault();
    e.stopPropagation;






/*What is the problem ?*/
/*Try once now *
/*not getting data using ajax but same url works on fetch*/ 







});