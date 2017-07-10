function nameDisplay(){
	var welcome;
	var name=prompt("Your Name:", "First name");
	if (name == null || name == "")
	{
		welcome="Enter a valid name.";
	}else
	{
		welcome="Welcome" +" "+name+" "+"Have a nice day!";
	}
	alert(welcome);
	
}
		