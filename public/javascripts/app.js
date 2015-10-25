$(document).ready(function() {

  var eventsModel = new EventsModel()
  var eventsController = new EventsController(eventsModel)

  eventsController.init()

})
