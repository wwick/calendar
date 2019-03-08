function checkLogin() {
	console.log("reached");
	fetch("checkLogin.php", {
		method: 'GET'
	})
	.then(response => response.json())
	.then(data => {
		console.log(data.loggedIn ? "User Logged in" : "No user logged in");
		if (data.loggedIn){
			hidden(data.user);
		}
		console.log("checked login");
	});
}
document.addEventListener("DOMContentLoaded", checkLogin);
