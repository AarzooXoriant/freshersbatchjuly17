function myAgeFunction() {
    var x = document.getElementById("age").value;
	//document.getElementById("mydiv").innerHTML = x;
	var d = new Date();
    var n = d.getFullYear();
	//document.getElementById("mydiv").innerHTML = n;
	var birthyear=n-x;
	//document.getElementById("mydiv").innerHTML = birthyear;
	alert(birthyear);
}