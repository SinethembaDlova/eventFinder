define(
    ['ojs/ojcore', 'knockout', 'jquery'],
    function(oj, ko, $, ace, monokai) {
      'use strict';

      function eventViewModel(context) {
        var self = this;
        var url = './js/components/event-component/mock-data/event-data.js';

        self.allEvents = ko.observableArray([]);

        $.getJSON(url).done(function(data) {
            // console.log(data);
            data.forEach(function(events){
              self.allEvents.push(events);
            });
          });
        };


        return eventViewModel;
      });
