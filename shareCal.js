function shareCal(){
	const cal_user = document.getElementById("cal_user").value;
	const data = {'cal_user': cal_user };
	console.log(JSON.stringify(data));
	fetch("shareCal.php", {
		method: 'POST',
		body: JSON.stringify(data),
		headers: { 'content-type': 'application/json' }
	})
	.then(response => response.json())
	.then(data => {
		console.log(data.success ? "Calendar shared" : "Calendar not shared" );
		console.log(cal_user);
	});
}
