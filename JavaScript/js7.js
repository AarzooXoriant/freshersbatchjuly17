function checkfact(){
	var number = document.getElementById("num").value;
	var result=0;
	var fact=1;
	if(number ==" " | number == "null" | number ==" " | number == "null"| number == 0)
	{
		alert("Enter valid number!");
	}
	else
	{
		for(var i=number;i>=1;i--)
		{
			fact=fact*i;
			

		}
	alert(fact);
	}
}
