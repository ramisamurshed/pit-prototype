function create_events() {

	var current_id = 1

		//back to home button's clicks and interaction
		var back_button = $("<button type='button'>Back to Home</button>")
		back_button.addClass("btn btn-secondary")
		$('#back-to-home').append(back_button)
		back_button.click(function(){
			window.location.href = "/"
		})

		//creating the event cards
		$.each(upcoming_events, function(index, data) {
			if(data["id"] == current_id) {
				upcoming_event = data
				current_id++
			}
		
		var card = $("<div>")
		card.addClass("card")

		var card_body = $("<div>")
		card_body.addClass("card-body")

		var card_title = $("<h5 class='card-title'>")
		card_title.append(upcoming_event["altname"])

		var card_text = $("<p class='card-subtitle'> </p>")
		// card_text.append("<p>")
		card_text.append(upcoming_event["date"])
		// card_text.append("</p>")
		card_text.append(upcoming_event["time"])
		card_text.append("<br>")
		card_text.append(upcoming_event["location"])
		card_text.append("<br><br>")


		card_text.append("<b>Help</b> offered at the event: ")
		help_string = upcoming_event["help_offered"].toString()
		card_text.append(help_string)
		card_text.append("<br><br>")

		card_text.append("<b>Languages </b> spoken: ")
		lang_string = upcoming_event["languages_spoken"].toString()
		card_text.append(lang_string)
		card_text.append("<br>")

		card_text.append("<br>")
		var card_btn_get_help = $("<button type='button'> GET HELP </button>")
		card_btn_get_help.addClass("btn button")
		////HI! RAMISA, I tried doing COLLAPSE, but it didnt work and I dont know why
		card_btn_get_help.addClass("data-toggle='collapse' data-target='#CollapseID' aria-expanded='false' aria-controls='CollapseID'")		

		var card_btn_offer_help = $("<button type='button'> OFFER HELP </button>")
		card_btn_offer_help.addClass("btn button")

		card_btn_offer_help.click(function(){
			// console.log("button clicked new!")
			window.location.href = "/event_selected"
	  	})

		card_body.append(card_title)
		card_body.append(card_text)
		card_body.append(card_btn_get_help)
		card_body.append(card_btn_offer_help)

		card.append(card_body)

		$("#upcoming-events").append(card)
		// card_btn_get_help.click(function(){
		// 	console.log("button clicked I JUST CLICKED THIS!!")
		// 	$("#expanded-stuff").append("Thank you for joining. What do you need help with?")
		// 	// window.location.href = "/event_selected"
	 //  	})

		//HI! RAMISA, I tried doing COLLAPSE, but it didnt work and I dont know whytrying out collapse:
		card_btn_get_help.click(function(){
			// $("#expanded-stuff").append("<div class='alert alert-primary role='alert'><br>What do you need help with?")
			$("#expanded-stuff").append("What do you need help with? <br>")
			card_btn_get_help.addClass("disabled")
			card_btn_get_help.prop('disabled', true);

			help = upcoming_event['help_offered'][0]
			var help_one = $("<button type='button'> "+help+" </button>")
			help_one.addClass("btn button-secondary")
			$("#expanded-stuff").append(help_one)

			help2 = upcoming_event['help_offered'][1]
			var help_one = $("<button type='button'> "+help2+" </button>")
			help_one.addClass("btn button-secondary")
			$("#expanded-stuff").append(help_one)

	 	})
	})

}

function log_in() {
	var login_button = $('<button type="button" class = "button" id="loginbtn">SUBMIT A PROPOSAL</button>')

	login_button.click(function(){
		window.location.href = "/"
	})

	$("#log-in").append(login_button)
}

$(document).ready(function(){
	create_events()
	log_in()
})
