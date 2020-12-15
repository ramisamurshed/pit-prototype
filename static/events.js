function create_events() {
	
	$("#upcoming-events").empty()
	var current_id = 1

		//creating the event cards
		$.each(upcoming_events, function(index, data) {
			if(data["id"] == current_id) {
				upcoming_event = data
				current_id++
			}
		
		var card = $("<div card_id = '"+upcoming_event["id"]+"'>")
		card.addClass("card")

		//var card_image = $("<img>")
		//card_image.addClass("card-img-top")
		//card_image.attr('src', upcoming_event["photo"])
		//card_image.attr('alt', "Photo for " + upcoming_event["name"])

		var card_body = $("<div>")
		card_body.addClass("card-body")
		var card_title = $("<h4 class='card-title'>")
		card_title.append(upcoming_event["altname"])
		var card_text = $("<p class='card-subtitle'> </p>")
		card_text.append(upcoming_event["date"])
		card_text.append(upcoming_event["time"])
		card_text.append("<br>")
		card_text.append("<div>")
		card_text.append("<i class='fas fa-map-marker-alt fa-lg' style='color:#422a80;'></i>", " <button class='loc'>" + upcoming_event["location"] + "</button>")
		card_text.append("</div>")
		card_text.append("<br><br>")

		//help offered content
		card_text.append("<b>Help</b> offered by buddies attending this event: ")
		$.each(upcoming_event["help_offered"], function(index, helps) {
			card_text.append("<button class='info'>" + helps + "</button>")
		})
		card_text.append("<br><br>")

		//languages spoken content
		card_text.append("<b>Languages</b> spoken by buddies attending this event:<br>")
		$.each(upcoming_event["languages_spoken"], function(index, language) {
			card_text.append("<button class='info'>" + language + "</button>")
		})
		//lang_string = upcoming_event["languages_spoken"].toString()
		//card_text.append(lang_string)
		card_text.append("<br>")

		//get help and offer help buttons
		card_text.append("<br>")
		var card_btn_get_help = $("<button type='button' class='buddy-btn' id='"+upcoming_event["id"]+"'> FIND A BUDDY </button>")
		card_btn_get_help.addClass("button")
		var card_btn_offer_help = $("<button type='button' class='buddy-btn' id='"+upcoming_event["id"]+"'> BE A BUDDY </button>")
		card_btn_offer_help.addClass("button")

		//appending everything to the UI
		//card_body.append(card_image)
		card_body.append(card_title)
		card_body.append(card_text)
		card_body.append(card_btn_get_help)
		card_body.append(card_btn_offer_help)
		card.append(card_body)
		$("#upcoming-events").append(card)

		//get_help_interaction
		card_btn_get_help.click(function(){
			get_help_interaction(card_btn_get_help, upcoming_events, card)

	 	})

		//offer_help_interaction
		card_btn_offer_help.click(function(){
			// window.location.href = "/event_selected"
			offer_help_interaction(card_btn_offer_help, upcoming_events, card)

	  	})
	})

}

//Functions needed for offer help!
function offer_help_interaction(card_btn_offer_help, upcoming_events, card){

	//getting the data for these interactions
	target_id = card_btn_offer_help.attr('id')
	$.each(upcoming_events, function(index, data) {
		if(data["id"] == target_id) {
			upcoming_event = data	
		}
	})
	help = upcoming_event["offer_help"][0]
	// console.log(upcoming_event["offer_help"][0])

	//dealing with the interactions within the card
	card.empty()
	var card_body = $("<div>")
	card_body.addClass("card-body")
	var card_title = $("<h4 class='card-title'>")
	card_title.append(upcoming_event["altname"])
	var card_text = $("<p class='card-subtitle center'> </p>")
	card_text.append("<br> Thanks for joining! <br><br> Based on your profile, we see that you can be a buddy for")
	card_text.append("<button class='info'>" + help + "</button> <br><br>")
	card_text.append("Would you like to be a buddy for this? <br><br><br>")

	//Creating Yes and No buttons
	var card_btn_yes = $("<button type='button' class='button buddy-btn'> YES </button>")
	var card_btn_no = $("<button type='button' class='button buddy-btn'> NO </button>")

	card_body.append(card_title)
	card_body.append(card_text)
	card_body.append(card_btn_yes)
	card_body.append(card_btn_no)
	card.append(card_body)

	//on clicking YES
	card_btn_yes.click(function(){
		offer_help_time(card, help)
	})

	//on clicking NO
	card_btn_no.click(function(){
		create_events()
	})
}

