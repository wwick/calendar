function createLogin() {

	let $login = $('<div>', {'class': 'login'});

	// form for creating a new user
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

	// form for logging in as an existing user
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

	$(document.body).append($login);
	$create_user_button.click(createUser);
}

// creates a form by which to edit or delete events
function createModifyEventForm(event_id) {
	
	$( ".modify_event" ).remove();
	let $modify_event = $("<div>", {"class":"modify_event"});
	$modify_event.append($("<br>"));
	let $delete_btn = $("<button>", {class:"button", type:"submit", id:"delete_btn", text: "Delete Event"});
	$modify_event.append($delete_btn);
	$delete_btn.click(function() {
		modifyEvent(event_id);
	});
}

function createButtons() {

	//create event form
	$create_event = $("<div>");

	let $create_event_header = $("<h3>", {text:"Create Event"});
	$create_event.append($create_event_header);

	$create_event.append("Title: ");
	let $title_field = $("<input>", {type:"text", id:"event"});
	$create_event.append($title_field);
	$create_event.append("<br>");

	$create_event.append("Date (yyyy-mm-dd): ");
	let $date_field = $("<input>", {type:"text", id:"date"});
	$create_event.append($date_field);
	$create_event.append("<br>");

	$create_event.append("Time (hh:mm:ss): ");
	let $time_field = $("<input>", {type:"text", id:"time"});
	$create_event.append($time_field);
	$create_event.append("<br>");

	let $event_btn = $("<button>", {class:"button", type:"submit", id:"event_btn", text:"Create Event"});
	$create_event.append($event_btn);
	$(document.body).append($create_event);

	//logout button
	let $logout = $("<div>");
	// let $logout_header = $("<h3>", {text:"Logout"});
	// $logout.append($logout_header);
	let $logout_btn = $("<button>", {class:"button", text:"Logout"});
	$logout.append($logout_btn);
	$(document.body).append($logout);
	$logout_btn.click(function() {
		fetch("abort.php");
		$(document.body).empty();
		checkLogin();
	});

	// adds other event listeners
	document.getElementById("event_btn").addEventListener("click", createEvent, false);

}

