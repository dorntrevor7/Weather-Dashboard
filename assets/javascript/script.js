

// current weather section function
function currentWeather() {
    var searchValue = $("input").val().trim()
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=09335e290f36cab7997b39556d93e753&units=imperial";

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
            var cityName = data.name + " ";
            // Creates an element to have the city name displayed
            var $cityName = $("<h2>").text(cityName);
            // Displays the city name
            $data.append($cityName);
            // Retrieves the time Data
            var time = moment().format('L');
            // image icon
            var image = $("<img>").attr("src", "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
            console.log(image)
            // appending the time to the city name
            $cityName.append(time, image);
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

// forecast section function
function forecast() {

    var searchValue = $("input").val().trim()
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&appid=09335e290f36cab7997b39556d93e753&units=imperial"

    // requesting the data 
    $.ajax({
        url: queryURL,
        method: "GET"
    })

        // waiting for the ajax call to resolve
        .then(function (data) {
            $("#cast").empty();

            console.log(data);

            for (var i = 0; i < 41; i+= 8) {
                // contains each loop day of forecast in a div
                var $data = $("<div>").addClass("cast");

                // declaring variables as html elements and setting their texts
                var $date = $("<h5>").text(moment(data.list[i].dt_txt).format("L"));
                console.log(data.list[i].dt_txt);
                var $image = $("<img>").attr("src", "https://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png");
                var $temp = $("<p>").text("temp: " + data.list[i].main.temp + " °F");
                var $humidity = $("<p>").text("humidity: " + data.list[i].main.humidity + " %");

                // appending all the declared variabels to the div thats conatians each days forecast
                $data.append(
                    $date,
                    $image,
                    $temp,
                    $humidity
                )

                // appending the $data div to display on the page
                $("#cast").append($data);
            }
        })

};

$("button").on("click", function buttonCity() {

    var li = $("<div>").addClass("row");
    var searchValue = $("input").val().trim()
    var searchValueUC = searchValue.toUpperCase();
    var $cityLi = $("<button>").text(searchValueUC);
    $cityLi.addClass("col cityBtn");
    $(li).append($cityLi);

    $("#searchInput").append($cityLi);

    currentWeather();
    forecast();
});

$(document).on("click", ".cityButton", function () {
    // runs the functions when the button is clicked
    buttonCity();
    currentWeather();
    forecast();
});
