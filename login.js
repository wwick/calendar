function login(event) {
	const user = document.getElementById("user").value; // Get the username from the form
	const password = document.getElementById("password").value; // Get the password from the form

	// Make a URL-encoded string for passing POST data:
	const data = { 'user': user, 'password': password };

	fetch("login.php", {
		method: 'POST',
		body: JSON.stringify(data),
		headers: { 'content-type': 'application/json' }
	})
		.then(response => response.json())
		.then(data => {
			console.log(data.success ? "You've been logged in!" : "You were not logged in ");
			console.log(data.user.user_id);
			hidden(data.user.user);
		});
}

document.addEventListener("DOMContentLoaded", function(){
	document.getElementById("login").addEventListener("click", login, false);
}, false);// Bind the AJAX call to button click
