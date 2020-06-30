// pulled api key //
var apiKey = "3ac0d8db34de82819d13a9167239acc1";

// search button & search input variables 
var searchBtn = $(".searchBtn");
var searchInput = $(".searchInput");

// variables for the city name , the current date , a weather icon , and search history 
var cityNameEl = $(".cityName");
var currentDateEl = $(".currentDate");
var weatherIconEl = $(".weatherIcon");
var searchHistoryEl = $(".historyItems");

// variables for the temperature , humidity , uv index , windspeed , and the card rows 
var tempEl = $(".temp");
var humidityEl = $(".humidity");
var uvIndexEl = $(".uvIndex");
var windSpeedEl = $(".windSpeed");
var cardRow = $(".card-row");


// these variables help create the current date 
var today = new Date();
// see readme for padStart source. this grabs the day and time //
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
var today = mm + '/' + dd + '/' + yyyy;

// this is to save the search history into the local storage 
if (JSON.parse(localStorage.getItem("searchHistory")) === null) {
    console.log("searchHistory not found")
}else{
    console.log("searchHistory loaded into searchHistoryArr");
    renderSearchHistory();
}

// on click function for search button and grabs the weather 
searchBtn.on("click", function(e) {
    console.log("clicked button")
    getWeather(searchInput.val());
});
