define(
    ['ojs/ojcore', 'knockout', 'jquery'], function (oj, ko, $, ace, monokai) {
    'use strict';

    function WeatherViewModel(context) {
        var self = this;
        var capeId;
        self.iconUrl = ko.observable()

        $.getJSON("js/components/weather-component/cape.json", function(results) {
          capeId = results[0].woeid;
          // console.log(capeId);
        });
        var weatherState;
        $.getJSON("js/components/weather-component/CapeWeatherNext5days.json", function(results) {
          // var weatherState = results.consolidated_weather[0].weather_state_abbr;
          var weatherState = "https://www.metaweather.com/static/img/weather/hr.svg";
          var url = "url('" + weatherState + "')";
          self.iconUrl(url);
        })
    };

    return WeatherViewModel;
});
