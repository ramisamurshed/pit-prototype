function attend_event() {
	var event_button = $('<button type="button" id="eventbtn">Find an Event</button>')

	event_button.click(function(){
		window.location.href = "/events"
	})

	$("#attend-event").append(event_button)
}

function log_in() {
	var login_button = $('<button type="button" id="loginbtn">Log In</button>')

	login_button.click(function(){
		window.location.href = "/login"
	})

	$("#log-in").append(login_button)
}

$(document).ready(function(){
	attend_event()
	log_in()
})
