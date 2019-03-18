function create() {
	const user = document.getElementById("new_user").value;
	const password1 = document.getElementById("new_password").value;
	const password2 = document.getElementById("confirm").value;

	const data = { 'user': user, 'password1': password1, 'password2': password2 };

	fetch("create.php", {
		method: 'POST',
		body: JSON.stringify(data),
		headers: { 'content-type': 'application/json' }
	})
		.then(response => response.json())
		.then(data => {
			console.log(data.success ? "User created" : "User not created");
			hidden(data.user.user);
		});
}

document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("create_btn").addEventListener("click", create, false);
}, false);
