function EventsController(model) {
  this.model = model

  this.apiKey = GOD.constants.googleApiKey
  this.baseURI = "https://www.googleapis.com/calendar/v3"
  this.calendarID = GOD.constants.googleCalenderId
}

EventsController.prototype = {
  init: function() {
    this.getEvents()
    this.setListeners()
  },

  setListeners: function() {

  },

  getEvents: function() {
    var eventListMethod = "/calendars/"+this.calendarID+"/events"

    var ajaxRequest = $.ajax({
      url: encodeURI(this.baseURI+eventListMethod + '?key=' + this.apiKey),
      type: 'GET'
    })
    ajaxRequest.done(this.createCalEvents.bind(this))
  },

  createCalEvents: function(response) {
    var googleEventObjects = response.items

    for(var i = 0; i < googleEventObjects.length; i++){
      var googleEvent = googleEventObjects[i]
      var name = googleEvent.summary
      var startDate = googleEvent.start.dateTime
      var endDate = googleEvent.end.dateTime
      var location = googleEvent.location
      var googleEventId = googleEvent.id

      var calEvent = new CalEvent(name, startDate, endDate, location, googleEventId)
      this.model.addEvent(calEvent)
    }
  }

}
