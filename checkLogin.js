function checkLogin() {
	console.log("reached");
	fetch("checkLogin.php", {
		method: 'GET'
	})
		.then(response => response.json())
		.then(data => {
			console.log(data.loggedIn ? "User Logged in" : "No user logged in");
			console.log("checked login");
<<<<<<< HEAD
			createCalendar(new Date())})
		.catch(function(error) {
				console.log(error);
			});
=======
			createCalendar(data.user_id, new Data(2019, 2);
		});
>>>>>>> parent of 63ae6d3... You can add events again
}
document.addEventListener("DOMContentLoaded", function(){
	checkLogin();
}, false);
