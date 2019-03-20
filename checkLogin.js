function checkLogin() {
	fetch("checkLogin.php", {
		method: 'GET'
	})
		.then(function(response) {
		    return(response.json());
		})
		.then(function(data) {
			console.log(data.loggedIn ? "User Logged in" : "No user logged in");
			if (data.loggedIn){
				createButtons();
				let date = new Date();
				createCalendar(date);
			} else{
				createLogin();
			}
		}).catch( function(error) {
			console.log(error);
		});
}

