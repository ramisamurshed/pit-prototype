function create_events() {

	var current_id = 1

	$.each(upcoming_events, function(index, data) {
		if(data["id"] == current_id) {
			upcoming_event = data
		}
	})
	$('#event_name').append(upcoming_event["name"])
	// var join_button = $("<button type='button'>JOIN</button>")
	// join_button.addClass("btn btn-primary")
	// $('#event_name').append(join_button)

	$('#upcoming-events').append(join_button)
	$('#upcoming-events').append("<br>")
	$('#upcoming-events').append(upcoming_event["date"])
	$('#upcoming-events').append("<br>")
	$('#upcoming-events').append(upcoming_event["time"])
	$('#upcoming-events').append("<br>")
	$('#upcoming-events').append(upcoming_event["location"])
	$('#upcoming-events').append("<br> <br>")

	$('#upcoming-events').append("Help Available <br> Filling forms in English <br> Legal Advice")
	$('#upcoming-events').append("<br> <br>")

	$('#upcoming-events').append("People attending")
	$('#upcoming-events').append("<br>")



	$.each(people, function(index, data) {
		if(data["id"] == current_id) {
			person = data
			current_id++
		}

		$('#upcoming-events').append("Speaks ", person["language"])
		$('#upcoming-events').append("<br>")
	})

	// $('#upcoming-events').append("<br> <br>")




}



$(document).ready(function(){
	create_events()
})