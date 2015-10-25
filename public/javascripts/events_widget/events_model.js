function EventsModel() {
  this.events = []
}

EventsModel.prototype = {
  addEvent: function(calEventObj) {
    this.events.push(calEventObj)
  },

  eventsDates: function() {
    var eventDates = []
    for(var i=0; i<this.events.length; i++) {
      eventDates.push(this.events[i].eventDates())
    }

    var flattened = eventDates.reduce(function(a, b) {
      return a.concat(b);
    });

    return flattened
  }
}
