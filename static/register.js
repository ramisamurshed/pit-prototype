function log_in() {
	var login_button = $('<button type="button" id="loginbtn">Back to Home</button>')

	login_button.click(function(){
		window.location.href = "/"
	})

	$("#log-in").append(login_button)
}

$(document).ready(function(){
	log_in()
})
