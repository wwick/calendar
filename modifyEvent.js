function modifyEvent(event_id, operator) {

	console.log("modifying event " + event_id);
	const title = $( "#new_title" ).val();
	const date = $( "#new_date" ).val();
	const time = $( "#new_time" ).val();
	const token = document.getElementById("token").getAttribute("content");

	if (!validDate(date)) {
		return;
	} 
	if (!validTime(time)) {
		return;
	}
	if (!validTitle(title)) {
		return;
	}

	const data = { 'title': title, 'time': time, 'date': date, 'event_id':event_id, 'token':token, 'operator':operator };
	fetch("modifyEvent.php", {
		method: 'POST',
		body: JSON.stringify(data),
		headers: { 'content-type': 'application/json' }
	})
		.then(response => response.json())
		.then(data => {
			console.log(data.success ? "Event added" : "Event not added");
			let year = date.substring(0,4);
			let month = date.substring(6,7);
			createCalendar(new Date(year,month-1));

		}).catch(error => console.log(error));

}
