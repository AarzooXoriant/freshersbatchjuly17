function multTable(){
	var result=[];
	var number = document.getElementById("mul").value;
	if(number ==" " | number == "null" | number ==" " | number == "null"| number == 0)
	{
		alert("Enter valid number!");
	}
	else
	{
		do{
		
		for(var i=1;i<=10;i++)
		{
			var mul_total=number*i;
			result.push(mul_total);
		}
	
		var question="Do you wanna continue?";
		confirm(result + question);
	
		}while(yes);
		

	}
}