function offer_help_time(card, help){

	card.empty()
	var card_body = $("<div>")
	card_body.addClass("card-body")
	var card_title = $("<h4 class='card-title'>")
	card_title.append(upcoming_event["altname"])
	var card_text = $("<p class='card-subtitle center'> </p>")
	card_text.append("<br> <b>When</b> are you able to be a buddy for")
	card_text.append("<button class='info'>" + help + "</button>? <br><br><br>")

	//Creating before and after buttons
	var card_btn_before = $("<button type='button' class='button buddy-btn'> BEFORE EVENT </button>")
	var card_btn_after = $("<button type='button' class='button buddy-btn'> AFTER EVENT </button>")

	card_body.append(card_title)
	card_body.append(card_text)
	card_body.append(card_btn_before)
	card_body.append(card_btn_after)
	card.append(card_body)

	card_btn_before.click(function(){
		thanksforhelp(card)
	})

	card_btn_after.click(function(){
		thanksforhelp(card)
	})
}
function thanksforhelp(card){

	card.empty()
	var card_body = $("<div>")
	card_body.addClass("card-body")
	var card_title = $("<h4 class='card-title'>")
	card_title.append(upcoming_event["altname"])
	var card_text = $("<p class='card-subtitle center'> </p>")
	card_text.append("<br> <b>Thank you</b> for being a buddy to the community!<br> <br> <b>If someone needs help, we will contact you soon.</b><br><br>")

	//Back to events button
	var back_event = $("<button type='button' class = 'btn button event-btn'> Back to Event </button>")

	card_body.append(card_title)
	card_body.append(card_text)
	card_body.append(back_event)
	card.append(card_body)

	back_event.click(function(){
		create_events()
	})
}

//Functions needed for get help!
function get_help_interaction(card_btn_get_help, upcoming_events, card){

	///want to see what the id of the button is
	target_id = card_btn_get_help.attr('id')
	$.each(upcoming_events, function(index, data) {
		if(data["id"] == target_id) {
			upcoming_event = data	
		}
	})

	//dealing with the interactions within the card
	card.empty()
	var card_body = $("<div>")
	card_body.addClass("card-body")
	var card_title = $("<h4 class='card-title'>")
	card_title.append(upcoming_event["altname"])
	var card_text = $("<p class='card-subtitle center'> </p>")
	card_text.append("<br> Thanks for joining! <br> What do <b> you want to get a buddy for? </b>")
	card_text.append("<br><br><br>")

	//creating buttons for topics one would need help in
	card_text.append("<br>")
	var card_btn_help_one = $("<button type='button' class= 'button buddy-btn'>"+ upcoming_event["help_offered"][0]+" </button>")
	var card_btn_help_two = $("<button type='button' class= 'button buddy-btn'>"+upcoming_event["help_offered"][1]+"</button>")

	card_body.append(card_title)
	card_body.append(card_text)
	card_body.append(card_btn_help_one)
	card_body.append(card_btn_help_two)
	card.append(card_body)

	card_btn_help_one.click(function(){
		select_help(upcoming_event,card)
	})
	card_btn_help_two.click(function(){
		select_help2(upcoming_event,card)
	})
}

