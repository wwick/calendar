function modifyEvent(event_id) {

	const token = document.getElementById("token").getAttribute("content");
	const data = { 'event_id':event_id, 'token':token };
	fetch("modifyEvent.php", {
		method: 'POST',
		body: JSON.stringify(data),
		headers: { 'content-type': 'application/json' }
	})
		.then(response => response.json())
		.then(data => {
			console.log(data.success ? "Event added" : "Event not added");
			createCalendar(new Date());
		}).catch(error => console.log(error));
}
