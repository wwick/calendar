const php_path = 'get_events.php';

fetch(php_path)
.then(response => response.json())
.then(function(data) {

	let str = JSON.stringify(obj, null, 2); // spacing level = 2
	let p = document.createElement("p");
	p.innerText = str;
	document.body.innerHTML = "";
	document.body.appendChild(p);

})
.catch(function(error) {
	console.log(error);
});
