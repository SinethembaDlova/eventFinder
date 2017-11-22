define(
    ['ojs/ojcore', 'knockout', 'jquery'],
    function(oj, ko, $, ace, monokai) {
      'use strict';

      function eventViewModel(context) {
        var self = this;
        var url = './js/components/event-component/mock-data/event-data.js';

        self.allEvents = ko.observableArray([]);

        self.allTypes = ko.observableArray(['All']);

        self.SearchType = ko.observable("");

        self.chosenType = ko.observableArray(['All']);

        self.eventDetails = function(currentEvent) {
            console.log(currentEvent)
        }


        $.getJSON(url).done(function(data) {
            var typeMap = [];
            data.forEach(function(events){
              self.allEvents.push(events);
              if (typeMap[events.eventDetails.eventType] === undefined) {
                typeMap[events.eventDetails.eventType] = 0;
                self.allTypes.push(events.eventDetails.eventType);
              };
            });
          });
        };


        return eventViewModel;
      });
