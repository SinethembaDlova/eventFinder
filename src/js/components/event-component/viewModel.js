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
            for (var i = 0; i < data.length; i++) {
              self.allEvents.push(data[i]);

              if (typeMap[data[i].eventDetails.eventType] === undefined) {
                typeMap[data[i].eventDetails.eventType] = 0;
                self.allTypes.push(data[i].eventDetails.eventType);
              };
            }
          });
        };


        return eventViewModel;
      });
