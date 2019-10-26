window.addEventListener('load',()=>{
let long;
let lat;
let temperatureDescription = document.querySelector(".temperature-description");
let temperatureDegree = document.querySelector(".temperature-degree");
let locationTimezone = document.querySelector(".location-timezone");
if (navigator.geolocation)
{
    navigator.geolocation.getCurrentPosition(position=>{
        long=position.coords.longitude;
        lat=position.coords.latitude;
        const proxy="https://cors-anywhere.herokuapp.com/";
        const api = `${proxy}https://api.darksky.net/forecast/b9f00450bebbfef0ab2fb8405d5cc91b/${lat},${long}`;
        fetch(api)
         .then(response=>{
        return response.json();
    })
          .then(data=>{
        console.log(data);
        const { temperature ,summary} =data.currently ;
        //set DOM
        var t = (temperature - 32)*5/9;
        temperatureDegree.textContent = t.toFixed(0);
        temperatureDescription.textContent = summary;
        locationTimezone.textContent = data.timezone;
    });

    });
}
});