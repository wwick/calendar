function createCalendar(date) {
	$( ".calendar ").remove();
	$( ".modify_event" ).remove();

	let $calendar = $("<div>", {'class':'calendar'});

	$calendar.append($("<h3>", {text:"These are your events for the month:"}));
	let days_in_month = getNumberOfDays(date);
    $(document.body).append($calendar);
    let month = date.getMonth();
	let year = date.getFullYear();
	date.setDate(1);
   
	$table = $("<table>");
	$head_row =$("<tr>");

	for (let i = 0; i < 7; i++) {
		$head_label = $("<th>", {text:getDayName(i)});
		$head_row.append($head_label);
	}
	$table.append($head_row);

	$table.append(getWeek(date));
	date.setDate(8-date.getDay());
	
	for (var day = date.getDate(); day <= days_in_month; day += 7) {
		date = new Date(year,month,day);
		$table.append(getWeek(date));
	}
	
	$calendar.append($table);

	for (let day = 1; day <= days_in_month; day++) {
	 	date = new Date(year,month,day);
	 	let date_string = getDateString(date);
	 	fetchEvents(date_string);
	}
}

function getLastDayOfWeek(date) {
	let days_in_month = getNumberOfDays(date);
	let current_date = date.getDate();
	if (days_in_month - current_date < 6) {	
		return days_in_month - current_date;
	} else {
		return 6;
	}
}


function getWeek(first_date) {
	$row = $("<tr>");
	let year = first_date.getFullYear();
	let month = first_date.getMonth();
	let first_day = first_date.getDay();
	let start = first_date.getDate();
	let last_day = getLastDayOfWeek(first_date);
	let j = 0;
	for (let i = 0; i < 7; i++) {
		if (i < first_day || i > last_day) {
			let $whitespace = $("<td>");
			$row.append($whitespace);
		} else {
			let date = new Date(year,month,start+j);
			let date_string = getDateString(date);
			let $day_box = $("<td>", {id:date_string, 'class':'day', text:date_string});
			$row.append($day_box);
			j++;
		}
	}
	return $row;
}


function getDateString(date) {
	return date.toISOString().substring(0,10);
}

function getNumberOfDays(date) {
	return new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
}


function getDayName(day) {
	switch (day) {
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
			let $day = $( "#"+date_string );			
			$day.empty();
			$day.text(date_string);
			for (i in events) {
				let event_id = events[i].event_id;
				let event_text = events[i].title + " at " + events[i].time;
				let $event = $("<div>", {'class':'event', id:events[i].event_id, text:event_text});
				$event.click(function() {
				    createModifyEventForm(event_id);	
				});
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