function createLogin() {

	let $login = $('<div>', {'class': 'login'});

	$login.append("Username: ");
	let $new_user_field = $("<input>", {type:'text', id:'new_user'});
	$login.append($new_user_field);
	$login.append("<br>");

	$login.append("Password: ");
	let $new_password_field = $("<input>", {type:'password', id:'new_password'});
	$login.append($new_password_field);
	$login.append("<br>");

	$login.append("Confirm Password: ");
	let $confirm_field = $("<input>", {type:'password', id:'confirm'});
	$login.append($confirm_field);
	$login.append("<br>");

	let $create_button = $("<button>", {'class':'button', type:'submit', id:'create_btn', text:'Create User'});
	$login.append($create_button);
	$login.append("<br>");
	$login.append("<br>");

	$login.append("Username: ");
	let $user_field = $("<input>", {type:'text', id:'user'});
	$login.append($user_field);
	$login.append("<br>");

	$login.append("Password: ");
	let $password_field = $("<input>", {type:'password', id:'password'});
	$login.append($password_field);
	$login.append("<br>");

	let $login_button = $("<button>", {'class':'button', type:'submit', id:'login', text:'Login'});
	$login_button.on("click", login);
	$login.append($login_button);

	$(document.body).html($login);
}

function getNumberOfDays(date) {
	return new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
}

function createCalendar(date) {
	$( ".calendar ").remove();
	let $calendar = $("<div>", {'class':'calendar'});
	$calendar.append($("<h3>", {text:"These are your events for the month:"}))
	let days_in_month = getNumberOfDays(date);
	$(document.body).append($calendar);
	for (day = 1; day <= days_in_month; day++) {
		date.setDate(day);
		let date_string = date.toISOString().substring(0,10);
		let $day_div = $("<div>", {id:date_string, 'class':'day', text:date_string});
		$calendar.append($day_div);
		fetchEvents(date_string);
	}
}

function getDayName(date) {
	switch (date.getDay()) {
		case 0:
			return "Sunday";
		case 1:
			return "Monday";
		case 2:
			return "Tuesday";
		case 3:
			return "Wednesday";
		case 4:
			return "Thursday";
		case 5:
			return "Friday";
		case 6:
			return "Saturday";
	}
	return "";
}

function fetchEvents(date_string) {
	const php_path = "get_events.php";
	fetch(php_path, {method: "POST", body: date_string})
		.then(response => response.json())
		.then(function(events) {
			let $day = $( "#"+date_string );			
			$day.empty();
			$day.text(date_string);
			for (i in events) {
				let event_text = events[i].title + ": " + events[i].time;
				let $event = $("<h3>", {'class':'event', text:event_text});
				$day.append($event);
			}
		})
		.catch(function(error) {
			console.log(error);
		});
}

function createButtons() {

	$create_event = $("<div>");

	$create_event.append("Title: ");
	let $title_field = $("<input>", {type:"text", id:"title"});
	$create_event.append($title_field);
	$create_event.append("<br>");

	$create_event.append("Date: ");
	let $date_field = $("<input>", {type:"date", id:"date"});
	$create_event.append($date_field);
	$create_event.append("<br>");

	$create_event.append("Time: ");
	let $time_field = $("<input>", {type:"time", id:"time"});
	$create_event.append($time_field);
	$create_event.append("<br>");

	let $event_btn = $("<button>", {class:"button", type:"submit", id:"event_btn", text:"Create Event"});
	function notify() {
		alert( "clicked");
	}

	// $event_btn.on("click",createUser);
	$event_btn.on("click",notify);

	$create_event.append($event_btn);

	$(document.body).append($create_event);

	let $logout = $("<div>");
	let $logout_btn = $("<a>", {class:"button", text:"logout", href:"abort.php"});
	$logout.append($logout_btn);
	$(document.body).append($logout);

}
