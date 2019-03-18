function createLogin() {
	let $login = $('<div>', {'class': 'login'});

	$login.append("Username: ");
	let $new_user_field = $("<input>", {type: 'text', id: 'new_user'});
	$login.append($new_user_field);
	$login.append("<br>");

	$login.append("Password: ");
	let $new_password_field = $("<input>", {type: 'password', id: 'new_password'});
	$login.append($new_password_field);
	$login.append("<br>");

	$login.append("Confirm Password: ");
	let $confirm_field = $("<input>", {type: 'password', id: 'confirm'});
	$login.append($confirm_field);
	$login.append("<br>");

	let $create_button = $("<button>", {'class':'button', type:'submit', id:'create_btn', text:'Create User'});
	$login.append($create_button);
	$login.append("<br>");
	$login.append("<br>");

	$login.append("Username: ");
	let $user_field = $("<input>", {type: 'text', id: 'user'});
	$login.append($user_field);
	$login.append("<br>");

	$login.append("Password: ");
	let $password_field = $("<input>", {type: 'password', id: 'password'});
	$login.append($password_field);
	$login.append("<br>");

	let $login_button = $("<button>", {'class':'button', type:'submit', id:'login', text:'Login'});
	$login.append($login_button);

	$(document.body).html($login);
}

function getNumberOfDays(date) {
	return new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
}

function createCalendar(user_id, date) {
	let $calendar = $("<div>", {'class':'calendar'});
	$calendar.append($("<h3>", {text:"These are your events for the month:"}))
	let days_in_month = getNumberOfDays(date);
	$(document.body).append($calendar);
	for (day = 1; day <= days_in_month; day++) {
		date.setDate(day);
		let date_string = date.toISOString().substring(0,10);
		let $day_div = $("<div>", {id:date_string, 'class':'day', text:date_string});
		$calendar.append($day_div);
		fetchEvents(user_id, date_string);
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

function fetchEvents(user_id, date_string) {
	const php_path = "get_events.php";
	const data = { "user_id": user_id, "date": date_string };
	fetch(php_path, {method: "POST", body: JSON.stringify(data)})
		.then(response => response.json())
		.then(function(events) {
			for (i in events) {
				let $day = $( "#"+date_string );			
				let event_text = events[i].title + ": " + events[i].time;
				let $event = $("<h3>", {'class':'event', text:event_text});
				$day.append($event);
			}
		})
		.catch(function(error) {
			console.log(error);
		});
}