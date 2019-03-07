function createEvent(){
	const title = document.getElementById("event").value;
	const date = document.getElementById("date").value;
	const time = document.getElementById("time").value;
	
	const data = { 'title': title, 'date': date, 'time': time }
	console.log("creates reached");
	fetch("createEvent.php", {
		method: 'POST',
		body: JSON.stringify(data),
		headers: { 'content-type': 'application/json' }
	})
	.then(response => response.json())
	.then(data => {
		console.log(date.success ? "Event added" : "Event not added");
	});
}
document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("event_btn").addEventListener("click", create, false)
}, false);
