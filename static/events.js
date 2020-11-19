function create_events() {

	var current_id = 1

	for (var i = 0; i < 4; i++) {
		var upcoming_event

		var card = $("<div>")
		card.addClass("card")

		var card_body = $("<div>")
		card_body.addClass("card-body")

		$.each(upcoming_events, function(index, data) {
			if(data["id"] == current_id) {
				upcoming_event = data
				current_id++
			}
		})

		var card_title = $("<h4 class='card-title'>")
		card_title.append(upcoming_event["name"])

		var card_text = $("<p class='card-text'>")
		card_text.append("<p>")
		card_text.append(upcoming_event["date"])
		card_text.append("<p>")
		card_text.append(upcoming_event["time"])
		card_text.append("<p>")
		card_text.append(upcoming_event["location"])

		var card_btn = $("<button type='button'>Expand</button>")
		card_btn.addClass("btn btn-primary")

		card_body.append(card_title)
		card_body.append(card_text)
		card_body.append(card_btn)

		card.append(card_body)

		$("#upcoming-events").append(card)
	}
}

$(document).ready(function(){
	create_events()
})