function primecheck(){
	var one = document.getElementById("no_one").value;
	var two = document.getElementById("no_two").value;
	var result=[];
	if(two == 0)
	{
		alert("Invalid Input!Don't enter 0 as a value");
	}
	else
	{
		for (var i=one; i <= two; i++ )
		{
			var j;
			for (j=2; j<i; j++)
			{
				var n = i%j;
				if (n==0){
				break;
				}
			}
		if(i == j)
		{
			result.push(i);
		}
		}
		document.getElementById("mydiv").innerHTML = result;
	}
}	