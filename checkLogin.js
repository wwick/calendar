function checkLogin() {
	console.log("reached");
	fetch("checkLogin.php", {
		method: 'GET'
	})
		.then(response => response.json())
		.then(data => {
			console.log(data.loggedIn ? "User Logged in" : "No user logged in");
			if (data.loggedIn){
				createButtons();
				let date = new Date();
				createCalendar(date);
				nextPrevMonth(date);
			} else{
				createLogin();
			}
		}).catch( function(error) {
			console.log(error);
		});
}

