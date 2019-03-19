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
	
	for (var day = date.getDate(); day < (days_in_month - 6); day += 7) {
		date.setDate(day);
		$table.append(getWeek(date));
	}
	
	$calendar.append($table);



	// for (let day = 1; day <= days_in_month; day++) {
	// 	date = new Date(year,month,day);
	// 	console.log(date.toString());
	// 	let date_string = date.toISOString().substring(0,10);
	// 	let $day_div = $("<div>", {id:date_string, 'class':'day', text:date_string});
	// 	$calendar.append($day_div);
	// 	fetchEvents(date_string);
	// }
		// $table.append(otherWeeks(date));
}

function getLastDateOfWeek(date) {
	let days_in_month = getNumberOfDays(date);
	let year = date.getFullYear();
	let month = date.getMonth();
	let current_date = date.getDate();
	let last_date;
	if (current_date <= 7) {
		last_date = 7 - current_date;
	} else if (last_date_of_month - current_date < 6) {
		last_date = last_date_of_month;
	} else {
		last_date = current_date + 6;
	}
	return new Date(year, month, last_date);
}


function getWeek(first_date) {
	$row = $("<tr>");
	let year = first_date.getFullYear();
	let month = first_date.getMonth();
	let first_day = first_date.getDay();
	let last_day = getLastDateOfWeek(first_date).getDay();
	for (let i = 0, j = 0; i < 7; i++) {
		if (i < first_day || i > last_day) {
			$row.append("<td>");
		} else {
			let date = new Date(year,month,first_day+j);
			let date_string = getDateString(date);
			let $day_box = $("<td>", {id:date_string, 'class':'day', text:date_string});
			$row.append($day_box);
			j++;
		}
	}
	return $row;
}

// function getFirstWeek(first_date) {
// 	$row = $("<tr>");
// 	let month = first_date.getMonth();
// 	let year = first_date.getFullYear();
// 	let first_day = first_date.getDay();
// 	let last_day = 7 - first_day;

// 	for (let i = 1; i < first_day; i++) {
// 		$row.append($("<td>"));
// 	}

// 	for (let day = first_day; day < last_day; day++) {
// 		let date = new Date(year,month,day);
// 		let date_string = getDateString(date);
// 		let $day_box = $("<td>", {id:date_string, 'class':'day', text:date_string});
// 		$row.append($day_box);
// 	}

// 	return $row;
// }

// function getLastWeek(first_date) {
// 	$row = $("<tr>");
// 	let month = first_date.getMonth();
// 	let year = first_date.getFullYear();
// 	let first_day = first_date.getDate();
// 	let days_in_month = getNumberOfDays(first_date);

// 	for (var i = 0; i < 7; i++) {
// 		if ((first_day + i) <= days_in_month) {
// 			let date = new Date(year,month,first_day+i);
// 			let date_string = getDateString(date);
// 			let $day_box = $("<td>", {id:date_string, 'class':'day', text:date_string});
// 			$row.append($day_box);
// 		} else {
// 			$row.append($("<td>"));
// 		}
// 	}
// 	return $row;
// }

function getDateString(date) {
	return date.toISOString().substring(0,10);
}


// function otherWeeks(first_date) {
// 	$row = $("<tr>");
// 	let month = first_date.getMonth();
// 	let year = first_date.getFullYear();
// 	let day = first_date.getDate();

// 	date = new Date(year,month,day);
// 	difference  = 7 - date.getDay();

// 	let days_in_month = getNumberOfDays(date);
// 	let startWeek = 0;
// 	let startCal =  difference + 1;

// 	for (let i = startWeek; i < 7; i++){
// 		let date = new Date(year, month, startCal);
// 		let date_string = date.toISOString().substring(0,10);
// 		let $day_box = $("<td>", {id:date_string, 'class':'day', text:date_string});
// 		$row.append($day_box);
// 		startCal++;
// 	}	
// 	return $row;
// }


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
