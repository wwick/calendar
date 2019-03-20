function validDate(date) {
	let regex = "^\\d{4}\\-(0[1-9]|1[012])\\-(0[1-9]|[12][0-9]|3[01])$";
	regex = new RegExp(regex);
	let match = date.match(regex);
	if (match != null) {
		return true;
	} else {
		return false;
	}
}

function validTime(time) {
	let regex = "^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$";
	regex = new RegExp(regex);
	let match = time.match(regex);
	if (match != null) {
		return true;
	} else {
		return false;
	}
}

function validTitle(title) {
	let regex = "/[;<>$]/g";
	regex = new RegExp(regex);
	let match = title.match(regex);
	if (match == null) {
		return true;
	} else {
		return false;
	}
}