function select_help(upcoming_event, card){
	//updating help, and getting data from people_list
	help = upcoming_event['help_offered'][0]
	people_list = upcoming_event['help_people'][help]
	person_button_one = $("<button type='button' class='button helper-btn'> "+people_list[0]['name']+" "+people_list[0]['available']+" </button>")
	person_button_two = $("<button type='button' class='button helper-btn'> "+people_list[1]['name']+" "+people_list[1]['available']+" </button>")

	//dealing with the interactions within the card
	card.empty()
	var card_body = $("<div>")
	card_body.addClass("card-body")
	var card_title = $("<h4 class='card-title'>")
	card_title.append(upcoming_event["altname"])
	var card_text = $("<p class='card-subtitle center'> </p>")
	card_text.append("<br>These are the buddies attending the event who can help you with<br>")
	card_text.append("<button class='info'>" + help + "</button>")
	card_text.append("<br><br><br>")

	//adding all the elements to the UI
	card_body.append(card_title)
	card_body.append(card_text)
	card_body.append(person_button_one)
	card_body.append(person_button_two)
	card.append(card_body)	

	person_button_one.click(function(){
		select_person(people_list[0], card)
	})
	person_button_two.click(function(){
		select_person(people_list[1], card)
	})

}

function select_help2(upcoming_event, card){
	//updating help, and getting data from people_list
	help = upcoming_event['help_offered'][1]
	people_list = upcoming_event['help_people'][help]
	person_button_one = $("<button type='button' class='btn button'> "+people_list[0]['name']+" "+people_list[0]['available']+" </button>")
	person_button_two = $("<button type='button' class='btn button'> "+people_list[1]['name']+" "+people_list[1]['available']+" </button>")

	//dealing with the interactions within the card
	card.empty()
	var card_body = $("<div>")
	card_body.addClass("card-body")
	var card_title = $("<h4 class='card-title'>")
	card_title.append(upcoming_event["altname"])
	var card_text = $("<p class='card-subtitle center'> </p>")
	card_text.append("<br> These are the people offering <b>help with "+ help+"<b></b>")
	card_text.append("<br><br><br>")

	//adding all the elements to the UI
	card_body.append(card_title)
	card_body.append(card_text)
	card_body.append(person_button_one)
	card_body.append(person_button_two)
	card.append(card_body)

	person_button_one.click(function(){
		select_person(people_list[0], card)
	})
	person_button_two.click(function(){
		select_person(people_list[1], card)
	})
	
}

function select_person(person_dict, card){
	//getting data
	person_name = person_dict["name"]
	back_event = $("<button type='button' class='button event-btn'> Back to Event </button>")

	//dealing with the interactions within the card
	card.empty()
	var card_body = $("<div>")
	card_body.addClass("card-body")
	var card_title = $("<h4 class='card-title'>")
	card_title.append(upcoming_event["altname"])
	var card_text = $("<p class='card-subtitle center'> </p>")
	card_text.append("<br><br> Great job! <b>Your buddy "+person_name+" has been notified</b> and will be in contact with you soon!")
	card_text.append("<br><br><br>")

	//adding all the elements to the UI
	card_body.append(card_title)
	card_body.append(card_text)
	card_body.append(back_event)
	card.append(card_body)

	back_event.click(function(){
		create_events()
	})
}


//Creating the back and proposal button
function back_button(){
	//back to home button's clicks and interaction
		var back_button = $("<button type='button'>Back to Home</button>")
		back_button.addClass("back_home")
		$('#back-to-home').append(back_button)
			back_button.click(function(){
			window.location.href = "/"
		})
}

function log_in() {
	var login_button = $('<button type="button" class="button" id="loginbtn">SUBMIT A PROPOSAL</button>')

	login_button.click(function(){
		window.location.href = "/submit_proposal"
	})

	$("#log-in").append(login_button)
}

$(document).ready(function(){
	back_button()
	create_events()
	log_in()
})
