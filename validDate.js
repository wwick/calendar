function validDate() {
	const date = document.getElementById("date").value;
	let regex = `/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/`;
	regex = new RegExp(regex);
	let match = date.match(regex);
	if (match != null) {
		return true;
	} else {
		return false;
	}
}
