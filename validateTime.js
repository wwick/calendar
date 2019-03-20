function validateTime() {
	const time = document.getElementById("time").value;
	let regex = "^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$";
	regex = new RegExp(regex);
	let match = time.match(regex);
	if (match != null) {
		return true;
	} else {
		return false;
	}
}
