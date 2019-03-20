function createEvent(){
	console.log("creates reached");
	const title = document.getElementById("event").value;
	const date = document.getElementById("date").value;
	const time = document.getElementById("time").value + ":00";
	const shared_user = document.getElementById("shared_user").value;
	const group_num = document.getElementById("group_num").value;

	console.log(group_num);
	const data = { 'title': title, 'date': date, 'time': time, 'shared_user': shared_user, 'group_num': group_num };
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
