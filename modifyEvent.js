function modifyEvent(event_id) {
	
	console.log("modifying event " + event_id);
	const title = $( "#new_title" ).val();
	const date = $( "#new_date" ).val();
	const time = $( "#new_time" ).val() + ":00";

	const data = { 'title': title, 'time': time, 'date': date, 'event_id':event_id };
	console.log(JSON.stringify(data));
	fetch("modifyEvent.php", {
		method: 'POST',
		body: JSON.stringify(data),
		headers: { 'content-type': 'application/json' }
	})
	.then(response => response.json())
	.then(data => {
		console.log(data.success ? "Event added" : "Event not added");
		createCalendar(date);
	}).catch(error => console.log(error));

}
