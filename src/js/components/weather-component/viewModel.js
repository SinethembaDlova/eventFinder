define(
    ['ojs/ojcore', 'knockout', 'jquery'], function (oj, ko, $, ace, monokai) {
    'use strict';

    function WeatherViewModel(context) {
        var self = this;
        var capeId;
        self.iconUrl = ko.observable()

        self.currentCity = ko.observable(context.element.city);
        self.currentCity = ko.pureComputed(function(){
            console.log('this value changed');
        })
        // $.getJSON("js/components/weather-component/cape.json", function(results) {
        //   capeId = results[0].woeid;
        //   // console.log(capeId);
        // });

        // console.log(context.element.city);

        var weatherState;
        $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Cape%20Town,ZA&units=metric&appid=ac3a98f79cf5e6236bf5c166a4aab756", function(results) {
          // var weatherState = results.consolidated_weather[2].weather_state_abbr;
          self.tempMeasure(results.main.temp);
          var icon = results.weather[0].icon+".png";
          var weatherState = "http://openweathermap.org/img/w/"+icon;
          var url = "url('" + weatherState + "')";
          self.iconUrl(url);
          console.log(results.weather[0].icon);
        })
        //
        // self.city = ko.Computed(function(self.currentCity) {
        //     console.log(self.currentCity);
        // });
        //
        // function eventHandler(e) {
        //     self.currentCity(e);
        // }
    };

    return WeatherViewModel;
});
