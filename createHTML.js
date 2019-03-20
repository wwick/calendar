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

function createModifyEventForm(event_id) {
	
	$( ".modify_event" ).remove();
	let $modify_event = $("<div>", {"class":"modify_event"});
	$modify_event.append($("<br>"));
	
	let $header = $("<h3>", {text:"Modify Event Form"});
	$modify_event.append($header);
	$modify_event.append("Title: ");
	let $title_field = $("<input>", {type:"text", id:"new_title"});
	$modify_event.append($title_field);
	$modify_event.append("<br>");

	$modify_event.append("Date: ");
	let $date_field = $("<input>", {type:"date", id:"new_date"});
	$modify_event.append($date_field);
	$modify_event.append("<br>");

	$modify_event.append("Time: ");
	let $time_field = $("<input>", {type:"time", id:"new_time"});
	$modify_event.append($time_field);
	$modify_event.append("<br>");

	let $modify_event_btn = $("<button>", {class:"button", type:"submit", id:"modify_event_btn", text:"Modify Event"});
	$modify_event.append($modify_event_btn);
	$(document.body).append($modify_event);
	$modify_event_btn.click(function() {
		modifyEvent(event_id);
	});
}

function createButtons() {

	//create event form
	$create_event = $("<div>");

	let $create_header = $("<h3>", {text:"Create Event Form"});
	$create_event.append($create_header);

	$create_event.append("Title: ");
	let $title_field = $("<input>", {type:"text", id:"event"});
	$create_event.append($title_field);
	$create_event.append("<br>");

	$create_event.append("Date: ");
	let $date_field = $("<input>", {type:"text", id:"date", value:"yyyy-mm-dd"});
	$create_event.append($date_field);
	$create_event.append("<br>");

	$create_event.append("Time: ");
	let $time_field = $("<input>", {type:"text", id:"time", value:"hh-mm-ss"});
	$create_event.append($time_field);
	$create_event.append("<br>");

	$create_event.append("Share Event with User: ");
	let $shared_user = $("<input>", {type:"text", id:"shared_user"});
	$create_event.append($shared_user);
	$create_event.append("<br>");

	$create_event.append("Share Event with Group: ");
	let $shared_group = $("<input>", {type:"number", id:"group_num", min:"0", step:"1"});
	$create_event.append($shared_group);
	$create_event.append("<br>");

	let $event_btn = $("<button>", {class:"button", type:"submit", id:"event_btn", text:"Create Event"});
	$create_event.append($event_btn);
	$(document.body).append($create_event);



	//share calendar form
	$share = $("<div>");
	
	let $share_header = $("<h3>", {text:"Share Calendar"});
	$share.append($share_header);
	$share.append("Share Calendar with User: ");
	let $share_field = $("<input>", {type:"text", id:"cal_user"});
	$share.append($share_field);
	$share.append("<br>");

	let $share_btn = $("<button>", {class:"button", type:"submit", id:"share_btn", text:"Share with User"});

	$share.append($share_btn);
	$(document.body).append($share);


	//join group form
	$join_group = $("<div>");

	let $join_group_header = $("<h3>", {text:"Join Group"});
	$join_group.append("Group ID: ");
	let $group_field = $("<input>", {type:"number", id:"join_group", min:"0", step:"1"});
	$join_group.append($group_field);
	$join_group.append("<br>");

	let $join_btn = $("<button>", {class:"button", type: "submit", id:"join_btn", text:"Join Group"});
	$join_group.append($join_btn);
	$join_group.append("<br>");
	$(document.body).append($join_group);


	//logout button
	let $logout = $("<div>");
	$logout.append("<br>");
	let $logout_btn = $("<button>", {class:"button", text:"Logout"});
	$logout.append($logout_btn);
	$(document.body).append($logout);


	// gets rid of session variables and returns to login screen
	$logout_btn.click(function() {
		fetch(abort.php)
			.then(response => response.json())
			.catch(function(error) {
				console.log(error);
			});
		$(document.body).remove();
		checkLogin();
	});

	// adds other event listeners
	document.getElementById("event_btn").addEventListener("click", createEvent, false);
	document.getElementById("share_btn").addEventListener("click", shareCal, false);
	document.getElementById("join_btn").addEventListener("click", joinGroup, false);

}

