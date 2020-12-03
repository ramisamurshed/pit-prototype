function select_event() {

	var current_id = 1

	$.each(upcoming_events, function(index, data) {
		if(data["id"] == current_id) {
			upcoming_event = data
		}
	})

	var back_button = $("<button type='button'>Back to Events</button>")
	back_button.addClass("btn")
	back_button.addClass("btn-secondary")
	$('#back-to-events').append(back_button)

	back_button.click(function(){
		window.location.href = "/events"
	})

	$('#event-name').append(upcoming_event["name"])

	var join_button = $("<button type='button'>Do you want help?</button>")
	join_button.addClass("btn")
	join_button.addClass("btn-primary")
	$('#join').append(join_button)

	var cancel_button = $("<button type='button'>I don't need help</button>")
	cancel_button.addClass("btn")
	cancel_button.addClass("btn-danger")
	$('#join').append(cancel_button)
	cancel_button.hide()

	$('#event-info').append(upcoming_event["date"])
	$('#event-info').append("<br> <br>")
	$('#event-info').append(upcoming_event["location"])
	$('#event-info').append("<br> <br>")
	$('#event-info').append(upcoming_event["description"])
	$('#event-info').append("<br> <br>")

	$('#help-available').append("Filling out forms in English")
	$('#help-available').append("<br>")
	$('#help-available').append("Legal Advice")
	$('#help-available').append("<br> <br>")

	$.each(people, function(index, data) {
		if(data["id"] == current_id) {
			person = data
			current_id++
		}

		$('#people-attending').append(person["name"], ": ", "Speaks ", person["language"])

		var tandem_button = $("<button type='button'>Choose as Tandem</button>")
		tandem_button.addClass("btn")
		tandem_button.addClass("btn-primary")
		$('#people-attending').append(tandem_button)
		tandem_button.hide()

		join_button.click(function(){
			tandem_button.show()
			join_button.hide()
			cancel_button.show()
		})

		cancel_button.click(function(){
			tandem_button.hide()
			cancel_button.hide()
			join_button.show()
		})

		$('#people-attending').append("<br>")
	})

	// $('#upcoming-events').append("<br> <br>")




}



$(document).ready(function(){
	select_event()
})
