function attend_event() {
	var event_button = $('<button type="button">Attend an Event</button>')
	event_button.addClass("btn")
	event_button.addClass("btn-primary")

	event_button.click(function(){
		window.location.href = "/events"
	})

	$("#attend-event").append(event_button)
}

$(document).ready(function(){
	attend_event()
})
