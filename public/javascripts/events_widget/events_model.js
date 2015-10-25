function EventsModel() {
  this.events = []
  this.classifiedEvents = {
    nextEvent: null,
    futureEvents: [],
    pastEvents: []
  }
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
  },

  classifyEvents: function() {
    this.sortEventsByDate()
    this.setEventsCurrentTimeContext()

    for (var i=0, eventsLength = this.events.length; i < eventsLength; i++) {
      var currentEvent = this.events[i]

      if (currentEvent.timeContext === 'past') {
        this.classifiedEvents.pastEvents.unshift(currentEvent)
      } else if (currentEvent.timeContext === 'future') {
        this.classifiedEvents.futureEvents.push(currentEvent)
      } else if (currentEvent.timeContext === 'next') {
        this.classifiedEvents.nextEvent = currentEvent
      }
    }
  },

  sortEventsByDate: function() {
    this.events.sort(function(eventA, eventB) {
      if(eventA.startDateTime < eventB.startDateTime) {
        return -1
      }
      if (eventA.startDateTime > eventB.startDateTime) {
        return 1
      }
      return 0
    })
  },

  setEventsCurrentTimeContext: function() {
    var currentTime = Date.now(),
        skipNextEventIdentification = false,
        closestFutureEventDifference = null,
        nextEvent = null


    for (var i=0, eventsLength = this.events.length; i < eventsLength; i++) {
      var currentEvent = this.events[i]
      var eventTimeDifferenceFromNow = currentTime - currentEvent.startDateTime

      if (eventTimeDifferenceFromNow > 0) {
        currentEvent.timeContext = 'past'
      } else if (eventTimeDifferenceFromNow < 0) {
        currentEvent.timeContext = 'future'

        if (!closestFutureEventDifference && !skipNextEventIdentification &&
          (!closestFutureEventDifference || eventTimeDifferenceFromNow > closestFutureEventDifference)) {
          closestFutureEventDifference = eventTimeDifferenceFromNow
          nextEvent = currentEvent
        }

      } else {
        skipNextEventIdentification = true
        nextEvent = currentEvent
      }

    }

    if(nextEvent) nextEvent.timeContext = 'next'

  }
}
