function divideNumber(){
	var one = document.getElementById("no_one").value;
	var two = document.getElementById("no_two").value;
	if(two == 0)
	{
		alert("Divide by zero error!");
	}
	else if(one ==" " | one == "null" | two ==" " | two == "null")
	{
		alert("Enter valid number!");
	}
	else
	{
		var total = one / two;
		alert(total);

	}
}
		