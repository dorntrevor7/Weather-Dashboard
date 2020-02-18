
// Weather Homework URLS: 
// var currentWeather =  "http://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=7ba67ac190f85fdba2e2dc6b9d32e93c&units=imperial";
// Forecast: "http://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&appid=7ba67ac190f85fdba2e2dc6b9d32e93c&units=imperial"
// Icon: "http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png"

// var $cityResult = $(".cityResult")
// var $forecast = $(".forecast")


// Weather functions
// Forecast function
$("button").on("click", function () {

    var searchValue = $("input").val().trim()
    var queryURL =  "http://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=09335e290f36cab7997b39556d93e753&units=imperial";

    // requesting the data 
    $.ajax({
        url: queryURL,
        method: "GET"
    })

        // waiting for the ajax call to resolve
        .then(function (data) {

            console.log(data);
        });
});


// // Icon: 
// $("button").on("click", function () {

//     var searchValue = $("button").attr($)
//     var queryURL = "http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png"

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     })

//         // waiting for the ajax call to resolve
//         .then(function (data) {
//             console.log(data);
//         })
// });


// // On any button click
// $("button").on("click", function () {
//     var person = $(this).attr("data-person");
//     "http://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=7ba67ac190f85fdba2e2dc6b9d32e93c&units=imperial"

//     // requesting the data 
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     })

//         // waiting for the ajax call to resolve
//         .then(function (data) {
//             console.log(data);
//         })

// });