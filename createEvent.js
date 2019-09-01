function createEvent(){
	const title = document.getElementById("event").value;
	const date = document.getElementById("date").value;
	const time = document.getElementById("time").value;

	if (!validDate(date)) {
		return;
	}
	if (!validTime(time)) {
		return;
	}
	if (!validTitle(title)) {
		return
	}

	const data = { 'title': title, 'date': date, 'time': time};
	fetch("createEvent.php", {
		method: 'POST',
		body: JSON.stringify(data),
		headers: { 'content-type': 'application/json' }
	})
	.then(response => response.json())
	.then(data => {
		let year = date.substring(0,4);
		let month = date.substring(5,7) - 1;
		console.log(data.success ? "Event added" : "Event not added");
		createCalendar(new Date(year, month));
	});
}
