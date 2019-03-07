function show(){
	console.log("show");
	var show = document.getElementsByClassName("show");
	var i = 0;
	for (i = 0; i < show.length; i++){
		show[i].style.display = "block";
	}
}
