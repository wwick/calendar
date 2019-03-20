function joinGroup(){
	console.log("Joining group");
	const join_group = document.getElementById("join_group").value;
	const data = {'join_group': join_group };

	fetch("joinGroup.php", {
		method: 'POST',
		body: JSON.stringify(data),
		headers: { 'content-type': 'application/json' }
	})
	.then(response => response.json())
	.then(data => {
		console.log(data.success ? "Group joined": "Group not joined" );
		createCalendar(new Date());
	});
}

