define(
    ['ojs/ojcore', 'knockout', 'jquery'],
    function(oj, ko, $, ace, monokai) {
      'use strict';

      function eventViewModel(context) {
        var self = this;
        var url = './js/components/event-component/mock-data/event-data.js';

        // event data
        self.allEvents = ko.observableArray([]);
        self.masterData = ko.observableArray();

        self.eventDetails = function(currentEvent) {
          console.log(currentEvent)
        }

        $.getJSON(url).done(function(data) {
          self.masterData.push(data);

          var typeMap = [];
          for (var i = 0; i < data.length; i++) {
            self.allEvents.push(data[i]);

            if (typeMap[data[i].eventDetails.eventType] === undefined) {
              typeMap[data[i].eventDetails.eventType] = 0;
              self.allTypes.push(data[i].eventDetails.eventType);
            };
          }
        });

        // filter by type
        self.allTypes = ko.observableArray(['All']);
        self.chosenType = ko.observableArray(['All']);
        self.filter = ko.observableArray();

        self.onclick = function(typeVal) {
          let data = self.allEvents();

          for (var i = 0;  i < data.length; i++) {
            if (data[i].eventDetails.eventType === typeVal) {
              self.filter.push(data[i]);
            }
            // console.log(data[i].eventDetails)
          }

          if (self.filter().length === 0) {
            // self.allEvents([])
            // self.allEvents.push(self.masterData());
          } else {
            let filteredData = self.filter()
            console.log(self.filter());
            self.allEvents([])

            for (var x =0; x < filteredData.length; x++) {
              self.allEvents.push(filteredData[x]);
            }
          }

        }


        };


        return eventViewModel;
      });
