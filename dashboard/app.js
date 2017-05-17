function loadDate() {
    var today = new Date();
    var date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
    var dateString = date.toString()
    $("#date").text(dateString);
}

function loadWeather() {
    var weather = $("#weather");
    var url = "https://api.forecast.io/forecast/";
    var apiKey = "663b0f71d29c4db14fc6253be12b13b9";
    
    function success(position) {
        var latitude = position.coords.latitude; // Geolocation Latitude
        var longitude = position.coords.longitude; // Geolocation Longitude
        
        $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?callback=?", function(data) {
            weather.text("Based on your current location, it is " + data.currently.temperature + " degrees F right now.");
        });
    }
    
    function error() {alert("Unable to retrieve location for weather!");}
    
    navigator.geolocation.getCurrentPosition(success, error);
    
    weather.text("fetching weather...");
}


function loadNews() {
    var news = $("#news");
    var url = "https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=";
    var apiKey = "aa0d3ceb7b66448ca073a77f882d3be6";
    
    $.getJSON(url + apiKey, function(data) {
        var titles = data.articles.map(function(articles) { // Map to get news URLs/titles
            return "<a href='" + articles.url + "'>" + articles.title + "</a>";
        });
        
        news.html(titles.join("<br><br>")); // Join titles with two line breaks
    });
    
    news.text("fetching news..."); // Loading text for news
}

loadDate();
loadWeather();
loadNews();