function checkLogin() {
	console.log("reached");
	fetch("checkLogin.php", {
		method: 'GET'
	})
		.then(response => response.json())
		.then(data => {
			console.log(data.loggedIn ? "User Logged in" : "No user logged in");
			console.log("checked login");
			createCalendar(new Date())})
		.catch(function(error) {
				console.log(error);
			});
}
document.addEventListener("DOMContentLoaded", function(){
	checkLogin();
}, false);
