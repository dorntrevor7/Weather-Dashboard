

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

            $("#cityResults").empty();

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
            var time = moment().format('L');
            // image icon
            var image = $("<img>").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
            // appending the time to the city name
            $cityName.append(" " + time + " " + image);
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
            $("#cast").empty();

            console.log(data);

            for (var i = 0; i < 5; i++) {
  
                var $data = $("<div>").addClass("cast");
                var $date = $("<h5>").text(moment(data.list[i].dt).format("L"));
                console.log(moment(data.list[i].dt).format("L"));
                var $temp = $("<p>").text("temp: " + data.list[i].main.temp + " °F");
                console.log(data.list[i].main.temp);
                var $humidity = $("<p>").text("humidity: " + data.list[i].main.humidity + " %");
                console.log(data.list[i].main.humidity);
                $data.append(
                    $date,
                    $temp,
                    $humidity
                )
                $("#cast").append($data);
            }
        })
        
};

$("button").on("click", function click () {

    var searchValue = $("input").val().trim()
    var $cityLi = $("<button>").text(searchValue);
    $cityLi.addClass("cityButton");
    $("#searchInput").append($cityLi);

    currentWeather();
    forecast();
});

$(document).on("click", ".cityButton", function (){

    currentWeather();
    forecast();
});
