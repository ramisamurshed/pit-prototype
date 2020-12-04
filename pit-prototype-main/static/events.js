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
		
		var card = $("<div card_id = '"+upcoming_event["id"]+"'>")
		card.addClass("card")

		var card_body = $("<div>")
		card_body.addClass("card-body")
		var card_title = $("<h5 class='card-title'>")
		card_title.append(upcoming_event["altname"])
		var card_text = $("<p class='card-subtitle'> </p>")
		card_text.append(upcoming_event["date"])
		card_text.append(upcoming_event["time"])
		card_text.append("<br>")
		card_text.append(upcoming_event["location"])
		card_text.append("<br><br>")

		//help offered content
		card_text.append("<b>Help</b> offered at the event: ")
		help_string = upcoming_event["help_offered"].toString()
		card_text.append(help_string)
		card_text.append("<br><br>")

		//languages spoken content
		card_text.append("<b>Languages </b> spoken: ")
		lang_string = upcoming_event["languages_spoken"].toString()
		card_text.append(lang_string)
		card_text.append("<br>")

		//get help and offer help buttons
		card_text.append("<br>")
		var card_btn_get_help = $("<button type='button' id='"+upcoming_event["id"]+"'> GET HELP </button>")
		card_btn_get_help.addClass("btn button")
		var card_btn_offer_help = $("<button type='button' id='"+upcoming_event["id"]+"'> OFFER HELP </button>")
		card_btn_offer_help.addClass("btn button")

		//appending everything to the UI
		card_body.append(card_title)
		card_body.append(card_text)
		card_body.append(card_btn_get_help)
		card_body.append(card_btn_offer_help)
		card.append(card_body)
		$("#upcoming-events").append(card)

		//get_help_interaction
		card_btn_get_help.click(function(){
			get_help_interaction(card_btn_get_help, upcoming_events)

	 	})

		//offer_help_interaction
		card_btn_offer_help.click(function(){
			// console.log("button clicked new!")
			window.location.href = "/event_selected"
	  	})
	})

}

function get_help_interaction(card_btn_get_help, upcoming_events){
	$("#expanded-stuff").empty()

	//Adding a close button
	var close_button = $("<button type='button' class='close' aria-label='Close'><span aria-hidden='true'>&times;</span></button>")
	$("#expanded-stuff").append(close_button)
	close_button.click(function(){
		$("#expanded-stuff").empty()
	})

	//get help content starts
	$("#expanded-stuff").append("<br><h5>What do you need help with? </h5>")

	//want to see what the id of the button is
	target_id = card_btn_get_help.attr('id')

	$.each(upcoming_events, function(index, data) {
	if(data["id"] == target_id) {
		upcoming_event = data				

		//add the two buttons for get help
		help = upcoming_event['help_offered'][0]
		var help_one = $("<button type='button'> "+help+" </button>")
		help_one.addClass("btn button-secondary")
		$("#expanded-stuff").append(help_one)

		//clicking on the help1 button:
		help_one.click(function(){
			select_help(upcoming_event)
		})

		help2 = upcoming_event['help_offered'][1]
		var help_two = $("<button type='button'> "+help2+" </button>")
		help_two.addClass("btn button-secondary")
		$("#expanded-stuff").append(help_two)

		//clicking on the help_two button:
		help_two.click(function(){
			select_help2(upcoming_event)
		})

		}	
	})
}

function select_help(upcoming_event){
	$("#expanded-stuff").append("<hr><h5>Who would you like to get help from?</h5>")
	people_list = upcoming_event['help_people'][help]
	$.each(people_list, function(index, person){
		console.log(person)
		person_button = $("<button type='button' class='btn button-secondary'> "+person['name']+" </button>")
		$("#expanded-stuff").append(person_button)
		person_button.click(function(){
			select_person(person)
		})
	})
}

function select_help2(upcoming_event){
	$("#expanded-stuff").append("<hr><h5>Who would you like to get help from?</h5>")
	people_list = upcoming_event['help_people'][help2]
	$.each(people_list, function(index, person){
		// console.log(person)
		person_button = $("<button type='button' class='btn button-secondary'> "+person['name']+" </button>")
		$("#expanded-stuff").append(person_button)
		person_button.click(function(){
			select_person(person)
		})
	})
}

function select_person(person){
	$("#expanded-stuff").append("<hr><h5> Great! "+person["name"]+" has been notified. :)")
}

function log_in() {
	var login_button = $('<button type="button" class = "button" id="loginbtn">SUBMIT A PROPOSAL</button>')

	login_button.click(function(){
		window.location.href = "/submit_proposal"
	})

	$("#log-in").append(login_button)
}

$(document).ready(function(){
	create_events()
	log_in()
})
