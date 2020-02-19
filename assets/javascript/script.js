

// Weather Homework URLS: 
// var currentWeather =  "http://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=7ba67ac190f85fdba2e2dc6b9d32e93c&units=imperial";
// Forecast: "http://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&appid=7ba67ac190f85fdba2e2dc6b9d32e93c&units=imperial"
// Icon: "http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png"

var $forecast = $(".forecast")


// Weather functions
// Forecast function
function currentWeather() {

    var searchValue = $("input").val().trim()
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=09335e290f36cab7997b39556d93e753&units=imperial";

    // requesting the data 
    $.ajax({
        url: queryURL,
        method: "GET"
    })

        // waiting for the ajax call to resolve
        .then(function (data) {

            console.log(data);
            // Creates a div to hold the city 
            var $data = $("<div>")
            // Retrieves the City name Data
            var cityName = data.name;
            // Creates an element to have the city name displayed
            var $cityName = $("<h2>").text(cityName);
            // Displays the city name
            $data.append($cityName);
            // Retrieves the time Data
            var time = moment().subtract(10, 'days').calendar();
            // appending the time to the city name
            $cityName.append(" " + time);
            // Displays the city name
            $data.append($cityName);
            // retrieve the temp
            var temp = $("<p>").text("Temperature: " + data.main.temp + " °F");
            // display the temp
            $data.append(temp);
            // retrieve the humidity
            var humidity = $("<p>").text("Humidity: " + data.main.humidity + " %");
            // display the humidity
            $data.append(humidity);
            // retrieve the wind speed
            var windSpeed = $("<p>").text("Wind Speed: " + data.wind.speed + " MPH");
            // display the temp
            $data.append(windSpeed);

            $("#cityResults").append($data);

        });
}

// Icon: 
// function icon () {

//     var searchValue = $("input").val().trim()
//     var queryURL = "http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png"

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     })

//     // waiting for the ajax call to resolve
//     .then(function (data) {
//         console.log(data);
//     })
// };


// On any button click
function forecast() {

    var searchValue = $("input").val().trim()
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&appid=09335e290f36cab7997b39556d93e753&units=imperial"

    // requesting the data 
    $.ajax({
        url: queryURL,
        method: "GET"
    })

        // waiting for the ajax call to resolve
        .then(function (data) {
            console.log(data);
        })

};

$("button").on("click", function () {

    var searchValue = $("input").val().trim()
    var $cityLi = $("<button>").text(searchValue);
    $("#searchInput").append($cityLi);
    
    currentWeather();
    forecast();
});
