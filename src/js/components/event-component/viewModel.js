define(
    ['ojs/ojcore', 'knockout', 'jquery'],
    function(oj, ko, $, ace, monokai) {
      'use strict';

      function eventViewModel(context) {
        var self = this;
        var url = './js/components/event-component/mock-data/event-data.js';

        self.allEvents = ko.observableArray([]);

        self.eventDetails = function(currentEvent) {
            console.log(currentEvent)
        }



        $.getJSON(url).done(function(data) {
            // console.log(data);

            data.forEach(function(events){
              // console.log(events);
              self.allEvents.push(events);
            });

          });
        };


        return eventViewModel;
      });
