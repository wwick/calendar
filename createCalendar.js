function getNumberOfDays(date) {
	return new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
}

function createCalendar(date) {
	$( ".calendar ").remove();
	let $calendar = $("<div>", {'class':'calendar'});
	$calendar.append($("<h3>", {text:"These are your events for the month:"}));
	let days_in_month = getNumberOfDays(date);
    $(document.body).append($calendar);
    let month = date.getMonth();
    let year = date.getFullYear();
    console.log(month);
    console.log(year);
	for (let day = 1; day <= days_in_month; day++) {
		date = new Date(year,month,day);
		console.log(date.toString());
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
	const data = { 'date':date_string }
	fetch(php_path, {method: "POST", body: JSON.stringify(data)})
		.then(response => response.json())
		.then(function(events) {
			console.log(events);
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
function nextPrevMonth(date) {
	let $buttons = $("<div>");
	let $prev_btn = $("<button>", {class:"button", type:"submit", id:"prev_btn", text:"Previous Month"});
	$buttons.append($prev_btn);
	

	let $next_btn = $("<button>", {class:"button", type:"submit", id:"next_btn", text:"Next Month"});
	$buttons.append($next_btn);
	$(document.body).append($buttons);

	document.getElementById("prev_btn").addEventListener("click", function() {
		date.setMonth(date.getMonth()-1);
		createCalendar(date);
	}, false);

	document.getElementById("next_btn").addEventListener("click", function() {
		date.setMonth(date.getMonth()+1);
		createCalendar(date);
	}, false);
}
