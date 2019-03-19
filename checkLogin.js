function checkLogin() {
	console.log("reached");
	fetch("checkLogin.php", {
		method: 'GET'
	})
		.then(response => response.json())
		.then(data => {
			console.log(data.loggedIn ? "User Logged in" : "No user logged in");
			if (data.loggedIn){
				createCalendar(new Date());
			} else{
				createLogin();
			}
		}).catch( function(error) {
			console.log(error);
		});
}

