function modifyEvent(title,time,date,id){
	console.log("modifying event " + id);
	const data = { 'title': title, 'time': time, 'date': date, 'id':id }
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
