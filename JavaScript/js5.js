function checkvow(){
	var letter = document.getElementById("alpha").value;
	if(letter ==" " | letter == "null" | letter ==" " | letter == "null"| letter == 0)
	{
		alert("Enter valid letter!");
	}
	else
	{
		if(letter =="a" | letter == "e" | letter =="i" | letter == "o"| letter == "u"|letter =="A" | letter == "E" | letter =="I" | letter == "O"| letter == "U")
		{
			alert("Vowel");
		}
		else
		{
			alert("Consonant");
		}

	}
}
