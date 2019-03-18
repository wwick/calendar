function createEvent(){
	console.log("creates reached");
	const title = document.getElementById("title").value;
	const date = document.getElementById("date").value;
	const time = document.getElementById("time").value + ":00";
	console.log(time);
	const data = { 'title': title, 'date': date, 'time': time }
	fetch("createEvent.php", {
		method: 'POST',
		body: JSON.stringify(data),
		headers: { 'content-type': 'application/json' }
	})
	.then(response => response.json())
	.then(data => {
		console.log(data.success ? "Event added" : "Event not added");
	});
}
document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("event_btn").addEventListener("click", createEvent, false)
}, false);
