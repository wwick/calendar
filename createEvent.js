function createEvent(){
	console.log("creates reached");
	const title = document.getElementById("event").value;
	const date = document.getElementById("date").value;
	const time = document.getElementById("time").value + ":00";
	const shared_user = document.getElementById("shared_user").value;

	console.log(time);
	const data = { 'title': title, 'date': date, 'time': time, 'shared_user': shared_user };
	fetch("createEvent.php", {
		method: 'POST',
		body: JSON.stringify(data),
		headers: { 'content-type': 'application/json' }
	})
	.then(response => response.json())
	.then(data => {
		console.log(data.success ? "Event added" : "Event not added");
		fetchEvents(date);
	});
}
