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

	let $create_user_button = $("<button>", {'class':'button', type:'submit', id:'create_btn', text:'Create User'});
	$login.append($create_user_button);
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

	document.getElementById("create_btn").addEventListener("click", createUser, false);

}

function createButtons() {

	$create_event = $("<div>");

	$create_event.append("Title: ");
	let $title_field = $("<input>", {type:"text", id:"event"});
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

	$create_event.append($event_btn);

	$(document.body).append($create_event);

	let $logout = $("<div>");
	let $logout_btn = $("<a>", {class:"button", text:"logout", href:"abort.php"});
	$logout.append($logout_btn);
	$(document.body).append($logout);

	document.getElementById("event_btn").addEventListener("click", createEvent, false);

}

